"use client";

import { motion } from "framer-motion";
import Background from "./components/Background";

const links = [
  { label: "GitHub", href: "https://github.com/mihai-max", external: true },
  { label: "Discord", href: "https://discord.gg/X9MBpHEMwQ", external: true },
  { label: "Email", href: "mailto:tckp@duck.com", external: false },
];

const cards = [
  {
    title: "Who am I?",
    body: "A tech enthusiast who programs for fun.",
  },
  {
    title: "Where am I?",
    body: "Romanian — I grew up in Singapore and now live in Munich, Germany.",
  },
  {
    title: "What is this?",
    body: "A personal corner of the web, built and tinkered with for the joy of it.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <Background />

      <main className="content">
        <motion.section
          className="hero"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="name" variants={item}>
            Mihai Laudat
          </motion.h1>

          <motion.p className="tagline" variants={item}>
            Tech enthusiast &amp; hobbyist programmer
          </motion.p>

          <motion.nav className="buttons" variants={item}>
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="button"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        </motion.section>

        <motion.section
          className="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.h2 variants={item}>About me</motion.h2>

          <div className="cards">
            {cards.map((card) => (
              <motion.article
                key={card.title}
                className="card"
                variants={item}
                whileHover={{ y: -6 }}
              >
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </motion.article>
            ))}
          </div>

          <motion.p className="easter" variants={item}>
            Found the easter egg?{" "}
            <a href="/dino.html">Try to beat my dino high score of 2394.</a>
          </motion.p>
        </motion.section>
      </main>
    </>
  );
}
