import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface ExtendedMetadata extends Metadata {
  image?: string;
}

export const metadata: ExtendedMetadata = {
  title: "CerkiTek-IT Solutions Simplified",
  description: `CerkiTek helps businesses turn around failing projects, modernize outdated systems, 
      and build custom software tailored to their needs. With a focus on fast recovery, 
      seamless upgrades, and innovative solutions, we ensure your business stays efficient and competitive`,
  image:'/images/jpg/main.jpg',
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
