"use client";

import Reveal from "./reveal";
import { MessageCircle, Mail } from "lucide-react";
import "../styles/contacto.css";

export default function Contacto() {
  return (
    <Reveal direction="up" intensity={60}>
      <section id="contacto" className="c-section">
        <div className="c-card">
          <div className="c-separator"></div>

          <h2 className="c-title">Contacto</h2>

          <div className="c-info">
            <p>Dirección: 1 de Mayo 850, Puerto Iguazú, Misiones, Argentina.</p>

            <p>Teléfono / WhatsApp: +54 9 3757-618270</p>

            <p>
              Email:{" "}
              <a href="mailto:pablocieslik@gmail.com" className="c-link">
                pablocieslik@gmail.com
              </a>
            </p>

            <p className="c-description">
              ¿Interesado en invertir, participar o conocer más?
              Dejanos tu mensaje y te contactamos.
            </p>
          </div>

          <div className="c-buttons">
            <a
              href="https://wa.me/5493757618270"
              target="_blank"
              className="c-btn"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a href="mailto:pablocieslik@gmail.com" className="c-btn">
              <Mail size={18} />
              Enviar Email
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
