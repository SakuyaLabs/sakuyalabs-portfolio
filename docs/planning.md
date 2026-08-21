# SakuyaLabs Portfolio（本体サイト）企画・設計ドキュメント（Phase 0〜2 記録）

sakuyalabs_portfolio_plan.md「3. ポートフォリオサイト自体の構成（メタ設計）」に対応する、
11案件を束ねる本体サイト。①〜⑪が「架空クライアントワークの証明」なら、本サイトは
「なぜこの11案件をこの設計にしたのか」という提案力そのものを見せる、SakuyaLabsの
入口・営業サイト。

## 実装方針の確認

- **公開アーキテクチャ**：企画書4章の三層構成（hub / case study / live demo）のうち、
  今回実装するのは`sakuyalabs.com`本体（hub）のみ。各Works詳細ページに「実際のサイトを見る」
  リンクを設置するが、企画書通り`https://{slug}.sakuyalabs.com`形式のURLを実装しておく
  （本番デプロイ時にそのまま機能する構造）。実際のサブドメインは未デプロイのため、リンク先は
  現時点では解決しない。これは①〜⑪と同じ「ローカルgit initのみ、デプロイはユーザーの明示的な
  指示があるまで着手しない」という標準方針（Claudeメモリ`sakuyalabs-portfolio-conventions`）を
  本体サイトにも適用した結果であり、企画書のURL設計自体は変更しない
- **言語**：①〜⑩と同様、日本語のみ（⑪NOVAのみ多言語対応というのが確立した方針。本体サイトは
  日本のクライアント・採用担当者を主対象とするため単言語で十分と判断）
- **Works詳細ページのコンテンツ**：各案件の`docs/planning.md`・企画書の記述を出典として、
  「架空クライアントの課題→設計意図→実装」の3段構成でまとめる（企画書3章の指示通り）

## Phase 0｜要件定義・ペルソナ設計

### 運営主体
SakuyaLabs（フリーランスWeb制作者としての屋号）

### エンドユーザーペルソナ
Web制作を発注検討している事業者、またはSakuyaLabsへの業務委託・採用を検討している
制作会社の担当者。「作れるか」ではなく「なぜその設計にしたか」を短時間で判断したい。

### ゴール（CV地点）
Contactページからの問い合わせ・相談依頼

### 成功指標（KPI）
- 11案件それぞれの「証明したい能力軸」が一目で伝わること
- Works一覧からCase Study、Case StudyからLive Demo（アーキテクチャ上のリンク）への
  導線が明快であること

## Phase 1｜情報設計（IA）

### サイト構成

| # | ページ | 仕事 |
|---|---|---|
| 1 | TOP (`/`) | SakuyaLabsとしてのステートメント、Portfolio Projects 11 / Industries Covered 10 / Production Works ○の数字訴求 |
| 2 | Works (`/works`) | 11案件をカード一覧。業種タグ・使用技術タグでフィルタ可能 |
| 3 | Works詳細 (`/works/[slug]`) | 各案件のConcept Project明記、課題→設計意図→実装の3段解説、Live Demoリンク。SSG |
| 4 | About (`/about`) | 制作者としてのスタンス、対応可能な業務範囲 |
| 5 | Process (`/process`) | 企画書1章「Claude Codeを使った制作フロー」を簡略化して掲載 |
| 6 | Contact (`/contact`) | 問い合わせフォーム（モック送信、CV地点） |

### 導線設計
- ヘッダー：ロゴ、Works/About/Process/Contactへのナビゲーション
- TOPのHero直下に11案件の数字訴求、そのままWorksへの導線
- Works一覧の各カードからWorks詳細へ、詳細ページ末尾からLive Demo（外部リンク）とContactへ

## Phase 2｜デザインシステム定義

- トンマナ：「確信・編集的（エディトリアル）・職人的」。①〜⑪のどのクライアントワークとも
  異なる、SakuyaLabs自身の一貫したスタジオブランドとして提示する
