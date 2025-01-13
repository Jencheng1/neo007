'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChatForm } from './ChatForm'
import { MessageCircle, X, ChevronLeft } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 p-0 bg-[#8B5CF6] hover:bg-[#7C3AED]"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg w-[400px] h-[600px] flex flex-col overflow-hidden">
          <div className="bg-[#8B5CF6] px-4 py-3 flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-white font-medium text-lg">Neo007</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
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

