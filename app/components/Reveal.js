"use client";

import { motion } from "framer-motion";

// Scroll-triggered reveal wrapper. Children fade and slide up once when they
// enter the viewport. Pass `delay` to stagger sibling reveals.
export default function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
