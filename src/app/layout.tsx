import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import SidebarProvider from "@/data/contexts/SidebarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VoxGPT",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-br" data-theme="dark">
        <body className={`${inter.className} antialiased bodyBackground`}>
          <NextTopLoader height={5} color="#6691ff" />
          <Toaster />
          <SidebarProvider>{children}</SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
