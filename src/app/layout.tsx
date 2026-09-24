import type { Metadata, Viewport } from "next";
import { Inter, Anton } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}, Coaching for Engineering Managers`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "engineering manager coaching",
    "EM coaching program",
    "leadership coaching for engineering managers",
    "AI leadership coaching",
    "engineering management confidence coaching",
    "Fabio Salimbeni",
  ],
  authors: [{ name: "Fabio Salimbeni", url: SITE_URL }],
  creator: "Fabio Salimbeni",
  publisher: "Fabio Salimbeni",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/logo-lockup.webp", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/logo-lockup.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1e40",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Fabio Salimbeni",
      jobTitle: "Founder & Lead Coach",
      description:
        "Coach for Engineering Managers, helping them build confidence, communication, and AI-era leadership skills.",
      image: `${SITE_URL}/images/fabio-salimbeni.jpg`,
      url: SITE_URL,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      serviceType: "Leadership Coaching",
      description: SITE_DESCRIPTION,
      provider: { "@id": `${SITE_URL}/#person` },
      audience: {
        "@type": "Audience",
        audienceType: "Engineering Managers",
      },
      review: [
        {
          "@type": "Review",
          reviewBody:
            "I received guidance on building trust within my team. The advice was valuable and it will help me in building my career going forwards.",
          author: { "@type": "Person", name: "Yuvika A." },
        },
        {
          "@type": "Review",
          reviewBody:
            "Fabio taught how to remove bottlenecks, establish clear accountability, and gave me the psychological safety to innovate without fear of failure.",
          author: { "@type": "Person", name: "Mihai M." },
        },
      ],
      url: SITE_URL,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
