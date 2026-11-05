import { useState } from "react";
import { NAV } from "../data/nav";
import { useActiveSection } from "../hooks/useActiveSection";
import type { Theme } from "../hooks/useTheme";
import { profile } from "../data/profile";

type Props = { theme: Theme; onToggleTheme: () => void };

const ids = NAV.map((n) => n.id);

export default function Sidebar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-line bg-surface px-4 lg:hidden">
        <span className="font-semibold text-ink">{profile.name}</span>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-lg px-3 py-1 text-xl text-ink"
        >
          {open ? "✕" : "☰"}
        </button>
      </header>

      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col items-center border-r overflow-y-auto border-line bg-surface px-6 pb-6 pt-20 transition-transform duration-900  lg:translate-x-0 lg:pt-10 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-24 w-24 rounded-full bg-brand-soft object-cover object-top"
        />
        <p className="mt-4 text-md font-semibold text-ink">{profile.name}</p>
        <p className="text-xs font-medium uppercase tracking-wide text-brand">
          {profile.title}
        </p>
        <p className="text-xs uppercase text-muted">{profile.locationShort}</p>

        <nav className="mt-8 flex w-full flex-col gap-1 ">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-center text-sm transition-colors ${
                active === id
                  ? "bg-brand-soft font-medium text-brand"
                  : "text-muted hover:text-ink"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={onToggleTheme}
          className="mt-auto rounded-full border border-line px-4 py-1.5 text-sm text-ink hover:bg-brand-soft"
        >
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
      </aside>
    </>
  );
}
