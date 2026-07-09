import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Electromagnetic-Field-Data-Simulator/',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: true,
  },
});
