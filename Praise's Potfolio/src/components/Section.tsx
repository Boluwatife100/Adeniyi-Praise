import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = { id: string; label: string; title: string; children: ReactNode };

export default function Section({ id, label, title, children }: Props) {
  return (
    <section id={id} className="px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Reveal from="left">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            {label}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink">{title}</h2>
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
