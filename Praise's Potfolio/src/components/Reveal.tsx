import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type From = "up" | "down" | "left" | "right" | "zoom" | "fade";

const hiddenTransform: Record<From, string> = {
  up: "translate3d(0, 56px, 0)",
  down: "translate3d(0, -56px, 0)",
  left: "translate3d(-72px, 0, 0)",
  right: "translate3d(72px, 0, 0)",
  zoom: "scale(0.88)",
  fade: "none",
};

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Props = {
  children: ReactNode;
  from?: From;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 1400,
  once = false,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { rootMargin: "-6% 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : hiddenTransform[from],
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${shown ? delay : 0}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}
