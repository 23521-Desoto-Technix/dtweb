import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { JetBrains_Mono } from 'next/font/google'
import Footer from "./components/Footer";

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "DeSoto Technix",
  description: "Team 23521 DeSoto Technix",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={jetbrains_mono.className + " bg-zinc-900"}
      >
        <div className=" font-JetBrainsMono">
          <Navbar />
          <div className="ml-6 md:mx-[100px] text-white mr-6">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
