import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
