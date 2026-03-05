"use client";

import { CONFIG } from "@/lib/wedding-config";
import { Heart } from "lucide-react";

export function RsvpSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="reveal text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Will You Join Us?
        </p>
        <h2 className="reveal font-script text-5xl md:text-6xl text-foreground mb-6">
          RSVP
        </h2>
        <p className="reveal text-muted-foreground leading-relaxed text-base md:text-lg font-serif mb-10">
          We would be honored to have you share in our celebration of love. 
          Kindly let us know if you can attend by clicking below.
        </p>

        <div className="reveal reveal-delay-2">
          <a
            href={CONFIG.rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-12 py-5 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-300 text-base tracking-wider uppercase shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Heart className="w-5 h-5 group-hover:animate-heartbeat" />
            <span>Kindly Respond</span>
          </a>
        </div>

        <p className="reveal reveal-delay-3 text-muted-foreground/60 text-sm mt-8 font-serif italic">
          We look forward to celebrating with you
        </p>
      </div>
    </section>
  );
}
