import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const technicalEvents = [
  {
    title: "Project Expo",
    icon: "🚀",
    description: "Showcase your innovative project with a working prototype. Present your idea, demonstrate its functionality, and impress the judges with your technical skills.",
    details: ["Team size: 2–4 members", "Working prototype required", "Demonstration time: 5–7 minutes", "Judged on innovation, originality & technical implementation", "Feasibility and presentation matter"],
  },
  {
    title: "Paper Presentation",
    icon: "📄",
    description: "Present your research paper on cutting-edge topics. Domains include Machine Learning, AI, Cloud Computing, VLSI, Embedded Systems, IoT and more.",
    details: ["Team size: up to 3 members", "Domains: AI/ML, Cloud, VLSI, Embedded, IoT & more", "10 minutes presentation + Q&A session", "Paper must be in IEEE format (max 8 pages)", "Abstract deadline: 9th March 2026"],
  },
  {
    title: "Poster Presentation",
    icon: "📊",
    description: "Present your research or project idea through a compelling poster. Each participant brings their own charts, pencils and color sketches to create visually striking presentations.",
    details: ["Team size: 2 members", "One poster per participant", "Bring your own charts, pencils & color sketches", "Judged on content, design, and presentation", "Original content only"],
  },
  {
    title: "Escape Room Challenge",
    icon: "🔐",
    description: "Race against time in this thrilling puzzle-solving challenge. Navigate through 6 rounds of brain-teasing questions and puzzles to escape the fastest.",
    details: ["6 rounds with one question each", "Solve all 6 questions sequentially", "Team with least total time wins", "Tests logical reasoning & problem-solving", "Fast thinking is the key to victory"],
  },
  {
    title: "Code Sprint",
    icon: "⚡",
    description: "Think fast, code faster. A rapid-fire competitive programming contest that tests your problem-solving speed and code optimization skills.",
    details: ["Individual participation", "Duration: 60–90 minutes", "Languages allowed: C / C++ / Java / Python", "Evaluated on correctness & time efficiency", "Code optimization matters"],
  },
  {
    title: "Bug Bounty",
    icon: "🐛",
    description: "Find and fix bugs in pre-written code. Test your debugging skills by identifying errors and providing correct fixes with logical explanations.",
    details: ["Team of 2 members", "Identify and fix errors in given code", "Duration: 60–90 minutes", "Evaluated on bugs identified & correct fixes", "Logical explanation required for each fix"],
  },
  {
    title: "Circuithon",
    icon: "🔌",
    description: "Put your hardware skills to the test. Identify faults in a given circuit using provided components within the time limit. A must for electronics enthusiasts.",
    details: ["Team size: 1–2 members", "Identify faults in given circuits", "Components provided by organizers", "Duration: 60 minutes", "Evaluated on accuracy, time & understanding"],
  },
  {
    title: "Logo Design",
    icon: "🎨",
    description: "Unleash your creativity. Design an original and scalable logo based on a given theme using any digital design tool. Judged on creativity, relevance, and visual impact.",
    details: ["Individual participation", "Theme announced on the spot or prior", "Duration: 60–90 minutes", "Software/tools allowed as per guidelines", "Logo must be original and scalable"],
  },
];

const culturalEvents = [
  {
    title: "Solo Dance – Classical",
    icon: "💃",
    description: "Showcase the elegance and grace of Indian classical dance forms like Bharatanatyam, Kuchipudi, Kathak and more. Mesmerize the audience with your expressions and rhythm.",
    details: ["Time limit: 4–6 minutes", "Only Indian classical forms accepted", "Bring your own costume & accessories", "Background music submitted in advance", "Judged on expressions, rhythm, costume & overall impact"],
  },
  {
    title: "Solo Dance – Western",
    icon: "🕺",
    description: "Bring the energy with Hip-Hop, Contemporary, Freestyle or any western dance style. Show off your creativity and own the stage with electrifying moves.",
    details: ["Time limit: 3–5 minutes", "Any western dance style allowed", "Vulgar or inappropriate moves strictly prohibited", "Judged on energy, creativity & stage presence", "Audience engagement matters"],
  },
  {
    title: "Group Dance – Classical",
    icon: "🪷",
    description: "A team performance celebrating the beauty of classical Indian dance. Synchronize with your group and create harmonious formations with traditional choreography.",
    details: ["Team size: 4–10 members", "Time limit: 6–8 minutes", "Traditional costumes required", "Props allowed (no fire or hazardous materials)", "Judged on coordination, formation, expressions & harmony"],
  },
  {
    title: "Group Dance – Western",
    icon: "🎶",
    description: "Bring the house down with a group western dance routine. From hip-hop to contemporary fusion, show what your crew can do together on stage.",
    details: ["Team size: 4–12 members", "Time limit: 5–8 minutes", "Clean and decent choreography required", "Judged on synchronization, energy & creativity", "Stage coverage and costumes matter"],
  },
  {
    title: "Singing (Solo)",
    icon: "🎤",
    description: "Let your voice shine on stage. Perform solo across any Indian or international language. Karaoke tracks allowed but no lead vocals in the backing track.",
    details: ["Time limit: 4–5 minutes", "Karaoke track allowed (no lead vocals)", "Any Indian or international language", "Judged on pitch, tone, clarity & expression", "Stage confidence is key"],
  },
  {
    title: "Skit",
    icon: "🎭",
    description: "Put together a short theatrical performance with your team. Express your creativity through acting, storytelling and deliver a powerful message on stage.",
    details: ["Team size: 5–12 members", "Time limit: 10–15 minutes", "No political/religious controversies", "Simple stage setup only", "Judged on script, acting, coordination & message"],
  },
  {
    title: "Instrumental Music",
    icon: "🎸",
    description: "Showcase your musical talent with any instrument. Solo or duo performances that celebrate pure musicianship, rhythm and creative expression.",
    details: ["Solo or duo performance allowed", "Time limit: 5–7 minutes", "Bring your own instruments", "Sound check prior to event", "Judged on technical skill, rhythm & creativity"],
  },
  {
    title: "Short Film",
    icon: "🎬",
    description: "Create a compelling short film with original content. From drama to documentary, showcase your filmmaking, direction and editing skills.",
    details: ["Duration: 3–10 minutes", "Theme will be informed earlier (if any)", "Film must be original content", "Submit in MP4 format before deadline", "Judged on storyline, direction, editing & social impact"],
  },
  {
    title: "Reels",
    icon: "📱",
    description: "Create a viral-worthy reel! Short, snappy, creative video content on a given theme. Show your social media content creation skills with original content.",
    details: ["Duration: 30–90 seconds", "Vertical format preferred", "Must be original content", "No offensive or copyrighted material", "Judged on creativity, editing, engagement & theme relevance"],
  },
];

