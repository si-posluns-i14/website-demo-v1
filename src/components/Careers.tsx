import { careers } from "@/content.config";

export default function Careers() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <p className="eyebrow mb-3">{careers.eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight">{careers.title}</h2>
      <p className="mt-4 max-w-2xl text-ink/60">{careers.intro}</p>

      <div className="mt-10 grid gap-6">
        {careers.roles.map((role) => (
          <details
            key={role.title}
            open
            className="rounded-xl border border-line bg-white p-6"
          >
            <summary className="flex cursor-pointer flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium">
                  {role.title}
                  <span className="ml-2 font-mono text-ink/40">
                    <span className="acc-closed">+</span>
                    <span className="acc-open">−</span>
                  </span>
                </h3>
                <p className="font-mono text-xs text-accent">{role.subtitle}</p>
              </div>
              <div className="flex flex-col items-end gap-1 font-mono text-xs text-ink/50">
                <span>{role.location}</span>
                <span>{role.type}</span>
              </div>
            </summary>

            <div className="mt-6 space-y-4 border-t border-line pt-6 text-sm text-ink/70">
              {role.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 divide-y divide-line border-y border-line">
              {role.sections.map((section) => (
                <details key={section.title} className="group py-1">
                  <summary className="flex cursor-pointer items-center justify-between py-3 font-medium">
                    <span>{section.title}</span>
                    <span className="font-mono text-ink/40">
                      <span className="acc-closed">+</span>
                      <span className="acc-open">−</span>
                    </span>
                  </summary>
                  <div className="space-y-5 pb-4">
                    {section.groups.map((group, gi) => (
                      <div key={gi}>
                        {group.heading && (
                          <h4 className="text-sm font-medium text-ink">
                            {group.heading}
                          </h4>
                        )}
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/60">
                          {group.items.map((item, ii) => (
                            <li key={ii}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <a
              href={role.applyHref}
              className="mt-6 inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Apply now
            </a>
          </details>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink/50">{careers.applyNote}</p>
    </div>
  );
}
