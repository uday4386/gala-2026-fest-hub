import { motion } from "framer-motion";
import kitsLogo from "@/assets/kits-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-x-clip hero-gradient px-4">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[80px] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/[0.05] blur-[80px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center pb-12">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex items-center justify-center -ml-10"
        >
          {/* Left Flourish */}
          <svg className="absolute left-[-2rem] md:left-[-4rem] top-1/2 -translate-y-[20%] w-16 md:w-28 opacity-90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 70 C70 90, 30 90, 20 60 C10 30, 40 10, 60 20 C80 30, 90 50, 75 75 C60 100, 20 80, 15 50" stroke="url(#flourish-gradient)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M40 30 C30 20, 10 30, 10 50 C10 70, 30 80, 50 60" stroke="url(#flourish-gradient)" strokeWidth="1" strokeLinecap="round" fill="none" />
            <defs>
              <linearGradient id="flourish-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8c1c40" />
                <stop offset="100%" stopColor="#d12c3f" />
              </linearGradient>
            </defs>
          </svg>

          <h1 className="font-script text-[8rem] md:text-[14rem] lg:text-[16rem] font-bold leading-[0.85] text-shadow-soft gala-gradient overflow-visible px-8 py-4">
            Gala
          </h1>

          {/* Right Flourish */}
          <svg className="absolute right-[-2rem] md:right-[-4rem] top-1/2 -translate-y-[80%] w-16 md:w-28 opacity-90 scale-x-[-1]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 70 C70 90, 30 90, 20 60 C10 30, 40 10, 60 20 C80 30, 90 50, 75 75 C60 100, 20 80, 15 50" stroke="url(#flourish-gradient-right)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M40 30 C30 20, 10 30, 10 50 C10 70, 30 80, 50 60" stroke="url(#flourish-gradient-right)" strokeWidth="1" strokeLinecap="round" fill="none" />
            <defs>
              <linearGradient id="flourish-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d12c3f" />
                <stop offset="100%" stopColor="#f55d42" />
              </linearGradient>
            </defs>
          </svg>
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
