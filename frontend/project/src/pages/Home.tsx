import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "I craft digital experiences.";
  const typingSpeed = 100;

  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setTypedText('');
          setIsTyping(true);
        }, 2000);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isTyping]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-20"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Madhav Nepal
        </h1>
        <div className="h-8 mb-8">
          <span className="text-xl md:text-2xl font-light">
            {typedText}
            <span className={`inline-block w-0.5 h-6 bg-blue-400 ml-1 ${isTyping ? 'animate-blink' : ''}`}></span>
          </span>
        </div>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/madhavnepal345" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}