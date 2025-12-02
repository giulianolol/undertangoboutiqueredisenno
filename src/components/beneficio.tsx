import Reveal from "./reveal";

export default function Beneficios() {
  return (
    <Reveal direction="up" intensity={120} parallax>
    <section
      id="beneficios"
      className="py-24 px-6 md:px-12 text-gray-200 bg-black relative overflow-hidden"
    >
      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-20 text-utc-red drop-shadow-[0_0_12px_rgba(255,0,0,0.35)] tracking-tight">
        Beneficios para holders
      </h2>

      {/* GRID PREMIUM */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-10 max-w-6xl mx-auto
      ">
        {[
          {
            title: "Acceso anticipado",
            text: "Ingresá antes que todos y obtené precios preferenciales en shows exclusivos."
          },
          {
            title: "Descuentos en clases",
            text: "Beneficios en clases grupales o privadas para seguir creciendo en el tango."
          },
          {
            title: "Moda exclusiva",
            text: "Acceso temprano a lanzamientos de Moda UnderTango que no se venden al público general."
          },
          {
            title: "Eventos VIP",
            text: "Invitaciones especiales a experiencias únicas solo para holders."
          },
          {
            title: "Participación artística",
            text: "Tu voto influye en decisiones creativas, shows y producciones futuras."
          },
          {
            title: "Experiencia UnderTango",
            text: "Viví la marca desde adentro, con regalos, sorpresas y trato prioritario."
          },
        ].map((item, i) => (
          <div
            key={i}
            className="
              relative p-8 rounded-2xl
              bg-gradient-to-b from-black/70 to-black/40
              border border-white/10
              backdrop-blur-xl
              shadow-[0_0_20px_rgba(0,0,0,0.5)]
              transition-all duration-300 hover:scale-[1.03]
              hover:shadow-[0_0_30px_rgba(255,0,0,0.25)]
              hover:border-red-900/50
              flex flex-col gap-3
            "
          >
            <h3 className="text-xl font-semibold text-white tracking-tight">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-300">
              {item.text}
            </p>

            {/* Línea roja premium */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-700/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* NOTA FINAL */}
      <p className="mt-16 text-gray-500 italic text-xs text-center">
        * Propuesta inicial — será formalizada por el equipo.
      </p>
    </section>
    </Reveal>
  );
}
