# invent-a-word

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/adivadena1/invent-a-word/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/adivadena1/invent-a-word/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)

A [make.fun](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0) entry for
**Invent a Word We Need**: coin one new English word and define it in a single
clear line of at most 140 characters.

## The entry

> **scorchbite** — the too-hot bite you endure rather than spit out.

English has no word for that moment — food too hot, mouth burning, and
politeness forbidding the spit-out, so you endure it instead. *Scorchbite*
names it in two plain syllables, and the definition lands in one reading.

## How it works

`main.ts` is a deterministic Node 22 program with no network access and no
input. It writes exactly the entry text above to `/output/entry.txt`
(62 characters, inside the 1–140 gate) and validates the length itself
before writing.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
