// Modified by Steven Phung and Julian Lim Jun Ren

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

{/* Julian Lim Jun Ren: modified website title and description */}
export const metadata: Metadata = {
  title: "CS391 Album Discovery",
  description: "A website that allows users to randomly generate new albums to discover based on a selected genre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistMono.className}`} /* 
                                              Julian Lim Jun Ren: customised default font and background color 
                                              Steven Phung: Removed line because of hydration
                                            */
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
