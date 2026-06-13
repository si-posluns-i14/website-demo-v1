import { hero } from "@/content.config";

export default function Hero() {
  return (
    <header className="mx-auto flex max-w-layout flex-col items-center px-4 py-32 text-center">
      <p className="eyebrow mb-4">{hero.eyebrow}</p>
      <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
        {hero.title}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-ink/60">{hero.subtitle}</p>
      <a
        href={hero.cta.href}
        className="mt-10 rounded-md bg-ink px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        {hero.cta.label}
      </a>
      {/* Visual motif placeholder */}
      <div className="mt-16 flex h-64 w-full items-center justify-center rounded-xl border border-line bg-white font-mono text-sm text-ink/30">
        [ Hero visual / diagram ]
      </div>
    </header>
  );
}
