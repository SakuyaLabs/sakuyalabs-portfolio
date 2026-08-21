import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-sakuyalabs.png";

const NAV_LINKS = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

/** サイトフッター。SakuyaLabs Portfolio自体は架空の11案件をまとめる本体サイトである旨を明示する。 */
export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-white/40">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-12 lg:px-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image src={logo} alt="SakuyaLabs" className="h-10 w-auto" />
            <p className="font-sans-jp mt-3 max-w-sm text-sm text-ink-soft">
              業種別の設計力・技術力・集客/CVへの理解を1つの職務経歴書として提示する、11プロジェクト構成のポートフォリオ。
            </p>
            <a
              href="https://sakuyalabs.com"
              className="font-sans-jp mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft transition-colors duration-300 hover:text-teal"
            >
              <span aria-hidden="true">←</span>
              sakuyalabs.com に戻る
            </a>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans-jp text-sm text-ink-soft">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-300 hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border/70 pt-6">
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
