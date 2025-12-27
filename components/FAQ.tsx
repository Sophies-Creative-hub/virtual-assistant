
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Gibt es eine Mindestanzahl an Stunden?",
    answer: "Für monatliche Retainer ist das Minimum 10 Stunden/Monat (Basis-Paket). Ich biete jedoch auch projektbezogene Unterstützung auf Stundenbasis an, falls Sie nur Hilfe bei einer spezifischen Aufgabe benötigen."
  },
  {
    question: "Welche Tools und Software nutzen Sie?",
    answer: "Ich arbeite sicher mit Google Workspace, Notion, Asana, Trello, Slack, Canva, Mailchimp und ConvertKit. Wenn Sie ein eigenes System nutzen, arbeite ich mich schnell ein!"
  },
  {
    question: "Wie kommunizieren wir?",
    answer: "Für Retainer-Kunden nutzen wir meist einen gemeinsamen Slack-Kanal für schnelle Updates. Zusätzlich können wir 14-tägige Zoom-Checks vereinbaren. Für Ad-hoc-Aufgaben ist E-Mail primär."
  },
  {
    question: "Bieten Sie auch Unterstützung am Wochenende an?",
    answer: "Meine regulären Arbeitszeiten sind Montag bis Donnerstag. Unterstützung am Wochenende ist für spezielle Launches oder Events nach vorheriger Absprache und mit einem Aufschlag möglich."
  },
  {
    question: "Wie funktioniert die Abrechnung?",
    answer: "Retainer werden monatlich im Voraus zum 1. des Monats abgerechnet. Einzelstunden werden nach Projektabschluss oder 14-tägig in Rechnung gestellt. Ich nutze Stripe für sichere Zahlungen."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <span className="text-terracotta-500 font-bold uppercase tracking-widest text-sm">Häufige Fragen</span>
        <h2 className="font-serif text-4xl text-navy-900 mt-2">Alles, was Sie wissen müssen.</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`rounded-2xl border transition-all duration-300 ${
              openIndex === index 
              ? 'bg-white border-terracotta-200 shadow-lg' 
              : 'bg-white/50 border-transparent hover:bg-white'
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`font-serif text-lg ${openIndex === index ? 'text-terracotta-600 font-bold' : 'text-navy-900'}`}>
                {faq.question}
              </span>
              {openIndex === index ? <ChevronUp className="text-terracotta-500" /> : <ChevronDown className="text-navy-400" />}
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 text-navy-800/70 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
