import Background from "./components/Background";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";

const links = [
  { label: "GitHub", href: "https://github.com/mihai-max", external: true },
  { label: "Discord", href: "https://discord.gg/X9MBpHEMwQ", external: true },
  { label: "Email", href: "mailto:tckp@duck.com", external: false },
];

const work = [
  {
    name: "LAUDAT",
    tag: "Production & Film",
    body: "My filmmaking and drone cinematography (DJI Mini 3) — and the brand that ties my creative projects together.",
  },
  {
    name: "Homelab",
    tag: "Self-hosted infrastructure",
    body: "A self-hosted stack I run end to end — networking, identity, media, and home automation, with plenty of late-night debugging.",
  },
];

function Links() {
  return (
    <div className="buttons">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="button"
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Background />
      <Nav />

      <main id="top" className="content">
        {/* Hero */}
        <section className="hero">
          <Reveal delay={0.05}>
            <p className="eyebrow">Munich, Germany · roots in Romania</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="name">Mihai Laudat</h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="tagline">Student · Builder · Filmmaker</p>
          </Reveal>
          <Reveal delay={0.35}>
            <Links />
          </Reveal>
        </section>

        {/* About */}
        <section id="about" className="section">
          <Reveal>
            <h2 className="section-title">About</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              I&apos;m a student at the Lion-Feuchtwanger-Gymnasium in Munich,
              with family roots in Romania. I split my time between building
              software, making films, and tinkering with tech — and I share my
              home with a very good dog.
            </p>
          </Reveal>
        </section>

        {/* Work */}
        <section id="work" className="section">
          <Reveal>
            <h2 className="section-title">What I&apos;m building</h2>
          </Reveal>
          <div className="cards">
            {work.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.1} className="card-wrap">
                <div className="card">
                  <span className="card-tag">{w.tag}</span>
                  <h3>{w.name}</h3>
                  <p>{w.body}</p>
                </div>
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
            <Links />
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
          <p className="footer-copy">© 2026 Mihai Laudat · LAUDAT</p>
        </footer>
      </main>
    </>
  );
}
