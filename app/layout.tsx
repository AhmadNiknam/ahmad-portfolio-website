import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Niknam | IT Support Specialist | Azure Administrator",
  description:
    "Ahmad Niknam is an IT professional in Regina, Saskatchewan specializing in IT support, Windows Server, Azure administration, networking, and PowerShell automation.",
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
    "Hybrid Cloud",
    "PowerShell",
    "Regina Saskatchewan",
    "Canadian IT Professional"
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
    title: "Ahmad Niknam | IT Support Specialist | Azure Administrator",
    description:
      "Professional IT portfolio for Windows Server, Azure administration, networking, Microsoft 365, and PowerShell automation.",
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
    title: "Ahmad Niknam | IT Support Specialist | Azure Administrator",
    description:
      "IT support, Windows Server, Azure administration, networking, and PowerShell automation portfolio.",
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
