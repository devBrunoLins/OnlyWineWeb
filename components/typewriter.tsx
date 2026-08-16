"use client";

import { useEffect, useState } from "react";

/**
 * Efeito de digitação do título.
 *
 * O estado inicial é a PRIMEIRA palavra completa, então o HTML pré-renderizado
 * já contém "Encontre seu próximo vinho tinto". A versão anterior do site
 * começava com string vazia e só preenchia no `mounted()` do Vue: o HTML
 * servido continha literalmente "Encontre seu próximo |" — a única manchete
 * do site, cortada no meio, era o que o revisor da Apple e os crawlers viam.
 *
 * O cursor é desenhado em CSS, não com o caractere "|", para não sujar o texto
 * extraído da página.
 */
const WORDS = ["vinho tinto", "vinho branco", "vinho rosé", "espumante"];

const TYPING_MS = 110;
const DELETING_MS = 55;
const HOLD_MS = 2200;

export function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(WORDS[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Respeita "reduzir movimento": o título fica parado na primeira palavra.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = WORDS[wordIndex];
    const atEnd = !deleting && length === word.length;
    const atStart = deleting && length === 0;

    const delay = atEnd ? HOLD_MS : atStart ? 320 : deleting ? DELETING_MS : TYPING_MS;

    const timer = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
      } else if (atStart) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % WORDS.length);
      } else {
        setLength((value) => value + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [deleting, length, wordIndex]);

  return (
    <span className="relative text-primary">
      {WORDS[wordIndex].slice(0, length)}
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.06em] animate-pulse bg-primary/70 align-baseline"
      />
    </span>
  );
}
