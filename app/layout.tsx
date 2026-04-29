import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Niknam | IT Support & Infrastructure Professional",
  description:
    "Professional portfolio for Ahmad Niknam, an IT Support and Infrastructure Professional, Microsoft Certified Azure Administrator Associate, and practical IT automation builder based in Regina, Saskatchewan, Canada."
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
