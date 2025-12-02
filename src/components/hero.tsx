"use client";
import { motion } from "framer-motion";
import Reveal from "./reveal";
import "../styles/hero.css";

export default function Hero() {
  return (
    <Reveal direction="down" intensity={100} parallax>
      <section className="hero-section">
        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="hero-title">UnderTangoCoin</h1>

          <p className="hero-subtitle">Más que una Cripto.</p>

          <div className="hero-buttons">{/* botones si después querés */}</div>
        </motion.div>
      </section>
    </Reveal>
  );
}
