# merged/ — 重複統合ツール層

PMBOK第8版資料集（`../standard/`）と内製チーム向け実践教科書（`../practice/`）で
**同じ主題を扱っていた5つのツール**を、良い方を残して1本に統合したもの。

## 統合の原則

1. 型・用語・体系はPMBOK側を土台にする（標準として通じる）。
2. 現場で埋める列・判断軸・失敗の兆候は内製教科書側を採る（実務で効く）。
3. どちらを残したかと理由は [../CROSSWALK.md](../CROSSWALK.md) に記録する。

## ファイル

| ファイル | 統合元 | 残した中心 |
|---|---|---|
| [success_evaluation.md](success_evaluation.md) | PMBOK 05（成果/プロセス二軸）＋ 教科書 第11章（アウトプット/アウトカム） | 二軸マトリクス＋ベースライン/前提検証 |
| [raci_daci.md](raci_daci.md) | PMBOK 10.2（RACI）＋ 教科書 第29章（RACI/DACI） | RACIに加えDACI（決める人と決められる状態を作る人の分離） |
| [stakeholder.md](stakeholder.md) | PMBOK 10.4（パワー×関心）＋ 教科書 第31章（キューブ） | グリッド＋態度軸 |
| [communication.md](communication.md) | PMBOK 10.3（計画表）＋ 教科書 第32章（報告・透明性） | 計画表＋三点セット報告＋悪い知らせ／情報ラジエーター |
| [risk_register.md](risk_register.md) | PMBOK 10.5（登録簿）＋ 教科書 第22・27章（例外・兆候） | 「条件と結果」＋観測できる兆候列＋プレモーテム |
| [estimation_evm.md](estimation_evm.md) | PMBOK 10.1（EVM）＋ 教科書 第25章（三点・幅・参照クラス） | EVM（実績管理）＋見積りの幅と伝達設計 |
