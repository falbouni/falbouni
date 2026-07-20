import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://falbouni.com"), // Replace once your domain is live

  title: {
    default: "Falbouni Productions",
    template: "%s | Falbouni Productions",
  },

  description:
    "Cinematic storytelling for Web3. Original scores, cinematic visuals, and narrative-driven campaigns that people remember.",

  keywords: [
    "Web3",
    "Crypto",
    "Marketing",
    "Creative Studio",
    "Video Production",
    "Cinematic",
    "Branding",
    "Storytelling",
    "Falbouni Productions",
  ],

  authors: [
    {
      name: "Falbouni Productions",
    },
  ],

  creator: "Falbouni Productions",
  publisher: "Falbouni Productions",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://YOUR-DOMAIN.com",
    siteName: "Falbouni Productions",

    title: "Falbouni Productions",

    description:
      "Cinematic storytelling for Web3. Original scores, cinematic visuals, and narrative-driven campaigns.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Falbouni Productions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Falbouni Productions",

    description:
      "Cinematic storytelling for Web3. Original scores, cinematic visuals, and narrative-driven campaigns.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}