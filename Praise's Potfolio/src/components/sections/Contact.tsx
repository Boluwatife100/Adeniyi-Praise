import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Mail, MapPin, Briefcase } from "lucide-react";
import Section from "../Section";
import { profile } from "../../data/profile";
import Reveal from "../Reveal";

const field =
  "w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const details = [
    { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { icon: Briefcase, text: "LinkedIn profile", href: profile.linkedin },
    { icon: MapPin, text: profile.location },
  ];

  return (
    <Section id="contact" label="Get in touch" title="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal from="left">
          <div>
            <ul className="space-y-5">
              {details.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="break-all text-brand hover:underline"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              {profile.availability}
            </p>
          </div>
        </Reveal>

        <Reveal from="right">
          <form onSubmit={onSubmit} className="space-y-3">
            <input
              className={field}
              placeholder="Name"
              required
              value={form.name}
              onChange={update("name")}
            />
            <input
              className={field}
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={update("email")}
            />
            <input
              className={field}
              placeholder="Subject"
              required
              value={form.subject}
              onChange={update("subject")}
            />
            <textarea
              className={field}
              rows={5}
              placeholder="Message"
              required
              value={form.message}
              onChange={update("message")}
            />
            <button
              type="submit"
              className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
