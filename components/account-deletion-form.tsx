"use client";

import Link from "next/link";
import { useState } from "react";

import {
  EMAIL_REGEX,
  GENERIC_ERROR,
  confirmDeletion,
  requestDeletionCode,
} from "@/lib/account-deletion";
import { company } from "@/lib/site";

type Step = "request" | "confirm" | "done";

const fieldClass =
  "mt-2 w-full rounded-lg border border-input bg-white px-3.5 py-3 text-base text-foreground transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none";

const buttonClass =
  "inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-colors hover:bg-deep disabled:cursor-not-allowed disabled:opacity-50";

export function AccountDeletionForm() {
  const [step, setStep] = useState<Step>("request");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  async function submitEmail(event: React.FormEvent) {
    event.preventDefault();

    const normalized = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(normalized)) {
      setError("Informe um e-mail válido.");
      return;
    }

    setLoading(true);
    setError("");
    setInfo("");

    try {
      await requestDeletionCode(normalized);
      setEmail(normalized);
      setStep("confirm");
      setInfo(
        "Se existir uma conta OnlyWine com este e-mail, enviamos um código de 6 dígitos. Confira também a caixa de spam.",
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : GENERIC_ERROR);
    } finally {
      setLoading(false);
    }
  }

  async function resendCode() {
    if (loading) return;

    setLoading(true);
    setError("");
    setInfo("");

    try {
      await requestDeletionCode(email);
      setInfo("Código reenviado. Confira também a caixa de spam.");
    } catch (err) {
      setError(err instanceof Error ? err.message : GENERIC_ERROR);
    } finally {
      setLoading(false);
    }
  }

  async function submitCode(event: React.FormEvent) {
    event.preventDefault();

    if (code.length !== 6) {
      setError("O código deve ter 6 dígitos.");
      return;
    }

    setLoading(true);
    setError("");
    setInfo("");

    try {
      await confirmDeletion(email, code);
      setStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : GENERIC_ERROR);
    } finally {
      setLoading(false);
    }
  }

  function backToEmail() {
    setStep("request");
    setCode("");
    setError("");
    setInfo("");
  }

  if (step === "done") {
    return (
      <div className="rounded-2xl border border-rule bg-card p-8 text-center sm:p-12">
        <h2 className="font-heading text-3xl font-semibold text-deep">
          Conta excluída
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Sua conta OnlyWine e os dados associados a ela foram excluídos
          definitivamente. Sentiremos sua falta!
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Se você tinha uma assinatura ativa, lembre-se de conferir o cancelamento
          no{" "}
          <a
            href="https://play.google.com/store/account/subscriptions"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            Google Play
          </a>{" "}
          ou na App Store.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-rule bg-card p-7 sm:p-10">
      {step === "request" ? (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-deep">
            1. Confirme que a conta é sua
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Informe o e-mail da sua conta OnlyWine. Enviaremos um código de 6
            dígitos para confirmar a exclusão — vale também para contas criadas
            com o Google.
          </p>

          <form className="mt-6" onSubmit={submitEmail} noValidate>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-deep"
            >
              E-mail da conta
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="voce@exemplo.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={fieldClass}
            />
            <button type="submit" disabled={loading} className={`${buttonClass} mt-5`}>
              {loading ? "Enviando…" : "Enviar código"}
            </button>
          </form>
        </section>
      ) : (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-deep">
            2. Digite o código e confirme a exclusão
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Código enviado para <strong className="text-deep">{email}</strong>.
            Ele expira em 15 minutos.
          </p>

          <form className="mt-6" onSubmit={submitCode} noValidate>
            <label htmlFor="code" className="block text-sm font-medium text-deep">
              Código de 6 dígitos
            </label>
            <input
              id="code"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              maxLength={6}
              placeholder="000000"
              value={code}
              onChange={(event) =>
                setCode(event.target.value.replace(/\D/g, "").slice(0, 6))
              }
              className={`${fieldClass} text-center font-heading text-2xl font-semibold tracking-[0.4em] sm:w-56`}
            />
            <button type="submit" disabled={loading} className={`${buttonClass} mt-5`}>
              {loading ? "Excluindo…" : "Excluir minha conta definitivamente"}
            </button>
          </form>

          <p className="mt-5 text-sm text-muted-foreground">
            Não recebeu?{" "}
            <button
              type="button"
              disabled={loading}
              onClick={resendCode}
              className="font-medium text-primary hover:underline disabled:opacity-50"
            >
              Reenviar código
            </button>{" "}
            ·{" "}
            <button
              type="button"
              onClick={backToEmail}
              className="font-medium text-primary hover:underline"
            >
              Trocar e-mail
            </button>
          </p>
        </section>
      )}

      {info && (
        <p
          role="status"
          className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900 ring-1 ring-emerald-200"
        >
          {info}
        </p>
      )}
      {error && (
        <p
          role="alert"
          className="mt-6 rounded-lg bg-red-50 p-4 text-sm leading-relaxed text-red-900 ring-1 ring-red-200"
        >
          {error}
        </p>
      )}

      <p className="mt-8 border-t border-rule pt-6 text-sm leading-relaxed text-muted-foreground">
        Você também pode excluir a conta pelo aplicativo em{" "}
        <strong className="text-deep">
          Perfil → Configurações → Excluir conta
        </strong>
        . Dúvidas? Escreva para{" "}
        <a
          href={`mailto:${company.email}`}
          className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          {company.email}
        </a>
        . Saiba como tratamos seus dados na{" "}
        <Link
          href="/politica-de-privacidade"
          className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          Política de privacidade
        </Link>
        .
      </p>
    </div>
  );
}
