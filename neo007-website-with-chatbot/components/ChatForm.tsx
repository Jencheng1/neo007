'use client'

import { cn } from '@/lib/utils'
import { useChat } from 'ai/react'
import React, { useState, FormEvent, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AutoResizeTextarea } from './autoresize-textarea'
import { ArrowUpIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'

function formatMessage(content: string) {
  return content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

const suggestedQuestions = [
  "What is Neo007?",
  "How does graph-based fraud detection work?",
  "What are Neo007's pricing options?",
  "Can you explain Neo007's key features?",
  "How can I integrate Neo007 with my existing systems?"
]

export function ChatForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const { messages, append, input, setInput, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        content: "Hello! How can I help you today with **Neo007**, our graph-based fraud detection solution?",
        role: 'assistant'
      }
    ]
  })
  const [showQuestions, setShowQuestions] = useState(true)

  const handleSuggestedQuestionClick = (question: string) => {
    void append({ content: question, role: 'user' })
    setShowQuestions(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      void append({ content: input, role: 'user' })
      setInput('')
      setShowQuestions(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 1].role === 'assistant' && !isLoading) {
      setShowQuestions(true)
    }
  }, [messages, isLoading])

  const messageList = (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={cn(
            'flex',
            message.role === 'user' ? 'justify-end' : 'justify-start'
          )}
        >
          <div
            className={cn(
              'max-w-[80%] rounded-lg px-4 py-2 text-sm',
              message.role === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-black'
            )}
          >
            <div dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />
          </div>
        </div>
      ))}
      {showQuestions && (
        <div className="flex flex-col gap-2 mt-4">
          {messages.length > 1 && (
            <div className="text-sm text-gray-600 mb-2">Do you still need help? Here are some suggested questions, or feel free to ask your own:</div>
          )}
          {suggestedQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSuggestedQuestionClick(question)}
              className="text-left"
            >
              {question}
            </Button>
          ))}
        </div>
      )}
    </div>
  )

  const header = (
    <div className="text-center mb-4">
      <h2 className="text-xl font-bold mb-2">Welcome to Neo007 Chat Assistant</h2>
      <p className="text-sm text-gray-600">Ask me anything about Neo007, our graph-based fraud detection solution!</p>
    </div>
  )

  return (
    <TooltipProvider>
      <div
        className={cn(
          'flex flex-col h-full',
          className
        )}
        {...props}
      >
        <ScrollArea className="flex-grow px-4">
          {messages.length === 0 && header}
          {messageList}
        </ScrollArea>
        <form
          onSubmit={handleSubmit}
          className="border-t p-4 flex items-center space-x-2"
        >
          <AutoResizeTextarea
            onKeyDown={handleKeyDown}
            onChange={v => setInput(v)}
            value={input}
            placeholder="Enter a message"
            className="flex-grow resize-none bg-transparent focus:outline-none"
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
              >
                <ArrowUpIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={5}>Send message</TooltipContent>
          </Tooltip>
        </form>
      </div>
    </TooltipProvider>
  )
}

