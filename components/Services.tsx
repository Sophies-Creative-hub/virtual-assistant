
import React from 'react';
import { Mail, Calendar, Instagram, PenTool, Globe, UserCheck } from 'lucide-react';

const services = [
  {
    icon: Mail,
    title: "E-Mail Management",
    description: "Ich bändige Ihre Inbox, organisiere Ordner und entwerfe Antworten, damit Sie keine Chance mehr verpassen."
  },
  {
    icon: Calendar,
    title: "Kalender & Termine",
    description: "Komplexe Koordination einfach gemacht. Ich kümmere mich um Buchungen, Pufferzeiten und Verschiebungen."
  },
  {
    icon: Instagram,
    title: "Social Media Support",
    description: "Engagement, Post-Planung und Community-Management, um Ihre Zielgruppe kontinuierlich zu begleiten."
  },
  {
    icon: PenTool,
    title: "Content Recycling",
    description: "Ich verwandle Ihre Videos in Blogs, Zitate und Newsletter. Maximieren Sie den Wert jedes Inhalts."
  },
  {
    icon: Globe,
    title: "Reiseplanung",
    description: "Recherche von Flügen, Hotels und Erstellung von Reiseplänen für Ihre Geschäfts- oder Privatreisen."
  },
  {
    icon: UserCheck,
    title: "Kunden-Onboarding",
    description: "Verträge, Rechnungen und Willkommenspakete – ich sorge dafür, dass sich Ihre Kunden sofort wohlfühlen."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white/50 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cream-50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-terracotta-500 font-bold uppercase tracking-widest text-sm">Was ich anbiete</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mt-3 mb-6">Leistungen für Ihren Seelenfrieden.</h2>
          <p className="text-navy-800/70 text-lg">
            Mein Ziel ist es, das „Busy“ aus Ihrem Business zu nehmen, damit Sie sich auf das Wesentliche konzentrieren können.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-cream-50 hover:bg-white border border-transparent hover:border-terracotta-100 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta-100 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 opacity-50"></div>
              
              <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-terracotta-500 mb-6 relative z-10 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif text-2xl text-navy-900 mb-3 relative z-10">{service.title}</h3>
              <p className="text-navy-800/70 leading-relaxed relative z-10">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-navy-800/60 mb-4">Nicht genau das dabei, was Sie suchen?</p>
             <a href="#booking" className="inline-block border-b-2 border-terracotta-500 text-terracotta-600 font-bold hover:text-terracotta-700 pb-1">Lassen Sie uns über ein individuelles Paket sprechen</a>
        </div>
      </div>
    </section>
  );
};
