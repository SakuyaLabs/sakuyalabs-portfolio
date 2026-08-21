import Image from "next/image";
import Link from "next/link";
import { workScreenshots } from "@/assets/works";
import type { WorkCaseStudy } from "@/lib/works/data";

type WorkCardProps = {
  work: WorkCaseStudy;
};

export default function WorkCard({ work }: WorkCardProps) {
  const screenshot = workScreenshots[work.slug];

  return (
    <Link
      href={`/works/${work.slug}`}
      className="group block overflow-hidden rounded-[28px] border border-border/70 bg-white/65 shadow-[0_16px_45px_rgba(38,88,84,0.035)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(30,78,76,0.07)]"
    >
      {screenshot && (
        <div className="overflow-hidden border-b border-border/70">
          <Image
            src={screenshot}
            alt=""
            className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-fraunces text-xs text-muted">{work.number}</span>
          <span className="font-sans-jp rounded-full border border-border/70 px-2.5 py-1 text-xs text-ink-soft">
            {work.industryTag}
          </span>
        </div>
        <h3 className="font-fraunces mt-4 text-xl font-bold tracking-tight text-ink group-hover:text-teal">
          {work.brandName}
        </h3>
        <p className="font-sans-jp mt-2 text-sm leading-relaxed text-ink-soft">{work.axisLabel}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {work.techTags.map((tag) => (
            <li key={tag} className="font-sans-jp rounded-full bg-paper-2 px-2.5 py-1 text-xs text-ink-soft">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
