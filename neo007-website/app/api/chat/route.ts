import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      { role: 'system', content: `You are a helpful assistant for Neo007, a SaaS solution for fraud detection using graph-based analysis with Neo4j. Provide concise and accurate information about the product's features, pricing, and benefits. Here are some key points:

      1. Graph-based fraud detection: Neo007 uses Neo4j's graph database to analyze complex relationships and patterns in data, making it highly effective at detecting sophisticated fraud schemes.

      2. Integration: Neo007 offers easy integration with existing systems through a well-documented API, allowing seamless incorporation into current workflows.

      3. Pricing options:
         - Starter: $99/mo, suitable for small businesses
         - Pro: $299/mo, ideal for growing companies
         - Enterprise: Custom pricing, tailored solutions for large organizations

      4. Key features:
         - Real-time fraud detection
         - Advanced pattern recognition
         - Customizable risk scoring
         - User-friendly dashboard
         - Comprehensive reporting and analytics

      Always be helpful, concise, and encourage users to reach out for more detailed information or a demo.` },
      ...messages
    ]
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}

