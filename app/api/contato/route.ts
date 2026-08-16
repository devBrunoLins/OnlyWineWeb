import { NextResponse } from "next/server";
import { Resend } from "resend";

import { company } from "@/lib/site";

/**
 * Recebe o formulário de contato e envia por e-mail via Resend.
 *
 * Pré-requisitos no ambiente (Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY    chave da conta Resend
 *   CONTACT_FROM      remetente verificado, ex.: "OnlyWine <site@onlywine.app>"
 *
 * O domínio onlywine.app precisa estar verificado no Resend, senão o envio é
 * rejeitado. Sem a chave configurada, a rota responde 503 e a interface orienta
 * a pessoa a escrever direto para o e-mail de atendimento — o canal de contato
 * nunca fica indisponível.
 */

const MAX = { name: 120, email: 200, subject: 160, message: 5000 };

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  /** Honeypot: preenchido só por bots. */
  website?: unknown;
};

function asString(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char]!,
  );
}

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  // Armadilha anti-spam: respondemos 200 para o bot não aprender com o erro.
  if (asString(payload.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(payload.name, MAX.name);
  const email = asString(payload.email, MAX.email).toLowerCase();
  const subject = asString(payload.subject, MAX.subject);
  const message = asString(payload.message, MAX.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Preencha nome, e-mail e mensagem." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error: `O formulário ainda não está configurado. Escreva para ${company.email} — respondemos em dias úteis.`,
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: company.email,
      replyTo: email,
      subject: subject
        ? `[Site] ${subject}`
        : `[Site] Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem pelo site</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(subject) || "—"}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error: `Não conseguimos enviar sua mensagem agora. Tente de novo ou escreva para ${company.email}.`,
      },
      { status: 502 },
    );
  }
}
