'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    id: 'chat',
    initialMessages: [],
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch min-h-screen bg-gray-900">
      <div className="flex-1 space-y-6">
        {messages.map(m => (
          <div
            key={m.id}
            className={`flex ${
              m.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-sm ${
                m.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-100'
              }`}
            >
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-md p-4 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-900/80">
        <div className="relative">
          <input
            className="w-full p-4 bg-gray-800 border-0 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 placeholder-gray-400 transition-all hover:bg-gray-700"
            value={input}
            placeholder="message renee..."
            onChange={handleInputChange}
          />
          <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-white/10"></div>
        </div>
      </form>
    </div>
  );
}
