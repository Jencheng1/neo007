export const dynamic = 'force-dynamic' // Ensure dynamic rendering
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neo007 - Graph-Based Fraud Detection',
  description: 'Advanced fraud detection using Neo4j graph analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

