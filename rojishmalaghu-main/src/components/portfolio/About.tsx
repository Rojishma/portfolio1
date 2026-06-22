import { GraduationCap, Lightbulb, Cpu, Heart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  { icon: GraduationCap, title: "ECE Graduate", text: "Electronics & Communication Engineering, 2024" },
  { icon: Lightbulb, title: "GPA: 3.51", text: "Consistent academic excellence" },
  { icon: Cpu, title: "IoT & Robotics", text: "Communication systems enthusiast" },
  { icon: Heart, title: "Innovator", text: "Driven by problem-solving & curiosity" },
];

export function About() {
  return (
    <section id="about" className="py-24 gradient-soft">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="About Me"
          title="A passionate engineer with a creative mind"
          subtitle="Blending hardware, software, and a love for innovation to build technology that matters."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group rounded-3xl gradient-card p-6 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-elegant"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary shadow-soft transition-smooth group-hover:scale-110 group-hover:rotate-6">
                <h.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed">
          I previously worked as a STEM and Robotics Trainer at TechnoBot Education and Research Center Pvt. Ltd.,
          where I taught students the fundamentals of robotics, programming, and hands-on hardware development.
        </p>
      </div>
    </section>
  );
}
