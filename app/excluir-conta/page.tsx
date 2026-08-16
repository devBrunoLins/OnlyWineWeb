import type { Metadata } from "next";
import Link from "next/link";

import { AccountDeletionForm } from "@/components/account-deletion-form";

export const metadata: Metadata = {
  title: "Excluir conta",
  description:
    "Exclua definitivamente sua conta OnlyWine e todos os dados associados a ela: perfil, endereços, carrinho, favoritos, pedidos e credenciais.",
  alternates: { canonical: "/excluir-conta" },
};

/**
 * Página de exclusão de conta.
 *
 * O conteúdo explicativo é renderizado no servidor — é obrigação de compliance
 * com Apple e Google e precisa estar no HTML mesmo sem JavaScript. Apenas o
 * formulário de duas etapas é Client Component.
 *
 * ⚠️ A URL /excluir-conta está registrada nos consoles das lojas. Não alterar.
 */
export default function ExcluirConta() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <span aria-hidden="true">←</span> Voltar ao início
      </Link>

      <header className="mt-8 border-b border-rule pb-10">
        <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-deep sm:text-5xl">
          Excluir minha conta OnlyWine
        </h1>
        <p className="mt-5 font-sans text-[0.6875rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
          Válido para contas criadas no aplicativo OnlyWine (app.onlywine)
        </p>
      </header>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-semibold text-deep">
          O que será apagado
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Ao confirmar a exclusão, removemos de forma{" "}
          <strong className="text-deep">permanente</strong> todos os dados
          vinculados à sua conta:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
          <li>perfil (nome, e-mail, telefone, país, data de nascimento e foto);</li>
          <li>endereços salvos;</li>
          <li>carrinho, vinhos favoritos e avaliações de vídeos;</li>
          <li>pedidos e registros de assinatura;</li>
          <li>sua conta de acesso (login por e-mail/senha ou Google).</li>
        </ul>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          A exclusão é imediata e{" "}
          <strong className="text-deep">não pode ser desfeita</strong>. Nenhum
          dado da conta é retido após a confirmação.
        </p>
      </section>

      <aside className="mt-8 rounded-xl bg-amber-50 p-5 ring-1 ring-amber-200">
        <h2 className="font-sans text-sm font-bold text-amber-900">
          Assinatura OnlyWinner ativa?
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-amber-900">
          Excluir a conta <strong>não cancela</strong> a assinatura na loja.
          Cancele antes no{" "}
          <a
            href="https://play.google.com/store/account/subscriptions"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Google Play
          </a>{" "}
          (Android) ou em Ajustes → Assinaturas (iPhone), para evitar novas
          cobranças.
        </p>
      </aside>

      <div className="mt-10">
        <AccountDeletionForm />
      </div>
    </div>
  );
}
