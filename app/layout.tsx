import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://meikopoulos.com"),
  alternates: {
    canonical: "https://meikopoulos.com",
  },
  title: "Tejaswi Pemmasani - Java Full-Stack Developer,Software Engineer",
  description:
    "Tejaswi Pemmasani is a Java Full-Stack Developer,Software Engineer and Cloud Engineer.",
  keywords:
    "Alexander Meikopoulos, Product Designer, AI, Web3, Finance, User Experience, UI/UX Design, Design Systems, Front-end Development, Decentralized Finance, DeFi, Swoop Exchange, Vela Exchange, Stealth AI Startup, Technology, Innovation, Human-Centered Design",
  openGraph: {
    locale: "en_US",
    siteName: "Alexander Meikopoulos",
    type: "website",
    title: "Tejaswi Pemmasani",
    description:
      "Alexander Meikopoulos is a Product designer, developer & founder.",
    url: "https://www.linkedin.com/in/tejaswi-pemmasani/",
    images: [
      {
        url: "./og-large-meik-2.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Meikopoulos",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
