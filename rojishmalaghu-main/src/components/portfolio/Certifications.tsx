import { Award, Plane, Cpu, Bot, Heart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import sheTraining1 from "@/assets/she-training-1.jpg";
import sheTraining2 from "@/assets/she-training-2.jpg";
import satellite1 from "@/assets/satellite-1.jpg";
import satellite2 from "@/assets/satellite-2.jpg";

const certs = [
  { icon: Plane, title: "Satellite Bootcamp", org: "Antarikchya Pratisthan Nepal" },
  { icon: Bot, title: "Drone Training", org: "Robotics Association of Nepal" },
  { icon: Cpu, title: "Arduino Training", org: "Workshop Certified" },
  { icon: Award, title: "Robotics, IoT & 3D Printing", org: "Project Digital SHE" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 gradient-soft">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Certifications & Training"
          title="Continuous learning"
          subtitle="Workshops and bootcamps that broadened my technical horizons."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div
              key={c.title}
              className="group rounded-3xl gradient-card p-6 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary shadow-soft transition-smooth group-hover:rotate-6">
                <c.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
            </div>
          ))}
        </div>

        {/* SHE Training Highlights */}
        <div className="mt-16 rounded-3xl gradient-card p-8 shadow-soft md:p-10">
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Project Digital SHE — RAN
              </span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                Hands-on Training: Robotics, IoT & 3D Printing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A 5-day program by the Robotics Association of Nepal empowering women in tech through
                hardware programming, drones, and 3D printing.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={sheTraining1}
                alt="Hands-on robotics session during Project Digital SHE training"
                className="h-56 w-full rounded-2xl object-cover shadow-soft transition-smooth hover:scale-[1.02]"
              />
              <img
                src={sheTraining2}
                alt="Certificate ceremony at Project Digital SHE by RAN"
                className="h-56 w-full rounded-2xl object-cover shadow-soft transition-smooth hover:scale-[1.02]"
              />
        </div>

        {/* Satellite Bootcamp Highlights */}
        <div className="mt-10 rounded-3xl gradient-card p-8 shadow-soft md:p-10">
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Antarikchya Pratisthan Nepal
              </span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                Satellite Bootcamp Training
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Hands-on bootcamp covering satellite fundamentals, PCB soldering, and CubeSat
                assembly — culminating in a working prototype satellite built with the team.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={satellite1}
                alt="Soldering session during the satellite bootcamp"
                className="h-56 w-full rounded-2xl object-cover shadow-soft transition-smooth hover:scale-[1.02]"
              />
              <img
                src={satellite2}
                alt="Team with the assembled CubeSat prototype"
                className="h-56 w-full rounded-2xl object-cover shadow-soft transition-smooth hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
          </div>
        </div>

        {/* Volunteer */}
        <div className="mt-10 rounded-3xl gradient-card p-8 shadow-soft md:p-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl gradient-primary shadow-elegant">
              <Heart className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Volunteer Work
              </span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                Robotics Competitions — Robo Yuddha &amp; Chakrabyuh
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Provided logistics and technical support during national robotics competitions, helping
                fellow engineers showcase their innovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
