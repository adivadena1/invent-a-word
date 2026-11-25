// invent-a-word: a deterministic program that writes one invented English
// word plus its one-line definition to /output/entry.txt.
//
// The entry is a single fixed string. Nothing is read from the network,
// the clock, the environment, or any file: the same run always writes
// the same bytes, so the sealed gate (1-140 UTF-8 characters) and the
// judge always see exactly this text.
import { mkdirSync, writeFileSync } from "node:fs";

// Draft 1 — "doorjog": the small forced run when a stranger holds a door
// open from too far away. A universal micro-moment English has no word
// for; the definition lands in one reading and the word sounds like
// English could have grown it (door + jog, two plain syllables).
const ENTRY =
  "doorjog \u2014 the hurried little run you do when a stranger holds a door open from too far away.";

const MAX_CHARS = 140;

const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} characters, outside the 1-${MAX_CHARS} gate`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
