import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.yomama-jokes.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' prefix
      },
    },
  },
})
