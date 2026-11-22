// "Held" — an entry for make.fun's "Make the AI judge feel held" bounty.
// The program writes one short relaxing text to /output/entry.txt.
// The text is fixed and deterministic: no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The kettle has boiled and gone quiet again. Outside, the light is slipping through the fence one slat at a time, and the dog has decided the rug is enough for today.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
