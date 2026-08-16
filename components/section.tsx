import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  tone = "paper",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "blush" | "deep";
}) {
  const tones = {
    paper: "",
    blush: "bg-blush",
    deep: "bg-deep text-deep-foreground",
  };

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

/**
 * Cabeçalho de seção no padrão editorial: "olho" em caixa alta espaçada
 * (o motivo de rótulo de vinho que amarra o site) + título em serifa.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <header
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={
          tone === "dark"
            ? "eyebrow text-gold before:bg-gold/40"
            : "eyebrow"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl ${
          tone === "dark" ? "text-white" : "text-deep"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-6 text-lg leading-relaxed text-pretty ${
            tone === "dark" ? "text-deep-foreground/75" : "text-muted-foreground"
          }`}
        >
          {lead}
        </p>
      )}
    </header>
  );
}
