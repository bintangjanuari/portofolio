import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Bebas_Neue } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { MobileFloatingDock } from "@/components/layout/MobileFloatingDock/MobileFloatingDock";
import { profileData } from "@/data/profile";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profileData.name} | ${profileData.title}`,
  description: profileData.bio,
  keywords: [
    "Bintang Al Akbar Januari",
    "Fullstack Developer",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Software Engineer Portfolio",
    "Web Developer Jakarta",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bintang.dev",
    title: `${profileData.name} | ${profileData.title}`,
    description: profileData.bio,
    siteName: `${profileData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | ${profileData.title}`,
    description: profileData.bio,
    creator: "@bintangjanuari",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${bebasNeue.variable}`}
    >
      <body>
        <Providers>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileFloatingDock />
        </Providers>
      </body>
    </html>
  );
}

