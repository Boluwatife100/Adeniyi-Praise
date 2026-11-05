import { Award } from "lucide-react";
import Section from "../Section";
import Reveal from "../Reveal";
import { certifications } from "../../data/profile";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      label="Credentials"
      title="Certifications & development"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal
            key={c.name}
            from={i % 2 === 0 ? "left" : "right"}
            delay={Math.floor(i / 2) * 300}
            className="h-full"
          >
            <div className="flex h-full gap-4 rounded-xl border border-line bg-surface p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm text-muted">{c.issuer}</p>
                {c.inProgress ? (
                  <span className="mt-2 inline-block rounded-full bg-brand-soft px-3 py-0.5 text-xs font-medium text-brand">
                    In progress
                  </span>
                ) : c.year ? (
                  <p className="mt-1 text-xs text-brand">{c.year}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
