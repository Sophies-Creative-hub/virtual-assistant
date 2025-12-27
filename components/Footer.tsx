
import React from 'react';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-cream-100 pt-20 pb-10 px-6 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        
        {/* Marke */}
        <div className="md:col-span-1">
          <div className="text-2xl font-serif font-bold text-white mb-4">Sarah Doe</div>
          <p className="opacity-60 leading-relaxed mb-6">
            Professionelle virtuelle Assistenz für kreative Unternehmer. Lassen Sie uns gemeinsam wachsen – Schritt für Schritt.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-terracotta-500 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-terracotta-500 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-terracotta-500 transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-white mb-6">Erkunden</h4>
          <ul className="space-y-3 opacity-70 text-sm">
            <li><a href="#about" className="hover:text-terracotta-400 transition-colors">Über mich</a></li>
            <li><a href="#services" className="hover:text-terracotta-400 transition-colors">Leistungen</a></li>
            <li><a href="#pricing" className="hover:text-terracotta-400 transition-colors">Preise</a></li>
            <li><a href="#faq" className="hover:text-terracotta-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="font-bold text-white mb-6">Kontakt</h4>
          <ul className="space-y-3 opacity-70 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:hello@sarahdoe.com">hello@sarahdoe.com</a>
            </li>
            <li>Sitz in Berlin, Deutschland</li>
            <li>Weltweite Zusammenarbeit</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-white mb-6">Organisiert bleiben</h4>
          <p className="opacity-60 text-sm mb-4">Wöchentliche Tipps zu Produktivität und Tools.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="E-Mail-Adresse" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-terracotta-500 text-sm"
            />
            <button className="bg-terracotta-500 text-white font-bold py-3 rounded-lg hover:bg-terracotta-600 transition-colors text-sm">
              Abonnieren
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-8 text-center text-xs opacity-40">
        &copy; {new Date().getFullYear()} Sarah Doe Virtuelle Assistenz. Alle Rechte vorbehalten. <br/>
        Professionell & Warmherzig.
      </div>
    </footer>
  );
};
