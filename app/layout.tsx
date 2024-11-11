import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
  description: "create by poowanate nopparat",
};

import { Nav } from '@/app/ui/nav'
 


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
         <UserProvider>

        
        <Nav />
        <p className="mt-5"></p>
        <div className="text-black py-12 px-6 md:px-12">
        {children}
        </div>
        </UserProvider>
      </body>
    </html>
  );
}
