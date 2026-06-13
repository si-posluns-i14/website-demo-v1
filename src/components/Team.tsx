import { team } from "@/content.config";
import simonDennis from "@/assets/team/simon-dennis.jpg";
import tomMcleod from "@/assets/team/tom-mcleod.jpg";
import massimoBardetti from "@/assets/team/massimo-bardetti.jpg";
import kevinShabahang from "@/assets/team/kevin-shabahang.jpg";
import michaelDiamond from "@/assets/team/michael-diamond.jpg";

const headshots: Record<string, string> = {
  "simon-dennis": simonDennis,
  "tom-mcleod": tomMcleod,
  "massimo-bardetti": massimoBardetti,
  "kevin-shabahang": kevinShabahang,
  "michael-diamond": michaelDiamond,
};

export default function Team() {
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <p className="eyebrow mb-3">{team.eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight">{team.title}</h2>
      <p className="mt-4 max-w-xl text-ink/60">{team.subtitle}</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((m) => (
          <div
            key={m.id}
            className="flex flex-col rounded-xl border border-line bg-white p-6"
          >
            <img
              src={headshots[m.id]}
              alt={`${m.name} headshot`}
              className="mb-5 h-20 w-20 rounded-full object-cover"
            />
            <h3 className="text-lg font-medium">{m.name}</h3>
            <p className="font-mono text-xs text-accent">{m.role}</p>
            <p className="mt-3 text-sm text-ink/60">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
