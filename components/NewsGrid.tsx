import { news } from "@/content.config";

export default function NewsGrid() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <p className="eyebrow mb-3">{news.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {news.title}
          </h2>
        </div>
        <a href={news.viewAll.href} className="font-mono text-sm text-accent">
          {news.viewAll.label} →
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.posts.map((p, i) => (
          <a
            key={i}
            href={p.href}
            className="group rounded-xl border border-line bg-white p-6 transition-colors hover:border-ink/30"
          >
            <div className="flex items-center gap-3 font-mono text-xs text-ink/40">
              <span>{p.date}</span>
              <span className="rounded bg-bg px-2 py-0.5 text-accent">
                {p.category}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
