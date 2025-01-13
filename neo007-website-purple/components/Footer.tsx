import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Neo007</h3>
            <p className="text-sm text-gray-600">Advanced graph-based fraud detection for modern businesses.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-[#8B5CF6]">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-[#8B5CF6]">About</Link></li>
              <li><Link href="/#features" className="text-sm text-gray-600 hover:text-[#8B5CF6]">Features</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#8B5CF6]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Email: info@neo007.com</li>
              <li className="text-sm text-gray-600">Phone: +1 (555) 123-4567</li>
              <li className="text-sm text-gray-600">Address: 123 Tech Street, San Francisco, CA 94105</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#8B5CF6]"><Facebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-[#8B5CF6]"><Twitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-[#8B5CF6]"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-[#8B5CF6]"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">&copy; 2023 Neo007. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

