import Section from "../Section";
import Reveal from "../Reveal";
import StatsBanner from "../StatsBanner";
import { services } from "../../data/profile";

export default function Services() {
  return (
    <Section id="services" label="What I do" title="Here is how I can help">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, i) => (
          <Reveal
            key={title}
            from={i % 2 === 0 ? "up" : "zoom"}
            delay={(i % 3) * 250}
            className="h-full"
          >
            <div className="h-full rounded-xl border border-line bg-surface p-5 transition hover:-translate-y-1 hover:shadow-md">
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <StatsBanner />
    </Section>
  );
}
