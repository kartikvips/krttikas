import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thinking Labs",
  description: "Where consciousness meets creation. Where awareness transforms into alchemy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg?v=1" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
