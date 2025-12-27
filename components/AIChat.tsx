import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Hi there! 👋 I\'m Sarah\'s AI assistant. Ask me anything about her services, rates, or availability!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
        // Prepare history for API
        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        const responseText = await sendMessageToGemini(userMsg.text, history);
        
        const aiMsg: Message = { 
            id: (Date.now() + 1).toString(), 
            role: 'model', 
            text: responseText || "I'm sorry, I couldn't process that request." 
        };
        setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        console.error("Chat error", error);
    } finally {
        setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleSend();
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-cream-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Chat Header */}
          <div className="bg-navy-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center relative">
                 <Sparkles size={20} className="text-white" />
                 <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-navy-900 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Virtual Assistant AI</h3>
                <p className="text-xs opacity-70">Online • Replies instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-cream-50 p-4 overflow-y-auto space-y-4" ref={scrollRef}>
             {messages.map((msg) => (
               <div 
                 key={msg.id} 
                 className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
               >
                 <div 
                   className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                     msg.role === 'user' 
                     ? 'bg-navy-800 text-white rounded-br-none' 
                     : 'bg-white text-navy-800 border border-cream-200 shadow-sm rounded-bl-none'
                   }`}
                 >
                   {msg.text}
                 </div>
               </div>
             ))}
             {loading && (
               <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-cream-200 shadow-sm flex items-center gap-2">
                   <Loader2 size={16} className="animate-spin text-terracotta-500" />
                   <span className="text-xs text-navy-400">Typing...</span>
                 </div>
               </div>
             )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-cream-200">
            <div className="flex items-center gap-2 bg-cream-50 px-4 py-2 rounded-full border border-cream-200 focus-within:border-terracotta-400 transition-colors">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about rates, services..." 
                className="flex-1 bg-transparent text-sm focus:outline-none text-navy-900 placeholder:text-navy-300"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="text-terracotta-500 hover:text-terracotta-600 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-terracotta-500 rounded-full shadow-lg hover:bg-terracotta-600 transition-all hover:scale-105 flex items-center justify-center text-white relative group"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
            <span className="absolute right-0 top-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cream-100 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-400 border-2 border-white"></span>
            </span>
        )}
      </button>
    </div>
  );
};