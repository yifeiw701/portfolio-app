"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 dark:bg-gray-900 scrollbar scrollbar-thin scrollbar-thumb-orange-300 ">
        <ThemeProvider attribute="class">
          <Navbar />
          <div />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
