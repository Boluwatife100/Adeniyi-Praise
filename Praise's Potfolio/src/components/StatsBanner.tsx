import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import {
  experience,
  certifications,
  competencies,
  services,
  bannerImage,
} from "../data/profile";

const stats = [
  { value: experience.length, label: "Professional roles" },
  {
    value: certifications.filter((c) => !c.inProgress).length,
    label: "Certificates & programmes",
  },
  { value: competencies.length, label: "Core competencies" },
  { value: services.length, label: "Areas of support" },
];

function CountUp({ to, active }: { to: number; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reduced ? 0 : 2600;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const p =
        duration === 0 ? 1 : Math.max(0, Math.min((now - start) / duration, 1));
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, to]);

  return <>{value}</>;
}

export default function StatsBanner() {
  const box = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const [active, setActive] = useState(false);

  // Start the counters when the banner is mostly visible
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Parallax: the photo drifts slower than the page
  useEffect(() => {
    const el = box.current;
    const image = img.current;
    if (!el || !image) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const progress = Math.max(
        -1,
        Math.min(1, (center - vh / 2) / (vh / 2 + rect.height / 2)),
      );
      image.style.transform = `translate3d(0, ${-progress * rect.height * 0.2}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Reveal from="zoom" duration={1800} className="mt-12">
      <div
        ref={box}
        className="relative overflow-hidden rounded-2xl bg-slate-800"
      >
        <img
          ref={img}
          src={bannerImage}
          alt=""
          className="absolute left-0 top-[-20%] h-[140%] w-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative grid grid-cols-2 gap-8 px-6 py-14 text-center text-white sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold">
                <CountUp to={s.value} active={active} />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest opacity-80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
