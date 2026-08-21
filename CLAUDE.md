# Project: SakuyaLabs Portfolio（本体サイト）

> このファイルは `sakuyalabs_portfolio_plan.md`(SakuyaLabs Web Portfolio Project 企画書)のCLAUDE.md雛形を
> 本体サイト用に埋めたものです。①〜⑪が架空クライアントワークとしての実装力の証明である一方、本サイトは
> 「なぜこの11案件をこの設計にしたのか」という提案力そのものを見せる、SakuyaLabsの入口・営業サイト。
> 詳細な要件定義・IA・意思決定ログは `docs/planning.md` を参照してください。

## 実装方針（重要）
①〜⑪の「ローカルgit initのみ、デプロイはユーザーの明示的な指示があるまで着手しない」方針を
本体サイトにも適用する。Works詳細ページのLive Demoリンクは企画書通り
`https://{slug}.sakuyalabs.com`形式で実装するが、実際のサブドメインは未デプロイのため
現時点では解決しない。詳細は`docs/planning.md`の「実装方針の確認」参照。

## サイト概要
- 運営主体：SakuyaLabs（フリーランスWeb制作者としての屋号）
- ターゲットペルソナ：Web制作の発注検討者、業務委託・採用担当者
- ゴール（CV地点）：Contactページからの問い合わせ

## サイト構成
- `/`：TOP（ステートメント、Portfolio Projects 11 / Industries Covered 10 / Production Works ○）
- `/works`：11案件のカード一覧（業種タグ・技術タグでフィルタ可能）
- `/works/[slug]`：Works詳細（Concept Project明記、課題→設計意図→実装の3段解説、Live Demoリンク。SSG）
- `/about`：制作者としてのスタンス
- `/process`：Claude Codeを使った制作フローの簡略版
- `/contact`：問い合わせフォーム

## デザインルール
- カラー（`src/app/globals.css` の `@theme` に定義。ライトモードのみ）：
  - Paper `#FAF8F4` / Card `#FFFFFF` / Border `#E8E3D9`
  - Ink `#1C1A17`（Paper上で16.37） / Muted `#6B6459`（Paper上で5.51）
  - Gold（プライマリアクセント） `#8C5F17`（Paper上で5.26） / Gold-raw（装飾専用） `#C9922E`
  - 新しく追加する色トークンは、追加した時点でコントラスト比を計算する（`LES-003`）
- フォント（`next/font/google`）：
  - 見出し：Fraunces（①〜⑪で未使用のエディトリアルなセリフ体）
  - 本文：Noto Sans JP
- 余白の基準：8pxグリッド／セクション間 96px
- コンポーネント方針：角丸控えめ（6px）、罫線と余白で情報を整理する編集的レイアウト
- **見出し（h1〜h6）の末尾に句読点（。等）を付けない**（sakuyalabs_web_portfolio_project全案件共通ルール）

## 技術スタック
- Next.js 16 (App Router) / TypeScript / Tailwind CSS v4（CSS-first設定）
- Works一覧のフィルタ状態はURLクエリパラメータと同期（⑩SUMAI Searchのパターンを踏襲）
- Works詳細データ：型 + 非同期getter関数のCMSスキーマ想定パターン
- アニメーション：Framer Motion
- フォーム：React Hook Form + Zod（Contact、モック送信）
- ビジュアル素材：写真不使用、CSS/SVGの抽象ビジュアルで表現する

## 実装時の絶対ルール
- コンポーネントは Atomic に分割し、1ファイル1責務
- アクセシビリティ：全インタラクティブ要素にフォーカスリング、`prefers-reduced-motion` 対応必須
- `<dl>` を使う場合は dt/dd を div でラップしない（①NAGI Phase 5の反省点）
- 複数列グリッドは `grid-cols-1` ベースで `sm:`/`lg:` を使い拡張する（④はる法律事務所Phase 5の反省点）
- 新しく追加する色トークンは、追加した時点でコントラスト比を計算する（⑥Nolan Phase 5の反省点、`LES-003`）
- 企画書の記載内容は実装完了時に一つずつ照合するチェックリストとして扱う（⑦TOKI Phase 5の反省点、`LES-004`）
- `useHasMounted`等のマウント判定ガードは、値の計算だけに適用しコンポーネント全体をnull化しない（⑧Yukige Phase 5の反省点、`LES-006`）
- roleless要素（`<span>`・`<p>`等）に`aria-label`を使わない。装飾アイコンは`role="img"`+`aria-label`、
  実テキストはsr-only併記で対応する（⑨Prism AI・⑪NOVA Phase 5の反省点、`LES-007`）
- 各ページのルート要素に`<main>`ランドマークが存在することを確認する（⑩SUMAI Search Phase 5の反省点）
- 各ページに `<h1>` を最初から正しく設定する
- レスポンシブは 375 / 768 / 1440 の3ブレークポイントで確認
- Lighthouse スコア：Performance 90+ / Accessibility 95+ を最低ライン
- Lighthouse計測は最初から`--throttling-method=provided`を使う（`PAT-004`）
- 実装はページ・セクション単位で進め、1つ完成するごとにブラウザで確認してから次に進む
- 各Works詳細ページに `Concept Project` である旨を明示する
- 問い合わせフォームに、実際には送信されない旨を明示する

## 参照
- 企画書全体：`../../sakuyalabs_portfolio_plan.md`（特に3章「ポートフォリオサイト自体の構成」・4章「公開・管理・営業導線戦略」）
- ①〜⑪の実装：`../../01 美容院/` 〜 `../../11 Tech Showcase/`
- Next.js 16 固有の破壊的変更に関する注意：`@AGENTS.md`

@AGENTS.md
