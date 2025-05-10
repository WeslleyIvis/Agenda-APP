import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` 
           @use "@styles/abstracts/variables" as *;
          @use "@styles/abstracts/mixins" as *;
        `
      }
    }
  }
});