import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Niknam | Azure Administrator & IT Infrastructure Professional",
  description:
    "Professional portfolio for Ahmad Niknam, an IT Infrastructure Professional, Azure Administrator, Systems Support specialist, and practical IT automation builder based in Regina, Saskatchewan, Canada."
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
