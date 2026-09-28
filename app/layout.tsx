import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

// viewportFit "cover" lets the page run under the iOS status bar so the fixed
// nav can paint it white; the nav adds env(safe-area-inset-top) as padding
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
      <body>
        {children}
        <div className="swiss-grid"><div /><div /><div /><div /></div>
        {/* Safari 26 tints the status bar from a solid fixed element at the top
            (≤4px from the top, ≥80% wide, ≥3px tall, opaque background, no
            opacity < 1). Without one it lets scrolled content show through.
            This strip qualifies on every page and sits above the noise overlay. */}
        <div aria-hidden className="status-bar-tint" />
      </body>
    </html>
  );
}
