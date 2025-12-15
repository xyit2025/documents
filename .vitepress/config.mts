import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "向源互联 文档",
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
          // { text: 'API首页', link: '/api' },
          { text: 'API通用规范说明', link: '/api/global.md' },
          {
            text: 'v1', 
            items: [
              {
                text: '用户账户',
                items: [
                  {
                    text: 'Tokens',
                    items: [
                      {
                        text: 'Operation Token',
                        items: [
                          { text: '获取OT', link: '/api/v1/auth/tokens/operation/index.md'},
                        ],
                      },
                    ],
                    collapsed: true,
                  },
                ],
                collapsed: true,
              },
            ],
            collapsed: true,
          },
        ],
        link: '/api',
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
