import { existsSync } from "node:fs";
import path from "node:path";

import "server-only";

/**
 * Verifica, no momento do build, se um arquivo existe em /public.
 *
 * Usado para degradar screenshots ausentes em placeholders identificados em
 * vez de imagens quebradas. Só pode ser chamado de Server Components.
 */
export function publicFileExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}
