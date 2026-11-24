import * as fs from "node:fs";
import * as path from "node:path";

// The Worst App Idea Ever Pitched — one sentence, 187 chars.
// Chosen line: ScreamTune turns your 3 a.m. screams into custom ringtones,
// auto-shares them with your contacts, and charges $0.99 per scream —
// your most-played ringtone is already your boss's voicemail.
const ENTRY =
  "ScreamTune turns your 3 a.m. screams into custom ringtones, auto-shares them with your contacts, and charges $0.99 per scream — your most-played ringtone is already your boss's voicemail.";

// Gate: one line, 1-200 UTF-8 characters, no trailing blank lines.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-200 chars, got ${chars.length}`);
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
