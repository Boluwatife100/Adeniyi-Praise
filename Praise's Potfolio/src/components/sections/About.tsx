import Section from "../Section";
import Reveal from "../Reveal";
import { profile } from "../../data/profile";

export default function About() {
  return (
    <Section id="about" label="About" title="Who am I?">
      <div className="space-y-4 leading-relaxed text-muted">
        {profile.bio.map((p, i) => (
          <Reveal key={p} from="up" delay={i * 250}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>

      <Reveal from="zoom" duration={1800} className="mt-8">
        <div className="rounded-2xl bg-brand p-8 text-white">
          <p className="text-xl font-semibold leading-snug">
            {profile.closing}
          </p>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-lg border border-white/60 px-4 py-2 text-sm hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
