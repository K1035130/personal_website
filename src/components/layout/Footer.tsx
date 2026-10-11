import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
        <span className="font-serif tracking-wide">
          © {siteConfig.name} · <span className="font-mono text-xs">ink &amp; code</span>
        </span>
        <ul className="flex gap-5">
          {siteConfig.socials.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
