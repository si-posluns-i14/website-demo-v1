import { featureDeepDive } from "@/content.config";

export default function FeatureDeepDive() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">{featureDeepDive.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {featureDeepDive.title}
          </h2>
          <p className="mt-4 text-ink/60">{featureDeepDive.body}</p>
        </div>
        <div className="flex h-64 items-center justify-center rounded-xl border border-line bg-white font-mono text-sm text-ink/30">
          [ Feature graphic ]
        </div>
      </div>
    </div>
  );
}
