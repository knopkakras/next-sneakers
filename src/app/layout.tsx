import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sneakers",
  description: "Next.js Sneakers shop project",
};

type LayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: 
  Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
