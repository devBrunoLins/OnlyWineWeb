import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";
import { nav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          aria-label="OnlyWine — página inicial"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <Image
            src="/icon.svg"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="font-heading text-[1.375rem] leading-none font-semibold tracking-tight text-deep">
            OnlyWine
          </span>
        </Link>

        {/* Navegação desktop — presente no HTML, não depende de JS */}
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-[0.9375rem] text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contato"
            className="hidden rounded-full border border-primary/30 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:inline-block"
          >
            Falar com a gente
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
