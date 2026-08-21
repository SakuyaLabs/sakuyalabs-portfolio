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
      <p className="font-sans-jp text-sm tracking-[0.2em] text-gold uppercase">SakuyaLabs</p>
      <h1 className="font-fraunces mt-5 text-4xl leading-[1.2] font-semibold text-ink sm:text-5xl">
        作れるかではなく、
        <br />
        なぜそう作るか。
      </h1>
      <p className="font-sans-jp mt-6 max-w-md text-sm leading-loose text-muted sm:text-base">
        11の架空クライアントワークを通じて、業種別の設計力・技術力・集客/CVへの理解を1つの職務経歴書として提示するポートフォリオです。
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/works"
          className="font-sans-jp inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:bg-gold"
        >
          Worksを見る
          <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/process"
          className="font-sans-jp inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          制作プロセス
        </Link>
      </div>
    </motion.div>
  );
}
