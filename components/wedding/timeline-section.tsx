"use client";

import { Gem, Sun, Flower2, Heart } from "lucide-react";

const events = [
  {
    icon: Gem,
    time: "Day 1 - Evening",
    title: "Ring Ceremony",
    description: "A beautiful celebration of the engagement as both families come together to exchange rings and bless the couple with love and joy.",
  },
  {
    icon: Sun,
    time: "Day 2 - Morning",
    title: "Haldi",
    description: "A vibrant and joyful ceremony where turmeric paste is lovingly applied to the bride and groom, filling the air with laughter, music, and blessings.",
  },
  {
    icon: Flower2,
    time: "Day 2 - Evening",
    title: "Mehendi",
    description: "An enchanting evening of intricate henna art, soulful music, and colorful celebrations as the bride is adorned with beautiful mehendi designs.",
  },
  {
    icon: Heart,
    time: "Day 3 - Auspicious Hour",
    title: "Marriage",
    description: "The sacred wedding ceremony where two souls unite with holy vows, circling the sacred fire, surrounded by the love and blessings of family and friends.",
  },
];

export function TimelineSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Schedule
          </p>
          <h2 className="reveal font-script text-5xl md:text-6xl text-foreground mb-4">
            Event Timeline
          </h2>
          <div className="reveal flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary/40" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="h-px w-12 bg-primary/40" />
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={`reveal reveal-delay-${(index % 4) + 1} relative flex items-start gap-6 md:gap-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center shadow-sm">
                    <event.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-0"
                      : "md:ml-auto md:pl-0"
                  }`}
                >
                  <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all duration-500">
                    <span className="text-primary text-sm tracking-wider font-serif">
                      {event.time}
                    </span>
                    <h3 className="text-foreground text-xl font-serif mt-1 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
