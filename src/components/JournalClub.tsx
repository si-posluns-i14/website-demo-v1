import { FormEvent } from "react";
import { journalClub } from "@/content.config";

export default function JournalClub() {
  const { form } = journalClub;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Full Name: ${data.get("name") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Profile URL: ${data.get("profile") ?? ""}`,
      "",
      "Additional Information:",
      `${data.get("info") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:${form.mailto}?subject=${encodeURIComponent(
      "Journal Club Application"
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "mt-1.5 w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-steel";

  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <p className="eyebrow mb-3">{journalClub.eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight">
        {journalClub.title}
      </h2>
      <p className="mt-4 max-w-2xl text-ink/60">{journalClub.intro}</p>

      {/* Apply to Join */}
      <div className="mt-10 max-w-xl rounded-xl border border-line bg-white p-6">
        <h3 className="text-lg font-medium">{form.heading}</h3>
        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm text-ink/70">
            Full Name *
            <input
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              className={inputClass}
            />
          </label>
          <label className="block text-sm text-ink/70">
            Email *
            <input
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
              className={inputClass}
            />
          </label>
          <label className="block text-sm text-ink/70">
            Profile URL{" "}
            <span className="text-ink/40">(LinkedIn or Google Scholar)</span>
            <input
              name="profile"
              type="url"
              placeholder="https://linkedin.com/in/janesmith"
              className={inputClass}
            />
          </label>
          <label className="block text-sm text-ink/70">
            Additional Information <span className="text-ink/40">(optional)</span>
            <textarea
              name="info"
              rows={4}
              placeholder="Any details you'd like us to know"
              className={inputClass}
            />
          </label>
          <button
            type="submit"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            {form.submitLabel}
          </button>
        </form>
      </div>

      {/* Reading list */}
      <p className="mt-12 font-mono text-xs uppercase tracking-wider text-ink/40">
        {journalClub.readingsHeading}
      </p>
      <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-white">
        {journalClub.readings.map((r) => (
          <li key={r.href}>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 p-5 transition-colors hover:bg-cloud/20"
            >
              <span className="text-sm font-medium text-ink group-hover:text-teal">
                {r.title}
              </span>
              <span className="text-sm text-ink/60">{r.authors}</span>
              <span className="font-mono text-xs text-accent">{r.source} →</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
