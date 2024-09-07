import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucie's 3D Home",
  description: "Interactive 3D Room",
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
