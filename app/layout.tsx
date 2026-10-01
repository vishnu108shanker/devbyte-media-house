import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#06080f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devbyte-media-house.vercel.app"),
  title: { default: "DEVLAR — DevByte Media House", template: "%s | DEVLAR" },
  description:
    "An autonomous media system for discovering, understanding, generating, and publishing technical developer content across YouTube, Instagram, and Facebook.",
  keywords: ["DEVLAR","DevByte","DevByte Media House","Autonomous Newsroom","Remotion","Gemini AI","Developer Automation","Video Engineering"],
  authors: [{ name: "Vishnu Shanker Mishra" }],
  creator: "Vishnu Shanker Mishra",
  icons: { icon: "/devlar-icon.png", apple: "/devlar-icon.png" },
  openGraph: {
    type:"website", locale:"en_US",
    url:"https://devbyte-media-house.vercel.app",
    title:"DEVLAR — DevByte Media House",
    description:"An autonomous media system for discovering, understanding, generating, and publishing technical content on autopilot.",
    siteName:"DEVLAR",
    images:[{ url:"/devlar-icon.png", width:1024, height:1024, alt:"DEVLAR" }],
  },
  twitter:{ card:"summary_large_image", title:"DEVLAR — DevByte Media House", description:"Autonomous developer content — discovered, edited, and published by AI.", images:["/devlar-icon.png"] },
  robots:{ index:true, follow:true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}>
      <head>
        {/* Theme flicker prevention — runs before first paint */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try{
              var s=localStorage.getItem('devlar-theme');
              if(s==='light') document.documentElement.classList.add('light');
              else if(s==='system' && window.matchMedia('(prefers-color-scheme:light)').matches)
                document.documentElement.classList.add('light');
            }catch(e){}
          })();
        `}} />
      </head>
      <body className="min-h-dvh flex flex-col antialiased">
        {/* Reading progress bar */}
        <div id="scroll-progress-bar" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
