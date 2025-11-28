import Header from "../components/header";
import Hero from "../components/hero";
import Historia from "../components/historia";
import QueHacemos from "../components/quehacemos";
import Ecosistema from "../components/ecosistema";
import Beneficios from "../components/beneficio";
import Contacto from "../components/contacto";
import Footer from "../components/footer";
import PriceTicker from "../components/priceticker";
import Reveal from "@/components/reveal";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Reveal direction="down" intensity={120} parallax>
        <section id="valor" className="py-20 text-center bg-black border-t border-red-900/20">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Valor en tiempo real</h2>
          <p className="text-gray-400 mb-6">Datos actualizados cada 5 segundos.</p>
          <PriceTicker />
        </section>
        </Reveal>
        <Historia />
        <QueHacemos />
        <Ecosistema />
        <Beneficios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
