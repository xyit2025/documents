import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "云洛语秋的文档",
  description: "一个测试用文档站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'MCUNCWiki镜像站', link: '/MCUNCWikiMirror' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AvirlMay/devdocs' }
    ]
  },
  
  markdown: {
    lineNumbers: true,
    math: true
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    }
  },

  lastUpdated: true
})
