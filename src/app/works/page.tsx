import type { Metadata } from "next";
import { Suspense } from "react";
import WorksFilterSkeleton from "@/components/works/WorksFilterSkeleton";
import WorksFilterView from "@/components/works/WorksFilterView";
import { getIndustryTags, getTechTags, getWorks } from "@/lib/works/data";

export const metadata: Metadata = {
  title: "Works",
  description: "11の架空クライアントワークを業種タグ・使用技術タグで絞り込んで確認できます。",
};

/** Works一覧ページ（企画書3章「Works：11案件をカード一覧。業種タグ・使用技術タグでフィルタ可能」）。 */
export default async function WorksPage() {
  const [works, industryTags, techTags] = await Promise.all([getWorks(), getIndustryTags(), getTechTags()]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:px-12 lg:px-20">
      <p className="font-sans-jp text-sm tracking-[0.2em] text-gold uppercase">Works</p>
      <h1 className="font-fraunces mt-5 text-3xl font-semibold text-ink sm:text-4xl">11の架空クライアントワーク</h1>
      <p className="font-sans-jp mt-6 max-w-xl text-sm leading-loose text-muted">
        各案件は「証明したい能力軸」を1つずつ明確に割り当てています。業種や使用技術で絞り込んでご覧ください。
      </p>

      <div className="mt-10">
        <Suspense fallback={<WorksFilterSkeleton />}>
          <WorksFilterView works={works} industryTags={industryTags} techTags={techTags} />
        </Suspense>
      </div>
    </div>
  );
}
