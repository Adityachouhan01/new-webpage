import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/new-webpage/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: ['.monkeycode-ai.live'],
  },
  preview: {
    host: true,
    allowedHosts: ['.monkeycode-ai.live'],
  },
})
