import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-full gradient-primary shadow-soft">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="text-gradient">Rojishma</span>
        </a>
        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <ul
          id="nav-links"
          className={`${open ? "flex flex-col gap-4 absolute right-6 top-16 bg-background/95 p-4 rounded-md shadow-soft md:static md:flex md:flex-row md:gap-8" : "hidden md:flex items-center gap-8"}`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-smooth hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`${open ? "inline-flex mt-2 w-full justify-center" : "hidden"} rounded-full gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:shadow-glow hover:scale-105 md:inline-flex`}
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
}
