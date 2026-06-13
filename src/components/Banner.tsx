import { banner } from "@/content.config";

export default function Banner() {
  return (
    <a
      href={banner.href}
      className="group flex h-10 w-full items-center justify-center gap-2 bg-ink px-4 text-sm text-white"
    >
      <span>{banner.text}</span>
      <span className="font-mono text-xs text-white/70 transition-transform group-hover:translate-x-0.5">
        {banner.linkLabel} →
      </span>
    </a>
  );
}
