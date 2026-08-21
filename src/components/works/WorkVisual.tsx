type WorkVisualProps = {
  number: string;
  brandName: string;
};

/**
 * Works詳細ページの「主要画面」の代わりとなる抽象ビジュアル（写真不使用方針）。
 * 実際のスクリーンショットではなく、ブラウザウィンドウを模した枠に案件番号を配した
 * 抽象表現とする（各案件のLive Demoで実際の画面を確認できる導線を別途用意する）。
 */
export default function WorkVisual({ number, brandName }: WorkVisualProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card" role="img" aria-label={`${brandName}のイメージ`}>
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-border" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-border" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-border" />
      </div>
      <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 bg-paper px-6">
        <span className="font-fraunces text-5xl font-semibold" style={{ color: "#8C8270" }}>
          {number}
        </span>
        <span className="font-sans-jp text-xs text-muted">{brandName}</span>
      </div>
    </div>
  );
}
