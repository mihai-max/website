/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be served from GitHub Pages.
  output: "export",
  // GitHub Pages has no image optimization server.
  images: { unoptimized: true },
  // Emit /about/ instead of /about.html for clean URLs on Pages.
  trailingSlash: true,
};

export default nextConfig;
