import Section from "../Section";
import { projects } from "../../data/profile";
import Reveal from "../Reveal";

export default function Projects() {
  return (
    <Section id="projects" label="Research & projects" title="Projects">
      <div
        className={`grid gap-4 ${projects.length > 1 ? "md:grid-cols-2" : ""}`}
      >
        {projects.map((p, i) => (
          <Reveal key={p.title} from="up" delay={i * 300}>
            <article className="rounded-xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="rounded-full bg-brand-soft px-3 py-0.5 text-xs font-medium text-brand">
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{p.description}</p>

              <h4 className="mt-5 text-sm font-semibold">Research focus</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted marker:text-brand">
                {p.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <p className="mt-5 text-sm">
                <span className="font-semibold">Approach: </span>
                <span className="text-muted">{p.approach}</span>
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-brand-soft px-3 py-1 text-xs text-brand"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
