import { Code2, Wrench, Cpu, CircuitBoard } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Python", level: 25 },
      { name: "HTML & CSS", level: 40 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "MATLAB", level: 50 },
      { name: "Proteus", level: 90 },
      { name: "KiCad", level: 30 },
    ],
  },
  {
    icon: Cpu,
    title: "Hardware",
    skills: [
      { name: "Arduino", level: 90 },
      { name: "Raspberry Pi", level: 60 },
      { name: "Node MCU", level: 70 },
    ],
  },
  {
    icon: CircuitBoard,
    title: "Other",
    skills: [
      { name: "PCB Design", level: 50 },
      { name: "Circuit Simulation", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 gradient-soft">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolbox"
          subtitle="Languages, tools, and hardware I use to bring ideas to life."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="rounded-3xl gradient-card p-7 shadow-soft transition-smooth hover:shadow-elegant">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl gradient-primary shadow-soft">
                  <g.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{g.title}</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {g.skills.map((s) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-primary-soft/60">
                      <div
                        className="h-full rounded-full gradient-primary shadow-glow transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
