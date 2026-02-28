import { useState } from "react";
import EventCard from "./EventCard";

const technicalEvents = [
  {
    title: "Hackathon",
    icon: "🚀",
    description: "A 24-hour marathon of innovation. Build a working prototype from scratch, pitch your idea, and compete for the grand prize. Teams of up to 4 members.",
    details: ["24-hour non-stop coding challenge", "Teams of 2–4 members", "Themes revealed on the day", "Judged on innovation, feasibility, and presentation", "Exciting prizes for top 3 teams"],
  },
  {
    title: "Code Sprint",
    icon: "⚡",
    description: "Think fast, code faster. A rapid-fire competitive programming contest with increasing difficulty. Only the sharpest coders survive.",
    details: ["Individual participation", "Multiple rounds with increasing difficulty", "Languages: C, C++, Java, Python", "Time-bound problem solving", "Real-time leaderboard"],
  },
  {
    title: "Strike the Secret",
    icon: "🔐",
    description: "A cryptography and puzzle-solving challenge. Decode hidden messages, crack ciphers, and unravel mysteries in this thrilling treasure hunt of the mind.",
    details: ["Cryptography and logical reasoning", "Multi-level puzzle solving", "Individual or duo participation", "Combines tech knowledge with lateral thinking", "Fastest solver wins"],
  },
  {
    title: "Bug Bounty Lite",
    icon: "🐛",
    description: "Find and fix bugs in pre-written code. Test your debugging skills across multiple languages and frameworks in this timed challenge.",
    details: ["Debug code in various languages", "Timed rounds with scoring", "Bugs range from syntax to logic errors", "Individual participation", "Great for real-world skills"],
  },
  {
    title: "Circuit Debugging",
    icon: "🔌",
    description: "Put your hardware skills to the test. Identify and fix faults in electronic circuits within the time limit. A must for electronics enthusiasts.",
    details: ["Hands-on circuit debugging", "Individual participation", "Covers analog and digital circuits", "Tools and components provided", "Fastest correct fix wins"],
  },
  {
    title: "Poster Presentation",
    icon: "📊",
    description: "Present your research or project idea through a compelling poster. Showcase your technical depth and communication skills to a panel of judges.",
    details: ["Individual or team (max 3)", "Topics: AI, IoT, Cybersecurity, and more", "Judged on content, design, and presentation", "Abstract submission required in advance", "Best poster wins a special award"],
  },
  {
    title: "Logo Design",
    icon: "🎨",
    description: "Unleash your creativity. Design a logo based on a given theme using any digital design tool. Judged on creativity, relevance, and aesthetics.",
    details: ["Individual participation", "Theme revealed at the start", "Use any design tool: Figma, Canva, Illustrator", "Time limit: 90 minutes", "Judged on creativity and visual appeal"],
  },
];

const culturalEvents = [
  {
    title: "Solo Dance - Classical",
    icon: "💃",
    description: "Showcase the elegance and grace of Indian classical dance forms. Perform solo to mesmerize the audience with traditional choreography and expression.",
    details: ["Individual participation", "Any classical dance form accepted", "Time limit: 5 minutes", "Judged on technique, expression, and rhythm", "Own music track required"],
  },
  {
    title: "Solo Dance - Western",
    icon: "🕺",
    description: "Bring the energy with hip-hop, contemporary, or freestyle moves. Show off your individual style and own the stage in this solo western dance competition.",
    details: ["Individual participation", "Any western dance style", "Time limit: 4 minutes", "Judged on creativity, moves, and stage presence", "Own music track required"],
  },
  {
    title: "Group Dance - Classical",
    icon: "🪷",
    description: "A team performance celebrating the beauty of classical Indian dance. Synchronize with your group and tell a story through rhythm and movement.",
    details: ["Teams of 4–8 members", "Any classical dance form", "Time limit: 8 minutes", "Judged on coordination, choreography, and expression", "Props allowed"],
  },
  {
    title: "Group Dance - Western",
    icon: "🎶",
    description: "Bring the house down with a group western dance routine. From hip-hop to contemporary fusion, show what your crew can do together on stage.",
    details: ["Teams of 4–8 members", "Any western dance style", "Time limit: 8 minutes", "Judged on synchronization, energy, and creativity", "Props and costumes allowed"],
  },
  {
    title: "Singing",
    icon: "🎤",
    description: "Solo or duet vocal performances across any genre. From classical ragas to Bollywood hits to western pop — let your voice shine on stage.",
    details: ["Solo or duet participation", "Any language or genre", "Time limit: 5 minutes", "Karaoke track or instrument accompaniment allowed", "Judged on pitch, rhythm, and expression"],
  },
  {
    title: "Skit",
    icon: "🎭",
    description: "Put together a short theatrical performance with your team. Comedy, drama, social message — express your creativity through acting and storytelling.",
    details: ["Teams of 4–10 members", "Any theme or genre", "Time limit: 10 minutes", "Props and costumes allowed", "Judged on script, acting, and impact"],
  },
  {
    title: "Instrumental Music",
    icon: "🎸",
    description: "Showcase your musical talent with any instrument — guitar, keyboard, tabla, flute, or drums. Solo performances that celebrate pure musicianship.",
    details: ["Solo participation", "Any instrument allowed", "Time limit: 5 minutes", "Judged on technique, melody, and presentation", "Backing tracks allowed"],
  },
  {
    title: "Short Film",
    icon: "🎬",
    description: "Create a compelling short film on any topic. From drama to documentary, showcase your filmmaking, storytelling, and editing skills.",
    details: ["Teams of any size", "Duration: 5–10 minutes", "Submit before event day", "Any genre accepted", "Judged on story, cinematography, and editing"],
  },
  {
    title: "Reels",
    icon: "📱",
    description: "Create a viral-worthy reel! Short, snappy, creative video content on a given theme. Show your social media content creation skills.",
    details: ["Individual or duo participation", "Duration: 30–90 seconds", "Theme announced on event day", "Creativity and editing are key", "Most engaging reel wins"],
  },
];

