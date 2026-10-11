/** 方形印章，颜色由 --seal 控制 */
export default function Seal({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-[5px] border-[1.5px] border-seal font-serif leading-none text-seal ${className}`}
    >
      {text}
    </span>
  );
}
