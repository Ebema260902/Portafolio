// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // si usas React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
