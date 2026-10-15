import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "font-src 'self'",
  "img-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

// The dev server injects inline React Refresh scripts, so the policy is only added to built HTML.
function contentSecurityPolicyMeta(): Plugin {
  return {
    name: 'novarin-csp-meta',
    apply: 'build',
    transformIndexHtml() {
      return [
        {
          tag: 'meta',
          attrs: { 'http-equiv': 'Content-Security-Policy', content: contentSecurityPolicy },
          injectTo: 'head-prepend',
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contentSecurityPolicyMeta()],
  build: {
    sourcemap: false,
  },
  define: {
    __NOVARIN_PREVIEW__: JSON.stringify(false),
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
    proxy: {
      "/api/contact": "http://127.0.0.1:8791",
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
})
