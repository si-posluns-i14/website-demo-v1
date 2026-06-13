import { site } from "@/content.config";
import logo from "@/assets/brand/i14-icon-logo-navy-black-rgb.svg";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 flex w-full justify-center px-4">
      <div className="flex w-full max-w-layout items-center justify-between gap-4 rounded-lg border border-line bg-white/80 p-2 backdrop-blur-sm">
        <a href="#" className="flex items-center px-2" aria-label={site.companyName}>
          <img src={logo} alt={`${site.companyName} logo`} className="h-7 w-auto" />
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded px-3 py-1.5 text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={site.primaryCta.href}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90"
        >
          {site.primaryCta.label}
        </a>
      </div>
    </nav>
  );
}
