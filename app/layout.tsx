import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Niknam — IT Portfolio & Portfolio Website Services",
  description:
    "Professional IT portfolio of Ahmad Niknam, featuring IT support, Microsoft 365, Windows Server, network and systems support, Azure administration, PowerShell automation, and secondary portfolio website services.",
  metadataBase: new URL("https://ahmadniknam.com"),
  keywords: [
    "Ahmad Niknam",
    "IT Support Specialist",
    "Azure Administrator",
    "Systems Administrator",
    "Infrastructure Support",
    "Network Support Analyst",
    "Windows Server",
    "Active Directory",
    "Microsoft 365",
    "Network and Systems Support",
    "Hybrid Cloud",
    "PowerShell",
    "PowerShell Automation",
    "AZ-104 Certified",
    "Regina Saskatchewan",
    "Canadian IT Professional",
    "Portfolio Website Services",
    "Professional Portfolio Website"
  ],
  alternates: {
    canonical: "https://ahmadniknam.com"
  },
  verification: {
    google: "E8yU6l_An-5KhdPMWgvodlQxl6QrmfnhLCVkKMhgRCU"
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"]
  },
  openGraph: {
    title: "Ahmad Niknam — IT Portfolio & Portfolio Website Services",
    description:
      "Professional IT portfolio of Ahmad Niknam, featuring IT support, Microsoft 365, Windows Server, network and systems support, Azure administration, PowerShell automation, and secondary portfolio website services.",
    url: "https://ahmadniknam.com",
    siteName: "Ahmad Niknam Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ahmad Niknam - IT Support Specialist and Azure Administrator"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Niknam — IT Portfolio & Portfolio Website Services",
    description:
      "Professional IT portfolio of Ahmad Niknam, featuring IT support, Microsoft 365, Windows Server, network and systems support, Azure administration, PowerShell automation, and secondary portfolio website services.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
