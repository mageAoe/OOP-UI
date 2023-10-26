import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import oopUi from '@special-ui/oop-ui'

// 测试环境
// const env = import.meta.env
// console.log(env)

createApp(App).use(oopUi).mount('#app')
