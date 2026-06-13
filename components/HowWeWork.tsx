import { howWeWork } from "@/content.config";

export default function HowWeWork() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <p className="eyebrow mb-3">{howWeWork.eyebrow}</p>
      <h2 className="mb-12 text-3xl font-semibold tracking-tight">
        {howWeWork.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {howWeWork.steps.map((s) => (
          <div
            key={s.n}
            className="rounded-xl border border-line bg-white p-6"
          >
            <span className="font-mono text-sm text-accent">{s.n}</span>
            <h3 className="mt-3 text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-ink/60">{s.body}</p>
            <div className="mt-4 flex h-28 items-center justify-center rounded-lg border border-line font-mono text-xs text-ink/30">
              [ video ]
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
