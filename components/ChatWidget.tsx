'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! Ask me anything about forming an LLC — which service to use, what state to file in, LLC vs S-Corp, anything.' },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const [usedQRs, setUsedQRs] = useState<Set<string>>(new Set())
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMsg: Message = { role: 'user', content: text.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "I'm having trouble connecting. Try the quiz for an instant recommendation!" },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQR = (text: string) => {
    setUsedQRs((prev) => new Set(prev).add(text))
    sendMessage(text)
  }

  const quickReplies = ['Which is cheapest?', 'Do I need Delaware?', 'LLC vs S-Corp?']

  return (
    <div className="fixed bottom-6 right-6 z-[800]">
      {/* Chat panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white border border-border rounded-[16px] shadow-[0_16px_48px_rgba(28,25,23,0.14)] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-green px-4 py-3.5 flex items-center gap-2.5">
            <div className="w-[34px] h-[34px] bg-white/20 rounded-full flex items-center justify-center text-base">
              🤖
            </div>
            <div>
              <strong className="block text-[13px] text-white">FormRight Assistant</strong>
              <small className="text-[11px] text-white/70">● Online · Instant answers</small>
            </div>
          </div>

          {/* Messages */}
          <div ref={messagesRef} className="flex-1 px-3.5 py-3.5 flex flex-col gap-2.5 max-h-[260px] overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[88%] px-[13px] py-[9px] text-[13px] leading-[1.55] ${
                  msg.role === 'assistant'
                    ? 'bg-paper text-medium rounded-[4px_12px_12px_12px] self-start'
                    : 'bg-green text-white rounded-[12px_4px_12px_12px] self-end'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-paper text-warm-gray rounded-[4px_12px_12px_12px] self-start max-w-[88%] px-[13px] py-[9px] text-[13px]">
                Thinking...
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="flex flex-wrap gap-[5px] px-3.5 pb-2.5">
            {quickReplies
              .filter((qr) => !usedQRs.has(qr))
              .map((qr) => (
                <button
                  key={qr}
                  type="button"
                  onClick={() => handleQR(qr)}
                  className="bg-paper border border-border rounded-[16px] px-[11px] py-[5px] text-[11px] text-green font-semibold cursor-pointer font-sans hover:bg-green-light hover:border-green transition-all"
                >
                  {qr}
                </button>
              ))}
          </div>

          {/* Input */}
          <div className="flex gap-2 px-3.5 pt-2.5 pb-3.5 border-t border-border">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Ask anything..."
              className="flex-1 bg-paper border border-border rounded-[20px] px-3.5 py-2 text-[12px] text-ink font-sans outline-none focus:border-green transition-colors placeholder:text-warm-gray"
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              className="w-8 h-8 bg-green border-none rounded-full cursor-pointer flex items-center justify-center flex-shrink-0 hover:bg-green-mid transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="white">
                <path d="M2 8l12-6-5 6 5 6z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => { setIsOpen(!isOpen); setShowBadge(false); }}
        className="w-[52px] h-[52px] bg-green border-none rounded-full cursor-pointer flex items-center justify-center shadow-[0_4px_20px_rgba(26,107,71,0.35)] hover:bg-green-mid hover:scale-[1.06] transition-all relative"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        {showBadge && (
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber rounded-full border-2 border-cream text-[8px] flex items-center justify-center text-white font-bold">
            1
          </div>
        )}
      </button>
    </div>
  )
}
