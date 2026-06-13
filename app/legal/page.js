import Background from "../components/Background";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Legal & Policy — LAUDAT",
  description:
    "Terms of Service, Privacy Policy, and Acceptable Use Policy for the LAUDAT services.",
};

const docs = [
  {
    href: "/legal/terms/",
    tag: "Agreement",
    title: "Terms of Service",
    body: "The terms under which the LAUDAT services are made available.",
  },
  {
    href: "/legal/privacy/",
    tag: "Privacy",
    title: "Privacy Policy",
    body: "What data is processed, why, and the rights you have under the GDPR.",
  },
  {
    href: "/legal/acceptable-use/",
    tag: "Network",
    title: "Acceptable Use Policy",
    body: "The rules that govern use of the LAUDAT network and self-hosted services.",
  },
];

export default function LegalIndex() {
  return (
    <>
      <Background />
      <Nav />
      <main className="legal">
        <a className="back-link" href="/">
          ← Back to LAUDAT
        </a>
        <h1>Legal &amp; Policy</h1>
        <p className="legal-meta">Documentation governing the LAUDAT services.</p>
        <p className="lead">
          LAUDAT runs a self-hosted platform for a small, invite-only group of
          users. These documents set out how the services work, how data is
          handled, and what is and isn&apos;t allowed on the network.
        </p>

        <div className="cards" style={{ marginTop: "32px" }}>
          {docs.map((d) => (
            <a key={d.href} href={d.href} className="card-wrap" style={{ textDecoration: "none" }}>
              <div className="card">
                <span className="card-tag">{d.tag}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="legal-note">
          These policies are provided for the LAUDAT self-hosted services. They
          are written in good faith but are not legal advice. Questions:{" "}
          <a href="mailto:tckp@duck.com">tckp@duck.com</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
