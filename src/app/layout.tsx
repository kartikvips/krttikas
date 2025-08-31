import type { Metadata } from 'next'
import './globals.css'
import { getCurrentFavicon } from '@/utils/monthUtils'

export const metadata: Metadata = {
  title: "Kṛttikās",
  description: "Where consciousness meets creation. Where awareness transforms into alchemy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={getCurrentFavicon()} type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
