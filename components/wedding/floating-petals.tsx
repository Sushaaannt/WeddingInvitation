"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  reverse: boolean;
  opacity: number;
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 16,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 20,
      reverse: Math.random() > 0.5,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: "-20px",
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
            animation: `${petal.reverse ? "floatPetalReverse" : "floatPetal"} ${petal.duration}s linear ${petal.delay}s infinite`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M12 2C12 2 8 6 8 10C8 14 12 16 12 16C12 16 16 14 16 10C16 6 12 2 12 2Z"
              fill="#e8b4b8"
              opacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
