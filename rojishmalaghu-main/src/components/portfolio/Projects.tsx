import { Zap, Activity, ArrowUpRight, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import seismic1 from "@/assets/seismic-1.png";
import seismic2 from "@/assets/seismic-2.png";
import energyMeter from "@/assets/energy-meter.jpg";

type ProjectImage = { src: string; caption: string };

type Project = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  images?: ProjectImage[];
};

const projects: Project[] = [
  {
    icon: Zap,
    title: "IoT-based Energy Meter",
    description:
      "Real-time energy consumption monitoring using ESP32, with cloud dashboards and live alerts for smarter power management.",
    tags: ["ESP32", "IoT", "Cloud"],
    images: [
      { src: energyMeter, caption: "Project Demonstration with Team" },
    ],
  },
  {
    icon: Activity,
    title: "Design of Seismic Monitoring System",
    description:
      "End-to-end seismic monitoring system designed and tested in two iterations — first using the ADXL345 accelerometer, then re-validated with the MPU6050 — featuring a remote sensing transmitter station and a dedicated receiver-side monitoring station for real-time vibration analysis.",
    tags: ["ADXL345", "MPU6050", "LoRa", "Raspberry Pi", "FFT"],
    images: [
      { src: seismic1, caption: "Remote Sensing Station (Transmitter)" },
      { src: seismic2, caption: "Monitoring Station (Receiver Side)" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A glimpse into the embedded and IoT systems I've designed and developed."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl gradient-card shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-elegant"
            >
              {p.images && p.images.length > 0 ? (
                <div className={`grid gap-1 bg-card ${p.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {p.images.map((img) => (
                    <figure key={img.src} className="relative h-56 overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                      />
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-card/95 via-card/70 to-transparent p-3 text-center text-xs font-medium text-foreground">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="flex h-full w-full items-center justify-center gradient-primary">
                    <p.icon className="h-14 w-14 text-primary-foreground/90" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
              )}

              <div className="relative p-7">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-soft/60 blur-2xl transition-smooth group-hover:bg-primary-glow/60" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth hover:gap-3">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
