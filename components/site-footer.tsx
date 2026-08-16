import Image from "next/image";
import Link from "next/link";

import { company, legalNav, nav } from "@/lib/site";

/**
 * Rodapé global.
 *
 * Além de navegação, publica a identidade jurídica da OnlyWine em TODAS as
 * páginas. Esse bloco é a resposta direta ao motivo da recusa da Apple: sem
 * razão social, CNPJ e endereço no site, não há como o revisor confirmar que
 * o domínio onlywine.app pertence à organização inscrita no programa.
 */
export function SiteFooter() {
  return (
    <footer className="mt-24 bg-deep text-deep-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/icon.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-heading text-xl font-semibold">
                OnlyWine
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-deep-foreground/70">
              Descubra, aprenda e receba vinho em casa. Sem prova de nariz
              empinado, sem vocabulário difícil — só vinho bom e explicação
              honesta.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[0.6875rem] font-bold tracking-[0.22em] text-deep-foreground/50 uppercase">
              Navegar
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-deep-foreground/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[0.6875rem] font-bold tracking-[0.22em] text-deep-foreground/50 uppercase">
              Ajuda e termos
            </h2>
            <ul className="mt-5 space-y-3">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-deep-foreground/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Identidade jurídica — o bloco que faltava por completo no site anterior */}
        <div className="mt-14 border-t border-white/12 pt-10">
          <h2 className="font-sans text-[0.6875rem] font-bold tracking-[0.22em] text-deep-foreground/50 uppercase">
            Dados da empresa
          </h2>
          <address className="mt-5 grid gap-x-12 gap-y-3 text-[0.9375rem] leading-relaxed text-deep-foreground/75 not-italic sm:grid-cols-2 lg:grid-cols-3">
            <p>
              <span className="block text-deep-foreground/45">Razão social</span>
              {company.legalName}
            </p>
            <p>
              <span className="block text-deep-foreground/45">CNPJ</span>
              {company.cnpj}
            </p>
            <p>
              <span className="block text-deep-foreground/45">Endereço</span>
              {company.address.street}
              {", "}
              {company.address.district}
              <br />
              {company.address.city} — {company.address.state}
              {", "}
              {company.address.zip}
              {", "}
              {company.address.country}
            </p>
            <p>
              <span className="block text-deep-foreground/45">
                Atendimento ao cliente
              </span>
              <a
                href={`mailto:${company.email}`}
                className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
              >
                {company.email}
              </a>
            </p>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/12 pt-8 text-sm text-deep-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {company.foundedYear} {company.legalName}. Todos os direitos
            reservados.
          </p>
          <p className="font-sans text-[0.6875rem] font-bold tracking-[0.18em] uppercase">
            Venda e consumo proibidos para menores de 18 anos · Beba com
            moderação
          </p>
        </div>
      </div>
    </footer>
  );
}
