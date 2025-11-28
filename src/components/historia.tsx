"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";

export default function HistoriaUltra3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const timeline = [
    { year: "2018", text: "Nace UnderTango como un encuentro íntimo entre amigos." },
    { year: "2019", text: "Comienzan las primeras milongas abiertas al público." },
    { year: "2020", text: "Crecimiento en plena pandemia gracias a clases virtuales." },
    { year: "2021", text: "Shows, eventos temáticos y grandes noches." },
    { year: "2022", text: "Mudanza al salón actual. Nueva estética, nueva vibra." },
    { year: "2023", text: "La comunidad se consolida como una gran familia tanguera." },
  ];

  // AUTO SCROLL INFINITO
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let pos = 0;

    const animate = () => {
      pos += 0.8;
      if (pos >= container.scrollWidth / 2) pos = 0;

      container.scrollLeft = pos;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // DETECTAR CUÁL EVENTO ESTÁ EN EL CENTRO
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkCenter = () => {
      const center = container.scrollLeft + container.clientWidth / 2;

      let closestIndex = null;
      let closestDist = Infinity;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.clientWidth / 2;

        const dist = Math.abs(cardCenter - center);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
      requestAnimationFrame(checkCenter);
    };

    checkCenter();
  }, []);

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <Reveal direction="left" intensity={90}>
        <h2 className="text-5xl md:text-7xl font-black text-center mb-24 tracking-tight">
          Nuestra Historia
        </h2>
      </Reveal>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden select-none"
      >
        <div
          className="flex gap-40 px-40 py-20 w-max transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          {[...timeline, ...timeline].map((item, i) => {
            const depth = (i % timeline.length) * -120; // suave profundidad 3D

            return (
              <div
                key={i}
                ref={(el) => {cardsRef.current[i] = el!;}}
                className={`
                  relative w-96 p-10 rounded-3xl border shadow-2xl
                  transition-all duration-700
                  bg-zinc-900/80 border-zinc-800
                  ${activeIndex === i % timeline.length 
                    ? "scale-110 shadow-rose-500/30 border-rose-500/80"
                    : "scale-95 opacity-70"
                  }
                `}
                style={{
                  transform: `translateZ(${depth}px)`,
                }}
              >
                {/* Año */}
                <h3 className={`
                  text-5xl font-extrabold mb-6 transition-all duration-700
                  ${activeIndex === i % timeline.length 
                    ? "text-rose-500 drop-shadow-[0_0_20px_rgba(244,63,94,0.7)]"
                    : "text-rose-300"
                  }
                `}>
                  {item.year}
                </h3>

                {/* Texto */}
                <p className="text-lg text-zinc-300 leading-snug">
                  {item.text}
                </p>

                {/* Glow point */}
                <div className={`
                  absolute top-1/2 -right-4 w-7 h-7 rounded-full transition-all duration-700
                  ${activeIndex === i % timeline.length
                    ? "bg-rose-500 shadow-[0_0_25px_8px_rgba(244,63,94,0.8)]"
                    : "bg-rose-800 shadow-[0_0_10px_2px_rgba(244,63,94,0.3)]"
                  }
                `}></div>

                {/* Línea curva */}
                <svg
                  className="absolute top-1/2 left-full -translate-y-1/2"
                  width="180"
                  height="60"
                  fill="none"
                >
                  <path
                    d="M0 30 C 60 10, 120 50, 180 30"
                    stroke="rgba(244,63,94,0.5)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
