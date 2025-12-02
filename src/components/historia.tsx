"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";
import "../styles/historia.css";

export default function Historia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);


  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lineY, setLineY] = useState<number>(0);

  const timeline = [
    { year: "2013", text: "Fundación de UnderTango como academia de tango moderno." },
    { year: "2015", text: "Comenzamos a realizar shows como compañía de tango." },
    { year: "2017", text: "Expandimos nuestros servicios como productora artística." },
    { year: "2023", text: "Registro de la marca en el Instituto de la Propiedad Industrial (INPI)." },
    { year: "2025", text: "Lanzamiento de Moda UnderTango para expandir nuestra pasión." },
  ];

  /* AUTO SCROLL */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let pos = 0;

    const animate = () => {
      pos += 0.35;
      const limit = container.scrollWidth / 2;
      if (pos >= limit) pos = 0;

      container.scrollLeft = pos;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  /* CALCULAR LÍNEA CENTRAL */
  useEffect(() => {
    if (cardsRef.current[0]) {
      const card = cardsRef.current[0];
      const centerY = card.offsetTop + card.clientHeight / 0.509;
      setLineY(centerY);
    }
  }, []);

  /* DETECTAR TARJETA ACTIVA */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const check = () => {
      const center = container.scrollLeft + container.clientWidth / 2;
      let closestIndex: number | null = null;
      let closestDist = Infinity;

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
      requestAnimationFrame(check);
    };

    check();
  }, []);

  return (
    <section className="historia-section">
      <Reveal direction="left" intensity={90}>
        <h2 className="historia-title">Nuestra Historia</h2>
      </Reveal>

      {/* LÍNEA CENTRAL */}
      <div
        className="historia-line"
        style={{ top: lineY, transform: "translateY(-50%)" }}
      />

      {/* CONTENEDOR */}
      <div ref={containerRef} className="historia-container">
        <div className="historia-inner">
          {[...timeline, ...timeline].map((item, i) => {
            const depth = (i % timeline.length) * -120;

            return (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el;}}
                className={`historia-card ${activeIndex === i % timeline.length ? "active" : ""}`}
                style={{ transform: `translateZ(${depth}px)` }}
              >
                <h3 className={`historia-year ${activeIndex === i % timeline.length ? "year-active" : ""}`}>
                  {item.year}
                </h3>

                <p className="historia-text">{item.text}</p>

                <div
                  className={`historia-dot ${activeIndex === i % timeline.length ? "dot-active" : ""}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
