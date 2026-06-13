"use client";

import { motion } from "framer-motion";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";

const links = [
  { label: "GitHub", href: "https://github.com/mihai-max", external: true },
  { label: "Discord", href: "https://discord.gg/X9MBpHEMwQ", external: true },
  { label: "Email", href: "mailto:tckp@duck.com", external: false },
];

const interests = [
  { icon: "🎬", title: "Film & Drone", body: "Filmmaking and aerial videography with a DJI Mini 3." },
  { icon: "✈️", title: "Aviation", body: "General aviation and working toward pilot training." },
  { icon: "🤿", title: "Scuba Diving", body: "Exploring underwater whenever I get the chance." },
  { icon: "⛳", title: "Golf", body: "Out on the course in and around Munich." },
  { icon: "🖋️", title: "Fountain Pens", body: "A soft spot for ink and good paper." },
  { icon: "🎮", title: "Gaming", body: "Unwinding with a good game." },
];

const heroContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <Background />
      <Nav />

      <main id="top" className="content">
        {/* Hero */}
        <motion.section
          className="hero"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p className="eyebrow" variants={heroItem}>
            Munich, Germany · roots in Romania
          </motion.p>
          <motion.h1 className="name" variants={heroItem}>
            Mihai Laudat
          </motion.h1>
          <motion.p className="tagline" variants={heroItem}>
            Student · Builder · Filmmaker
          </motion.p>
          <motion.nav className="buttons" variants={heroItem}>
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

        {/* About */}
        <section id="about" className="section">
          <Reveal>
            <h2 className="section-title">About</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              I&apos;m a student at the Lion-Feuchtwanger-Gymnasium in Munich,
              with family roots in Romania. I split my time between building
              software, making films, and running the infrastructure behind it
              all — and I share my home with a very good dog.
            </p>
          </Reveal>
        </section>

        {/* Interests */}
        <section id="interests" className="section">
          <Reveal>
            <h2 className="section-title">Off the clock</h2>
          </Reveal>
          <div className="grid">
            {interests.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 0.08} className="card-wrap">
                <motion.div className="tile" whileHover={{ y: -5 }}>
                  <span className="tile-icon">{it.icon}</span>
                  <h4>{it.title}</h4>
                  <p>{it.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <Reveal>
            <h2 className="section-title">Get in touch</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="buttons">
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
            </div>
          </Reveal>
        </section>

        <footer className="footer">
          <p>
            Supporting{" "}
            <a
              href="https://www.pancan.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pancreatic cancer awareness
            </a>
            .
          </p>
          <p className="footer-egg">
            <a href="/dino.html">Found the easter egg? Beat my dino score: 2394.</a>
          </p>
          <p className="footer-copy">© {new Date().getFullYear()} Mihai Laudat · LAUDAT</p>
        </footer>
      </main>
    </>
  );
}
