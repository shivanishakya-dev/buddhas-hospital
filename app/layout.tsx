import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingAction } from "@/components/ui/FloatingAction";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StructuredData } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const BASE_URL = "https://buddhashospital.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Buddha's Hospital | Compassionate Care, Advanced Medicine",
    template: "%s | Buddha's Hospital",
  },
  description: "Buddha's Hospital provides world-class healthcare with state-of-the-art technology and compassionate medical expertise. Book your appointment today.",
  keywords: ["hospital", "healthcare", "medical center", "buddha's hospital", "doctor appointment", "cardiology", "neurology", "orthopedics"],
  authors: [{ name: "Buddha's Hospital" }],
  creator: "Buddha's Hospital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Buddha's Hospital | Compassionate Care, Advanced Medicine",
    description: "World-class healthcare with a human touch. Experience the next generation of medical excellence.",
    siteName: "Buddha's Hospital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buddha's Hospital Exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddha's Hospital | Compassionate Care, Advanced Medicine",
    description: "World-class healthcare with a human touch. Experience the next generation of medical excellence.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50`} suppressHydrationWarning>
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingAction />
        <StructuredData />
      </body>
    </html>
  );
}

