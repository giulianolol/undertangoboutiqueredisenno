"use client";

import { Sparkles, Coins, Vote, Shirt, Ticket } from "lucide-react";
import Reveal from "./reveal";

export default function Ecosistema() {
  const features = [
    {
      title: "Fondo de Producción & Arte",
      icon: <Sparkles className="h-7 w-7 text-red-400" />,
      description:
        "Financiación de shows, producciones y proyectos artísticos que expanden el universo UnderTango.",
    },
    {
      title: "Membresías VIP & Beneficios",
      icon: <Ticket className="h-7 w-7 text-red-400" />,
      description:
        "Acceso anticipado a shows, descuentos en clases, moda, entradas especiales y ventajas exclusivas.",
    },
    {
      title: "Comunidad & Decisiones",
      icon: <Vote className="h-7 w-7 text-red-400" />,
      description:
        "Votaciones, propuestas artísticas, gobernanza y participación real en el rumbo del ecosistema.",
    },
    {
      title: "Marketplace de Moda & Servicios",
      icon: <Shirt className="h-7 w-7 text-red-400" />,
      description:
        "Usá UnderTangoCoin para moda, clases, entradas, accesorios y servicios del club.",
    },
    {
      title: "Arte, Música & Web3",
      icon: <Coins className="h-7 w-7 text-red-400" />,
      description:
        "Un puente entre tango, arte digital, música, tecnología blockchain y experiencias inmersivas.",
    },
  ];

  return (
    <Reveal direction="right" intensity={90} parallax>
      <section
        id="ecosistema"
        className="
          py-24 
          text-gray-200 
          px-6 md:px-12 
          flex flex-col items-center text-center
        "
      >
        <h2 className="text-4xl font-display font-bold text-utc-red mb-6">
          UnderTangoCoin: nuestro ecosistema
        </h2>

        <p className="text-gray-300 max-w-3xl mb-16 leading-relaxed">
          Un ecosistema donde arte, cultura, moda, danza y tecnología se unen.
          UnderTangoCoin es la puerta de entrada a una comunidad que vive,
          crea y decide junta.
        </p>

        {/* GRID 3D */}
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-12 
          mt-8 
          max-w-6xl
        ">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-black/50 
                p-8 
                rounded-2xl 
                shadow-xl 
                border border-red-900/40
                transition-all 
                duration-500 
                transform
                hover:-translate-y-6
                hover:scale-[1.08]
                hover:rotate-x-12
                hover:rotate-y-6
                hover:shadow-red-500/40
                hover:border-red-500/60
              "
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-red-400 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
