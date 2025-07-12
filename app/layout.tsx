import type { Metadata } from "next";
import {Lato, Playfair_Display } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair_Display = Playfair_Display({
  variable: "--font-heading-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-body-lato",
  subsets: ["latin"],weight:["100","300","400","700","900"]
});

export const metadata: Metadata = {
  title: "The Gilded Fork",
  description: "Experience luxurious dining at The Gilded Fork. Explore our sophisticated menu crafted with the finest ingredients and an exquisite wine list for an unforgettable culinary journey.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair_Display.variable} ${lato.variable} antialiased`}
      >
        <Header />
        <div className="max-w-4/5 mx-auto">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
