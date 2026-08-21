const STATS = [
  { label: "Portfolio Projects", value: "11", caption: "架空クライアントワーク（Concept Project）" },
  { label: "Industries Covered", value: "10", caption: "美容院からAI Webサービスまで" },
  { label: "Production Works", value: "0", caption: "実案件は今後掲載予定" },
] as const;

/**
 * 実績数字訴求（企画書3章「Portfolio Projects 11 / Industries Covered 10 / Production Works ○
 * （Concept Projectと実案件を明確に分離）」）。Production Worksは実数（0）を正直に示し、
 * Concept Projectとの区別を明確にする。
 */
export default function StatsBand() {
  return (
    <section aria-labelledby="stats-heading" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 lg:px-20">
        <h2 id="stats-heading" className="sr-only">
          実績数字
        </h2>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <p className="font-sans-jp text-xs tracking-[0.15em] text-muted uppercase">{stat.label}</p>
              <p className="font-fraunces mt-2 text-4xl font-semibold text-ink">{stat.value}</p>
              <p className="font-sans-jp mt-1 text-xs text-muted">{stat.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
