import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      remotes: {
        userLifecycle: {
          external: 'http://localhost:8881/assets/remoteEntry.js',
          from: 'vite',
          externalType: 'url'
        }
      }
    })
  ],
})
