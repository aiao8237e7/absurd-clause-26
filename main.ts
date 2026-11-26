// The Absurd Clause Contest (u-donrulezz-the-absurd-clause-contest-035cc0f1)
//
// Writes exactly one line - a single absurd clause hidden in
// terms-of-service legalese - to /output/entry.txt.
//
// The clause is a fixed, deterministic string: one original English
// sentence of at most 200 characters, deadpan legal boilerplate that
// quietly turns absurd.

import { mkdirSync, writeFileSync } from "node:fs";

const CLAUSE =
  "In the event of the user's death, the Company shall retain the user's shadow for promotional use in perpetuity.";

// Gate: the entry must be a single non-blank line of 1-200 characters.
if (
  CLAUSE.length < 1 ||
  CLAUSE.length > 200 ||
  CLAUSE.trim().length === 0 ||
  CLAUSE.includes("\n")
) {
  throw new Error(`Invalid clause: ${CLAUSE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CLAUSE + "\n", "utf8");
