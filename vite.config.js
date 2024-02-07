import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'

import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host-simple',
      remotes: {
        'remote-simple': 'http://localhost:8084/assets/remoteEntry.js'
      },
    }),
  ]
})