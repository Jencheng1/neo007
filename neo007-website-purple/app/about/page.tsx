import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">About Neo007</h1>
        <div className="space-y-6 text-lg text-gray-600">
          <p>
            Neo007 is a cutting-edge fraud detection solution that leverages the power of graph-based analysis to identify and prevent complex fraud patterns in real-time.
          </p>
          <p>
            Founded in 2023, our mission is to revolutionize the way businesses protect themselves from financial fraud. By harnessing the capabilities of Neo4j's graph database technology, we offer a more sophisticated and accurate approach to fraud detection than traditional rule-based systems.
          </p>
          <p>
            Our team consists of expert data scientists, software engineers, and fraud prevention specialists who are passionate about staying ahead of the curve in the ever-evolving landscape of financial crime.
          </p>
          <p>
            At Neo007, we believe that by analyzing the intricate relationships within data, we can uncover hidden patterns and anomalies that other systems might miss. This approach not only helps businesses reduce financial losses but also maintains trust with their customers by minimizing false positives.
          </p>
          <p>
            We are committed to continuous innovation and strive to provide our clients with the most advanced, reliable, and user-friendly fraud detection solution in the market.
          </p>
        </div>
        <div className="mt-12">
          <Button 
            size="lg" 
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-lg px-8 py-6 rounded-lg"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}

