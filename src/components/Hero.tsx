import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import heroFrame from "@/assets/hero-frame.jpg";
import work1 from "@/assets/work-1.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const slides = [
  {
    src: heroFrame,
    title: "Modern Exteriors",
    body: "Measured proportions, durable materials and lighting considered as one composition.",
  },
  {
    src: work1,
    title: "Warm Interiors",
    body: "Travertine, oak and soft daylight tuned into rooms that feel calm and lived in.",
  },
  {
    src: work3,
    title: "Landscape & Courts",
    body: "Water, stone and shade connecting the rooms to the landscape.",
  },
  {
    src: work4,
    title: "Architecture",
    body: "Mass and light shaped around the site's climate, context and ground.",
  },
];
const DURATION = 7000;
const links = [
  ["Home", "#top"],
  ["Studio", "#studio"],
  ["Services", "#disciplines"],
  ["Projects", "#work"],
] as const;

export function Hero() {
  const [i, setI] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setI((n) => (n + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink text-ink-foreground"
    >
      {slides.map((s, k) => (
        <div
          key={k}
          aria-hidden={k !== i}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${k === i ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.src}
            alt={k === i ? s.title : ""}
            loading={k === 0 ? "eager" : "lazy"}
            className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${k === i ? "scale-110" : "scale-100"}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40" />

      {/* grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-20 bottom-0 grid grid-cols-4 md:inset-x-10"
      >
        {[0, 1, 2, 3].map((c) => (
          <div
            key={c}
            className="hero-gridline border-l border-ink-foreground/15 last:border-r"
            style={{ animationDelay: `${c * 120}ms` }}
          />
        ))}
      </div>
      <div
        aria-hidden
        className="hero-hline absolute inset-x-5 top-20 h-px bg-ink-foreground/20 md:inset-x-10"
      />

      {/* nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 items-center justify-between px-5 md:px-10">
          <a
            href="#top"
            className="hero-fade flex items-center gap-2 text-lg font-light tracking-[0.3em]"
          >
            <svg width="26" height="24" viewBox="0 0 26 24" className="fill-current">
              <path d="M0 0c14.4 0 26 10.7 26 24H0z" />
            </svg>
            VIVRIT
          </a>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-10 text-[13px] uppercase tracking-wide md:flex"
          >
            {links.map(([label, href], k) => (
              <a
                key={label}
                href={href}
                className="hero-fade story-link"
                style={{ animationDelay: `${300 + k * 80}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#enquiry"
              className="hero-fade group hidden items-center gap-4 rounded-full bg-ink-foreground py-1.5 pl-5 pr-1.5 text-[13px] uppercase text-ink sm:flex"
              style={{ animationDelay: "650ms" }}
            >
              Contact
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-ink-foreground transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </span>
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="hero-fade grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/40 bg-ink/30 backdrop-blur-sm md:hidden"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`mx-5 border-t border-ink-foreground/15 bg-ink/95 px-5 py-6 backdrop-blur-md transition-all duration-300 md:hidden ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
        >
          {links.slice(1).map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex border-b border-ink-foreground/15 py-4 text-sm uppercase tracking-wide"
            >
              {label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-between rounded-sm bg-ink-foreground px-4 py-3 text-sm uppercase text-ink"
          >
            Start an enquiry <ArrowUpRight size={17} />
          </a>
        </nav>
      </header>

      {/* headline */}
      <div className="relative z-10 flex h-full flex-col justify-center px-5 md:px-10">
        <h1 className="text-[clamp(2.6rem,6.5vw,6.5rem)] font-light leading-[1] tracking-[-0.03em]">
          <span className="hero-line block overflow-hidden">
            <span className="block">Architecture &amp; interiors</span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span className="block" style={{ animationDelay: "180ms" }}>
              designed in Rohtak
            </span>
          </span>
        </h1>
        <p
          className="hero-fade mt-8 max-w-[28ch] text-sm leading-relaxed text-ink-foreground/85"
          style={{ animationDelay: "900ms" }}
        >
          Vivrit Architects — architecture, interiors, turnkey projects, planning and landscaping
          from Rohtak.
        </p>
        <div className="hero-fade mt-8 flex gap-3" style={{ animationDelay: "1050ms" }}>
          <a
            href="#enquiry"
            className="rounded-full bg-ink-foreground px-5 py-2.5 text-xs text-ink transition-opacity hover:opacity-80"
          >
            Get in touch →
          </a>
          <a
            href="#disciplines"
            className="rounded-full border border-ink-foreground/40 px-5 py-2.5 text-xs transition-colors hover:bg-ink-foreground/10"
          >
            Browse services
          </a>
        </div>
      </div>

      {/* slider progress */}
      <div
        aria-label="Featured work"
        aria-roledescription="carousel"
        className="absolute inset-x-5 bottom-8 z-10 md:inset-x-10"
      >
        <div className="grid grid-cols-4">
          {slides.map((s, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className="group px-2 py-2 text-left sm:px-4"
              aria-label={`Show ${s.title}`}
              aria-current={k === i ? "true" : undefined}
            >
              <div className="h-[2px] w-full overflow-hidden bg-ink-foreground/30">
                <div
                  key={k === i ? `on-${i}` : "off"}
                  className={`h-full bg-ink-foreground ${k === i ? "hero-progress" : k < i ? "w-full" : "w-0"}`}
                  style={{ animationDuration: `${DURATION}ms` }}
                />
              </div>
            </button>
          ))}
        </div>
        <div key={i} className="mt-2 grid grid-cols-2 md:grid-cols-4">
          <div className="animate-fade-in px-2 text-xs sm:px-4 sm:text-sm">
            <p className="tabular-nums">
              0{i + 1} / 0{slides.length}
            </p>
            <p className="mt-1">{slides[i]!.title}</p>
          </div>
          <p className="animate-fade-in max-w-[34ch] px-2 text-xs leading-relaxed text-ink-foreground/85 sm:px-4 sm:text-sm md:col-span-2">
            {slides[i]!.body}
          </p>
        </div>
      </div>
    </section>
  );
}
