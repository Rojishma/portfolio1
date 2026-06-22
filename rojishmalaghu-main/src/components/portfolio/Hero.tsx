import { Download, Mail, MapPin, Sparkles } from "lucide-react";
import heroAvatar from "@/assets/rojishma-hero.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden gradient-hero pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-40 -right-20 h-96 w-96 rounded-full bg-primary-soft/60 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container relative mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm shadow-soft">
            <Sparkles className="h-3.5 w-3.5" />
            Available for opportunities
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Rojishma</span> Laghu
          </h1>
          <p className="mt-4 text-lg font-medium text-secondary-foreground md:text-xl">
            Electronics, Communication and Robotics Engineer
          </p>
          <p className="mt-3 text-base italic text-primary">
            "Passionate about IoT, Embedded Systems &amp; Smart Technologies"
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Motivated engineer with hands-on experience in IoT, embedded systems, and
            communication projects — turning circuits and code into smart, meaningful solutions.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Bhaktapur, Nepal
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/cv-rojishma-laghu.pdf"
              download="Rojishma-Laghu-CV.pdf"
              className="group inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:shadow-glow hover:scale-105"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm shadow-soft transition-smooth hover:bg-primary-soft hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full gradient-primary blur-3xl opacity-40 animate-blob" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-card shadow-elegant md:h-96 md:w-96 animate-float bg-gradient-to-br from-primary-soft to-primary-glow">
              <img
                src={heroAvatar}
                alt="Rojishma Laghu presenting at KHWOPA CEEL 2026"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -left-6 rounded-2xl bg-card px-4 py-2 shadow-elegant animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-sm font-semibold text-primary">⚡ IoT</span>
            </div>
            <div className="absolute -bottom-2 -right-4 rounded-2xl bg-card px-4 py-2 shadow-elegant animate-float" style={{ animationDelay: "2s" }}>
              <span className="text-sm font-semibold text-primary">📡 Embedded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
