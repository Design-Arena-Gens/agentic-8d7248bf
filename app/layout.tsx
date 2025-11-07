import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ weight: ["600","700"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Murad Khan ? IT Solutions Expert & Developer",
  description: "Professional portfolio of Murad Khan: IT solutions, full?stack development, automation, and AI integration.",
  metadataBase: new URL("https://agentic-8d7248bf.vercel.app"),
  openGraph: {
    title: "Murad Khan ? Building Smarter Systems for the Digital Age",
    description: "IT solutions expert and developer specializing in modern web systems, automation, and on?demand AI integration.",
    url: "https://agentic-8d7248bf.vercel.app",
    siteName: "Murad Khan Portfolio",
    locale: "en_PK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Murad Khan ? IT Solutions Expert & Developer",
    description: "Modern web systems, automation, and AI integration on demand.",
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
