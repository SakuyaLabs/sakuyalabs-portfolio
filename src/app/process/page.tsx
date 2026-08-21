import type { Metadata } from "next";
import { getProcessPhases } from "@/lib/process/data";

export const metadata: Metadata = {
  title: "Process",
  description: "Claude Codeを使った制作フローを、Phase 0〜5の6段階で公開しています。",
};

/** Processページ（企画書3章「制作プロセスの透明性自体を差別化要素にする」）。 */
export default async function ProcessPage() {
  const phases = await getProcessPhases();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:px-12 lg:px-20">
      <p className="font-sans-jp text-sm tracking-[0.2em] text-gold uppercase">Process</p>
      <h1 className="font-fraunces mt-5 text-3xl font-semibold text-ink sm:text-4xl">
        制作プロセスそのものを、
        <br />
        公開する。
      </h1>
      <p className="font-sans-jp mt-6 max-w-xl text-sm leading-loose text-muted">
        この11案件は、すべて同じClaude Codeを使った制作フローで作られています。「どう作ったか」を隠さず見せることで、判断の再現性そのものを提示します。
      </p>

      <ol className="mt-14 flex flex-col gap-12">
        {phases.map((item, index) => (
          <li key={item.phase} className="relative border-l border-border pl-8">
            <span
              aria-hidden="true"
              className="absolute top-0.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-gold bg-paper"
            />
            <p className="font-sans-jp text-xs tracking-[0.15em] text-gold uppercase">
              {item.phase} — {String(index + 1).padStart(2, "0")} / {String(phases.length).padStart(2, "0")}
            </p>
            <h2 className="font-fraunces mt-2 text-xl font-semibold text-ink">{item.title}</h2>
            <p className="font-sans-jp mt-3 text-sm leading-loose text-muted">{item.description}</p>
            <ul className="mt-4 flex flex-col gap-1.5">
              {item.points.map((point) => (
                <li key={point} className="font-sans-jp flex items-start gap-2 text-sm text-ink">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
