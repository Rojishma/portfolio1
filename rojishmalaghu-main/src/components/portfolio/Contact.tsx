import { Mail, Phone, Linkedin, Send, FileDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "sakuralaghu@gmail.com",
    href: "mailto:sakuralaghu@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9818271818",
    href: "tel:+9779818271818",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/rojishma-laghu-7538b9376",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 gradient-hero opacity-60" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary-glow/40 blur-3xl animate-blob" />

      <div className="container relative mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's create something together"
          subtitle="Open to opportunities, collaborations, and friendly chats over coffee "
        />

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-5 md:grid-cols-3">
            {items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group rounded-3xl gradient-card p-6 text-center shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-elegant"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-soft transition-smooth group-hover:scale-110 group-hover:rotate-6">
                  <it.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">{it.label}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{it.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:sakuralaghu@gmail.com"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:shadow-glow hover:scale-105"
            >
              <Send className="h-4 w-4" />
              Send a Message
            </a>
            <a
              href="/cv-rojishma-laghu.pdf"
              download="Rojishma-Laghu-CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-8 py-4 text-sm font-semibold text-foreground shadow-soft transition-smooth hover:shadow-elegant hover:scale-105"
            >
              <FileDown className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-6 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Rojishma Laghu. Made with 🌸 in Bhaktapur.</p>
        <p>Electronics &amp; Communication Engineer</p>
      </div>
    </footer>
  );
}
