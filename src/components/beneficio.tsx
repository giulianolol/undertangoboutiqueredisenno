import Reveal from "./reveal";
import "../styles/beneficio.css";

export default function Beneficios() {
  const items = [
    {
      title: "Acceso anticipado",
      text: "Ingresá antes que todos y obtené precios preferenciales en shows exclusivos.",
    },
    {
      title: "Descuentos en clases",
      text: "Beneficios en clases grupales o privadas para seguir creciendo en el tango.",
    },
    {
      title: "Moda exclusiva",
      text: "Acceso temprano a lanzamientos de Moda UnderTango que no se venden al público general.",
    },
    {
      title: "Eventos VIP",
      text: "Invitaciones especiales a experiencias únicas solo para holders.",
    },
    {
      title: "Participación artística",
      text: "Tu voto influye en decisiones creativas, shows y producciones futuras.",
    },
    {
      title: "Experiencia UnderTango",
      text: "Viví la marca desde adentro, con regalos, sorpresas y trato prioritario.",
    },
  ];

  return (
    <Reveal direction="up" intensity={120} parallax>
      <section id="beneficios" className="b-section">
        <h2 className="b-title">Beneficios para holders</h2>

        <div className="b-grid">
          {items.map((item, i) => (
            <div key={i} className="b-card">
              <h3 className="b-card-title">{item.title}</h3>
              <p className="b-card-text">{item.text}</p>
              <div className="b-card-line" />
            </div>
          ))}
        </div>

        <p className="b-note">
          * Propuesta inicial — será formalizada por el equipo.
        </p>
      </section>
    </Reveal>
  );
}
