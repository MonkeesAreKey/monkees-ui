import type { Metadata } from "next";
import { Comic_Neue, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const comicNeue = Comic_Neue({
  variable: "--font-sans",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Monkees UI";
const description = "UI components styled for the Monkees.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${comicNeue.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
