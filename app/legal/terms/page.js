import Background from "../../components/Background";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Service — LAUDAT",
  description: "The terms under which the LAUDAT services are made available.",
};

export default function Terms() {
  return (
    <>
      <Background />
      <Nav />
      <main className="legal">
        <a className="back-link" href="/legal/">
          ← Legal &amp; Policy
        </a>
        <h1>Terms of Service</h1>
        <p className="legal-meta">Last updated: 13 June 2026</p>

        <p className="lead">
          These Terms govern access to and use of the self-hosted services
          operated under the LAUDAT name (the &ldquo;Services&rdquo;). By using
          the Services you agree to these Terms.
        </p>

        <h2>1. The Services</h2>
        <p>
          LAUDAT operates a private, self-hosted platform — including identity,
          networking, media, automation, and related applications — for a small,
          invite-only group of users. The Services are provided on a best-effort
          basis and may change, be interrupted, or be discontinued at any time.
        </p>

        <h2>2. Eligibility &amp; accounts</h2>
        <p>
          Access is granted by invitation. Authentication is handled through
          single sign-on, and you are responsible for keeping your credentials
          secure and for activity carried out under your account. Accounts may
          not be shared or transferred without permission.
        </p>

        <h2>3. Acceptable use</h2>
        <p>
          Your use of the Services is subject to the{" "}
          <a href="/legal/acceptable-use/">Acceptable Use Policy</a>, which is
          incorporated into these Terms by reference. Breaching that policy is a
          breach of these Terms.
        </p>

        <h2>4. Availability</h2>
        <p>
          The Services are provided without any service-level guarantee. There
          may be downtime for maintenance, hardware or network failures, or other
          reasons. No uptime, performance, or data-durability commitment is made,
          and you are responsible for keeping your own backups of anything you
          care about.
        </p>

        <h2>5. Intellectual property</h2>
        <p>
          The LAUDAT name and branding belong to Mihai Laudat. Content you
          upload remains yours; you grant only the limited rights needed to
          operate the Services (for example, storing and serving your files back
          to you). Third-party software used within the platform remains subject
          to its own licences.
        </p>

        <h2>6. Disclaimers</h2>
        <p>
          The Services are provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo;, without warranties of any kind, whether express or
          implied, to the fullest extent permitted by law.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, LAUDAT and Mihai Laudat are
          not liable for any indirect, incidental, or consequential damages, or
          for loss of data, arising from your use of or inability to use the
          Services.
        </p>

        <h2>8. Suspension &amp; termination</h2>
        <p>
          Access may be suspended or withdrawn at any time, including for breach
          of these Terms or the Acceptable Use Policy. You may stop using the
          Services at any time and request removal of your account.
        </p>

        <h2>9. Changes</h2>
        <p>
          These Terms may be updated from time to time. Material changes will be
          communicated to active users where reasonably possible, and continued
          use after a change constitutes acceptance of the updated Terms.
        </p>

        <h2>10. Governing law</h2>
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Germany, without regard to conflict-of-law rules. The place of
          jurisdiction is Munich, to the extent permitted by law.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href="mailto:tckp@duck.com">tckp@duck.com</a>.
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
