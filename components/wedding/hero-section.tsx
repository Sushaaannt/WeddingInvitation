"use client";

import { CONFIG } from "@/lib/wedding-config";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <img
          src="/images/hero-bg.jpg"
          alt="Wedding background with romantic floral arrangement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d2c2c]/50 via-[#3d2c2c]/30 to-[#3d2c2c]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Decorative top element */}
        <div className="animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <p className="text-primary-foreground/80 tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
            Together with their families
          </p>
        </div>

        {/* Couple Names */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary-foreground leading-tight mb-4">
            {CONFIG.coupleName}
          </h1>
        </div>

        {/* Decorative divider */}
        <div className="animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "both" }}>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-16 md:w-24 bg-primary-foreground/40" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground/60">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
            </svg>
            <div className="h-px w-16 md:w-24 bg-primary-foreground/40" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in" style={{ animationDelay: "1.3s", animationFillMode: "both" }}>
          <p className="text-primary-foreground/90 text-lg md:text-xl tracking-wide font-serif italic">
            Request the honor of your presence
          </p>
        </div>

        {/* Date */}
        <div className="animate-fade-in" style={{ animationDelay: "1.6s", animationFillMode: "both" }}>
          <p className="text-primary-foreground/70 tracking-[0.2em] uppercase text-sm mt-8">
            {new Date(CONFIG.weddingDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <a href="#details" aria-label="Scroll to wedding details">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </a>
      </div>
    </section>
  );
}
