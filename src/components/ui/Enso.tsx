/** 由字符串得到稳定的伪随机数，保证同一个项目每次渲染出的笔触一致 */
function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
}

/**
 * 圆相（ensō）：一笔画成、未完全闭合的圆。
 * 用作没有封面图的项目卡片占位，`seed` 决定起笔角度和缺口大小。
 */
export default function Enso({ seed, className }: { seed: string; className?: string }) {
  const n = hash(seed);
  const rotate = Math.round(n * 360);
  const gap = 0.08 + n * 0.1; // 缺口占周长的比例
  const r = 70;
  const sweep = (1 - gap) * Math.PI * 2;
  const end = { x: 100 + r * Math.cos(sweep), y: 100 + r * Math.sin(sweep) };
  const d = `M ${100 + r} 100 A ${r} ${r} 0 ${sweep > Math.PI ? 1 : 0} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g transform={`rotate(${rotate} 100 100)`} filter="url(#ink-rough-strong)" fill="none">
        <path
          d={d}
          pathLength={1}
          className="brush-draw"
          stroke="currentColor"
          strokeWidth={14}
          strokeLinecap="round"
          opacity={0.85}
        />
        {/* 飞白：一道更细、更淡的偏移笔痕 */}
        <path
          d={d}
          pathLength={1}
          className="brush-draw"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="round"
          opacity={0.35}
          transform="translate(4 -3)"
        />
      </g>
    </svg>
  );
}