- カラーパレット（実装着手前にコントラスト比を計算する。SakuyaLabs External Intelligence
  `LES-003`）：
  - Paper（背景）: `#FAF8F4` / Card: `#FFFFFF` / Border: `#E8E3D9`
  - Ink（本文・見出し）: `#1C1A17`（Paper上で16.37、Card上で17.36）
  - Muted（控えめな本文）: `#6B6459`（Paper上で5.51、Card上で5.85）
  - Gold（プライマリアクセント、テキスト可）: `#8C5F17`（Paper上で5.26、Card上で5.58）
  - Gold-raw（装飾専用、テキストには使わない）: `#C9922E`
- フォント（`next/font/google`）：
  - 見出し：Fraunces（エディトリアルな存在感のあるセリフ体。①〜⑪で未使用）
  - 本文：Noto Sans JP
- 余白の基準：8pxグリッド／セクション間 96px
- コンポーネント方針：角丸は控えめ（6px程度）、罫線と余白で情報を整理する編集的なレイアウト
- **見出し（h1〜h6）の末尾に句読点（。等）を付けない**（sakuyalabs_web_portfolio_project全案件共通ルール）

## 技術スタック

- Next.js 16 (App Router) / TypeScript / Tailwind CSS v4（CSS-first設定）
- Works一覧のフィルタ状態はURLクエリパラメータと同期させる（⑩SUMAI Searchで確立した
  パターンを踏襲）
- Works詳細データ：型 + 非同期getter関数のCMSスキーマ想定パターン（①〜⑪共通）
- アニメーション：Framer Motion
- フォーム：React Hook Form + Zod（Contactページ、モック送信）
- ビジュアル素材：写真を使用せず、CSS/SVGの抽象ビジュアルで表現する（①〜⑪と同方針）

## 実装時の絶対ルール

①〜⑪で確立した以下のルールをすべて踏襲する。

- コンポーネントは Atomic に分割し、1ファイル1責務
- アクセシビリティ：全インタラクティブ要素にフォーカスリング、`prefers-reduced-motion` 対応必須
- `<dl>` を使う場合は dt/dd を div でラップしない（①NAGI Phase 5の反省点）
- 複数列グリッドは `grid-cols-1` ベースで `sm:`/`lg:` を使い拡張する（④はる法律事務所Phase 5の反省点）
- 新しく追加する色トークンは、追加した時点でコントラスト比を計算する（⑥Nolan Phase 5の反省点、`LES-003`）
- 企画書の記載内容は実装完了時に一つずつ照合するチェックリストとして扱う（⑦TOKI Phase 5の反省点、`LES-004`）
- `useHasMounted`等のマウント判定ガードは、値の計算だけに適用しコンポーネント全体をnull化しない（⑧Yukige Phase 5の反省点、`LES-006`）
- アイコン等の装飾要素に`aria-label`で状態を持たせる場合は`role="img"`を明示する。roleless要素（`<p>`等）にaria-labelを使う場合は、代わりにsr-onlyの実テキストを使う（⑨Prism AI・⑪NOVA Phase 5の反省点、`LES-007`）
- 各ページのルート要素に`<main>`ランドマークが存在することを確認する（⑩SUMAI Search Phase 5の反省点）
- 各ページに `<h1>` を最初から正しく設定する
- レスポンシブは 375 / 768 / 1440 の3ブレークポイントで確認
- Lighthouse スコア：Performance 90+ / Accessibility 95+ を最低ライン
- Lighthouse計測は最初から`--throttling-method=provided`を使う（`PAT-004`）
- 実装はページ・セクション単位で進め、1つ完成するごとにブラウザで確認してから次に進む
- サイト内（フッター等）に `Concept Project` である旨を、各Works詳細ページで明示する
- 問い合わせフォームに、実際には送信されない旨を明示する

## 参照

- 企画書全体：`../../../sakuyalabs_portfolio_plan.md`（特に3章・4章）
- ①〜⑪の実装：`../../../01 美容院/` 〜 `../../../11 Tech Showcase/`
