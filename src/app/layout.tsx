import type { Metadata } from "next";
import { Fraunces, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces-google",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakuyalabs.com"),
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
    <html lang="ja" className={`${fraunces.variable} ${notoSansJP.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
