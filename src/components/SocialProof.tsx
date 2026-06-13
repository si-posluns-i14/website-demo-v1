import { socialProof } from "@/content.config";

export default function SocialProof() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <h2 className="mb-12 text-center text-2xl font-medium text-ink/80">
        {socialProof.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {socialProof.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-xl border border-line bg-white p-6"
          >
            <span className="font-mono text-xs text-accent">{item.label}</span>
            <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm text-ink/60">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
