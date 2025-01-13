'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChatForm } from './ChatForm'
import { MessageCircle, X } from 'lucide-react'

export function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 p-0"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-lg w-96 h-[600px] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Neo007 Chat</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-grow overflow-hidden">
            <ChatForm />
          </div>
        </div>
      )}
    </div>
  )
}

