"use client";

import Reveal from "./reveal";
import { MessageCircle, Mail } from "lucide-react";

export default function Contacto() {
  return (
    <Reveal direction="up" intensity={60}>
      <section
        id="contacto"
        className="
          py-24 px-6 md:px-12 
          bg-utc-900 text-gray-200 
          flex justify-center
        "
      >
        <div
          className="
            max-w-2xl w-full text-center
            bg-black/40 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-12
            shadow-[0_0_15px_rgba(0,0,0,0.4)]
          "
        >
          <div className="flex justify-center mb-10">
            <span className="block w-24 h-[2px] bg-utc-red opacity-80" />
          </div>

          <h2 className="text-4xl font-display font-bold text-white mb-8 tracking-tight">
            Contacto
          </h2>

          <div className="space-y-4 text-lg leading-relaxed text-gray-300">
            <p>Dirección: 1 de Mayo 850, Puerto Iguazú, Misiones, Argentina.</p>

            <p>Teléfono / WhatsApp: +54 9 3757-618270</p>

            <p>
              Email:{" "}
              <a
                href="mailto:pablocieslik@gmail.com"
                className="text-white hover:text-utc-red transition-colors"
              >
                pablocieslik@gmail.com
              </a>
            </p>

            <p className="pt-4 text-gray-400 text-base max-w-lg mx-auto">
              ¿Interesado en invertir, participar o conocer más?
              Dejanos tu mensaje y te contactamos.
            </p>
          </div>

          {/* Botones */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

<a
  href="https://wa.me/5493757618270"
  target="_blank"
  className="
    flex items-center gap-2
    px-5 py-3 rounded-lg
    bg-white/5
    border border-white/10
    text-white
    transition-all duration-300 ease-out

    hover:border-red-500
    hover:bg-red-500/10
    hover:text-red-500
    hover:-translate-y-[2px]
  "
>
  <MessageCircle size={18} />
  WhatsApp
</a>

<a
  href="mailto:pablocieslik@gmail.com"
  className="
    flex items-center gap-2
    px-5 py-3 rounded-lg
    bg-white/5
    border border-white/10
    text-white
    transition-all duration-300 ease-out

    hover:border-red-500
    hover:bg-red-500/10
    hover:text-red-500
    hover:-translate-y-[2px]
  "
>
  <Mail size={18} />
  Enviar Email
</a>

          </div>
        </div>
      </section>
    </Reveal>
  );
}
