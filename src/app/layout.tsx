import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import PageTransition from "@/components/page-transition";
import StairTransition from "@/components/stair-transition";
import Footer from "@/components/footer";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Quilion Oliveira | Desenvolvedor Frontend",
  description:
    "Portfólio profissional de Quilion Oliveira - Desenvolvedor Frontend especializado em React, Next.js e interfaces modernas",
  keywords: [
    "desenvolvedor frontend",
    "react",
    "next.js",
    "typescript",
    "portfolio",
    "quilion oliveira",
  ],
  authors: [{ name: "Quilion Oliveira" }],
  openGraph: {
    title: "Quilion Oliveira | Desenvolvedor Frontend",
    description:
      "Desenvolvedor Frontend especializado em criar experiências digitais modernas e responsivas",
    url: "https://quilportfolio.vercel.app",
    siteName: "Portfolio de Quilion Oliveira",
    images: [
      {
        url: "/quilion.png",
        width: 1200,
        height: 630,
        alt: "Quilion Oliveira - Desenvolvedor Frontend",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          jetBrainsMono.className,
          "max-w-screen box-border flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-background",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <StairTransition />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
