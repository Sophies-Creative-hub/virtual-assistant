
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basis",
    hours: "10 Stunden / Monat",
    price: "450 €",
    features: [
      "E-Mail & Inbox Management",
      "Terminplanung & Kalender",
      "Monatlicher Statusbericht",
      "Reaktionszeit unter 24h"
    ],
    highlight: false
  },
  {
    name: "Profi",
    hours: "20 Stunden / Monat",
    price: "850 €",
    features: [
      "Alles aus dem Basis-Paket",
      "Social Media Planung",
      "Rechnungswesen & Ausgaben",
      "14-tägiger Strategie-Call",
      "Priorisierter Support"
    ],
    highlight: true
  },
  {
    name: "Premium",
    hours: "40 Stunden / Monat",
    price: "1.600 €",
    features: [
      "Alles aus dem Profi-Paket",
      "Projektmanagement (Asana/Trello)",
      "Reisekoordination",
      "Wöchentliche Strategie-Calls",
      "Slack-Zugang (9:00 - 17:00 Uhr)"
    ],
    highlight: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 container mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        <div className="md:w-1/3 md:sticky md:top-32">
          <span className="text-terracotta-500 font-bold uppercase tracking-widest text-sm">Investition</span>
          <h2 className="font-serif text-4xl text-navy-900 mt-3 mb-6">Einfache, transparente Preise.</h2>
          <p className="text-navy-800/70 text-lg mb-8">
            Keine versteckten Gebühren. Wählen Sie das Retainer-Modell, das am besten zu Ihrer aktuellen Phase passt.
          </p>
          
          <div className="bg-navy-900 text-cream-50 p-6 rounded-2xl relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-20 h-20 bg-terracotta-500 rounded-full opacity-20"></div>
             <h3 className="font-bold text-xl mb-2">Einzelstunden</h3>
             <p className="opacity-80 mb-4">Brauchen Sie Hilfe bei einem einmaligen Projekt? Ich biete flexible Unterstützung.</p>
             <div className="text-3xl font-serif font-bold text-terracotta-400 mb-4">55 € <span className="text-sm font-sans text-cream-200 font-normal">/ Stunde</span></div>
             <button className="w-full py-2 border border-cream-50/30 rounded-lg hover:bg-cream-50/10 transition-colors">Verfügbarkeit anfragen</button>
          </div>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-3xl border flex flex-col ${
                plan.highlight 
                ? 'bg-white border-terracotta-200 shadow-2xl shadow-terracotta-500/10 md:col-span-2 lg:col-span-1 relative' 
                : 'bg-cream-50 border-cream-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-terracotta-100 text-terracotta-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Beliebteste Wahl
                </div>
              )}
              
              <h3 className="font-serif text-2xl text-navy-900 mb-1">{plan.name}</h3>
              <p className="text-sm text-navy-800/60 font-bold uppercase tracking-wide mb-6">{plan.hours}</p>
              
              <div className="text-4xl font-serif font-bold text-navy-900 mb-8">
                {plan.price} <span className="text-lg font-sans text-navy-800/40 font-normal">/Monat</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-navy-800/80">
                    <Check size={20} className="text-terracotta-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight 
                  ? 'bg-terracotta-500 text-white hover:bg-terracotta-600 shadow-lg' 
                  : 'bg-navy-900 text-white hover:bg-navy-800'
                }`}
              >
                {plan.name} wählen
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
