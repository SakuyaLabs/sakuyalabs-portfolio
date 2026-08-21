import Link from "next/link";
import type { WorkCaseStudy } from "@/lib/works/data";
import WorkVisual from "./WorkVisual";

type WorkDetailViewProps = {
  work: WorkCaseStudy;
};

/**
 * Works詳細ページ本体（企画書4章「Case Study」の11項目構成を踏まえた実装）。
 * 1. Concept Project明示 2. クライアント・業種概要 3. 課題・ペルソナ 4. CV地点
 * 5-6. 設計意図・実装 7. レスポンシブ/アクセシビリティ/SEO/パフォーマンス対応
 * 8. 主要画面（抽象ビジュアル） 9. 使用技術 10. Live Demoリンク 11. 問い合わせCTA
 */
export default function WorkDetailView({ work }: WorkDetailViewProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-12 lg:px-20">
      <nav aria-label="パンくずリスト" className="font-sans-jp text-xs text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-gold">
              TOP
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/works" className="hover:text-gold">
              Works
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-ink" aria-current="page">
            {work.brandName}
          </li>
        </ol>
      </nav>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="font-sans-jp rounded-full bg-gradient-to-r from-[#087c78] to-[#229d98] px-3 py-1 text-xs font-bold text-white">
          Concept Project / 架空案件
        </span>
        <span className="font-sans-jp rounded-full border border-border px-3 py-1 text-xs text-ink-soft">{work.industryTag}</span>
      </div>

      <h1 className="font-fraunces mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{work.brandName}</h1>
      <p className="font-sans-jp mt-2 text-sm text-muted">{work.axisLabel}</p>

      <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 border-t border-b border-border py-6 sm:grid-cols-2">
        <>
          <dt className="font-sans-jp text-xs text-muted">ターゲットペルソナ</dt>
          <dd className="font-sans-jp -mt-2 text-sm text-ink sm:mt-0">{work.persona}</dd>
        </>
        <>
          <dt className="font-sans-jp text-xs text-muted">CV地点</dt>
          <dd className="font-sans-jp -mt-2 text-sm text-ink sm:mt-0">{work.cvGoal}</dd>
        </>
      </dl>

      <div className="mt-10">
        <WorkVisual slug={work.slug} number={work.number} brandName={work.brandName} />
      </div>

      <section aria-labelledby="challenge-heading" className="mt-12">
        <h2 id="challenge-heading" className="font-fraunces text-xl font-semibold text-ink">
          課題
        </h2>
        <p className="font-sans-jp mt-4 text-sm leading-loose text-muted">{work.challenge}</p>
      </section>

      <section aria-labelledby="design-intent-heading" className="mt-10">
        <h2 id="design-intent-heading" className="font-fraunces text-xl font-semibold text-ink">
          設計意図
        </h2>
        <p className="font-sans-jp mt-4 text-sm leading-loose text-muted">{work.designIntent}</p>
      </section>

      <section aria-labelledby="implementation-heading" className="mt-10">
        <h2 id="implementation-heading" className="font-fraunces text-xl font-semibold text-ink">
          実装
        </h2>
        <p className="font-sans-jp mt-4 text-sm leading-loose text-muted">{work.implementation}</p>
        <ul className="mt-4 flex flex-col gap-2">
          {work.techPoints.map((point) => (
            <li key={point} className="font-sans-jp flex items-start gap-2 text-sm text-ink">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {point}
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {work.techTags.map((tag) => (
            <li key={tag} className="font-sans-jp rounded-full bg-paper px-2.5 py-1 text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="quality-heading" className="mt-10">
        <h2 id="quality-heading" className="font-fraunces text-xl font-semibold text-ink">
          品質への対応
        </h2>
        <p className="font-sans-jp mt-4 text-sm leading-loose text-muted">
          レスポンシブ（375／768／1440の3ブレークポイント）、アクセシビリティ（フォーカス制御・コントラスト比・reduced-motion対応）、SEO（構造化データ・見出し階層）、パフォーマンス（Lighthouse
          Performance 90+ / Accessibility 95+を最低ラインに設定）は、11案件すべてで共通の品質基準として対応しています。
        </p>
      </section>

      <div className="mt-14 flex flex-col gap-4 rounded-[28px] border border-border/70 bg-white/65 p-6 shadow-[0_16px_45px_rgba(38,88,84,0.035)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-sans-jp text-xs text-muted">Live Demo</p>
          <p className="font-sans-jp mt-1 text-sm text-ink">{work.liveDemoUrl.replace("https://", "")}</p>
          <p className="font-sans-jp mt-1 text-xs text-teal">稼働中のLive Demoです</p>
        </div>
        <a
          href={work.liveDemoUrl}
          target="_blank"
          rel="noreferrer"
          className="font-sans-jp inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#087c78] to-[#229d98] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(8,124,120,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          実際のサイトを見る
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="mt-6 text-center">
        <Link href="/contact" className="font-sans-jp text-sm text-ink-soft underline decoration-teal underline-offset-4 hover:text-teal">
          この案件について相談する →
        </Link>
      </div>
    </div>
  );
}
