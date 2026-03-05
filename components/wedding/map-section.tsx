"use client";

import { CONFIG } from "@/lib/wedding-config";

export function MapSection() {
  const mapSrc = CONFIG.googleMapLink.includes("embed")
    ? CONFIG.googleMapLink
    : `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
        CONFIG.venueName + " " + CONFIG.venueAddress
      )}`;

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Find Your Way
          </p>
          <h2 className="reveal font-script text-5xl md:text-6xl text-foreground mb-4">
            The Venue
          </h2>
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <p className="reveal text-muted-foreground font-serif text-base">
            {CONFIG.venueName} &middot; {CONFIG.venueAddress}
          </p>
        </div>

        <div className="reveal rounded-2xl overflow-hidden shadow-md border border-border/50">
          <iframe
            title={`Map to ${CONFIG.venueName}`}
            src={mapSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
