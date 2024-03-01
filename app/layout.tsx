import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter", 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Hackathon Management Suite",
  description: "Hackathon Management Suite is a suite of tools to help you manage your hackathon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
