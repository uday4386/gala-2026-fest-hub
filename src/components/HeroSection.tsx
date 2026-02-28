import kitsLogo from "@/assets/kits-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: "grid-move 4s linear infinite",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <div className="animate-float">
          <img
            src={kitsLogo}
            alt="KITS Akshar Institute of Technology Logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full box-glow-gold"
          />
        </div>

        {/* College Name */}
        <p className="font-accent text-lg md:text-xl tracking-[0.3em] uppercase text-gold font-semibold">
          KITS Akshar Institute of Technology, Guntur
        </p>

        {/* Presents */}
        <p className="text-muted-foreground text-sm tracking-[0.5em] uppercase">
          Presents
        </p>

        {/* Fest Name */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-glow">
          <span className="text-primary">GALA</span>{" "}
          <span className="text-secondary">2026</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-foreground/70 max-w-xl">
          Where innovation meets creativity. 7 epic tech events. One unforgettable fest.
        </p>

        {/* CTA */}
        <a
          href="#events"
          className="mt-6 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:box-glow transition-all duration-300 hover:scale-105"
        >
          Explore Events
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent animate-pulse-glow" />
      </div>
    </section>
  );
};

export default HeroSection;
