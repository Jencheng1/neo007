'use client'

import { useState, useEffect, useRef } from 'react'
import { useChat } from 'ai/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const suggestedQuestions = [
  "What is graph-based fraud detection?",
  "How does Neo007 integrate with existing systems?",
  "What are the pricing options for Neo007?",
  "Can you explain the features of Neo007?"
]

export default function ChatbotComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat()
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          content: "Hello! How can I help you today? Here are some questions you might be interested in:",
          role: 'assistant'
        }
      ])
    }
  }, [isOpen, messages.length, setMessages])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSuggestedQuestion = async (question: string) => {
    setMessages(prevMessages => [
      ...prevMessages,
      { id: String(prevMessages.length + 1), content: question, role: 'user' as const }
    ])
    await handleSubmit({ preventDefault: () => {} } as any, { data: question } as any)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button onClick={() => setIsOpen(true)}>Chat with us</Button>
      ) : (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Neo007 Support</CardTitle>
            <Button 
              className="absolute top-2 right-2" 
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              Close
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[350px] w-full pr-4" ref={scrollAreaRef}>
              {messages.map((message, i) => (
                <div key={i} className={`mb-4 ${message.role === 'assistant' ? 'text-blue-600' : 'text-gray-800'}`}>
                  <strong>{message.role === 'assistant' ? 'Neo007:' : 'You:'}</strong> {message.content}
                </div>
              ))}
              {messages.length === 1 && (
                <div className="mt-4">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="mb-2 w-full justify-start text-left"
                      onClick={() => handleSuggestedQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                aria-label="Chat input"
              />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

