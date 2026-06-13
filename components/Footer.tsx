import { footer } from "@/content.config";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-layout flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-ink/50">
          {footer.legal.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-ink">
              {l.label}
            </a>
          ))}
          {footer.social.map((s) => (
            <a key={s.label} href={s.href} className="hover:text-ink">
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-ink/40">
          <span className="rounded-md border border-line px-3 py-1.5">
            {footer.badge}
          </span>
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
