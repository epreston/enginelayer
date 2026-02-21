import { defineConfig } from 'vite';
import { entries } from './scripts/aliases.js';

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'mpa', // disable history fallback

  build: {
    // minify: false,
    assetsInlineLimit: 0,
    target: ['es2024']
  },
  worker: {
    format: 'es'
  },
  server: {
    headers: {
      // allow SharedArrayBuffer objects and Performance.now() with unthrottled timers
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  },
  resolve: {
    alias: entries
  }
});
