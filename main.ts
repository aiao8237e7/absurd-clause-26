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
  "The Company reserves the right to collect the user's left sock on the third Tuesday of every month, in person, without explanation.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CLAUSE + "\n", "utf8");
