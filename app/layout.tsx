// Modified by Steven Phung

import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider"


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CS391 Playlist Generator",
  description: "A website that allows users to randomly generate their own playlists based on a selected genre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistMono.className} bg-[#222831] text-white text-[calc(3px+1vw)]`}
      >
        <ThemeProvider> {/* Steven Phung: Nested Header, children(pages), and Footer for full access to the provider */}
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
