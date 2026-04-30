import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Niknam — IT Portfolio & Portfolio Website Services",
  description:
    "Professional IT portfolio of Ahmad Niknam, featuring infrastructure, cloud support, project coordination, technical projects, and portfolio website design services for professionals, students, researchers, job seekers, and newcomers.",
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
      "Professional IT portfolio of Ahmad Niknam, featuring infrastructure, cloud support, project coordination, technical projects, and portfolio website design services for professionals, students, researchers, job seekers, and newcomers.",
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
      "Professional IT portfolio of Ahmad Niknam, featuring infrastructure, cloud support, project coordination, technical projects, and portfolio website design services for professionals, students, researchers, job seekers, and newcomers.",
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
