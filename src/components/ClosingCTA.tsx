import { closingCta } from "@/content.config";

export default function ClosingCTA() {
  return (
    <div className="mx-auto max-w-layout px-4 py-32 text-center">
      <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight">
        {closingCta.title}
      </h2>
      <a
        href={closingCta.cta.href}
        className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
      >
        {closingCta.cta.label}
      </a>
    </div>
  );
}
