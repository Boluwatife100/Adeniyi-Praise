import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Award, X, ZoomIn } from "lucide-react";
import Section from "../Section";
import Reveal from "../Reveal";
import { certifications } from "../../data/profile";
import type { Certification } from "../../data/profile";

function Lightbox({
  cert,
  onClose,
}: {
  cert: Certification;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cert.name}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>
      <img
        src={cert.image}
        alt={`${cert.name} certificate`}
        className="max-h-[85vh] max-w-full rounded-lg bg-white object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body,
  );
}

export default function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);
  const close = useCallback(() => setActive(null), []);

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
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
              {c.image && (
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  aria-label={`View ${c.name} certificate`}
                  className="group relative block aspect-[4/3] w-full overflow-hidden bg-brand-soft"
                >
                  <img
                    src={c.image}
                    alt={`${c.name} certificate`}
                    loading="lazy"
                    className={`h-full w-full transition duration-700 group-hover:scale-105 ${
                      c.fit === "contain"
                        ? "object-contain p-2"
                        : "object-cover object-top"
                    }`}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100 group-focus-visible:bg-black/40 group-focus-visible:opacity-100">
                    <ZoomIn className="h-7 w-7" aria-hidden="true" />
                  </span>
                </button>
              )}

              <div className="flex gap-4 p-5">
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
            </div>
          </Reveal>
        ))}
      </div>

      {active && <Lightbox cert={active} onClose={close} />}
    </Section>
  );
}
