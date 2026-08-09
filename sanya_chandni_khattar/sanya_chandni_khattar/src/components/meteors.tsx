import { cn } from "@/lib/utils"; //shadcn import
import { StarCanvas } from "@/components/star-canvas";

function createRandom(seed: number) {
  //deterministic PRNG so server and client render identically
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

type Meteor = {
  top: string;
  left: string;
  angle: string;
  length: string;
  duration: string;
  delay: string;
};

function meteorField(count: number, seed: number): Meteor[] {
  const rand = createRandom(seed);
  return Array.from({ length: count }, () => {
    const cycle = rand() * 16 + 9; // 9–25s between appearances
    return {
      top: `${(rand() * 55 - 15).toFixed(2)}%`,
      left: `${(rand() * 70 + 35).toFixed(2)}%`,
      angle: `${(rand() * 22 + 146).toFixed(1)}deg`, // travels down-left
      length: `${(rand() * 150 + 110).toFixed(0)}px`,
      duration: `${cycle.toFixed(2)}s`,
      delay: `-${(rand() * cycle).toFixed(2)}s`, // negative = mid-cycle on load
    };
  });
}

const METEORS = meteorField(7, 13579);

export function GalaxyBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05060f]",
        className,
      )}
    >
      {/* nebula core + dust lanes, single layer.
          dust gradients listed FIRST so they paint on top and darken. */}
      <div
        className="galaxy-band absolute -inset-[15%]"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 60% 5% at 48% 50%, rgba(4,4,12,0.95), transparent 70%)",
            "radial-gradient(ellipse 35% 4% at 66% 54%, rgba(4,4,12,0.85), transparent 70%)",

            "radial-gradient(ellipse 55% 22% at 50% 50%, rgba(255,214,170,0.55), transparent 70%)",
            "radial-gradient(ellipse 70% 26% at 42% 48%, rgba(126,96,224,0.45), transparent 72%)",
            "radial-gradient(ellipse 65% 20% at 62% 53%, rgba(56,132,214,0.40), transparent 70%)",
            "radial-gradient(ellipse 40% 14% at 30% 46%, rgba(214,86,150,0.35), transparent 75%)",
          ].join(", "),
          transform: "rotate(-24deg)",
        }}
      />

      {/* star layers: bitmaps, not 490 css gradients */}
      <StarCanvas
        count={250}
        maxRadius={0.7}
        className="star-layer absolute inset-0 h-full w-full"
        style={{ animationDuration: "220s" }}
      />
      <StarCanvas
        count={110}
        maxRadius={1.5}
        className="star-layer star-twinkle absolute inset-0 h-full w-full"
        style={{ animationDuration: "130s" }}
      />

      {/* meteors — no blend mode, color carries the glow */}
      <div className="absolute inset-0">
        {METEORS.map((m, i) => (
          <div
            key={i}
            className="meteor absolute"
            style={{
              top: m.top,
              left: m.left,
              width: m.length,
              animationDuration: m.duration,
              animationDelay: m.delay,
              ["--angle" as string]: m.angle,
            }}
          />
        ))}
      </div>

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(3,4,10,0.9)_100%)]" />
    </div>
  );
}