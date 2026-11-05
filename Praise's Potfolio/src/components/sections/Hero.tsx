import Reveal from "../Reveal";
import { profile } from "../../data/profile";

const fade = "linear-gradient(to right, transparent 0%, black 40%)";

export default function Hero() {
  const [mainRole, ...otherRoles] = profile.roles;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Reveal
        from="right"
        duration={2400}
        once
        className="absolute inset-y-0 right-0 w-full md:w-3/5"
      >
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-full w-full object-cover object-top opacity-30 md:opacity-100"
          style={{ WebkitMaskImage: fade, maskImage: fade }}
        />
      </Reveal>

      <div className="relative z-10 flex min-h-screen items-center px-6 py-20 lg:px-16">
        <div className="max-w-sm">
          <Reveal from="left" once delay={300}>
            <p className="text-sm text-muted">
              Hi, I am{" "}
              <span className="font-semibold text-ink">{profile.name}</span>
            </p>
          </Reveal>
          <Reveal from="left" once delay={700}>
            <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
              {mainRole}
            </h1>
          </Reveal>
          <Reveal from="left" once delay={1100}>
            <p className="mt-3 text-sm font-medium text-brand">
              {otherRoles.join(" · ")}
            </p>
          </Reveal>
          <Reveal from="up" once delay={1500}>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {profile.intro}
            </p>
          </Reveal>
          <Reveal from="up" once delay={1900}>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Get in touch
              </a>
              <a
                href="#experience"
                className="rounded-lg border border-line px-4 py-2 text-sm font-medium hover:bg-brand-soft"
              >
                View experience
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
