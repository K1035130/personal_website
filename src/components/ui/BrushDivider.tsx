/** 一笔横向的毛笔线，用作分隔 */
export default function BrushDivider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 24" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M4 14 C 80 6, 180 18, 300 11 S 520 6, 596 13"
        pathLength={1}
        className="brush-draw"
        fill="none"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        filter="url(#ink-rough)"
      />
    </svg>
  );
}
