import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), basicSsl()],
  build: {
    outDir: './docs'
  },
  base: './'
})
