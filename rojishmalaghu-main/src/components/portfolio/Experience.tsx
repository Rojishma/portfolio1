import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Briefcase,
    role: "STEM and Robotics Trainer",
    org: "TechnoBot Education and Research Center Pvt Ltd-2.5 months",
    desc: "Trained students in STEM and robotics for 2 months, guiding hands-on projects in electronics, programming, and automation.",
  },
  {
    icon: Briefcase,
    role: "IT & Networking Intern",
    org: "Nepal Telecom-7 months",
    desc: "Hands-on exposure to networking infrastructure, troubleshooting, and IT operations within Nepal's largest telecom provider.",
  },
  {
    icon: GraduationCap,
    role: "Teaching Assistant",
    org: "Khwopa Engineering College-5 months",
    desc: "Assisted faculty in laboratory sessions, mentored juniors, and supported coursework in electronics and communication.",
  },
  {
    icon: GraduationCap,
    role: "AI Content Creator",
    org: "For Youtube channel SoC & FPGA-3 months",
    desc: "Tools: Google Gemini, Google NotebookLM, Clipchamp."
},
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Professional and academic roles that shaped my journey."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary-glow to-transparent md:left-1/2" />

          {items.map((it, i) => (
            <div
              key={it.role}
              className={`relative mb-10 flex items-start md:items-center ${
                i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
              }`}
            >
              <div className="absolute left-6 -translate-x-1/2 md:left-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary shadow-elegant">
                  <it.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="ml-20 md:ml-0 md:w-1/2 md:px-12">
                <div className="rounded-3xl gradient-card p-6 shadow-soft transition-smooth hover:shadow-elegant hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-foreground">{it.role}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{it.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
