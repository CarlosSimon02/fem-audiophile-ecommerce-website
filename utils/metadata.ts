import { Metadata } from "next";

const appName = "Audiophile";
const description =
  "Explore Audiophile for top-quality audio gear including earphones, headphones, and speakers. Discover the perfect sound companion for your music journey.";
const websiteUrl = "https://officialaudiophile.vercel.app";

const metadata: Metadata = {
  title: {
    default: `${appName} | Top-Quality Audio Gear`,
    template: `${appName} | %s`,
  },
  description: description,
  generator: "Next.js",
  applicationName: appName,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Audiophile",
    "Earphones",
    "Headphones",
    "Speakers",
    "Audio gear",
    "Premium sound",
    "High-quality audio",
    "Music accessories",
    "Sound equipment",
    "Wireless earbuds",
    "Noise-cancelling headphones",
    "Bluetooth speakers",
    "Audio enthusiasts",
    "Music lovers",
    "Sound quality",
  ],
  authors: [
    { name: "Frontend Mentor", url: "https://www.frontendmentor.io" },
    { name: "Carlos Simon Camacho", url: "https://github.com/CarlosSimon02" },
  ],
  creator: "Carlos Simon Camacho",
  publisher: "Vercel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(websiteUrl),
  openGraph: {
    title: appName,
    description: description,
    url: websiteUrl,
    siteName: appName,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: appName,
    description: description,
    creator: "@CarlosSimonCam1",
    site: websiteUrl,
  },
};

export default metadata;