const sportsEvents = [
  {
    title: "Throwball (Girls)",
    icon: "🏐",
    description: "A fast-paced team sport for girls. Throw, catch, and strategize your way to victory in this exciting court game requiring agility and teamwork.",
    details: ["Girls only", "Teams of 7 players", "Knockout format", "Standard throwball rules apply", "Referees provided"],
  },
  {
    title: "Kho-Kho (Girls)",
    icon: "🏃‍♀️",
    description: "One of India's most thrilling traditional sports. Chase, tag, and dodge in this high-energy game that tests speed, reflexes, and team coordination.",
    details: ["Girls only", "Teams of 12 players (9 active)", "Timed chasing and running innings", "Standard Kho-Kho rules apply", "Knockout rounds"],
  },
  {
    title: "Tennikoit (Girls)",
    icon: "🥏",
    description: "A ring-based throwing sport that combines precision and agility. Toss the rubber ring over the net and outplay your opponent with swift moves.",
    details: ["Girls only", "Singles or doubles", "Best of 3 sets", "Standard Tennikoit rules", "Court and rings provided"],
  },
  {
    title: "Volleyball (Boys)",
    icon: "🏐",
    description: "Spike, block, and serve your way to glory! A classic team sport testing power, coordination, and strategy on the court.",
    details: ["Boys only", "Teams of 6 players", "Knockout format", "Standard volleyball rules", "Best of 3 sets"],
  },
  {
    title: "Kabaddi (Boys)",
    icon: "🤼",
    description: "The ultimate test of strength, strategy, and stamina. Raid the opponent's half, tag players, and return to score — all in a single breath!",
    details: ["Boys only", "Teams of 7 players", "Standard Kabaddi rules", "Timed halves", "Knockout rounds"],
  },
  {
    title: "Kho-Kho (Boys)",
    icon: "🏃",
    description: "Speed meets strategy in this traditional Indian sport. Chasers and runners battle it out in one of the fastest tag games ever invented.",
    details: ["Boys only", "Teams of 12 players (9 active)", "Timed innings", "Standard Kho-Kho rules", "Knockout format"],
  },
];

type Category = "technical" | "cultural" | "sports";

const categoryConfig: Record<Category, { label: string; colorClass: string; events: typeof technicalEvents }> = {
  technical: { label: "Technical Events", colorClass: "bg-technical text-primary-foreground", events: technicalEvents },
  cultural: { label: "Cultural Events", colorClass: "bg-cultural text-primary-foreground", events: culturalEvents },
  sports: { label: "Sports Events", colorClass: "bg-sports text-primary-foreground", events: sportsEvents },
};

const EventsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("technical");
  const { label, events } = categoryConfig[activeCategory];

  return (
    <section id="events" className="relative py-24 px-4">
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
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-lg font-display text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? categoryConfig[cat].colorClass + " shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
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
