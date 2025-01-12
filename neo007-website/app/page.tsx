import Link from 'next/link'
import { Button } from "@/components/ui/button"
import ChatbotComponent from './components/ChatbotComponent'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-gray-900">Neo007</span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="#features" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Pricing
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="text-center py-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Neo007: Graph-Based Fraud Detection
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Harness the power of Neo4j graph analysis to detect and prevent fraud in real-time.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get started
                </Button>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div id="features" className="py-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Features</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Graph-Based Analysis</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Utilize Neo4j's powerful graph database for complex relationship analysis.
                  </p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Real-Time Detection</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Identify fraudulent activities as they happen with our advanced algorithms.
                  </p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Easy Integration</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Seamlessly integrate with your existing systems through our API.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing section */}
          <div id="pricing" className="py-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Pricing</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Starter</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Perfect for small businesses
                  </p>
                  <p className="mt-4 text-4xl font-extrabold text-gray-900">$99/mo</p>
                  <Button className="mt-6 w-full">Get started</Button>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Pro</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    For growing companies
                  </p>
                  <p className="mt-4 text-4xl font-extrabold text-gray-900">$299/mo</p>
                  <Button className="mt-6 w-full">Get started</Button>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Custom solutions for large organizations
                  </p>
                  <p className="mt-4 text-4xl font-extrabold text-gray-900">Contact us</p>
                  <Button className="mt-6 w-full">Get in touch</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            © 2023 Neo007. All rights reserved.
          </p>
        </div>
      </footer>

      <ChatbotComponent />
    </div>
  )
}

