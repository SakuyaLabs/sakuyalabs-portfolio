import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetailView from "@/components/works/WorkDetailView";
import { getWork, getWorks } from "@/lib/works/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** SSG対象slugを動的に導出する（ハードコードしない。①〜⑪で継続してきたパターン）。 */
export async function generateStaticParams() {
  const works = await getWorks();
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWork(slug);
  if (!work) return {};

  return {
    title: work.brandName,
    description: `${work.axisLabel}。${work.challenge}`,
  };
}

/** Works詳細ページ（企画書3章・4章、SSG）。 */
export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const work = await getWork(slug);
  if (!work) notFound();

  return <WorkDetailView work={work} />;
}
