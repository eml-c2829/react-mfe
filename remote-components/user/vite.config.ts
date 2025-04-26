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
      name: 'userLifecycle',
      filename: 'remoteEntry.js',
      exposes: {
        './UserList': './src/components/user-list/user-list.tsx',
        './InviteUser': './src/components/invite-user/invite-user.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 8881,
    cors: true,
    strictPort: true,
  },
  preview: {
    port: 8881, // Preview server port
  },
  build: {
    target: 'esnext',
  },
})
