import { defineConfig } from 'vite'
import VueJsx from '@vitejs/plugin-vue-jsx'

// 该文件主要配置开发端口和 jsx 插件
export default defineConfig({
  plugins: [
    VueJsx()
  ],
  server: {
    port: 3100
  }
})
