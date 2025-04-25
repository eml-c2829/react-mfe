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
      name: 'remoteApp',
      exposes: {
        './RemoteComponent': './src/components/remotecomponent.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 8881,
    cors: true,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'dist',
  },
})
