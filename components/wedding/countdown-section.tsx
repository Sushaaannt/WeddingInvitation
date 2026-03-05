"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/wedding-config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = new Date(CONFIG.weddingDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const units: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-foreground" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-foreground" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-foreground" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="reveal text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Counting Down To
        </p>
        <h2 className="reveal font-script text-5xl md:text-6xl text-foreground mb-4">
          The Big Day
        </h2>
        <div className="reveal flex items-center justify-center gap-3 mb-16">
          <div className="h-px w-12 bg-primary/40" />
          <div className="w-2 h-2 rounded-full bg-primary/60 animate-heartbeat" />
          <div className="h-px w-12 bg-primary/40" />
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {units.map((unit, index) => (
            <div
              key={unit.key}
              className={`reveal-delay-${index + 1}`}
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
                <span className="block text-4xl md:text-5xl font-serif text-foreground tabular-nums">
                  {mounted
                    ? String(timeLeft[unit.key]).padStart(2, "0")
                    : "--"}
                </span>
                <span className="block text-muted-foreground tracking-[0.2em] uppercase text-[10px] mt-2">
                  {unit.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
