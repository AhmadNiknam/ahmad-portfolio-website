import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Niknam | IT Support & Infrastructure Professional",
  description:
    "Ahmad Niknam is an IT Support and Infrastructure Professional based in Regina, Saskatchewan, Canada, with hands-on experience in Windows Server, Active Directory, networking, Microsoft Azure, Microsoft 365, Intune, PowerShell, troubleshooting, and IT automation.",
  metadataBase: new URL("https://ahmadniknam.com"),
  keywords: [
    "Ahmad Niknam",
    "IT Support",
    "IT Infrastructure",
    "Azure Administrator",
    "Windows Server",
    "Active Directory",
    "Microsoft 365",
    "Intune",
    "PowerShell",
    "Regina Saskatchewan",
    "IT Automation",
    "Systems Support"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Ahmad Niknam | IT Support & Infrastructure Professional",
    description:
      "IT Support, Infrastructure, Azure, Microsoft 365, and practical automation portfolio.",
    url: "https://ahmadniknam.com",
    siteName: "Ahmad Niknam Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Niknam | IT Support & Infrastructure Professional",
    description:
      "IT Support, Infrastructure, Azure, Microsoft 365, and practical automation portfolio."
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
