// Entry program for news-image-20261124 ("The World Today — 24 Nov 2026").
// The entry IS the image: this program copies entry.png — the BREAKING NEWS
// broadcast frame drawn for 24 November 2026 — into the output directory
// as entry.png, honouring $MAKEFUN_OUTPUT_DIR (default "out").
// Node standard library only; no network, no dependencies.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
if (!existsSync(src)) {
  console.error(`error: entry.png not found next to main.ts (${src})`);
  process.exit(1);
}
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(out, { recursive: true });
copyFileSync(src, join(out, "entry.png"));
