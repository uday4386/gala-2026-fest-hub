import EventCard from "./EventCard";

const events = [
  {
    title: "Hackathon",
    icon: "🚀",
    description:
      "A 24-hour marathon of innovation. Build a working prototype from scratch, pitch your idea, and compete for the grand prize. Teams of up to 4 members.",
    details: [
      "24-hour non-stop coding challenge",
      "Teams of 2–4 members",
      "Themes revealed on the day of the event",
      "Judged on innovation, feasibility, and presentation",
      "Exciting prizes for top 3 teams",
    ],
  },
  {
    title: "Code Sprint",
    icon: "⚡",
    description:
      "Think fast, code faster. A rapid-fire competitive programming contest with increasing difficulty. Only the sharpest coders survive.",
    details: [
      "Individual participation",
      "Multiple rounds with increasing difficulty",
      "Languages: C, C++, Java, Python",
      "Time-bound problem solving",
      "Leaderboard updated in real-time",
    ],
  },
  {
    title: "Strike the Secret",
    icon: "🔐",
    description:
      "A cryptography and puzzle-solving challenge. Decode hidden messages, crack ciphers, and unravel mysteries in this thrilling treasure hunt of the mind.",
    details: [
      "Cryptography and logical reasoning",
      "Multi-level puzzle solving",
      "Individual or duo participation",
      "Combines tech knowledge with lateral thinking",
      "Fastest solver wins",
    ],
  },
  {
    title: "Bug Bounty Lite",
    icon: "🐛",
    description:
      "Find and fix bugs in pre-written code. Test your debugging skills across multiple languages and frameworks in this timed challenge.",
    details: [
      "Debug code in various languages",
      "Timed rounds with scoring",
      "Bugs range from syntax to logic errors",
      "Individual participation",
      "Great for sharpening real-world skills",
    ],
  },
  {
    title: "Poster Presentation",
    icon: "📊",
    description:
      "Present your research or project idea through a compelling poster. Showcase your technical depth and communication skills to a panel of judges.",
    details: [
      "Individual or team (max 3) participation",
      "Topics: AI, IoT, Cybersecurity, and more",
      "Judged on content, design, and presentation",
      "Abstract submission required in advance",
      "Best poster wins a special award",
    ],
  },
  {
    title: "Circuit Debugging",
    icon: "🔌",
    description:
      "Put your hardware skills to the test. Identify and fix faults in electronic circuits within the time limit. A must for electronics enthusiasts.",
    details: [
      "Hands-on circuit debugging challenge",
      "Individual participation",
      "Covers analog and digital circuits",
      "Tools and components provided",
      "Fastest correct fix wins",
    ],
  },
  {
    title: "Logo Designing",
    icon: "🎨",
    description:
      "Unleash your creativity. Design a logo based on a given theme using any digital design tool. Judged on creativity, relevance, and aesthetics.",
    details: [
      "Individual participation",
      "Theme revealed at the start",
      "Use any design tool: Figma, Canva, Illustrator, etc.",
      "Time limit: 90 minutes",
      "Judged on creativity, relevance, and visual appeal",
    ],
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-accent text-sm tracking-[0.4em] uppercase mb-3">
            Compete. Create. Conquer.
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Tech Events
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Events grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {events.map((event, i) => (
            <EventCard key={event.title} {...event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
