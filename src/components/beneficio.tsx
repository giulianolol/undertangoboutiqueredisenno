export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="py-20 px-6 md:px-12 text-center text-gray-200"
    >
      <h2 className="text-4xl font-display font-bold text-utc-red mb-16 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
        Beneficios para holders
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-6xl mx-auto">
        {[
          "Acceso anticipado y precios preferenciales en shows.",
          "Descuentos en clases grupales o privadas de tango.",
          "Lanzamientos exclusivos de la línea de moda UnderTango.",
          "Invitaciones a eventos VIP y experiencias únicas.",
          "Participación en decisiones artísticas y de producción.",
        ].map((text, i) => (
          <div
            key={i}
            className="
              p-6 rounded-xl 
              bg-black/40 
              border border-white/5 
              backdrop-blur-xl 
              shadow-[0_0_10px_rgba(0,0,0,0.4)]
              transition-all duration-300 ease-out
              transform-gpu
              opacity-0
              animate-[fadeUp_0.7s_ease-out_forwards]
              hover:scale-[1.06]
              hover:shadow-[0_0_25px_rgba(255,0,0,0.45)]
              hover:border-red-800/40
            "
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <p className="text-base leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-gray-400 italic text-sm">
        * Propuesta inicial — será formalizada por el equipo.
      </p>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
