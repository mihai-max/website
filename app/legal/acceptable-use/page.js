import Background from "../../components/Background";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Acceptable Use Policy — LAUDAT",
  description:
    "The rules that govern use of the LAUDAT network and self-hosted services.",
};

export default function AcceptableUse() {
  return (
    <>
      <Background />
      <Nav />
      <main className="legal">
        <a className="back-link" href="/legal/">
          ← Legal &amp; Policy
        </a>
        <h1>Acceptable Use Policy</h1>
        <p className="legal-meta">Last updated: 13 June 2026</p>

        <p className="lead">
          This policy sets out acceptable use of the LAUDAT network and
          self-hosted services. It applies to everyone with access, including
          devices connected to the private mesh network.
        </p>

        <h2>1. Scope</h2>
        <p>
          &ldquo;The network&rdquo; means the LAUDAT mesh and the systems
          reachable through it; &ldquo;the Services&rdquo; means the applications
          provided on it. This policy supplements the{" "}
          <a href="/legal/terms/">Terms of Service</a>.
        </p>

        <h2>2. General expectations</h2>
        <ul>
          <li>Use the network and Services only for their intended purpose.</li>
          <li>Respect access controls; only reach systems you are authorised to use.</li>
          <li>Keep your devices reasonably secure and up to date.</li>
          <li>Use a fair share of shared bandwidth, storage, and compute.</li>
        </ul>

        <h2>3. Prohibited activity</h2>
        <p>You must not use the network or Services to:</p>
        <ul>
          <li>break any applicable law, or infringe others&apos; rights;</li>
          <li>
            gain unauthorised access to systems, accounts, or data, or bypass
            authentication or access-control lists;
          </li>
          <li>
            scan, probe, or attack systems — whether inside the network or on the
            wider internet — without explicit authorisation;
          </li>
          <li>
            distribute malware, send spam, or carry out phishing or other abuse;
          </li>
          <li>
            host or distribute material that is illegal or that you have no right
            to share;
          </li>
          <li>
            deliberately overload, disrupt, or degrade the network or Services.
          </li>
        </ul>

        <h2>4. Security &amp; reporting</h2>
        <p>
          The network is monitored for security and stability, including
          intrusion detection and traffic analysis. If you discover a
          vulnerability or misuse, report it promptly to{" "}
          <a href="mailto:tckp@duck.com">tckp@duck.com</a> rather than exploiting
          or publicising it.
        </p>

        <h2>5. Enforcement</h2>
        <p>
          Breaching this policy may lead to throttling, suspension, or permanent
          removal of access, with no notice where necessary to protect the
          network or other users. Serious or unlawful activity may be reported to
          the relevant authorities.
        </p>

        <h2>6. Changes</h2>
        <p>
          This policy may be updated as the platform evolves. Continued use after
          a change constitutes acceptance of the updated policy.
        </p>

        <p className="legal-note">
          Provided for the LAUDAT self-hosted services in good faith. This is not
          legal advice.
        </p>
      </main>
      <Footer />
    </>
  );
}
