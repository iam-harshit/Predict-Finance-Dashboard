import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically updates the service worker
      strategies: 'injectManifest', // This will allow using import statements in service workers
      srcDir: 'src', // Source directory for service worker files
      filename: 'service-worker.js', // Output name for the service worker
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,png,svg}'], // Specify which files to cache
      },
      manifest: {
        name: 'Predict Finance Dashboard',
        short_name: 'Predict Finance',
        description: 'Your app description',
        icons: [
          {
            src: 'https://via.placeholder.com/192x192.png?text=Icon+192',  // Adjust paths if necessary
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'https://via.placeholder.com/512x512.png?text=Icon+512',
            sizes: '512x512',
            type: 'image/png',
          }
        ],
        start_url: '/',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
      workbox: {
        // You can configure runtime caching here
        runtimeCaching: [
          {
            urlPattern: /\/api\/.*\/*.json/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**']
    }
  }
});
