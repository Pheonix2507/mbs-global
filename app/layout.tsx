import type { Metadata, Viewport } from "next";
import { Work_Sans, Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const zalandoSans = Zalando_Sans_Expanded({
  variable: "--font-zalando-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#D699FF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mbsglobal.io"),
  title: {
    default: "MBS Global - Build Distributed Teams Faster",
    template: "%s | MBS Global",
  },
  description:
    "MBS Global empowers enterprises to build high-performing distributed teams, streamline operations, and drive business transformation worldwide.",
  keywords: [
    "Distributed Teams",
    "Workforce Transformation",
    "Enterprise Solutions",
    "Global Talent Acquisition",
    "Business Strategy Consulting",
    "Remote Team Building",
    "MBS Global",
    "Staff Augmentation",
    "Digital Transformation",
  ],
  applicationName: "MBS Global",
  authors: [{ name: "MBS Global Team" }],
  publisher: "MBS Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-IN": "/en-IN",
    },
  },
  openGraph: {
    title: "MBS Global - Build Distributed Teams Faster",
    description:
      "MBS Global empowers enterprises to build high-performing distributed teams, streamline operations, and drive business transformation worldwide.",
    url: "https://mbsglobal.io",
    siteName: "MBS Global",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MBS Global logo with professionals collaborating in a modern workspace and a digital global map connecting enterprise talent.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBS Global - Build Distributed Teams Faster",
    description:
      "MBS Global empowers enterprises to build high-performing distributed teams, streamline operations, and drive business transformation worldwide.",
    images: ["/og-image.png"],
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

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth overflow-x-hidden"
      suppressHydrationWarning
    >
      <body
        className={`${workSans.variable} ${zalandoSans.variable} antialiased transition-colors duration-300 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
