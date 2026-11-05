import { ChevronDown } from "lucide-react";
import Section from "../Section";
import Reveal from "../Reveal";
import { education } from "../../data/profile";

export default function Education() {
  return (
    <Section id="education" label="Education" title="Academic background">
      <div className="space-y-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} from="left" delay={i * 250}>
            <details
              open={i === 0}
              className="group rounded-xl border border-line bg-surface"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium [&::-webkit-details-marker]:hidden">
                <span>{e.degree}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-brand transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted">
                <p className="text-brand">
                  {e.school}
                  {e.period ? ` · ${e.period}` : ""}
                </p>
                <p className="mt-2">{e.note}</p>
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
