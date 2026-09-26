import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const items = [
  [
    "Rohit Malhotra",
    "Residence, Rohtak",
    "Vivrit turned our plot into a home that feels calm every single day. Every detail was thought through.",
  ],
  [
    "Neha Sharma",
    "Turnkey villa",
    "The turnkey process was seamless — one team from drawings to the final handover, on time.",
  ],
  [
    "Amit Verma",
    "Corporate interiors",
    "Our office interiors finally reflect who we are. Clients notice it the moment they walk in.",
  ],
  [
    "Priya Dahiya",
    "Farmhouse landscape",
    "Their landscaping gave our farmhouse a second life. Thoughtful, native and easy to maintain.",
  ],
  [
    "Sandeep Hooda",
    "Commercial planning",
    "Clear planning, honest budgets and beautiful execution. We would work with them again.",
  ],
  [
    "Kavita Jain",
    "Interior renovation",
    "They listened more than they talked, and the result is exactly the home we imagined.",
  ],
] as const;

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const list = [...items, ...items];

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let pos = el.scrollLeft;
    const tick = () => {
      if (!paused.current) {
        pos += 0.5;
        const half = el.scrollWidth / 2;
        if (pos >= half) pos -= half;
        el.scrollLeft = pos;
      } else pos = el.scrollLeft;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudge = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    paused.current = true;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
    window.setTimeout(() => (paused.current = false), 900);
  };

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20 md:py-28">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-6 px-5 md:px-10">
        <div>
          <p className="mb-3 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="font-light text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.9] tracking-tight"
          >
            Our clients
          </h2>
          <div className="mt-6 h-px w-40 bg-accent" />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => nudge(-1)}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => nudge(1)}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        aria-label="Client testimonials"
        aria-roledescription="carousel"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={() => (paused.current = true)}
        onTouchEnd={() => (paused.current = false)}
        className="mt-12 flex gap-5 overflow-x-auto px-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {list.map(([n, r, q], k) => (
          <figure
            aria-hidden={k >= items.length ? true : undefined}
            key={k}
            className="flex w-[300px] shrink-0 flex-col justify-between gap-8 rounded-sm border border-foreground/10 bg-foreground/[0.02] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-foreground/30 hover:bg-foreground/[0.04] md:w-[340px]"
          >
            <div>
              <figcaption>
                <span className="block text-xl font-light tracking-tight">{n}</span>
                <span className="block font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                  {r}
                </span>
              </figcaption>
              <blockquote className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">
                “{q}”
              </blockquote>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
