import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdPlugin from 'vite-plugin-md'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    mdPlugin({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
