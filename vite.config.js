import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jonathanaster.github.io/react-rick-and-morthy/",
  plugins: [react()]
})
