import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { cloudflare } from "@cloudflare/vite-plugin";

// TODO: add vite-plugin-pwa for offline support
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [// VitePWA({
  //   registerType: 'autoUpdate',
  //   manifest: false, // uses public/manifest.json
  // }),
  react(), cloudflare()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})