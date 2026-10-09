import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Wayne host",
  description: "Hi,你好,若您有任何問題請先查看此文檔，若真有問題請至Discord開單詢問。",
  themeConfig: {
    nav: [
      { text: '主頁', link: '/' },
      { text: '如何申請', link: '/use' }
    ],

    sidebar: [
      {
        text: '開始使用',
        items: [
          { text: '何如使用', link: '/use' },
          { text: '使用須知', link: '/Notice' },
        ]
      },
      {
        text: '面板教學',
        items: [
          { text: '控制面板', link: '/panel' },
          { text: 'MCSM Panel', link: '/mcsm' },
          { text: 'Pterodactyl Panel', link: '/Pterodactyl' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'warnerbros', link: 'https://wayne227304.dpdns.org' },
      { icon: 'discord', link: 'https://discord.gg/drMFgPb6QJ' }
    ]
  }
})
