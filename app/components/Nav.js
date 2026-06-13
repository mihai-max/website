const sections = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="nav">
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
    </header>
  );
}
