# PM Knowledge Base — PMBOK第8版 × 内製チーム向け実践

プロジェクトマネジメントの2つの資料をマージした統合ナレッジベース。

- **標準層（[standard/](standard/)）** … PMBOK第8版資料集（研修キット）。「型・用語・体系」を提供する。
- **実践層（[practice/](practice/)）** … 『プロジェクトマネジメントの教科書（内製チーム向け）』全42章。発注者と受注者の境界がない**内製組織**で、標準をどう使うかの実践。
- **統合層（[merged/](merged/README.md)）** … 両者で重複していた5＋1のツールを、良い方を残して1本にまとめたもの。

> 統合の対応関係と「どちらを残したか（理由）」は **[CROSSWALK.md](CROSSWALK.md)** を参照。

## なぜ2層構成か
PMBOKは「どの現場でも通じる標準の型」、内製教科書は「境界のない組織で本当に効く判断」。
片方だけでは、標準は現場で空回りし、実践は他社に通じない。**標準で語り、実践で判断する**ために両方を残した。

## ディレクトリ

```
pm-knowledge-base/
├── README.md              ← このファイル
├── CROSSWALK.md           ← PMBOK↔内製教科書 対応表＋統合判断
├── glossary.md            ← 統合用語集（版対応＋内製実務用語）
├── training_curriculum.md ← 育成カリキュラム（8週）
├── task-lists.md          ← 要検証タスク（PMBOK第8版の未照合箇所）
├── standard/              ← 標準層（PMBOK第8版）
│   ├── 01_overview_history.md      版の変遷
│   ├── 02_six_principles.md        6原理原則（必修）
│   ├── 03_performance_domains.md   パフォーマンス領域
│   ├── 04_process_reference.md     プロセス基準表
│   ├── 05_success_criteria.md      成功の二軸
│   ├── 06_ai_contemporary_theme.md AIという現代的テーマ
│   ├── 09_scope_and_references.md  適用範囲・一次情報・倫理
│   ├── 11_agile_hybrid_bridge.md   アジャイル/ハイブリッド
│   └── 12_critical_perspectives.md 批判的視点
├── practice/              ← 実践層（内製教科書 全42章）
│   ├── 00_positioning.md       第1部 立ち位置
│   ├── 10_what_to_build.md     第2〜4部 何を作るか/見えないもの
│   ├── 20_planning.md          第5部 計画
│   ├── 30_people.md            第6部 人と関係者
│   ├── 40_run.md               第7部 動かし続ける
│   ├── 50_failure_closure.md   第8部 失敗と終わり
│   └── 90_figures.md           主要図表（ASCII）
└── merged/                ← 統合ツール（重複を良い方に統合）
    ├── success_evaluation.md   成果/プロセス二軸＋アウトカム
    ├── raci_daci.md            RACI＋DACI
    ├── stakeholder.md          グリッド＋態度キューブ
    ├── communication.md        計画＋三点セット報告
    ├── risk_register.md        条件と結果＋兆候＋プレモーテム
    └── estimation_evm.md       三点見積り＋EVM
```

## 使い方（役割別）
- **新任PM／PMO** → standard/09 → 01 → 02 → merged/success_evaluation → practice/00
- **内製プロダクトのPM** → practice/00 → practice/10（第3・4部が中心）→ merged/ の各ツール
- **PMP受験** → standard/09 → 01 → 02 → 03 → 04（要検証マーカーに注意）
- **研修設計** → training_curriculum.md を土台に、standard/02・merged/・practice/ を教材配布
- **炎上中／振り返り** → practice/50 → merged/risk_register → standard/05

## 出典
- PMBOK第8版資料集（社内研修キット、2026-08作成）
- 『プロジェクトマネジメントの教科書（内製チーム向け）』全42章
  （https://zenn.dev/tan_go238/books/project-management-textbook を精読・要約）

一次情報の注記：PMBOK第8版の一部（7領域名称・40プロセス詳細）は公式ガイド未照合の `要検証` を含む。研修投入前に照合すること（[task-lists.md](task-lists.md)）。
