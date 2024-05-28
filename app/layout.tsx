import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { navItems } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darshan's Portfolio",
  description: "Simple and Informative JS portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-[80rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex  items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>

            <FloatingNav navItems={navItems} />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
