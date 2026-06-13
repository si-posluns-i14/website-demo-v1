import { journalClub } from "@/content.config";

export default function JournalClub() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">{journalClub.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {journalClub.title}
          </h2>
          <p className="mt-4 max-w-2xl text-ink/60">{journalClub.intro}</p>
        </div>
        <a
          href={journalClub.joinCta.href}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
        >
          {journalClub.joinCta.label}
        </a>
      </div>

      <p className="mt-12 font-mono text-xs uppercase tracking-wider text-ink/40">
        {journalClub.readingsHeading}
      </p>
      <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-white">
        {journalClub.readings.map((r) => (
          <li key={r.href}>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 p-5 transition-colors hover:bg-cloud/20"
            >
              <span className="text-sm font-medium text-ink group-hover:text-teal">
                {r.title}
              </span>
              <span className="text-sm text-ink/60">{r.authors}</span>
              <span className="font-mono text-xs text-accent">{r.source} →</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
