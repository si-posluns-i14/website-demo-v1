import { platform } from "@/content.config";

export default function Platform() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <p className="eyebrow mb-3 text-center">{platform.eyebrow}</p>
      <h2 className="text-center text-4xl font-semibold tracking-tight">
        {platform.title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-ink/60">
        {platform.subtitle}
      </p>
      {/* Architecture diagram placeholder — module grid */}
      <div className="mt-12 grid gap-4 rounded-xl border border-line bg-cloud/20 p-6 sm:grid-cols-2 md:grid-cols-3">
        {platform.modules.map((m) => (
          <div
            key={m}
            className="flex h-24 items-center justify-center rounded-lg border border-steel/30 bg-white font-mono text-sm text-steel transition-colors hover:border-steel"
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}
