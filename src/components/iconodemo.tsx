import Reveal from "./reveal";
import Image from "next/image";

export default function IconoDemo() {
  return (
    <Reveal>
      <div className="py-20 bg-utc-black flex flex-col items-center">
        <Image
          src="/imgs/NuestraPasionIcon.png"
          alt="Icono UnderTango"
          width={160}
          height={160}
          className="mb-6 opacity-90"
        />

        <h3 className="text-3xl font-bold text-white mb-2">
          Nuestra Pasión
        </h3>

        <p className="text-gray-300 text-lg max-w-xl text-center">
          Esto es un ejemplo de cómo podés usar el ícono en una sección
          animada que aparece con Reveal.
        </p>
      </div>
    </Reveal>
  );
}
