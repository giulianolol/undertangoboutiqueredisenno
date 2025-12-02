"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";

export default function Historia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lineY, setLineY] = useState<number>(0);

  const timeline = [
    { year: "2013", text: "Fundación de UnderTango como academia de tango moderno." },
    { year: "2015", text: "Comenzamos a realizar shows como compañía de tango." },
    { year: "2017", text: "Expandimos nuestros servicios como productora artística." },
    { year: "2023", text: "Registro de la marca en el Instituto de la Propiedad Industrial (INPI)." },
    { year: "2025", text: "Lanzamiento de Moda UnderTango para expandir nuestra pasión." },
  ];

  // AUTO SCROLL MUCHO MÁS SUAVE
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let pos = 0;

    const animate = () => {
      pos += 0.35; // mucho más suave
      const limit = container.scrollWidth / 2;

      if (pos >= limit) pos = 0;

      container.scrollLeft = pos;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
  if (cardsRef.current[0]) {
    const card = cardsRef.current[0];

    // Calculamos el centro vertical exacto de la tarjeta
    const centerY = card.offsetTop + card.clientHeight / 0.509;

    setLineY(centerY);
  }
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
    <section className="py-32 bg-black text-white relative overflow-hidden z-0">

      {/* TÍTULO */}
      <Reveal direction="left" intensity={90}>
        <h2 className="text-5xl md:text-7xl font-black text-center mb-24 tracking-tight">
          Nuestra Historia
        </h2>
      </Reveal>

<div
  className="
    absolute left-0 right-0
    h-[4px]
    bg-gradient-to-r from-rose-900/20 via-rose-600/70 to-rose-900/20
    pointer-events-none
    z-[1]
  "
  style={{
    top: lineY,
    transform: "translateY(-50%)",
  }}
/>


      {/* CONTENEDOR SCROLLEABLE */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden select-none z-20 transition-all duration-500 ease-out"
      >
        <div
          className="flex gap-40 px-40 py-20 w-max transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          {[...timeline, ...timeline].map((item, i) => {
            const depth = (i % timeline.length) * -120;

            return (
              <div
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el as HTMLDivElement;
                }}
                className={`
                  relative w-96 p-10 rounded-3xl border shadow-2xl
                  transition-all duration-700 ease-out
                  bg-zinc-900/80 border-zinc-800
                  z-20

                  ${
                    activeIndex === i % timeline.length
                      ? "scale-110 shadow-rose-500/40 border-rose-500/80"
                      : "scale-95 opacity-70"
                  }
                `}
                style={{ transform: `translateZ(${depth}px)` }}
              >
                <h3
                  className={`
                    text-5xl font-extrabold mb-6 transition-all duration-700 ease-out
                    ${
                      activeIndex === i % timeline.length
                        ? "text-rose-500 drop-shadow-[0_0_20px_rgba(244,63,94,0.7)]"
                        : "text-rose-300"
                    }
                  `}
                >
                  {item.year}
                </h3>

                <p className="text-lg text-zinc-300 leading-snug">
                  {item.text}
                </p>

                {/* Glow del punto */}
                <div
                  className={`
                    absolute top-1/2 -right-4 w-7 h-7 rounded-full transition-all duration-700 ease-out
                    transform -translate-y-1/2
                    ${
                      activeIndex === i % timeline.length
                        ? "bg-rose-500 shadow-[0_0_25px_8px_rgba(244,63,94,0.8)]"
                        : "bg-rose-800 shadow-[0_0_10px_2px_rgba(244,63,94,0.3)]"
                    }
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
