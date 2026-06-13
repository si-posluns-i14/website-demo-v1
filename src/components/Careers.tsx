import { careers } from "@/content.config";

export default function Careers() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <p className="eyebrow mb-3">{careers.eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight">{careers.title}</h2>
      <p className="mt-4 max-w-2xl text-ink/60">{careers.intro}</p>
      <div className="mt-10 grid gap-6">
        {careers.roles.map((role) => (
          <div
            key={role.title}
            className="rounded-xl border border-line bg-white p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium">{role.title}</h3>
                <p className="font-mono text-xs text-accent">{role.subtitle}</p>
              </div>
              <div className="flex flex-col items-end gap-1 font-mono text-xs text-ink/50">
                <span>{role.location}</span>
                <span>{role.type}</span>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm text-ink/60">{role.blurb}</p>
            <a
              href={role.applyHref}
              className="mt-6 inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Apply now
            </a>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink/50">{careers.applyNote}</p>
    </div>
  );
}
