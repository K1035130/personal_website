import InkCanvas from "./InkCanvas";

const MOUNTAINS = [
  {
    d: "M0 300 C120 250 200 180 320 210 S520 110 650 185 S860 260 980 165 S1240 100 1440 215 L1440 400 L0 400 Z",
    opacity: 0.05,
  },
  {
    d: "M0 335 C140 295 260 245 390 285 S610 225 770 295 S1010 330 1130 255 S1340 275 1440 300 L1440 400 L0 400 Z",
    opacity: 0.08,
  },
  {
    d: "M0 378 C200 350 300 318 470 358 S770 392 910 348 S1210 328 1440 368 L1440 400 L0 400 Z",
    opacity: 0.11,
  },
];

const MISTS = [
  { top: "58%", width: "70vw", dur: "90s", delay: "-20s", opacity: 0.55 },
  { top: "74%", width: "90vw", dur: "120s", delay: "-60s", opacity: 0.7 },
  { top: "20%", width: "60vw", dur: "140s", delay: "-35s", opacity: 0.35 },
];

/**
 * 全站固定背景：远山 + 流雾 + 鼠标墨迹。
 * 同时定义全局复用的 SVG 滤镜（#ink-rough / #ink-rough-strong），用于制造毛笔边缘。
 */
export default function InkBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="ink-rough" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="3" />
            <feDisplacementMap in="SourceGraphic" scale="6" />
          </filter>
          <filter id="ink-rough-strong" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="9" />
          </filter>
          <linearGradient id="mountain-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: "rgb(var(--ink-rgb))", stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: "rgb(var(--ink-rgb))", stopOpacity: 0.35 }} />
            <stop offset="100%" style={{ stopColor: "rgb(var(--ink-rgb))", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
      </svg>

      <InkCanvas />

      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[42vh] w-full"
      >
        {MOUNTAINS.map((m) => (
          <path
            key={m.d}
            d={m.d}
            fill="url(#mountain-fade)"
            opacity={m.opacity}
            filter="url(#ink-rough)"
          />
        ))}
      </svg>

      {MISTS.map((m) => (
        <div
          key={m.top}
          className="mist absolute left-[-10vw] h-40 rounded-full blur-3xl"
          style={
            {
              top: m.top,
              width: m.width,
              opacity: m.opacity,
              background: "radial-gradient(closest-side, var(--paper), transparent)",
              animationDelay: m.delay,
              "--dur": m.dur,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
