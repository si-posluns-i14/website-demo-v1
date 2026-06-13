import { security } from "@/content.config";

export default function Security() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <div className="rounded-2xl border border-line bg-white p-10">
        <p className="eyebrow mb-3">{security.eyebrow}</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight">
            {security.title}
          </h2>
          <span className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-ink/50">
            {security.badge}
          </span>
        </div>
        <p className="mt-4 max-w-xl text-ink/60">{security.subtitle}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {security.columns.map((c) => (
            <div key={c.title}>
              <h3 className="font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
