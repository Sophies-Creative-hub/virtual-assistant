
import React from 'react';
import { ArrowRight, Calendar, Coffee } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Inhalt */}
        <div className="md:w-1/2 space-y-8 relative">
           <svg className="absolute -top-10 -left-10 w-24 h-24 text-terracotta-400 opacity-30" viewBox="0 0 100 100" fill="currentColor">
             <path d="M44.1,6.8C59.9,1.7,78.2,7.3,86.6,20.6c9.3,14.8,5.6,35.2-3.8,49.6c-9.2,14.1-24.8,24-41.4,22.8 c-16.3-1.2-28.7-14.9-35.8-29.2C-2.4,48.2-2,29.9,6.7,16.2C15.2,2.8,29.2,11.5,44.1,6.8z" />
           </svg>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy-900 leading-[1.1]">
            Ihr Chaos, <br />
            <span className="italic text-terracotta-500 relative inline-block">
              strukturiert.
              <span className="absolute bottom-1 left-0 w-full h-3 bg-terracotta-200/40 -z-10 -rotate-1 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-navy-800/80 leading-relaxed max-w-lg">
            Ich unterstütze kreative Unternehmer dabei, ihre Zeit zurückzugewinnen. Von Inbox-Management bis Projektkoordination – ich bin Ihre rechte Hand im digitalen Alltag.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#booking" className="px-8 py-4 bg-terracotta-500 text-white rounded-full font-bold shadow-xl shadow-terracotta-500/20 hover:bg-terracotta-600 transition-all hover:scale-105 flex items-center justify-center gap-2 text-center">
              <Calendar size={18} />
              Kennenlerngespräch buchen
            </a>
            <a href="#services" className="px-8 py-4 bg-white border-2 border-navy-800/10 text-navy-900 rounded-full font-bold hover:border-navy-800 transition-all flex items-center justify-center gap-2 group text-center">
              Leistungen ansehen
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-8 text-sm font-medium text-navy-800/60">
            <div className="flex -space-x-3">
               <img src="https://picsum.photos/40/40?random=1" className="w-10 h-10 rounded-full border-2 border-cream-50" alt="Klient" />
               <img src="https://picsum.photos/40/40?random=2" className="w-10 h-10 rounded-full border-2 border-cream-50" alt="Klient" />
               <img src="https://picsum.photos/40/40?random=3" className="w-10 h-10 rounded-full border-2 border-cream-50" alt="Klient" />
            </div>
            <p>Vertraut von über 30 glücklichen Kunden</p>
          </div>
        </div>

        {/* Bild */}
        <div className="md:w-1/2 relative">
          <div className="relative z-10 rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800" 
              alt="Virtuelle Assistentin bei der Arbeit" 
              className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-terracotta-100 rounded-full z-0 mix-blend-multiply filter blur-2xl"></div>
          <div className="absolute top-20 -left-12 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce duration-[3000ms]">
            <div className="w-10 h-10 bg-navy-50 rounded-full flex items-center justify-center text-navy-800">
              <Coffee size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Aktueller Status</p>
              <p className="font-serif font-bold text-navy-900">E-Mails erledigt!</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
