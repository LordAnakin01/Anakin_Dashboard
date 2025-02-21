'use client'

<<<<<<< HEAD
import { Send, Paperclip, Image as ImageIcon, Smile, User } from 'lucide-react'
=======
import { Send, Paperclip, Image, Smile, User } from 'lucide-react'
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
import { useState } from 'react'
import BackToHome from '@/components/navigation/BackToHome'

export default function ChatSupportPage() {
  const [message, setMessage] = useState('')

  return (
    <div className="max-w-4xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Live Support</h1>
          <p className="text-gray-600">Chat with our support team</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-xl">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          <span>Support Online</span>
        </div>
      </div>

      {/* Chat Window */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium">Sarah from Support</p>
              <p className="text-sm text-gray-600">Typically replies in under 5 minutes</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-[400px] overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                msg.sender === 'agent' ? '' : 'flex-row-reverse'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.sender === 'agent' ? 'bg-blue-100' : 'bg-gray-100'
                }`}
              >
                <User className={`w-4 h-4 ${msg.sender === 'agent' ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>
              <div
                className={`max-w-[70%] rounded-xl p-4 ${
                  msg.sender === 'agent'
                    ? 'bg-gray-100'
                    : 'bg-blue-600 text-white'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sender === 'agent' ? 'text-gray-500' : 'text-blue-100'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full pl-4 pr-20 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
<<<<<<< HEAD
                  <ImageIcon className="w-5 h-5 text-gray-400" />
=======
                  <Image className="w-5 h-5 text-gray-400" />
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
                </button>
                <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                  <Smile className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const messages = [
  {
    sender: 'agent',
    text: 'Hello! How can I help you today?',
    time: '10:30 AM'
  },
  {
    sender: 'user',
    text: 'Hi, I need help with my subscription settings.',
    time: '10:31 AM'
  },
  {
    sender: 'agent',
    text: 'I\'d be happy to help you with that. Could you please specify which aspect of the subscription settings you\'d like to modify?',
    time: '10:32 AM'
  },
  {
    sender: 'user',
    text: 'I want to upgrade my plan to premium.',
    time: '10:33 AM'
  },
  {
    sender: 'agent',
    text: 'Great choice! I can guide you through the upgrade process. First, let me check your current plan details.',
    time: '10:34 AM'
  }
] 