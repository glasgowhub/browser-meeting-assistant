import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    envCompatible(),
    wasm(),
    topLevelAwait(),
  ],
  // --- Diese Zeile wurde hinzugefügt ---
  base: '/browser-meeting-assistant/',
  // -------------------------------------
});