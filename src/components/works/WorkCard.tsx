import Link from "next/link";
import type { WorkCaseStudy } from "@/lib/works/data";

type WorkCardProps = {
  work: WorkCaseStudy;
};

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group block rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-gold"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-fraunces text-xs text-muted">{work.number}</span>
        <span className="font-sans-jp rounded-full border border-border px-2.5 py-1 text-xs text-muted">
          {work.industryTag}
        </span>
      </div>
      <h3 className="font-fraunces mt-4 text-xl font-semibold text-ink group-hover:text-gold">{work.brandName}</h3>
      <p className="font-sans-jp mt-2 text-sm leading-relaxed text-muted">{work.axisLabel}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {work.techTags.map((tag) => (
          <li key={tag} className="font-sans-jp rounded-full bg-paper px-2.5 py-1 text-xs text-muted">
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
