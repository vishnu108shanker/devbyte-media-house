import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devbyte-media-house.vercel.app"),
  title: {
    default: "DEVLAR — DevByte Media House",
    template: "%s | DEVLAR",
  },
  description:
    "An autonomous media system for discovering, understanding, generating, and publishing technical developer content across YouTube, Instagram, and Facebook.",
  keywords: [
    "DEVLAR",
    "DevByte",
    "DevByte Media House",
    "Autonomous Newsroom",
    "Remotion",
    "Gemini AI",
    "Developer Automation",
    "Video Engineering",
  ],
  authors: [{ name: "DevByte Team" }],
  creator: "DevByte Media House",
  icons: {
    icon: "/devlar-icon.png",
    apple: "/devlar-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devbyte-media-house.vercel.app",
    title: "DEVLAR — DevByte Media House",
    description:
      "An autonomous media system for discovering, understanding, generating, and publishing technical content on autopilot.",
    siteName: "DEVLAR",
    images: [
      {
        url: "/devlar-icon.png",
        width: 1024,
        height: 1024,
        alt: "DEVLAR — DevByte Media House Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVLAR — DevByte Media House",
    description:
      "An autonomous media system for discovering, understanding, generating, and publishing technical content.",
    images: ["/devlar-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-blue-500/20 selection:text-blue-200 font-sans">
        {children}
      </body>
    </html>
  );
}
