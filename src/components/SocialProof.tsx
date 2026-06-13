import { socialProof } from "@/content.config";

export default function SocialProof() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <h2 className="mb-12 text-center text-2xl font-medium text-ink/80">
        {socialProof.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {socialProof.testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-xl border border-line bg-white p-6"
          >
            <p className="flex-1 text-ink/80">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-line" />
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-ink/50">{t.title}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
              <span className="font-mono text-xs text-ink/40">{t.logo}</span>
              <a href="#" className="font-mono text-xs text-accent">
                Read story →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
