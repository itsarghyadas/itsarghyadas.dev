import type { Metadata } from "next";
import type { Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Perosnal Portfolio",
    "UI/UX",
    "Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Dark mode",
  ],
  authors: [
    {
      name: "Arghya",
      url: "https://www.itsarghyadas.dev",
    },
  ],
  creator: "itsarghyadas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@itsarghyadas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="font-cabinet" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
