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
  themeColor: "#FFFFFF",
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
    // browser extensions (e.g. cookie-banner blockers) inject classes on <html>
    // before hydration; suppress only this element's attribute mismatch
    <html lang="en" className={ibmPlexMono.variable} suppressHydrationWarning>
      <body>{children}<div className="swiss-grid"><div /><div /><div /><div /></div></body>
    </html>
  );
}
