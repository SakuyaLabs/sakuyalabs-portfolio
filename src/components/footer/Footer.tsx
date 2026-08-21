import Link from "next/link";

const NAV_LINKS = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

/** サイトフッター。SakuyaLabs Portfolio自体は架空の11案件をまとめる本体サイトである旨を明示する。 */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-12 lg:px-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-fraunces text-lg font-semibold text-ink">
              Sakuya<span className="text-gold">Labs</span>
            </p>
            <p className="font-sans-jp mt-2 max-w-sm text-sm text-muted">
              業種別の設計力・技術力・集客/CVへの理解を1つの職務経歴書として提示する、11プロジェクト構成のポートフォリオ。
            </p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans-jp text-sm text-muted">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-300 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="font-sans-jp text-xs leading-relaxed text-muted">
            掲載する11作品はすべてConcept Project（架空案件）です。実在する企業・店舗・物件・求人・商品とは一切関係ありません。各作品の詳細ページから実際に動作するLive
            Demoをご覧いただけます。
          </p>
          <p className="font-sans-jp mt-3 text-xs text-muted">&copy; 2026 SakuyaLabs</p>
        </div>
      </div>
    </footer>
  );
}
