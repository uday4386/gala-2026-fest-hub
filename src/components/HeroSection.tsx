import { motion } from "framer-motion";
import kitsLogo from "@/assets/kits-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-x-clip hero-gradient px-4">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[80px] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/[0.05] blur-[80px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <img
            src={kitsLogo}
            alt="KITS Akshar Institute of Technology Logo"
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <div className="text-left">
            <span className="font-display text-2xl md:text-3xl font-extrabold text-accent tracking-tight">
              KITS
            </span>
            <br />
            <span className="font-display text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
              AKSHAR
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-script text-[8rem] md:text-[14rem] lg:text-[16rem] font-bold leading-[0.85] text-shadow-soft gala-gradient overflow-visible px-8 py-4"
        >
          Gala
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-display text-4xl md:text-5xl font-extrabold text-foreground tracking-wider mt-0 md:-mt-2"
        >
          2K26
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-script text-2xl md:text-3xl text-secondary italic"
        >
          The Youth Fest
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-3 mt-2"
        >
          <span className="badge-cultural px-5 py-1.5 rounded font-display text-sm md:text-base font-semibold tracking-wide">
            Cultural
          </span>
          <span className="badge-technical px-5 py-1.5 rounded font-display text-sm md:text-base font-semibold tracking-wide">
            Technical
          </span>
          <span className="badge-sports px-5 py-1.5 rounded font-display text-sm md:text-base font-semibold tracking-wide">
            Sports
          </span>
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

        {/* College full name - bold */}
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

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          href="#events"
          className="mt-4 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Explore Events
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
