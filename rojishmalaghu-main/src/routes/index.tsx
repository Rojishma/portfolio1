import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Conferences } from "@/components/portfolio/Conferences";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rojishma Laghu — Electronics & Communication Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Rojishma Laghu, an Electronics & Communication Engineer from Bhaktapur, Nepal — passionate about IoT, embedded systems, and smart technologies.",
      },
      { property: "og:title", content: "Rojishma Laghu — ECE Engineer Portfolio" },
      {
        property: "og:description",
        content: "IoT, embedded systems, and communication projects by Rojishma Laghu.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Conferences />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
