import { createFileRoute } from "@tanstack/react-router";
import { useReveal, useScrollY } from "@/hooks/use-reveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import studioProcess from "@/assets/studio-process.jpg";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
// import { SmoothScroll } from "@/components/SmoothScroll";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Vivrit Architects — Architecture, Interiors, Turnkey, Landscaping" },
      {
        name: "description",
        content:
          "Vivrit Architects, Rohtak — architecture, interiors, turnkey projects, planning and landscaping.",
      },
      {
        property: "og:title",
        content: "Vivrit Architects — Architecture, Interiors, Turnkey, Landscaping",
      },
      {
        property: "og:description",
        content:
          "Architecture, interiors, turnkey projects, planning and landscaping by Vivrit Architects, Rohtak.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const disciplines = [
  {
    no: "01",
    title: "Architecture",
    body: "Homes and buildings drawn from the site's light, climate and ground.",
    img: work2,
  },
  {
    no: "02",
    title: "Interiors",
    body: "Rooms tuned through material, joinery, lighting and proportion.",
    img: work1,
  },
  {
    no: "03",
    title: "Turnkey Projects",
    body: "Design, execution and finishing coordinated from the first sketch to handover.",
    img: work4,
  },
  {
    no: "04",
    title: "Planning",
    body: "Thoughtful layouts that help every square foot of a site work harder.",
    img: studioProcess,
  },
  {
    no: "05",
    title: "Landscaping",
    body: "Gardens, courtyards and terraces that connect inside and out.",
    img: work3,
  },
];

const projects = [
  {
    img: work1,
    name: "Travertine Rooms",
    meta: "Interior · Udaipur · 2025",
    span: "md:col-span-7",
    ratio: "aspect-[16/11]",
    w: 1280,
    h: 912,
  },
  {
    img: work2,
    name: "Cedar Narrow House",
    meta: "Architecture · Pune · 2024",
    span: "md:col-span-5 md:mt-20",
    ratio: "aspect-[4/5]",
    w: 1024,
    h: 1280,
  },
  {
    img: work3,
    name: "Stone Water Court",
    meta: "Exterior · Alibaug · 2024",
    span: "md:col-span-6 md:-mt-10",
    ratio: "aspect-[4/3]",
    w: 1280,
    h: 960,
  },
  {
    img: work4,
    name: "Meridian Gallery",
    meta: "Architecture · Ahmedabad · 2023",
    span: "md:col-span-6 md:mt-10",
    ratio: "aspect-[4/3]",
    w: 1280,
    h: 960,
  },
];

const process = [
  {
    no: "01",
    title: "Read the site",
    body: "Sun, wind and shadow mapped across a full day before a line is drawn.",
  },
  {
    no: "02",
    title: "Model the mass",
    body: "Physical models at 1:50 and 1:10 test how light moves through the structure.",
  },
  {
    no: "03",
    title: "Detail the room",
    body: "Interiors resolved with the shell — one drawing set, one material logic.",
  },
  {
    no: "04",
    title: "Build on site",
    body: "We stay through construction, detailing concrete and joinery as one system.",
  },
];

const SHOW_FULL_WEBSITE = false;

function Home() {
  if (SHOW_FULL_WEBSITE) {
    return <FullWebsite />;
  }

  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center font-mono text-sm tracking-[0.3em] text-foreground uppercase">
      Vivrit Architects — Coming soon
    </main>
  );
}

