export type Capability = {
  title: string;
  description: string;
};

/**
 * 対応可能な業務範囲（企画書3章「About：制作者としてのスタンス、対応可能な業務範囲」）。
 * CMS想定：型 + 非同期getterのスキーマパターン（①〜⑪と同じ方針）。
 */
const CAPABILITIES: Capability[] = [
  {
    title: "情報設計（IA）",
    description: "「このページの仕事は何か」を1文で定義できるまで要件を分解し、迷わせないサイト構造に落とし込みます。",
  },
  {
    title: "UI / UXデザイン",
    description: "業種・ペルソナごとにトンマナを再定義し、写真素材に頼らないCSS/SVGの抽象表現でブランド世界観を翻訳します。",
  },
  {
    title: "フロントエンド実装",
    description: "Next.js（App Router）・TypeScriptを軸に、アニメーション・アクセシビリティ・パフォーマンスまで一貫して実装します。",
  },
  {
    title: "簡易バックエンド・データ設計",
    description: "予約・カート・検索・認証など、実務で求められる状態管理・API設計・DBスキーマ設計まで対応します。",
  },
  {
    title: "SEO設計",
    description: "構造化データ・見出し階層・Core Web Vitalsを踏まえ、「検索される仕組み」として設計します。",
  },
  {
    title: "コピーライティング",
    description: "抽象論で終わらせず、固有名詞・エピソードで語る文章設計によって、デザインとコピーの両輪で説得力を作ります。",
  },
];

export async function getCapabilities(): Promise<Capability[]> {
  return CAPABILITIES;
}
