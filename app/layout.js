import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mihai.laudat.org"),
  title: "LAUDAT — Mihai Laudat",
  description:
    "LAUDAT is Mihai Laudat's production practice and self-hosted infrastructure stack in Munich — film and aerial video, a full self-hosted platform, and the policies that govern it.",
  openGraph: {
    title: "LAUDAT — Mihai Laudat",
    description:
      "Production, self-hosted infrastructure, and policy. Built and run by Mihai Laudat in Munich.",
    url: "https://mihai.laudat.org",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#05060f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
