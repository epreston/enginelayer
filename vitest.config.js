import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config.js';

// https://vitejs.dev/config/
const testConfig = defineConfig({
  test: {
    // Debugging Tests
    // testTimeout: 0,
    // fileParallelism: false,

    // globals: true,
    // includeSource: ['src/**/*.{js,ts}'], // enable inline tests
    pool: 'forks',
    // setupFiles: ['./scripts/setup-vitest.js'],
    sequence: {
      hooks: 'list'
    },
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html'],
      exclude: [
        ...configDefaults.coverage.exclude,
        // entries that skew coverage reports here
        'scripts/**'
      ]
    }
  }
});

export default mergeConfig(viteConfig, testConfig);
