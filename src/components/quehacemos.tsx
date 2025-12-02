"use client";
import { MotionDiv } from "./motion-div";
import Reveal from "./reveal";
import { Music, Users, Shirt } from "lucide-react";
import "../styles/queHacemos.css";

export default function QueHacemos() {
  const items = [
    {
      title: "Shows de Tango",
      icon: <Music size={42} className="qh-icon" />,
      text: `Ofrecemos espectáculos inolvidables en la Triple Frontera (Argentina, Brasil y Paraguay), 
      mezclando tradición, danza, música en vivo y la energía del tango. Perfecto para turistas, 
      eventos privados o colaboraciones con hoteles y cruceros.`,
    },
    {
      title: "Clases de Tango",
      icon: <Users size={42} className="qh-icon" />,
      text: `Clases grupales y privadas adaptadas a todos los niveles — desde principiantes 
      hasta avanzados — con opción presencial en Iguazú o modalidad online.`,
    },
    {
      title: "Moda & Estilo",
      icon: <Shirt size={42} className="qh-icon" />,
      text: `Ropa y accesorios diseñados para milongas, shows y eventos tangueros. 
      La línea de moda UnderTango viste la cultura, la elegancia y el estilo del tango.`,
    },
  ];

  return (
    <Reveal direction="left" intensity={90} parallax>
      <section id="servicios" className="qh-section">
        <h2 className="qh-title">Qué hacemos</h2>

        <div className="qh-grid">
          {items.map((item, i) => (
            <MotionDiv key={i} className="qh-card">
              {item.icon}
              <h3 className="qh-card-title">{item.title}</h3>
              <p className="qh-card-text">{item.text}</p>
            </MotionDiv>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
