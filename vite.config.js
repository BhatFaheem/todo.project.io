import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default {
  base: '/todo.project.io/'
};
export default defineConfig({
  plugins: [react()],
  base: '/todo.project.io/'
})
