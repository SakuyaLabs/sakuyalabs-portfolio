import HeroStatement from "./HeroStatement";
import HeroVisual from "./HeroVisual";

/** TOPページ セクション1｜Hero（企画書3章「SakuyaLabsとしてのステートメント」）。 */
export default function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 sm:px-12 lg:grid-cols-2 lg:px-20 lg:py-28">
        <HeroStatement />
        <div className="mx-auto h-64 w-64 sm:h-80 sm:w-80">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
