import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    open: true
  },
  optimizeDeps: {
    exclude: [
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/pro-regular-svg-icons'
    ]
  },
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/pro-solid-svg-icons',
        '@fortawesome/pro-regular-svg-icons'
      ]
    }
  }
}) 