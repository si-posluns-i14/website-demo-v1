import { partners } from "@/content.config";

export default function Partners() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <p className="eyebrow mb-3">{partners.eyebrow}</p>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
        {partners.title}
      </h2>
      <p className="mt-4 max-w-2xl text-ink/60">{partners.subtitle}</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {partners.items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-line bg-white p-6 transition-colors hover:border-steel"
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-ink/60">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
