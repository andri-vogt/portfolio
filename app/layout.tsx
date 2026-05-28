import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F7F7",
};

export const metadata: Metadata = {
  title: "Andri Vogt",
  description:
    "Portfolio of Andri Vogt — independent designer and developer working out of Vaduz on quiet interfaces, editorial systems, and small command-line tools.",
  openGraph: {
    title: "Andri Vogt",
    description:
      "Portfolio of Andri Vogt — independent designer and developer working out of Vaduz on quiet interfaces, editorial systems, and small command-line tools.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body>{children}<div className="swiss-grid"><div /><div /><div /><div /></div></body>
    </html>
  );
}
