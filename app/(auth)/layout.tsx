import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import React from "react";

import "../globals.css";

export const metadata = {
  title: "Conquiz",
  description: "Convert your file to Quiz",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensures font doesn't cause layout shifts
  variable: "--font-inter", // Use CSS variable instead of className
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#FAFCFB]`}>
          <div className="w-full h-screen flex justify-center items-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
