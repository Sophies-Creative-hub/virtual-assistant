
import React, { useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Sarah hat meine Arbeitsweise komplett verändert. Früher bin ich in E-Mails ertrunken, heute beende ich meinen Tag um 15 Uhr und weiß, dass alles erledigt ist.",
    author: "Elena R.",
    role: "Innenarchitektin",
    image: "https://picsum.photos/60/60?random=20"
  },
  {
    text: "Die beste Investition, die ich dieses Jahr getätigt habe. Das Onboarding war nahtlos und sie antizipiert Bedürfnisse, von denen ich gar nichts wusste.",
    author: "Markus T.",
    role: "Marketing-Berater",
    image: "https://picsum.photos/60/60?random=21"
  },
  {
    text: "Professionell, warmherzig und unglaublich organisiert. Sarah ist nicht nur eine Assistentin, sondern eine strategische Partnerin für meine Agentur.",
    author: "Jessica L.",
    role: "Life Coach",
    image: "https://picsum.photos/60/60?random=22"
  },
  {
    text: "Ich war zögerlich beim Outsourcing, aber Sarah hat es mir so einfach gemacht. Ihre Kommunikation ist erstklassig und die Berichte ein Lebensretter.",
    author: "David K.",
    role: "Software-Entwickler",
    image: "https://picsum.photos/60/60?random=23"
  }
];

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const interval = setInterval(() => {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-terracotta-500 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cream-100 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <span className="text-terracotta-400 font-bold uppercase tracking-widest text-sm">Kundenstimmen</span>
             <h2 className="font-serif text-4xl text-cream-50 mt-2">Was meine Kunden sagen.</h2>
           </div>
           
           <div className="flex gap-2 mt-4 md:mt-0">
             <button 
                onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-colors"
             >
               &larr;
             </button>
             <button 
                onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-colors"
             >
               &rarr;
             </button>
           </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[320px] md:min-w-[450px] bg-navy-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 snap-center"
            >
              <Quote className="text-terracotta-500 mb-6 opacity-50" size={40} />
              <p className="text-cream-50/90 text-lg leading-relaxed italic mb-8">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border border-terracotta-500/30" />
                <div>
                  <h4 className="text-cream-50 font-bold">{t.author}</h4>
                  <p className="text-terracotta-400 text-sm">{t.role}</p>
                </div>
                <div className="ml-auto flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
