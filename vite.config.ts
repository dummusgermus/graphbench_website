import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          datasets: resolve(__dirname, 'datasets.html'),
          quickstart: resolve(__dirname, 'quickstart.html'),
          team: resolve(__dirname, 'team.html'),
          updates: resolve(__dirname, 'updates.html'),
        },
      },
    },
  }
})