function FullWebsite() {
  const page = useReveal<HTMLDivElement>();
  useScrollY();

  return (
    <div ref={page} className="overflow-x-hidden">
      {/* <SmoothScroll /> */}
      <Hero />

      {/* MARQUEE */}
      <section aria-hidden className="overflow-hidden border-y border-border bg-ink py-4">
        <div className="marquee-track flex w-max font-mono text-[12px] tracking-[0.3em] uppercase text-ink-foreground/70">
          {[0, 1].map((k) => (
            <div key={k} className="flex">
              {["Concrete", "Glass", "Timber", "Stone", "Light", "Shadow", "Mass", "Ground"].map(
                (w) => (
                  <span key={w} className="px-7 [&:nth-child(even)]:text-ink-foreground">
                    {w}
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DISCIPLINES */}
      <section id="disciplines" className="border-b border-border px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px] grid gap-10 md:grid-cols-12">
          <div className="md:col-span-12 text-center flex flex-col items-center">
            <p className="mb-3 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              Services
            </p>
            <h2
              data-reveal
              className="font-light text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.9] tracking-tight"
            >
              <span className="line">
                <span>Our set of</span>
              </span>
              <span className="line">
                <span>services</span>
              </span>
            </h2>
            <div data-reveal className="rule-grow my-8 h-px bg-accent" />
            <p data-reveal className="reveal max-w-[40ch] text-muted-foreground">
              Architecture, interiors, planning, turnkey delivery and landscaping are developed as
              one connected idea — from the first site study to the final detail.
            </p>
          </div>
          <div className="md:col-span-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {disciplines.map((d, k) => (
              <article
                key={d.no}
                data-reveal
                className="reveal group"
                style={{ animationDelay: `${k * 90}ms` }}
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={d.img}
                    alt={`${d.title} by Vivrit Architects`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover grayscale-[30%] transition-all duration-[1200ms] group-hover:scale-[1.06] group-hover:grayscale-0"
                  />
                </div>
                <p className="mt-4 font-mono text-[11px] text-muted-foreground">{d.no}</p>
                <h3 className="mt-1 text-xl font-normal tracking-tight">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                Selected work
              </p>
              <h2
                data-reveal
                className="font-light text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.9] tracking-tight"
              >
                <span className="line">
                  <span>Selected</span>
                </span>
                <span className="line">
                  <span>projects</span>
                </span>
              </h2>
            </div>
            <span className="hidden font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground md:block">
              2023 — 2025
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {projects.map((p) => (
              <article key={p.name} data-reveal className={`reveal group col-span-12 ${p.span}`}>
                <div className="overflow-hidden rounded-sm bg-surface">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={p.w}
                    height={p.h}
                    className={`w-full ${p.ratio} object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]`}
                  />
                </div>
                <div className="mt-4 flex flex-col items-start gap-1 border-b border-border pb-3 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[11px] uppercase text-muted-foreground">
                    {p.meta}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section
        id="studio"
        className="border-t border-border bg-surface px-5 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div
              data-reveal
              className="reveal h-[420px] overflow-hidden rounded-sm md:sticky md:top-24 md:h-[calc(100vh-8rem)]"
            >
              <img
                src={studioProcess}
                alt="Architect studio with a white building model"
                loading="lazy"
                width={1024}
                height={1536}
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="mb-3 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              Studio
            </p>
            <h2
              data-reveal
              className="font-light text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.9] tracking-tight"
            >
              <span className="line">
                <span>How we work</span>
              </span>
            </h2>
            <div data-reveal className="rule-grow my-8 h-px bg-accent" />
            <ol className="space-y-8">
              {process.map((s) => (
                <li
                  key={s.no}
                  data-reveal
                  className="reveal flex gap-5 border-l border-border pl-5"
                >
                  <span className="font-mono text-[11px] text-accent">{s.no}</span>
                  <div>
                    <h3 className="text-lg font-medium">{s.title}</h3>
                    <p className="mt-1 max-w-[46ch] text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["Site-led", "Climate and context first"],
                ["Integrated", "Shell, room and landscape"],
                ["Detailed", "Design through construction"],
              ].map(([n, l]) => (
                <div key={l} data-reveal className="reveal">
                  <div className="text-lg font-light tracking-tight sm:text-xl md:text-2xl">
                    {n}
                  </div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ENQUIRY */}
      <section id="enquiry" className="bg-ink px-5 py-20 text-ink-foreground md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-3 font-mono text-[11px] tracking-[0.25em] uppercase text-ink-foreground/60">
              Enquiry
            </p>
            <h2
              data-reveal
              className="font-light text-[clamp(2.75rem,9vw,8rem)] leading-[0.85] tracking-tight"
            >
              <span className="line">
                <span>Let's build</span>
              </span>
              <span className="line">
                <span className="text-ink-foreground/60">it together</span>
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 md:col-span-5">
            <p data-reveal className="reveal max-w-[40ch] text-ink-foreground/70">
              Tell us the site location, approximate area, service you need and your target
              timeline. We will reply with the right next step for your project.
            </p>
            <a
              href="mailto:vivritdesignstudio@gmail.com?subject=Project%20enquiry"
              className="max-w-full break-all border-b border-ink-foreground/40 pb-1 text-lg tracking-tight transition-colors hover:border-ink-foreground hover:opacity-70 sm:w-max sm:text-xl"
            >
              Email project details →
            </a>
            <div className="space-y-4 font-mono text-[11px] tracking-[0.15em] uppercase">
              <div className="flex justify-between border-b border-ink-foreground/15 pb-3">
                <span className="text-ink-foreground/50">Studio</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=118-R%20Model%20Town%20Rohtak%20124001"
                  target="_blank"
                  rel="noreferrer"
                  className="text-right transition-opacity hover:opacity-70"
                >
                  118-R Model Town, Rohtak 124001
                </a>
              </div>
              <div className="flex justify-between border-b border-ink-foreground/15 pb-3">
                <span className="text-ink-foreground/50">Hours</span>
                <span>Mon–Fri · 09:30–18:30</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 py-10 text-ink-foreground/60 md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 md:flex-row md:items-center">
          <span className="font-light text-xl tracking-[0.3em] uppercase text-ink-foreground">
            Vivrit Architects
          </span>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase">
            Architecture / Interiors / Turnkey / Landscaping
          </span>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase">
            © 2026 · All rights reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
