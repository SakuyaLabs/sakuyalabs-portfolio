import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-sakuyalabs.png";

const NAV_LINKS = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * サイトヘッダー。複数ページ構成のためナビゲーションを持つ（docs/planning.md IA）。
 * sakuyalabs.com本体と同じロゴサイズ・ピル型ナビゲーションで雰囲気を統一する。
 * 上部に本体（sakuyalabs.com）へ戻る導線を常設する。
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-paper/70 backdrop-blur-md">
      <div className="border-b border-border/60 bg-white/30">
        <div className="mx-auto max-w-6xl px-6 py-2 sm:px-12 lg:px-20">
          <a
            href="https://sakuyalabs.com"
            className="font-sans-jp inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft transition-colors duration-300 hover:text-teal"
          >
            <span aria-hidden="true">←</span>
            sakuyalabs.com に戻る
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-3 sm:px-12 lg:px-20">
        <Link href="/" aria-label="SakuyaLabs Portfolio ホーム" className="block">
          <Image src={logo} alt="SakuyaLabs" priority className="h-[64px] w-auto sm:h-[82px]" />
        </Link>
        <nav
          aria-label="メインナビゲーション"
          className="rounded-full border border-border/70 bg-white/50 px-2 py-1"
        >
          <ul className="flex flex-wrap items-center gap-x-1 font-sans-jp text-sm text-ink-soft">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block rounded-full px-4 py-2 font-medium transition-colors duration-300 hover:bg-white hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
