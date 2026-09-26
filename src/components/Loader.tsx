import { useEffect, useState } from "react";

// Hand-drawn modern skyline on a 240x80 canvas, ground at y=78.
const BUILDINGS: { d: string; detail?: string }[] = [
  { d: "M6 78 V60 L32 53 V78" },
  { d: "M36 78 V42 H42 V32 H52 V42 H58 V78", detail: "M47 32 V78" },
  { d: "M63 78 V20 H73 V78 M68 20 V9" },
  { d: "M79 78 V46 H102 V53 H91 V78" },
  {
    d: "M108 78 V16 L126 7 V78",
    detail: "M117 11.5 V78 M108 34 H126 M108 52 H126",
  },
  { d: "M131 78 V60 A14 14 0 0 1 159 60 V78" },
  { d: "M165 78 L169 28 H179 L183 78", detail: "M174 28 V78" },
  { d: "M189 78 V38 H209 V46 H215 V78", detail: "M189 50 H209 M189 62 H209" },
  { d: "M219 78 V63 H236 V78" },
];

export function Loader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setDone(true), 2400);
    const removeTimer = window.setTimeout(() => setGone(true), 3200);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${done ? "pointer-events-none opacity-0" : ""}`}
    >
      <div className="flex flex-col items-center">
        <div className="hero-fade text-center">
          <div className="text-4xl font-extralight tracking-[0.12em] text-foreground">VIVRIT</div>
          <div
            className="mt-1 text-[15px] font-light tracking-[0.32em] text-muted-foreground"
            style={{ marginRight: "-0.32em" }}
          >
            ARCHITECTS
          </div>
        </div>
        <svg
          viewBox="0 0 240 80"
          className="mt-10 h-20 w-72 text-foreground"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {BUILDINGS.map((building, index) => (
            <g
              key={index}
              className="skyline-draw"
              style={{ animationDelay: `${0.15 + index * 0.09}s` }}
            >
              <path
                pathLength={1}
                d={building.d}
                strokeWidth={0.5}
                vectorEffect="non-scaling-stroke"
              />
              {building.detail && (
                <path
                  pathLength={1}
                  d={building.detail}
                  strokeWidth={0.35}
                  opacity={0.3}
                  vectorEffect="non-scaling-stroke"
                />
              )}
            </g>
          ))}
          <g className="skyline-draw">
            <path
              pathLength={1}
              d="M0 78 H240"
              strokeWidth={0.4}
              opacity={0.5}
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
