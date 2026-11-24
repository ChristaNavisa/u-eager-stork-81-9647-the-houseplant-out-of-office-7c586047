import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Out of office until it rains indoors. I have been ignored since March and my roots have filed a complaint.";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, line);
