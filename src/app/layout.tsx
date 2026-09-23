import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "Refactor Your Leadership, Coaching for Engineering Managers",
  description:
    "A coaching program for Engineering Managers, new or experienced, who feel stuck, undervalued, or overwhelmed by a role AI is redefining. Build the confidence, communication, and leadership skills nobody trained you for.",
  openGraph: {
    title: "Refactor Your Leadership",
    description:
      "A coaching program for Engineering Managers, new or experienced, who feel stuck, undervalued, or overwhelmed by a role AI is redefining.",
    images: ["/images/logo-lockup.webp"],
  },
  twitter: {
    card: "summary",
    title: "Refactor Your Leadership",
    description:
      "A coaching program for Engineering Managers, new or experienced, who feel stuck, undervalued, or overwhelmed by a role AI is redefining.",
    images: ["/images/logo-lockup.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy">
        {children}
      </body>
    </html>
  );
}
