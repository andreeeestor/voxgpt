import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import SidebarProvider from "@/data/contexts/SidebarContext";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = Space_Grotesk({  subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

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
        <body className={`${spaceGrotesk.className} antialiased`}>
          <NextTopLoader height={5} color="#6691ff" />
          <Toaster richColors />
          <Providers>
            <SidebarProvider>{children}</SidebarProvider>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
