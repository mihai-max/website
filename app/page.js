"use client";

import { motion } from "framer-motion";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

const heroLinks = [
  { label: "GitHub", href: "https://github.com/mihai-max", external: true },
  { label: "Email", href: "mailto:tckp@duck.com", external: false },
  { label: "Explore the stack", href: "#stack", external: false },
];

const pillars = [
  {
    kicker: "01 — Production",
    title: "Film, aerial & web",
    body: "Concept-to-delivery production: on-location and aerial cinematography with a DJI Mini 3, handled with the flight approvals and liability paperwork real shoots require — plus the web pieces that ship alongside them, from study guides to literary-analysis microsites and interactive learning tools.",
  },
  {
    kicker: "02 — Infrastructure",
    title: "A self-hosted platform",
    body: "Identity, mesh networking, media, video, automation, DNS, routing, local AI, and deep packet inspection — designed, deployed, and monitored across home hardware and rented servers in Germany and Romania.",
  },
  {
    kicker: "03 — Policy",
    title: "Governance & documentation",
    body: "The Terms of Service, Privacy Policy, and Acceptable Use rules that set expectations for everyone using the LAUDAT services — written to keep a self-hosted platform accountable.",
    link: { label: "Read the policies →", href: "/legal/" },
  },
];

const stack = [
  { kicker: "Identity", name: "authentik", body: "Single sign-on and OIDC in front of every service." },
  { kicker: "Networking", name: "Headscale + Headplane", body: "A private WireGuard mesh with ACL-based access control." },
  { kicker: "Edge", name: "pfSense · Netgate 6100", body: "Routing and firewalling on dedicated hardware." },
  { kicker: "Proxy & DNS", name: "NPMplus · AdGuard Home", body: "Reverse proxy with network-wide DNS filtering." },
  { kicker: "Video", name: "Frigate · go2rtc", body: "NVR on an Intel N100 with OpenVINO/VAAPI; H.265→H.264 restreaming." },
  { kicker: "Media", name: "Jellyfin", body: "A self-hosted media library." },
  { kicker: "Automation", name: "Home Assistant", body: "Local-first home and device automation." },
  { kicker: "Local AI", name: "Qwen3 on dual T4", body: "Self-hosted LLMs behind an OpenRouter / Open WebUI gateway." },
  { kicker: "Security", name: "Arkime · Suricata", body: "Full-packet capture and intrusion detection." },
  { kicker: "Hosting", name: "Unraid · IONOS · Hetzner", body: "Edge hardware plus rented servers in the cloud." },
  { kicker: "Routing", name: "ASN & BGP", body: "Working toward independent addressing via a sponsored LIR." },
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
            LAUDAT · Munich, Germany
          </motion.p>
          <motion.h1 className="name" variants={heroItem}>
            Mihai Laudat
          </motion.h1>
          <motion.p className="tagline" variants={heroItem}>
            I build and run LAUDAT — a production practice, a self-hosted
            infrastructure stack, and the policies that keep them accountable.
          </motion.p>
          <motion.nav className="buttons" variants={heroItem}>
            {heroLinks.map((link) => (
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
              I&apos;m a student at the Lion-Feuchtwanger-Gymnasium in Munich.
              Under the LAUDAT name I work across three areas: production —
              planning and shooting film and aerial video and building the web
              pieces that go with it; infrastructure — a self-hosted stack I
              design, run, and secure across home hardware and rented servers in
              Germany and Romania; and policy — the terms, privacy, and
              acceptable-use documents that govern those services. LAUDAT is
              steadily being formalised as a brand and entity.
            </p>
          </Reveal>
        </section>

        {/* Work / pillars */}
        <section id="work" className="section">
          <Reveal>
            <h2 className="section-title">What LAUDAT does</h2>
          </Reveal>
          <div className="cards">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08} className="card-wrap">
                <motion.div className="card" whileHover={{ y: -5 }}>
                  <span className="kicker">{p.kicker}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  {p.link && (
                    <a className="card-link" href={p.link.href}>
                      {p.link.label}
                    </a>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Infrastructure / stack */}
        <section id="stack" className="section">
          <Reveal>
            <h2 className="section-title">The stack</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-intro">
              A self-hosted platform built from open-source parts and run on a
              mix of edge hardware and cloud servers — identity and networking
              at the base, services and local AI on top, with monitoring and
              policy around the edges.
            </p>
          </Reveal>
          <div className="grid">
            {stack.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 0.06} className="card-wrap">
                <motion.div className="tile" whileHover={{ y: -5 }}>
                  <span className="kicker">{s.kicker}</span>
                  <h4>{s.name}</h4>
                  <p>{s.body}</p>
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
            <p className="section-intro">
              For production work, infrastructure questions, or anything about
              the LAUDAT services.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="buttons">
              <motion.a
                href="mailto:tckp@duck.com"
                className="button"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Email
              </motion.a>
              <motion.a
                href="https://github.com/mihai-max"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                GitHub
              </motion.a>
            </div>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
