import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

import wasm from 'vite-plugin-wasm';              //  ← neu
import topLevelAwait from 'vite-plugin-top-level-await'; //  ← neu

export default defineConfig({
  plugins: [
    react(),
    envCompatible(),
    wasm(),                //  ← neu
    topLevelAwait(),       //  ← neu
  ],
});
