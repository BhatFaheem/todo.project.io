import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  base: '/todo.project.io/'
};
export default defineConfig({
  plugins: [react()],
})
