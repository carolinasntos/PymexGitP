import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PymexGitP/', // <--- Usa el nombre de tu repo aquí
})