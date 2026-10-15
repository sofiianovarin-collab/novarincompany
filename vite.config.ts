import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  define: {
    __NOVARIN_PREVIEW__: JSON.stringify(false),
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    proxy: {
      "/api/contact": "http://127.0.0.1:8791",
    },
  },
  preview: {
    host: true,
    port: 4173,
  },
})
