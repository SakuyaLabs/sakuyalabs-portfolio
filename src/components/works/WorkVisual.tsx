import Image from "next/image";
import { workScreenshots } from "@/assets/works";

type WorkVisualProps = {
  slug: string;
  number: string;
  brandName: string;
};

/**
 * Works詳細ページの「主要画面」。各Live Demoの実キャプチャ（src/assets/works/）を
 * ブラウザウィンドウを模した枠に収めて表示する。キャプチャが未登録のslugでは、
 * 従来の抽象プレースホルダー（案件番号）にフォールバックする。
 */
export default function WorkVisual({ slug, number, brandName }: WorkVisualProps) {
  const screenshot = workScreenshots[slug];

  return (
    <div
      className="overflow-hidden rounded-[20px] border border-border/70 bg-white/65 shadow-[0_16px_45px_rgba(38,88,84,0.035)]"
      role="img"
      aria-label={`${brandName}のキャプチャ`}
    >
      <div className="flex items-center gap-1.5 border-b border-border/70 px-4 py-3">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#f2a9a4]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#f3d38a]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#8fd9c4]" />
        <span className="font-sans-jp ml-auto text-[10px] text-muted">{brandName}</span>
      </div>
      {screenshot ? (
        <Image
          src={screenshot}
          alt={`${brandName}のLive Demoキャプチャ`}
          className="aspect-[16/9] w-full object-cover object-top"
          placeholder="blur"
        />
      ) : (
        <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 bg-paper px-6">
          <span className="font-fraunces text-5xl font-semibold" style={{ color: "#476363" }}>
            {number}
          </span>
          <span className="font-sans-jp text-xs text-muted">{brandName}</span>
        </div>
      )}
    </div>
  );
}
