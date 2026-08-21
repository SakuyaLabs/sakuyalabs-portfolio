"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { WorkCaseStudy } from "@/lib/works/data";
import WorkCard from "./WorkCard";

type WorksFilterViewProps = {
  works: WorkCaseStudy[];
  industryTags: string[];
  techTags: string[];
};

/**
 * Works一覧の絞り込みUI（企画書3章「業種タグ・使用技術タグでフィルタ可能」）。
 * 検索条件はURLクエリパラメータを正とし、コンポーネントのstateはそこから導出する
 * （⑩SUMAI Searchで確立したパターンを踏襲）。
 */
export default function WorksFilterView({ works, industryTags, techTags }: WorksFilterViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeIndustry = searchParams.get("industry");
  const activeTech = searchParams.get("tech");

  const updateParams = (key: "industry" | "tech", value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filtered = works.filter((work) => {
    if (activeIndustry && work.industryTag !== activeIndustry) return false;
    if (activeTech && !work.techTags.includes(activeTech)) return false;
    return true;
  });

  return (
    <div>
      <div role="group" aria-label="業種で絞り込み" className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={!activeIndustry}
          onClick={() => updateParams("industry", null)}
          className={`font-sans-jp rounded-full border px-3 py-1.5 text-xs transition-colors duration-200 ${
            !activeIndustry ? "border-ink bg-ink text-paper" : "border-border bg-card text-muted hover:border-gold hover:text-gold"
          }`}
        >
          すべての業種
        </button>
        {industryTags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={activeIndustry === tag}
            onClick={() => updateParams("industry", activeIndustry === tag ? null : tag)}
            className={`font-sans-jp rounded-full border px-3 py-1.5 text-xs transition-colors duration-200 ${
              activeIndustry === tag
                ? "border-ink bg-ink text-paper"
                : "border-border bg-card text-muted hover:border-gold hover:text-gold"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div role="group" aria-label="使用技術で絞り込み" className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={!activeTech}
          onClick={() => updateParams("tech", null)}
          className={`font-sans-jp rounded-full border px-3 py-1.5 text-xs transition-colors duration-200 ${
            !activeTech ? "border-gold bg-gold text-paper" : "border-border bg-card text-muted hover:border-gold hover:text-gold"
          }`}
        >
          すべての技術
        </button>
        {techTags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={activeTech === tag}
            onClick={() => updateParams("tech", activeTech === tag ? null : tag)}
            className={`font-sans-jp rounded-full border px-3 py-1.5 text-xs transition-colors duration-200 ${
              activeTech === tag
                ? "border-gold bg-gold text-paper"
                : "border-border bg-card text-muted hover:border-gold hover:text-gold"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <p className="font-sans-jp mt-6 text-sm text-muted" aria-live="polite">
        {filtered.length}件の案件
      </p>

      <h2 className="sr-only">絞り込み結果</h2>
      {filtered.length === 0 ? (
        <p className="font-sans-jp mt-10 text-sm text-muted">条件に一致する案件が見つかりませんでした。</p>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work) => (
            <li key={work.slug}>
              <WorkCard work={work} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
