import type { Metadata } from "next";
import { Inter } from 'next/font/google';
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
      <head>
      <link rel="icon" href="https://raw.githubusercontent.com/misterdan100/mister-todo-v2/main/src/assets/misterdan-favicon.png" type="image/x-icon" sizes="16x16"/>
      </head>
      <body
        className={`${inter.className} bg-gray-100 antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
