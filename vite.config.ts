// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'   // ← add this import

export default defineConfig({
  // base: '/mihir-portfolio/',

  plugins: [react()],

  resolve: {
    alias: {
      // Two common ways — pick one (I recommend the first)
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      
      // or more explicit (sometimes helps with trailing slashes):
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@/': fileURLToPath(new URL('./src/', import.meta.url)),
    }
  }
})