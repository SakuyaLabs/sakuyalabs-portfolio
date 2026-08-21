import Link from "next/link";
import { getWorks } from "@/lib/works/data";
import WorkCard from "./WorkCard";

/** TOPページの11案件プレビュー（Worksへの導線）。 */
export default async function WorksPreview() {
  const works = await getWorks();
  const preview = works.slice(0, 3);

  return (
    <section aria-labelledby="works-preview-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-12 lg:px-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-sans-jp text-sm tracking-[0.2em] text-gold uppercase">Works</p>
            <h2 id="works-preview-heading" className="font-fraunces mt-3 text-2xl font-semibold text-ink sm:text-3xl">
              11の架空クライアントワーク
            </h2>
          </div>
          <Link href="/works" className="font-sans-jp text-sm text-ink underline decoration-gold underline-offset-4 hover:text-gold">
            すべて見る →
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {preview.map((work) => (
            <li key={work.slug}>
              <WorkCard work={work} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
