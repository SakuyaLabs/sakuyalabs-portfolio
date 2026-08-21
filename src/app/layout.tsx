import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

// sakuyalabs.com本体との統一感のため、Google Fontsは使わずシステムフォント
// スタックに統一している（globals.cssの --font-fraunces / --font-sans-jp 参照）。

export const metadata: Metadata = {
  // Phase 6の判断により本体の実配置先はportfolio.sakuyalabs.com
  // （sakuyalabs.comは既存のSakuyaLabs Official Websiteが稼働中のため）。
  metadataBase: new URL("https://portfolio.sakuyalabs.com"),
  alternates: { canonical: "/" },
  title: {
    default: "SakuyaLabs Portfolio",
    template: "%s | SakuyaLabs Portfolio",
  },
  description:
    "業種別の設計力・技術力・集客/CVへの理解を1つの職務経歴書として提示する、11プロジェクト構成のポートフォリオ。",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <div className="ambient ambient-a" aria-hidden="true" />
        <div className="ambient ambient-b" aria-hidden="true" />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
