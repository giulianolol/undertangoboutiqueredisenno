"use client";
import { motion } from "framer-motion";
import Reveal from "./reveal";

export default function Hero() {
  return (
    <Reveal direction="down" intensity={100} parallax>
    <section
      className="hero-parallax h-screen flex items-center justify-center relative"
      
    >
      <div className="absolute inset-0 bg-black/65" />
      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-6xl font-display font-bold text-utc-red mb-4">UnderTangoCoin</h1>
        <p className="text-gray-300 text-lg mb-8">
          Más que una Cripto.
        </p>

        <div className="flex items-center justify-center gap-4">
          {/* <a href="#buy" className="inline-block bg-utc-red px-8 py-3 rounded-xl font-semibold shadow-lg">Comprar ahora</a>
          <a href="#valor" className="inline-block border border-gray-700 px-5 py-3 rounded-xl text-sm">Ver valor en tiempo real</a> */}
        </div>
      </motion.div>
    </section>
    </Reveal>
  );
}
