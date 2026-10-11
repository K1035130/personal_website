import Link from "next/link";

interface SectionHeadingProps {
  /** 小标，例如 "01" 或 "Selected" */
  kicker?: string;
  title: string;
  action?: { label: string; href: string };
}

export default function SectionHeading({ kicker, title, action }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-line pb-4">
      <div>
        {kicker && (
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            {kicker}
          </p>
        )}
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {action && (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
        >
          {action.label}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      )}
    </div>
  );
}
