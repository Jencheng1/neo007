import { Button } from "@/components/ui/button"
import { Shield, GitGraphIcon as Graph, Zap, Gauge, Code, BarChart3, Bell, Lock } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 pt-8 max-w-4xl mx-auto leading-tight">
            Neo007: Graph-Based Fraud Detection
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Harness the power of Neo4j graph analysis to detect and prevent fraud in real-time.
          </p>
          <Button 
            size="lg" 
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-lg px-8 py-6 rounded-lg"
          >
            Get started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
            Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-[#8B5CF6]">
                <Graph className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Graph-Based Analysis
              </h3>
              <p className="text-lg text-gray-600">
                Utilize Neo4j's powerful graph database for comprehensive relationship analysis and pattern detection in your data.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-[#8B5CF6]">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real-Time Detection
              </h3>
              <p className="text-lg text-gray-600">
                Identify fraudulent activities as they happen with our advanced real-time monitoring and alert system.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-[#8B5CF6]">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Security
              </h3>
              <p className="text-lg text-gray-600">
                Enterprise-grade security features to protect your data and ensure compliance with industry standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-[#8B5CF6]">
                <Gauge className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Performance Optimized
              </h3>
              <p className="text-lg text-gray-600">
                High-performance architecture designed to handle millions of transactions with minimal latency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-[#8B5CF6]">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Easy Integration
              </h3>
              <p className="text-lg text-gray-600">
                Simple API integration with your existing systems and comprehensive documentation for quick setup.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-[#8B5CF6]">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Analytics
              </h3>
              <p className="text-lg text-gray-600">
                Detailed insights and analytics dashboard to track fraud patterns and system performance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-[#8B5CF6]">
                <Bell className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart Alerts
              </h3>
              <p className="text-lg text-gray-600">
                Customizable alert system with multiple notification channels and priority levels.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-[#8B5CF6]">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Access Control
              </h3>
              <p className="text-lg text-gray-600">
                Fine-grained access control and role-based permissions for team management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

