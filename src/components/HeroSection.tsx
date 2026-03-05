import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-x-clip hero-gradient px-4">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[80px] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/[0.05] blur-[80px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center pb-12 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Animated orbs - left side */}
          <motion.div
            className="absolute left-[-1rem] md:left-[-6rem] lg:left-[-9rem] top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`left-${i}`}
                className="rounded-full bg-gradient-to-br from-accent/60 to-secondary/40"
                style={{ width: `${20 + i * 14}px`, height: `${20 + i * 14}px` }}
                animate={{
                  y: [0, -12, 0, 12, 0],
                  scale: [1, 1.15, 1, 0.9, 1],
                  opacity: [0.6, 1, 0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Sparkle lines - left */}
          <motion.div
            className="absolute left-[1rem] md:left-[-3rem] top-1/4 w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
            animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />

          <h1 className="font-script text-[8rem] md:text-[14rem] lg:text-[16rem] font-bold leading-[0.85] text-shadow-soft gala-gradient overflow-visible px-12 md:px-16 py-4 relative z-10">
            Gala
          </h1>

          {/* Sparkle lines - right */}
          <motion.div
            className="absolute right-[1rem] md:right-[-3rem] bottom-1/4 w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />

          {/* Animated orbs - right side */}
          <motion.div
            className="absolute right-[-1rem] md:right-[-6rem] lg:right-[-9rem] top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`right-${i}`}
                className="rounded-full bg-gradient-to-br from-primary/50 to-accent/50"
                style={{ width: `${20 + i * 14}px`, height: `${20 + i * 14}px` }}
                animate={{
                  y: [0, 12, 0, -12, 0],
                  scale: [1, 0.9, 1, 1.15, 1],
                  opacity: [0.6, 1, 0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 m-auto w-[90%] md:w-[80%] aspect-square rounded-full border border-accent/10 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

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
