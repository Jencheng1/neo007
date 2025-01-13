import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ChatPopup } from '../components/ChatPopup'

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold">Neo007</Link>
              </div>
              <div className="flex gap-8">
                <Link href="/" className="text-lg font-medium text-gray-900 hover:text-gray-600">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium text-gray-900 hover:text-gray-600">
                  About
                </Link>
                <Link href="/#features" className="text-lg font-medium text-gray-900 hover:text-gray-600">
                  Features
                </Link>
                <Link href="#" className="text-lg font-medium text-gray-900 hover:text-gray-600">
                  Pricing
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Neo007</h3>
                {/* <p className="text-sm text-gray-600">
                  Neo007 is a cutting-edge fraud detection solution leveraging graph-based analysis for real-time protection.
                </p> */}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link></li>
                  <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link></li>
                  <li><Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-sm text-gray-600">
                  Email: jencheng@neo007.org<br />
              
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">&copy; 2023 Neo007. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <ChatPopup />
      </body>
    </html>
  )
}

