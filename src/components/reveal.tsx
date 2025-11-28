"use client";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale";
  delay?: number;
  once?: boolean;
  amount?: number;
  parallax?: boolean;
  intensity?: number;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  once = false,
  amount = 0.3,
  parallax = true,
  intensity = 40,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount });
  const controls = useAnimation();

  const parallaxValue = parallax ? intensity : 0;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: direction === "scale" ? 0.6 : 1,
      filter: "blur(12px)",
      x:
        direction === "left" ? -parallaxValue :
        direction === "right" ? parallaxValue : 0,
      y:
        direction === "up" ? parallaxValue :
        direction === "down" ? -parallaxValue : 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay,
      },
    },
    parallaxFloat: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      if (parallax) controls.start("parallaxFloat");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [inView, once, parallax, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  );
}
