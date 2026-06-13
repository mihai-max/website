// Animated aurora background. Pure CSS keyframes (see globals.css) so it works
// without any client-side JavaScript.
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />
      <div className="bg-grid" />
    </div>
  );
}
