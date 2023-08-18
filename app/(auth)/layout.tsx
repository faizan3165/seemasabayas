import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seemasabayas",
  description: "Online Store For Abayas & Modest Dresses",
  icons: {
    icon: "/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          className={`${inter.className} main-container`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
