import Section from "../Section";
import Reveal from "../Reveal";
import { skillGroups, competencies } from "../../data/profile";

export default function Skills() {
  return (
    <Section id="skills" label="My specialty" title="Skills & competencies">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.title}
            from="up"
            delay={(i % 2) * 250}
            className="h-full"
          >
            <div className="h-full rounded-xl border border-line bg-surface p-5">
              <h3 className="font-semibold">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-brand-soft px-3 py-1 text-xs text-brand"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal from="left">
        <h3 className="mt-10 text-lg font-semibold">Core competencies</h3>
      </Reveal>
      <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-muted sm:grid-cols-2">
        {competencies.map((c, i) => (
          <li key={c}>
            <Reveal from="left" delay={(i % 6) * 150} duration={1200}>
              <span className="flex items-start gap-2">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  aria-hidden="true"
                />
                {c}
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
