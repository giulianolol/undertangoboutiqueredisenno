"use client";
import { MotionDiv } from "./motion-div";
import Reveal from "./reveal";
import { Music, Users, Shirt } from "lucide-react";

export default function QueHacemos() {
  const items = [
    {
      title: "Shows de Tango",
      icon: <Music size={42} className="text-utc-red" />,
      text: `Ofrecemos espectáculos inolvidables en la Triple Frontera (Argentina, Brasil y Paraguay), 
      mezclando tradición, danza, música en vivo y la energía del tango. Perfecto para turistas, 
      eventos privados o colaboraciones con hoteles y cruceros.`,
    },
    {
      title: "Clases de Tango",
      icon: <Users size={42} className="text-utc-red" />,
      text: `Clases grupales y privadas adaptadas a todos los niveles — desde principiantes 
      hasta avanzados — con opción presencial en Iguazú o modalidad online.`,
    },
    {
      title: "Moda & Estilo",
      icon: <Shirt size={42} className="text-utc-red" />,
      text: `Ropa y accesorios diseñados para milongas, shows y eventos tangueros. 
      La línea de moda UnderTango viste la cultura, la elegancia y el estilo del tango.`,
    },
  ];

  return (
    <Reveal direction="left" intensity={90} parallax>
      <section
        id="servicios"
        className="py-28 bg-black text-gray-200 px-6 md:px-12"
      >
        <h2 className="text-4xl font-display font-bold text-utc-red mb-16 text-center">
          Qué hacemos
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <MotionDiv
              key={i}
              className="
                bg-black border border-red-900/40 rounded-2xl p-8
                shadow-[0_0_25px_-10px_rgba(255,0,0,0.5)]
                hover:shadow-[0_0_40px_-8px_rgba(255,0,0,0.7)]
                transition-all duration-500
                flex flex-col space-y-4 items-start
              "
            >
              {item.icon}

              <h3 className="text-2xl font-semibold text-utc-red tracking-wide">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                {item.text}
              </p>
            </MotionDiv>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
