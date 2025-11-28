import Reveal from "./reveal";

export default function Contacto() {
  return (
    <Reveal direction="right" intensity={80}>
      <section
        className="
          py-24 bg-utc-900 text-gray-200 
          px-6 md:px-12 
          text-right 
          ml-auto
        "
        id="contacto"
      >
        <h2 className="text-4xl font-display font-bold text-utc-red mb-8">
          Contacto
        </h2>

        <p>Dirección: 1 de Mayo 850, Puerto Iguazú, Misiones, Argentina.</p>

        <p>Teléfono / WhatsApp: +54 9 3757-618270</p>

        <p>
          Email:{" "}
          <a
            href="mailto:pablocieslik@gmail.com"
            className="text-utc-red hover:underline"
          >
            pablocieslik@gmail.com
          </a>
        </p>

        <p className="mt-4 text-gray-400">
          ¿Interesado en invertir, participar o conocer más? Dejanos tu mensaje
          y te contactamos.
        </p>
      </section>
    </Reveal>
  );
}
