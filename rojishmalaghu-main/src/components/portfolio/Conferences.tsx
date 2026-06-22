import { Mic2, Globe2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import confKhwopa from "@/assets/khwopa-best-paper.jpg";
import confIcee from "@/assets/icee-conference.jpg";

const talks = [
  {
    icon: Mic2,
    image: confKhwopa,
    badge: "National Conference",
    title: "KHWOPA CEEL 2026",
    subtitle: "National Conference on Computer, Electrical, Electronics & Communication",
    location: "Khwopa Engineering College, Bhaktapur, Nepal",
    desc: "Presented our team's research paper 'Design of Seismic Monitoring System' and received the Best Paper Award at the national conference.",
  },
  {
    icon: Globe2,
    image: confIcee,
    badge: "International Conference",
    title: "4th ICEE-PDRP 2026",
    subtitle: "International Conference on Earthquake Engineering & Post Disaster Reconstruction Planning",
    location: "Bhaktapur, Nepal · 19–21 January 2026",
    desc: "Participated as a Co-author, engaging with global experts on earthquake engineering and resilient infrastructure.",
  },
];

export function Conferences() {
  return (
    <section id="conferences" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Conferences"
          title="Sharing our work on stage"
          subtitle="Presenting team research at national and international engineering conferences."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {talks.map((t) => (
            <article
              key={t.title}
              className="group overflow-hidden rounded-3xl gradient-card shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={t.image}
                  alt={`${t.title} — ${t.subtitle}`}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary shadow-soft backdrop-blur">
                  <t.icon className="h-3.5 w-3.5" />
                  {t.badge}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-foreground">{t.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{t.subtitle}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
