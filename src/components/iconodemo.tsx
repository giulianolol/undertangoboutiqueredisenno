import Reveal from "./reveal";
import Image from "next/image";

export default function IconoDemo() {
  return (
    <Reveal>
      <div className="icono-demo">
        <Image
          src="/imgs/NuestraPasionIcon.png"
          alt="Icono UnderTango"
          width={160}
          height={160}
          className="icono-demo__img"
        />

        <h3 className="icono-demo__title">Nuestra Pasión</h3>

        <p className="icono-demo__text">
          Esto es un ejemplo de cómo podés usar el ícono en una sección
          animada que aparece con Reveal.
        </p>
      </div>
    </Reveal>
  );
}
