import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

import Header from "@/components/navigation/header/Header";
import Footer from "@/components/footer/Footer";

import CartProvider from "@/provider/CartProvider";

import "../globals.css";

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
        <body suppressHydrationWarning={true}>
          <CartProvider>
            <Header />

            <div>{children}</div>

            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
