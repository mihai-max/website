import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mihai.laudat.org"),
  title: "Mihai Laudat — LAUDAT",
  description:
    "Mihai Laudat — student, builder, and filmmaker in Munich. Co-founder of KEEL and creator of the LAUDAT brand spanning production, film, and self-hosted infrastructure.",
  openGraph: {
    title: "Mihai Laudat — LAUDAT",
    description:
      "Student, builder, and filmmaker in Munich. Co-founder of KEEL; creator of LAUDAT.",
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
