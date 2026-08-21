"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_PRODUCT = [0.16, 1, 0.3, 1] as const;

/** Heroのメインコピー（企画書3章「SakuyaLabsとしてのステートメント」）。 */
export default function HeroStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, ease: EASE_PRODUCT }}
      className="max-w-xl"
    >
      <p className="font-sans-jp flex items-center text-xs font-bold tracking-[0.19em] text-teal uppercase">
        <span
          aria-hidden="true"
          className="mr-3 inline-block h-[7px] w-[7px] rounded-full bg-teal-2 shadow-[0_0_0_6px_rgba(32,170,162,0.12)]"
        />
        SakuyaLabs Portfolio
      </p>
      <h1 className="font-fraunces mt-5 text-4xl leading-[1.1] font-bold tracking-tight text-ink sm:text-5xl">
        作れるかではなく、
        <br />
        <span className="bg-gradient-to-r from-[#087c78] via-[#2fa7aa] to-[#9887e7] bg-clip-text text-transparent">
          なぜそう作るか。
        </span>
      </h1>
      <p className="font-sans-jp mt-6 max-w-md text-sm leading-loose text-ink-soft sm:text-base">
        11の架空クライアントワークを通じて、業種別の設計力・技術力・集客/CVへの理解を1つの職務経歴書として提示するポートフォリオです。
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/works"
          className="font-sans-jp inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#087c78] to-[#229d98] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(8,124,120,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Worksを見る
          <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/process"
          className="font-sans-jp inline-flex items-center gap-2 rounded-full border border-border bg-white/55 px-6 py-3.5 text-sm font-bold text-ink-soft transition-colors duration-300 hover:bg-white"
        >
          制作プロセス
        </Link>
      </div>
    </motion.div>
  );
}
