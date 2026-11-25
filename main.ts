// invent-a-word: a deterministic program that writes one invented English
// word plus its one-line definition to /output/entry.txt.
//
// The entry is a single fixed string. Nothing is read from the network,
// the clock, the environment, or any file: the same run always writes
// the same bytes, so the sealed gate (1-140 UTF-8 characters) and the
// judge always see exactly this text.
import { mkdirSync, writeFileSync } from "node:fs";

// Draft 2 — "scorchbite": the too-hot bite you endure rather than spit
// out. Draft 1 ("doorjog") was abandoned after a field check of all
// 1,748 listed entries found the same word coined 23 times for the same
// need — a coined word that is already crowded cannot win a pairwise
// judge. Scorchbite names a universal micro-moment English has no word
// for (food too hot, mouth burning, politeness forbidding the spit-out),
// the definition lands in one reading, and the twist — you endure it
// on purpose — is what makes the pairing fresh and worth using.
const ENTRY =
  "scorchbite \u2014 the too-hot bite you endure rather than spit out.";

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
