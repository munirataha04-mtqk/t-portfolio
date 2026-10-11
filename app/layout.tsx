import type { Metadata } from "next";
import { Cormorant_Garamond, Mrs_Saint_Delafield, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const delafield = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delafield",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tasneem Ghatila | Content Creator",
  description: "Turning ideas into stories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${delafield.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}