"use client";

import { useState } from "react";

import { company } from "@/lib/site";

const fieldClass =
  "mt-2 w-full rounded-lg border border-input bg-white px-3.5 py-3 text-base text-foreground transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none";

const labelClass = "block text-sm font-medium text-deep";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setState("sending");
    setError("");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = await response.json().catch(() => null);

      if (!response.ok) {
        setError(body?.error ?? "Não foi possível enviar. Tente novamente.");
        setState("idle");
        return;
      }

      form.reset();
      setState("sent");
    } catch {
      setError(
        `Falha de conexão. Verifique sua internet ou escreva para ${company.email}.`,
      );
      setState("idle");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-rule bg-card p-8 sm:p-10">
        <h2 className="font-heading text-2xl font-semibold text-deep">
          Mensagem enviada
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Recebemos sua mensagem e vamos responder no e-mail informado, em dias
          úteis. Obrigado por escrever!
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-rule bg-card p-7 sm:p-10"
    >
      <h2 className="font-heading text-2xl font-semibold text-deep">
        Envie uma mensagem
      </h2>

      {/* Honeypot: invisível para pessoas, irresistível para bots */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nome
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className={labelClass}>
          Assunto <span className="text-muted-foreground">(opcional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          maxLength={160}
          className={fieldClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-7 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-deep disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === "sending" ? "Enviando…" : "Enviar mensagem"}
      </button>

      {error && (
        <p
          role="alert"
          className="mt-6 rounded-lg bg-red-50 p-4 text-sm leading-relaxed text-red-900 ring-1 ring-red-200"
        >
          {error}
        </p>
      )}

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        Ao enviar, seus dados são usados apenas para responder ao seu contato,
        conforme a política de privacidade.
      </p>
    </form>
  );
}
