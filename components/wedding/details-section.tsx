"use client";

import { CONFIG } from "@/lib/wedding-config";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Date",
    value: new Date(CONFIG.weddingDate).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  },
  {
    icon: Clock,
    label: "Time",
    value: CONFIG.ceremonyTime,
  },
  {
    icon: MapPin,
    label: "Venue",
    value: CONFIG.venueName,
  },
  {
    icon: Navigation,
    label: "Address",
    value: CONFIG.venueAddress,
  },
];

export function DetailsSection() {
  return (
    <section id="details" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="reveal text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Wedding Details
        </p>
        <h2 className="reveal font-script text-5xl md:text-6xl text-foreground mb-4">
          Celebrate With Us
        </h2>
        <div className="reveal flex items-center justify-center gap-3 mb-16">
          <div className="h-px w-12 bg-primary/40" />
          <div className="w-2 h-2 rounded-full bg-primary/60" />
          <div className="h-px w-12 bg-primary/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {details.map((detail, index) => (
            <div
              key={detail.label}
              className={`reveal reveal-delay-${index + 1} group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 border border-border/50`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <detail.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground tracking-[0.2em] uppercase text-[11px] mb-2">
                  {detail.label}
                </p>
                <p className="text-foreground text-lg font-serif">
                  {detail.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-4 mt-12">
          <a
            href={CONFIG.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity duration-300 text-sm tracking-wider uppercase"
          >
            <MapPin className="w-4 h-4" />
            View on Map
          </a>
        </div>
      </div>
    </section>
  );
}
