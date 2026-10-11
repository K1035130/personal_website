import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import InkBackground from "@/components/background/InkBackground";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 标题用衬线体；中文会回落到系统宋体（见 globals.css 的 --font-serif）
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <InkBackground />
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-14 sm:py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
