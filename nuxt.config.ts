export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true, // デフォルト設定です
  target: 'static', // 静的サイトとして生成
  generate: {
    fallback: '404.html', // 404ページとして使用されるファイル
  },
  app: {
    baseURL: '/pokeooo/', // リポジトリ名に置き換えてください
  },
})
