import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeConfig } from "stx/theme";
import { Providers } from "./components/Providers/Providers.client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Trading by RS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeConfig>
          <Providers>{children}</Providers>
        </ThemeConfig>
      </body>
    </html>
  );
}
