export type ProcessPhase = {
  phase: string;
  title: string;
  description: string;
  points: string[];
};

/**
 * 制作プロセス（企画書1章「Claude Codeを使った制作フロー（全案件共通テンプレート）」の
 * 簡略版。企画書3章「Process：制作プロセスの透明性自体を差別化要素にする」に対応）。
 */
const PROCESS_PHASES: ProcessPhase[] = [
  {
    phase: "Phase 0",
    title: "要件定義・ペルソナ設計",
    description: "Claude Codeを使わず、人間が思考する工程です。架空クライアントのヒアリングシートを作成し、CV地点とKPIを1〜2個に絞ります。",
    points: ["架空クライアントのヒアリングシート", "解像度の高いペルソナ像1名", "ゴール定義（CV地点）"],
  },
  {
    phase: "Phase 1",
    title: "情報設計（IA）",
    description: "サイトマップと各ページの役割を定義します。「このページの仕事は何か」を1文で言語化できるまで分解します。",
    points: ["サイトマップ作成", "各ページの目的を1文で定義", "導線設計"],
  },
  {
    phase: "Phase 2",
    title: "デザインシステム定義",
    description: "トンマナをキーワード3語で言語化し、カラーパレットはコントラスト比を計算してから確定します。",
    points: ["トンマナの言語化", "コントラスト比の事前計算", "タイポグラフィ・コンポーネント方針"],
  },
  {
    phase: "Phase 3",
    title: "Claude Codeへの指示設計",
    description: "プロジェクト概要をCLAUDE.mdとして保存し、以降のセッションで自動参照させます。セクション単位で実装指示を積み上げます。",
    points: ["CLAUDE.md雛形の保存", "セクション単位の実装指示", "レビュー＆詰めプロンプト"],
  },
  {
    phase: "Phase 4",
    title: "実装",
    description: "ページ・セクション単位で実装を進め、1つ完成するごとにブラウザで実際の挙動を確認してから次に進みます。",
    points: ["セクション単位の実装", "ブラウザでの都度確認", "コンポーネントのAtomic分割"],
  },
  {
    phase: "Phase 5",
    title: "横断チェック",
    description: "アクセシビリティ・パフォーマンス・SEOを一括で見直します。Lighthouseスコアと企画書のチェックリストを1つずつ照合します。",
    points: ["アクセシビリティ（コントラスト比・フォーカス制御）", "パフォーマンス（CLS対策・遅延読み込み）", "SEO（見出し階層・構造化データ）"],
  },
];

export async function getProcessPhases(): Promise<ProcessPhase[]> {
  return PROCESS_PHASES;
}
