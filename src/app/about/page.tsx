import type { Metadata } from "next";
import { getCapabilities } from "@/lib/about/data";

export const metadata: Metadata = {
  title: "About",
  description: "SakuyaLabsの制作スタンスと対応可能な業務範囲について。",
};

/** Aboutページ（企画書3章「制作者としてのスタンス、対応可能な業務範囲」）。 */
export default async function AboutPage() {
  const capabilities = await getCapabilities();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:px-12 lg:px-20">
      <p className="font-sans-jp text-sm tracking-[0.2em] text-gold uppercase">About</p>
      <h1 className="font-fraunces mt-5 text-3xl font-semibold text-ink sm:text-4xl">
        作れるかではなく、
        <br />
        なぜそう作るかを考える。
      </h1>

      <section aria-labelledby="stance-heading" className="mt-12">
        <h2 id="stance-heading" className="font-fraunces text-xl font-semibold text-ink">
          スタンス
        </h2>
        <div className="mt-4 flex flex-col gap-4">
          <p className="font-sans-jp text-sm leading-loose text-muted">
            採用担当やクライアントが本当に見ているのは「作れるか」ではなく「なぜその作りにしたのか」だと考えています。この11案件のポートフォリオも、業種ごとに証明したい能力軸を1つずつ明確に割り当て、それぞれの架空クライアントが抱える課題からデザインと実装の判断を逆算する、という進め方で作りました。
          </p>
          <p className="font-sans-jp text-sm leading-loose text-muted">
            見た目の作家性を出しすぎないことも、判断の一つです。すべての案件を同じテンションで作ると、かえって業種理解の薄さが透けて見えます。士業なら信頼、ECならロジック、Tech
            Showcaseなら技術力の天井——案件ごとに最適な抑制と主張のバランスを選んでいます。
          </p>
          <p className="font-sans-jp text-sm leading-loose text-muted">
            実装はClaude Codeを中心とした制作フローで進めています。プロセス自体の透明性は
            <a href="/process" className="text-ink underline decoration-gold underline-offset-4 hover:text-gold">
              Processページ
            </a>
            で公開しています。
          </p>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="mt-12">
        <h2 id="capabilities-heading" className="font-fraunces text-xl font-semibold text-ink">
          対応可能な業務範囲
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <li key={capability.title} className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-fraunces text-base font-semibold text-ink">{capability.title}</h3>
              <p className="font-sans-jp mt-2 text-sm leading-relaxed text-muted">{capability.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
