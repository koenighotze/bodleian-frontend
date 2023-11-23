import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  preview: {
    open: true,
  },
  test: {
    globals: true,
  },
})
