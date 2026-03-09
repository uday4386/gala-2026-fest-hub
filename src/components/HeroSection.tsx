import { motion } from "framer-motion";
import galaLogo from "@/assets/gala-logo-styled-transparent.png";

const FloatingOrb = ({ x, y, size, color, duration, delay }: { x: string; y: string; size: number; color: string; duration: number; delay: number }) => (
  <motion.div
    className={`absolute rounded-full ${color} pointer-events-none`}
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -20, 0, 20, 0],
      x: [0, 10, 0, -10, 0],
      scale: [1, 1.2, 1, 0.85, 1],
      opacity: [0.4, 0.8, 0.4, 0.7, 0.4],
    }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const SparkLine = ({ x, y, width, angle, delay }: { x: string; y: string; width: number; angle: number; delay: number }) => (
  <motion.div
    className="absolute h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent pointer-events-none"
    style={{ left: x, top: y, width, transform: `rotate(${angle}deg)` }}
    animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, delay }}
  />
);

const orbs = [
  { x: "5%", y: "10%", size: 18, color: "bg-accent/40", duration: 4, delay: 0 },
  { x: "15%", y: "70%", size: 28, color: "bg-secondary/30", duration: 5, delay: 0.5 },
  { x: "85%", y: "15%", size: 22, color: "bg-primary/35", duration: 4.5, delay: 0.3 },
  { x: "90%", y: "65%", size: 16, color: "bg-accent/35", duration: 3.5, delay: 0.8 },
  { x: "50%", y: "5%", size: 14, color: "bg-secondary/25", duration: 5.5, delay: 1 },
  { x: "70%", y: "85%", size: 24, color: "bg-primary/30", duration: 4, delay: 0.6 },
  { x: "25%", y: "85%", size: 20, color: "bg-accent/30", duration: 4.8, delay: 1.2 },
  { x: "8%", y: "40%", size: 12, color: "bg-primary/40", duration: 3.8, delay: 0.2 },
  { x: "92%", y: "40%", size: 14, color: "bg-secondary/35", duration: 4.2, delay: 0.7 },
  { x: "40%", y: "90%", size: 10, color: "bg-accent/25", duration: 5, delay: 1.5 },
  { x: "60%", y: "8%", size: 16, color: "bg-primary/25", duration: 4.6, delay: 0.9 },
  { x: "35%", y: "20%", size: 8, color: "bg-secondary/20", duration: 3.2, delay: 1.8 },
];

const sparks = [
  { x: "10%", y: "25%", width: 60, angle: -15, delay: 0 },
  { x: "80%", y: "30%", width: 50, angle: 20, delay: 1.2 },
  { x: "20%", y: "75%", width: 40, angle: -10, delay: 0.8 },
  { x: "75%", y: "80%", width: 55, angle: 15, delay: 1.6 },
  { x: "45%", y: "12%", width: 45, angle: 0, delay: 2 },
  { x: "55%", y: "88%", width: 35, angle: -5, delay: 0.4 },
];

const heroCategories = [
  {
    label: "Cultural",
    href: "#events-cultural",
    className:
      "badge-cultural border-white/15 shadow-[0_10px_24px_rgba(38,169,232,0.24)] hover:-translate-y-1 hover:border-white/55 hover:brightness-110 hover:shadow-[0_18px_34px_rgba(38,169,232,0.34)]",
  },
  {
    label: "Technical",
    href: "#events-technical",
    className:
      "badge-technical border-white/15 shadow-[0_10px_24px_rgba(124,58,237,0.24)] hover:-translate-y-1 hover:border-white/55 hover:brightness-110 hover:shadow-[0_18px_34px_rgba(124,58,237,0.34)]",
  },
  {
    label: "Sports",
    href: "#events-sports",
    className:
      "badge-sports border-white/15 shadow-[0_10px_24px_rgba(22,163,74,0.22)] hover:-translate-y-1 hover:border-white/55 hover:brightness-110 hover:shadow-[0_18px_34px_rgba(22,163,74,0.3)]",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient px-4">
      {/* Full-page floating orbs */}
      {orbs.map((orb, i) => (
        <FloatingOrb key={`orb-${i}`} {...orb} />
      ))}

      {/* Full-page spark lines */}
      {sparks.map((spark, i) => (
        <SparkLine key={`spark-${i}`} {...spark} />
      ))}

      {/* Rotating rings across the page */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full border border-accent/[0.07] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[500px] max-h-[500px] rounded-full border border-primary/[0.06] pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Soft glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[80px] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/[0.05] blur-[80px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 flex flex-col items-center gap-1 text-center pb-12 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="-mb-6 md:-mb-8"
        >
          <img
            src={galaLogo}
            alt="Gala 2K26 - The Youth Fest"
            className="w-[280px] md:w-[420px] lg:w-[520px] h-auto drop-shadow-[0_4px_12px_rgba(30,30,80,0.25)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-0"
        >
          {heroCategories.map((category) => (
            <a
              key={category.label}
              href={category.href}
              className={`rounded-full border px-5 py-1.5 font-display text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:text-base ${category.className}`}
            >
              {category.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-4 border-2 border-foreground/30 rounded-full px-8 py-2"
        >
          <span className="font-display text-lg md:text-xl font-bold text-foreground tracking-wide">
            March 13-14, 2026
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-2 font-display text-sm md:text-base font-bold text-foreground/80 tracking-wide"
        >
          KITS AKSHAR INSTITUTE OF TECHNOLOGY
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="text-muted-foreground text-xs md:text-sm -mt-2"
        >
          AUTONOMOUS | Guntur - 522 019
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-4 mb-16 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://tinyurl.com/kitsagala2k26"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-display text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(235,51,73,0.4)]"
          >
            Register Now
          </a>
          <a
            href="#events"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Events
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
