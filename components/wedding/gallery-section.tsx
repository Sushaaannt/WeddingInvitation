"use client";

import { useState, useCallback } from "react";
import { CONFIG } from "@/lib/wedding-config";
import { X } from "lucide-react";

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Captured Moments
          </p>
          <h2 className="reveal font-script text-5xl md:text-6xl text-foreground mb-4">
            Photo Gallery
          </h2>
          <div className="reveal flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary/40" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="h-px w-12 bg-primary/40" />
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CONFIG.galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`reveal reveal-delay-${(index % 4) + 1} relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer ${
                index === 0
                  ? "col-span-2 row-span-2"
                  : ""
              }`}
              aria-label={`View gallery photo ${index + 1}`}
            >
              <img
                src={image}
                alt={`Wedding gallery photo ${index + 1}`}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-64 sm:h-80 md:h-full" : "h-40 sm:h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-[#3d2c2c]/0 group-hover:bg-[#3d2c2c]/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/80 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3d2c2c" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-[#ffffff]/10 flex items-center justify-center hover:bg-[#ffffff]/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-[#ffffff]" />
          </button>
          <img
            src={CONFIG.galleryImages[lightboxIndex]}
            alt={`Wedding gallery photo ${lightboxIndex + 1} - enlarged view`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
