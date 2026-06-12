import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Om Umale Portfolio",
  description: "A VS Code-style developer portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
