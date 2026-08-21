import type { StaticImageData } from "next/image";
import forge from "./forge.webp";
import haruLaw from "./haru-law.webp";
import marumi from "./marumi.webp";
import mirai from "./mirai.webp";
import nagi from "./nagi.webp";
import nolan from "./nolan.webp";
import nova from "./nova.webp";
import prism from "./prism.webp";
import sumai from "./sumai.webp";
import toki from "./toki.webp";
import yukige from "./yukige.webp";

/** 各Works案件のLive Demoキャプチャ（slug対応）。 */
export const workScreenshots: Record<string, StaticImageData> = {
  nagi,
  marumi,
  forge,
  "haru-law": haruLaw,
  mirai,
  nolan,
  toki,
  yukige,
  prism,
  sumai,
  nova,
};
