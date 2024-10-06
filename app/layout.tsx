import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Quiosco Food | Next.js TypeScript Prisma",
  description: "Order and delivery food",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
