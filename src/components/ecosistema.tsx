"use client";

import { Sparkles, Coins, Vote, Shirt, Ticket } from "lucide-react";
import Reveal from "./reveal";
import "../styles/ecosistema.css";

export default function Ecosistema() {
  const features = [
    {
      title: "Fondo de Producción & Arte",
      icon: <Sparkles className="ecosistema-icon" />,
      description:
        "Financiación de shows, producciones y proyectos artísticos que expanden el universo UnderTango.",
    },
    {
      title: "Membresías VIP & Beneficios",
      icon: <Ticket className="ecosistema-icon" />,
      description:
        "Acceso anticipado a shows, descuentos en clases, moda, entradas especiales y ventajas exclusivas.",
    },
    {
      title: "Comunidad & Decisiones",
      icon: <Vote className="ecosistema-icon" />,
      description:
        "Votaciones, propuestas artísticas, gobernanza y participación real en el rumbo del ecosistema.",
    },
    {
      title: "Marketplace de Moda & Servicios",
      icon: <Shirt className="ecosistema-icon" />,
      description:
        "Usá UnderTangoCoin para moda, clases, entradas, accesorios y servicios del club.",
    },
    {
      title: "Arte, Música & Web3",
      icon: <Coins className="ecosistema-icon" />,
      description:
        "Un puente entre tango, arte digital, música, tecnología blockchain y experiencias inmersivas.",
    },
  ];

  return (
    <Reveal direction="right" intensity={90} parallax>
      <section id="ecosistema" className="ecosistema-section">
        <h2 className="ecosistema-title">
        Nuestro Ecosistema
        </h2>

        <p className="ecosistema-description">
          Un ecosistema donde arte, cultura, moda, danza y tecnología se unen.
          UnderTangoCoin es la puerta de entrada a una comunidad que vive,
          crea y decide junta.
        </p>

        <div className="ecosistema-grid">
          {features.map((item, index) => (
            <div key={index} className="ecosistema-card">
              <div className="ecosistema-icon-container">{item.icon}</div>
              <h3 className="ecosistema-card-title">{item.title}</h3>
              <p className="ecosistema-card-text">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
