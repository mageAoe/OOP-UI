import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // node 模块
import eslint from 'vite-plugin-eslint' // eslint
import vueJsx from '@vitejs/plugin-vue-jsx' // 在vue里面执行jsx tsx

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    eslint()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    cors: true,
    proxy: {}
  },
  build: {
    outDir: path.resolve(__dirname, '../dist')
  },
  envDir: path.resolve(__dirname, 'env')
})
