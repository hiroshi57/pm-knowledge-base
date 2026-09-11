import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: 'PM Knowledge Base',
  description: 'PMBOK第8版 × 内製チーム向け実践 統合ナレッジベース',
  cleanUrls: true,
  lastUpdated: true,
  // 社内向け資料のため、ディレクトリ参照など軽微なリンクはビルドを止めない
  ignoreDeadLinks: true,
  // README.md は GitHub 用。サイトのホームは index.md を使う
  srcExclude: ['README.md'],
  themeConfig: {
    outline: { level: [2, 3], label: '目次' },
    docFooter: { prev: '前へ', next: '次へ' },
    darkModeSwitchLabel: '外観',
    returnToTopLabel: 'トップへ',
    sidebarMenuLabel: 'メニュー',
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '標準層(PMBOK)', link: '/standard/01_overview_history' },
      { text: '実践層(内製)', link: '/practice/00_positioning' },
      { text: '統合ツール', link: '/merged/README' },
      { text: '対応表', link: '/CROSSWALK' }
    ],
    search: { provider: 'local' },
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: '概要', link: '/' },
          { text: 'PMBOK↔内製教科書 対応表・統合判断', link: '/CROSSWALK' },
          { text: '統合用語集', link: '/glossary' },
          { text: '育成カリキュラム(8週)', link: '/training_curriculum' },
          { text: '要検証タスク', link: '/task-lists' }
        ]
      },
      {
        text: '標準層 — PMBOK第8版',
        collapsed: false,
        items: [
          { text: '01 版の変遷', link: '/standard/01_overview_history' },
          { text: '02 6つの原理原則', link: '/standard/02_six_principles' },
          { text: '03 パフォーマンス領域', link: '/standard/03_performance_domains' },
          { text: '04 プロセス基準表', link: '/standard/04_process_reference' },
          { text: '05 成功の二軸', link: '/standard/05_success_criteria' },
          { text: '06 AIという現代的テーマ', link: '/standard/06_ai_contemporary_theme' },
          { text: '09 適用範囲・一次情報・倫理', link: '/standard/09_scope_and_references' },
          { text: '11 アジャイル/ハイブリッド', link: '/standard/11_agile_hybrid_bridge' },
          { text: '12 批判的視点', link: '/standard/12_critical_perspectives' }
        ]
      },
      {
        text: '実践層 — 内製チーム向け教科書',
        collapsed: false,
        items: [
          { text: '00 立ち位置(第1部)', link: '/practice/00_positioning' },
          { text: '10 何を作るか/見えないもの(第2〜4部)', link: '/practice/10_what_to_build' },
          { text: '20 計画する(第5部)', link: '/practice/20_planning' },
          { text: '30 人と関係者(第6部)', link: '/practice/30_people' },
          { text: '40 動かし続ける(第7部)', link: '/practice/40_run' },
          { text: '50 失敗と終わり(第8部)', link: '/practice/50_failure_closure' },
          { text: '90 主要図表(ASCII)', link: '/practice/90_figures' }
        ]
      },
      {
        text: '統合ツール — 良い方を採用',
        collapsed: false,
        items: [
          { text: '概要', link: '/merged/README' },
          { text: '成功評価(二軸＋アウトカム)', link: '/merged/success_evaluation' },
          { text: 'RACI＋DACI', link: '/merged/raci_daci' },
          { text: 'ステークホルダー(態度キューブ)', link: '/merged/stakeholder' },
          { text: 'コミュニケーション', link: '/merged/communication' },
          { text: 'リスク登録簿(兆候つき)', link: '/merged/risk_register' },
          { text: '見積り＋EVM', link: '/merged/estimation_evm' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hiroshi57/pm-knowledge-base' }
    ]
  }
})
