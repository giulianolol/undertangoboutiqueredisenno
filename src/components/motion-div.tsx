"use client";
import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionDiv = ({ children, className, ...rest }: MotionDivProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);
