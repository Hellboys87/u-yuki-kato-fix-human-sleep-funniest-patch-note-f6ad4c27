import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Fixed a bug where your brain replayed your most embarrassing moment of 2014 at 3 a.m. every night, on loop.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
