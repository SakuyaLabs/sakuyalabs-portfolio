/**
 * Heroの抽象ビジュアル（写真不使用方針）。11案件を11個のノードとして配置し、
 * 中心のSakuyaLabsから放射状に線を引くことで「1つの職務経歴書としてまとめる」
 * ポートフォリオの構造そのものを図案化する。
 */
export default function HeroVisual() {
  const nodeCount = 11;
  const radius = 130;
  const centerX = 160;
  const centerY = 160;

  const nodes = Array.from({ length: nodeCount }, (_, index) => {
    const angle = (index / nodeCount) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });

  return (
    <svg viewBox="0 0 320 320" className="h-full w-full" role="img" aria-label="11案件を放射状に束ねる図案">
      {nodes.map((node, index) => (
        <line
          key={`line-${index}`}
          x1={centerX}
          y1={centerY}
          x2={node.x}
          y2={node.y}
          stroke="#e8e3d9"
          strokeWidth={1}
        />
      ))}
      {nodes.map((node, index) => (
        <circle key={`node-${index}`} cx={node.x} cy={node.y} r={5} fill="#c9922e" opacity={0.85} />
      ))}
      <circle cx={centerX} cy={centerY} r={10} fill="#1c1a17" />
    </svg>
  );
}
