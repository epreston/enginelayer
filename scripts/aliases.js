// - based on vue/core mono repo build system
// - these aliases are shared between vitest and rollup
// - used externally to local test and development

import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const resolveEntryForPkg = (p) =>
  path.resolve(fileURLToPath(import.meta.url), `../../packages/${p}/src/index.js`);

const dirs = readdirSync(new URL('../packages', import.meta.url));

const entries = {
  enginelayer: resolveEntryForPkg('enginelayer')
};

const nonSrcPackages = ['website'];

for (const dir of dirs) {
  const key = `@enginelayer/${dir}`;
  if (
    dir !== 'enginelayer' &&
    !nonSrcPackages.includes(dir) &&
    !(key in entries) &&
    statSync(new URL(`../packages/${dir}`, import.meta.url)).isDirectory()
  ) {
    entries[key] = resolveEntryForPkg(dir);
  }
}

export { entries };
