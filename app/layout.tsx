import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Niknam | IT Infrastructure & Cloud Professional",
  description:
    "Modern personal portfolio for Ahmad Niknam, an IT Infrastructure and Cloud professional based in Regina, Saskatchewan, Canada."
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
