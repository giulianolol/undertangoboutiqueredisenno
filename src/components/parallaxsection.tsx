"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -120]); // velocidad del parallax

  return (
    <motion.section
      style={{ backgroundImage: `url(${bg})`, y }}
      className="bg-cover bg-center bg-fixed py-32 px-6 md:px-12 text-gray-200"
    >
      {children}
    </motion.section>
  );
}
