import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "typeface-montserrat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florlix",
  description: "Florlix ist das Schweizer Finanztool für Freelancer – modern, übersichtlich und auf deine Bedürfnisse zugeschnitten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
