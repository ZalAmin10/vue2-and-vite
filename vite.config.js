import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'

import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host-simple',
      filename: 'remoteEntry.js',
      remotes: {
        'remote-app': "http://127.0.0.1:8080/assets/remoteEntry.js",
      },
      // shared: ['vue']
    }),
  ]
})