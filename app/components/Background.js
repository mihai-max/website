"use client";

import { motion } from "framer-motion";

// Animated aurora blobs that drift behind the content. Pure CSS transforms,
// so it stays light and works fine on a static GitHub Pages export.
const blobs = [
  { className: "blob blob-a", x: [0, 40, -20, 0], y: [0, -30, 20, 0], d: 18 },
  { className: "blob blob-b", x: [0, -50, 30, 0], y: [0, 40, -20, 0], d: 22 },
  { className: "blob blob-c", x: [0, 30, -40, 0], y: [0, -20, 30, 0], d: 26 },
];

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={b.className}
          animate={{ x: b.x, y: b.y }}
          transition={{
            duration: b.d,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="bg-grid" />
    </div>
  );
}
