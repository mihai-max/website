"use client";

import { motion } from "framer-motion";

const sections = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <a href="#top" className="nav-brand">
        LAUDAT
      </a>
      <nav className="nav-links">
        {sections.map((s) => (
          <a key={s.href} href={s.href}>
            {s.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
