import { DefaultTheme, defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { components } from '../components'

import minimist from 'minimist'
// vitepress 1.0.0-rc.24 版本下会报错

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/foo' }
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
      ]
    }
  ],
  '/components': [{
    items: [
      ...components
    ]
  }]
}

const argv = minimist(process.argv.slice(2))
const build = argv.build || false

export default defineConfig({
  title: 'oop-admin-ui',
  description: 'YYG Vue3企业级中后台组件库',
  lang: 'cn-ZH',
  base: build ? '/OOP-UI/' : '/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.gif',
    siteTitle: 'oop-admin-ui',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    nav,
    sidebar
  },
  head: [
    [
      'link',{ rel: 'icon', href: build ? '/OOP-UI/favicon.gif' : '/favicon.gif' }
    ]
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})

