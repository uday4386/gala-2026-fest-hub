import { useState } from "react";

interface EventCardProps {
  title: string;
  icon: string;
  description: string;
  details: string[];
  index: number;
}

const EventCard = ({ title, icon, description, details, index }: EventCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-lg cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="absolute inset-0 rounded-xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <span className="text-4xl">{icon}</span>
          <div className="flex-1">
            <h3 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border pt-4 space-y-2">
            {details.map((detail, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 text-xs text-primary/60 font-accent tracking-wider uppercase">
          {isExpanded ? "Click to collapse" : "Click to learn more"}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
