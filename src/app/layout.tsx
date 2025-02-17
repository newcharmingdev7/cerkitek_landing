import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CerkiTek-IT Solutions Simplified",
  description: `CerkiTek specializes in revitalizing struggling projects, upgrading outdated systems, 
  and creating custom software designed to meet your unique business needs. 
  By prioritizing rapid recovery, smooth transitions, and cutting-edge solutions, 
  we help keep your business efficient and competitive.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta property="og:image:width" content="920" />
        <meta property="og:image:height" content="470" />
        <meta
          property="og:image"
          content={"https://Cerkitek.io/images/jpg/main.jpg"}
        />
      </Head>
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
