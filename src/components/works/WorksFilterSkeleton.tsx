/**
 * WorksFilterView（useSearchParamsを使うためSuspenseが必要）のフォールバック。
 * 実コンテンツとおおよそ同じ高さのスケルトンにすることで、Suspense解決時の
 * レイアウトシフトを防ぐ（LighthouseでWorksページのCLS 0.382を検出し追加）。
 */
export default function WorksFilterSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 11 }).map((_, index) => (
          <div key={index} className="h-[30px] w-20 animate-pulse rounded-full bg-card" />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="h-[30px] w-20 animate-pulse rounded-full bg-card" />
        ))}
      </div>
      <div className="mt-6 h-5 w-24 animate-pulse rounded bg-card" />
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-[180px] animate-pulse rounded-lg border border-border bg-card" />
        ))}
      </div>
    </div>
  );
}
