import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "",
  description: "Documents of XYITWeb",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'APIs', link: '/api' }
    ],

    sidebar: [
      {
        text: 'APIs',
        items: [
          { text: '', link: '/' },
          { text: '', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xyit2025/documents' }
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
