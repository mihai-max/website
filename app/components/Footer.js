// Shared footer used on the landing page and the legal pages. Plain server
// component (no animation) so it can be dropped into server-rendered routes.
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        <a href="/legal/terms/">Terms</a> ·{" "}
        <a href="/legal/privacy/">Privacy</a> ·{" "}
        <a href="/legal/acceptable-use/">Acceptable Use</a>
      </p>
      <p className="footer-copy">
        © {year} Mihai Laudat · LAUDAT · Munich, Germany
      </p>
    </footer>
  );
}
