import Section from "../Section";
import Reveal from "../Reveal";
import { values, careerObjective, careerInterests } from "../../data/profile";

export default function Values() {
  return (
    <Section
      id="values"
      label="What drives me"
      title="Values & career objectives"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {values.map(({ title, description, icon: Icon }, i) => (
          <Reveal
            key={title}
            from={i % 2 === 0 ? "left" : "right"}
            delay={Math.floor(i / 2) * 300}
            className="h-full"
          >
            <div className="flex h-full gap-4 rounded-xl border border-line bg-surface p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted">{description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal from="zoom" duration={1800} className="mt-8">
        <div className="rounded-2xl bg-brand p-8 text-white">
          <h3 className="text-sm font-semibold uppercase tracking-widest opacity-80">
            Career objective
          </h3>
          <p className="mt-3 leading-relaxed">{careerObjective}</p>
        </div>
      </Reveal>

      <Reveal from="left">
        <h3 className="mt-10 text-lg font-semibold">Career interests</h3>
      </Reveal>
      <div className="mt-4 flex flex-wrap gap-2">
        {careerInterests.map((interest, idx) => (
          <Reveal key={interest} from="zoom" delay={idx * 120} duration={1100}>
            <span className="block rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted">
              {interest}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
