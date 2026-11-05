import { Briefcase } from "lucide-react";
import Section from "../Section";
import Reveal from "../Reveal";
import { experience } from "../../data/profile";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Work experience">
      <ol className="relative space-y-6 border-l border-line pl-8">
        {experience.map((job, i) => (
          <li key={`${job.role}-${job.company}`} className="relative">
            <Reveal from="left" delay={i * 300} duration={1600}>
              <span className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="rounded-xl border border-line bg-surface p-5">
                <h3 className="font-semibold">
                  {job.role}{" "}
                  <span className="font-normal text-muted">
                    · {job.company}
                  </span>
                </h3>
                {job.period && (
                  <p className="text-xs text-brand">{job.period}</p>
                )}
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted marker:text-brand">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
