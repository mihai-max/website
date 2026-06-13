// Fade/slide-in wrapper. Uses a CSS animation (see globals.css) that defaults
// to fully visible, so content is never stuck hidden if JS/CSS is unavailable.
export default function Reveal({ children, delay = 0, className }) {
  const cls = className ? `reveal ${className}` : "reveal";
  return (
    <div className={cls} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
