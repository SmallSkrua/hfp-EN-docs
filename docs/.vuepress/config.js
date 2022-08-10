const { defaultTheme } = require('@vuepress/theme-default')
module.exports = {
  theme: defaultTheme({
    logo: '/favicon.png',
    sidebar: 'auto', // 自动生成侧边栏
    // sidebar: 'structuring',
    navbar: [
      { text: 'Home Page', link: '/', },
      {
        text: 'Heart Fire Project',
        children: [
          { text: 'Members List', link: '/maindocs/member',},
        ],
      },
      {
        text: 'Works',
        children: [
          { text: 'Original Works', link: '/maindocs/works', },
          { text: 'Translate Works', link: '/maindocs/translate_works', },
        ],
      },
      {
        text: 'Languages',
        children: [
          { text: '简体中文', link: 'https://CN.Project-HeartFire.com', },
          { text: 'English', link: 'https://EN.Project-HeartFire.com', },
        ],
      }
    ], // 顶部栏配置
    displayAllHeaders: true, // 默认值：false
    sidebarDepth: 2,
    lastUpdated: 'Last updated on',
    smoothScroll: true,
    repo: 'https://github.com/Heart-Fire-Project/hfp-EN-docs',
    repoLabel: 'Github',
    docsRepo: 'Heart-Fire-Project/hfp-EN-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nextLinks: true,
    prevLinks: true
  }),
  title: 'Heart Fire Project',
  lang: 'en-US',
  description: 'Heart Fire Project Docs',  
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ]
}
