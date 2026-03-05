"use client";

import { CONFIG } from "@/lib/wedding-config";

export function FooterSection() {
  return (
    <footer className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-secondary/80 to-secondary text-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full border border-foreground" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-foreground" />
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        <div className="reveal">
          <p className="font-script text-4xl md:text-5xl text-foreground mb-6">
            {CONFIG.coupleName}
          </p>
        </div>

        <div className="reveal reveal-delay-1">
          <p className="text-muted-foreground leading-relaxed font-serif italic text-base mb-8">
            Thank you for being part of our love story. We cannot wait to celebrate this beautiful chapter with you.
          </p>
        </div>

        <div className="reveal reveal-delay-2 flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary/40" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
          </svg>
          <div className="h-px w-12 bg-primary/40" />
        </div>

        <div className="reveal reveal-delay-3">
          <p className="text-primary tracking-[0.25em] uppercase text-sm font-serif">
            {CONFIG.hashtag}
          </p>
        </div>

        <div className="reveal reveal-delay-4 mt-12">
          <p className="text-muted-foreground/50 text-xs tracking-wider">
            {new Date(CONFIG.weddingDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
