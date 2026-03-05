"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { FloatingPetals } from "@/components/wedding/floating-petals";
import { HeroSection } from "@/components/wedding/hero-section";
import { DetailsSection } from "@/components/wedding/details-section";
import { StorySection } from "@/components/wedding/story-section";
import { TimelineSection } from "@/components/wedding/timeline-section";
import { GallerySection } from "@/components/wedding/gallery-section";
import { CountdownSection } from "@/components/wedding/countdown-section";
import { RsvpSection } from "@/components/wedding/rsvp-section";
import { MapSection } from "@/components/wedding/map-section";
import { FooterSection } from "@/components/wedding/footer-section";
import { MusicPlayer } from "@/components/wedding/music-player";

export default function WeddingInvitation() {
  useScrollReveal();

  return (
    <main>
      <MusicPlayer />
      <FloatingPetals />
      <HeroSection />
      <DetailsSection />
      <StorySection />
      <TimelineSection />
      <GallerySection />
      <CountdownSection />
      <RsvpSection />
      <MapSection />
      <FooterSection />
    </main>
  );
}