const sportsEvents = [
  {
    title: "Throwball (Girls)",
    icon: "🏐",
    description: "A fast-paced team sport for girls. Throw, catch, and strategize your way to victory. Master service, rotation and court strategy to dominate the game.",
    details: ["Team size: 7 players + 3 substitutes", "Match format: Best of 3 sets", "Each set: 15 or 25 points", "Service must be done behind service line", "Judged on coordination, accuracy & sportsmanship"],
  },
  {
    title: "Kho-Kho (Girls)",
    icon: "🏃‍♀️",
    description: "One of India's most thrilling traditional sports. Chase, tag, and dodge in this high-energy game that tests speed, agility, and team coordination.",
    details: ["Team size: 12 players (9 playing + 3 substitutes)", "Match duration: 2 innings (9 minutes each)", "Standard Kho Kho rules apply", "Early reporting mandatory", "Proper sports uniform required"],
  },
  {
    title: "Tennikoit (Girls)",
    icon: "🥏",
    description: "A ring-based throwing sport that combines precision and agility. Toss the rubber ring over the net and outplay your opponent in this doubles format game.",
    details: ["Doubles format", "Match: 21 points per set", "Best of 3 sets", "Service within marked area", "Standard Tennikoit rules apply"],
  },
  {
    title: "Volleyball (Boys)",
    icon: "🏐",
    description: "Spike, block, and serve your way to glory! A classic team sport testing power, coordination, and strategy with rally point scoring system.",
    details: ["Team size: 6 players + substitutes", "Match format: Best of 3 sets", "Rally point scoring system", "Net touch is a fault", "Rotation rules strictly followed"],
  },
  {
    title: "Kabaddi (Boys)",
    icon: "🤼",
    description: "The ultimate test of strength, strategy, and stamina. Raid the opponent's half, tag players, and return to score — all within 30 seconds!",
    details: ["Team size: 7 players + 3 substitutes", "Match duration: 2 halves (10 minutes each)", "Raid time: 30 seconds", "Proper kabaddi chant required", "Standard Kabaddi federation rules apply"],
  },
  {
    title: "Kho-Kho (Boys)",
    icon: "🏃",
    description: "Speed meets strategy in this traditional Indian sport. Chasers and runners battle it out in one of the fastest tag games ever invented.",
    details: ["Team size: 12 players (9 playing + substitutes)", "Match duration: 2 innings", "Standard Kho Kho rules apply", "False start or rule violation → penalty", "Judged on speed, coordination & tactical play"],
  },
];

type Category = "technical" | "cultural" | "sports";

const hashToCategory: Record<string, Category> = {
  "#events-technical": "technical",
  "#events-cultural": "cultural",
  "#events-sports": "sports",
};

const categoryConfig: Record<Category, { label: string; colorClass: string; events: typeof technicalEvents }> = {
  technical: { label: "Technical Events", colorClass: "bg-technical text-primary-foreground", events: technicalEvents },
  cultural: { label: "Cultural Events", colorClass: "bg-cultural text-primary-foreground", events: culturalEvents },
  sports: { label: "Sports Events", colorClass: "bg-sports text-primary-foreground", events: sportsEvents },
};

const EventsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("technical");
  const { label, events } = categoryConfig[activeCategory];

  useEffect(() => {
    const syncCategoryFromHash = () => {
      const category = hashToCategory[window.location.hash];
      if (category) {
        setActiveCategory(category);
      }
    };

    syncCategoryFromHash();
    window.addEventListener("hashchange", syncCategoryFromHash);

    return () => window.removeEventListener("hashchange", syncCategoryFromHash);
  }, []);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    window.history.replaceState(null, "", `#events-${category}`);
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="events" className="relative py-24 px-4 scroll-mt-20">
      <div id="events-cultural" className="absolute top-0 h-px w-px" aria-hidden="true" />
      <div id="events-technical" className="absolute top-0 h-px w-px" aria-hidden="true" />
      <div id="events-sports" className="absolute top-0 h-px w-px" aria-hidden="true" />
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-primary font-accent text-sm tracking-[0.4em] uppercase mb-3">
            Compete. Create. Conquer.
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Events
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {(Object.keys(categoryConfig) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`rounded-full border px-6 py-2.5 font-display text-sm font-semibold tracking-wide transition-all duration-300 ${activeCategory === cat
                  ? categoryConfig[cat].colorClass + " border-transparent shadow-lg scale-105"
                  : "border-border bg-white/70 text-muted-foreground hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:text-foreground hover:shadow-md"
                }`}
            >
              {categoryConfig[cat].label}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <div className="grid gap-5 md:grid-cols-2" key={activeCategory}>
          {events.map((event, i) => (
            <EventCard key={event.title} {...event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
