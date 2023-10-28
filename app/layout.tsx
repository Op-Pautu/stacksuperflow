/* eslint-disable camelcase */
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "StackSuperFlow",
  description: `StackSuperflow - Your ultimate destination for programming questions and answers. Get expert insights, share knowledge, and solve coding challenges. 
     Join our community of developers and elevate your programming skills with StackSuperflow.`,
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: "primary-gradient",
            footerActionLink: "primary-text-gradient hover:text-primary-500",
          },
        }}
      >
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
