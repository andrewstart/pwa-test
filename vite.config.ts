import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      mode: 'development',
      base: '/',
      includeAssets: ['favicon.ico'],
      workbox: {
        globPatterns: ['**/*.{js,css,html}', 'assets/**/*.{jpg,png,svg}'],
      },
      manifest: {
        name: "PWA Test",
        short_name: "PWATest",
        start_url: ".",
        display: "standalone",
        theme_color: "#3da05e",
        background_color: "#eeeeee",
        description: "A super basic app for testing out PWA & Vue build & deploy process",
        icons: [
          {
            src: 'icons/manifest-icon-192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/manifest-icon-512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/manifest-icon-512.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  // build: { rollupOptions: {external: ['/sw.js']}},
})
