import { ImageResponse } from "next/og";

export const alt = "SakuyaLabs Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OGP画像。next/ogのデフォルトフォントは日本語グリフを持たないため、英語のみで構成する
 * （①〜⑪と共通方針）。`edge` runtimeは指定しない（⑥Nolan Phase 5で判明したdeprecated
 * 警告・静的生成無効化を避けるため）。
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FAF8F4",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(140,95,23,0.14), transparent 55%), radial-gradient(circle at 10% 90%, rgba(201,146,46,0.16), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            color: "#8C5F17",
            textTransform: "uppercase",
          }}
        >
          SakuyaLabs
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 58,
            fontWeight: 600,
            color: "#1C1A17",
            lineHeight: 1.3,
            maxWidth: 950,
          }}
        >
          Not what you can build. Why you build it that way.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 24,
            color: "#6B6459",
          }}
        >
          11 Concept Projects, one portfolio
        </div>
      </div>
    ),
    { ...size },
  );
}
