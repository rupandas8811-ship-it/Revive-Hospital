import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        piles: resolve(__dirname, 'piles-treatment/index.html'),
        fissure: resolve(__dirname, 'fissure-treatment/index.html'),
        fistula: resolve(__dirname, 'fistula-treatment/index.html'),
        gallstones: resolve(__dirname, 'gallstones-treatment/index.html'),
        hernia: resolve(__dirname, 'hernia-treatment/index.html'),
        appendix: resolve(__dirname, 'appendix-treatment/index.html'),
        appendixBangalore: resolve(__dirname, 'appendix-treatment-bangalore/index.html'),
        varicoseVeins: resolve(__dirname, 'varicose-veins-treatment/index.html'),
        diabeticFoot: resolve(__dirname, 'diabetic-foot-treatment/index.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
