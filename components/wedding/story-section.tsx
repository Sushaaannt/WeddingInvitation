"use client";

import { CONFIG } from "@/lib/wedding-config";
import { Star } from "lucide-react";

export function StorySection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Destined To Be
          </p>
          <h2 className="reveal font-script text-5xl md:text-6xl text-foreground mb-4">
            Written in the Stars
          </h2>
          <div className="reveal flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary/40" />
            <Star className="w-4 h-4 text-primary/60 fill-primary/30" />
            <div className="h-px w-12 bg-primary/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image column */}
          <div className="reveal space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={CONFIG.galleryImages[0]}
                alt={`${CONFIG.groomName} and ${CONFIG.brideName}`}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d2c2c]/20 to-transparent" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={CONFIG.galleryImages[1]}
                alt={`${CONFIG.groomName} and ${CONFIG.brideName} together`}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d2c2c]/20 to-transparent" />
            </div>
          </div>

          {/* Text column */}
          <div className="reveal reveal-delay-2 space-y-6">
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg font-serif">
              Some bonds are not found &mdash; they are destined. When two families came together with love, blessings, and the hope of a beautiful future, {CONFIG.groomName} and {CONFIG.brideName}&apos;s paths were meant to intertwine.
            </p>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg font-serif">
              What began with families sharing laughter and chai soon blossomed into a connection that felt like it had been waiting all along. Every conversation brought them closer, every shared smile made it clearer &mdash; this was meant to be.
            </p>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg font-serif">
              With the blessings of their elders and the warmth of both families, they now step forward hand-in-hand into a beautiful new chapter &mdash; one written by love, guided by tradition, and sealed by destiny.
            </p>
            <div className="pt-4">
              <p className="font-script text-3xl text-primary">
                Bound by Blessings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
