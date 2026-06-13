import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mihai.laudat.org"),
  title: "Mihai Laudat",
  description:
    "Mihai Laudat — tech enthusiast and hobbyist programmer based in Munich, Germany.",
  openGraph: {
    title: "Mihai Laudat",
    description:
      "Tech enthusiast and hobbyist programmer based in Munich, Germany.",
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
