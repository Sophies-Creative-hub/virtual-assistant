
import React, { useState, useEffect } from 'react';
import { Menu, X, Feather } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Über mich', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cream-50/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Bereich */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-terracotta-500 rounded-lg rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center text-cream-50">
             <Feather size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-navy-900 leading-none">Sarah Doe</span>
            <span className="text-xs uppercase tracking-widest text-terracotta-600">Virtuelle Assistenz</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-navy-800 hover:text-terracotta-500 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking"
            className="px-6 py-2.5 bg-navy-800 text-cream-50 text-sm font-bold rounded-full hover:bg-terracotta-500 transition-colors shadow-lg hover:shadow-terracotta-500/30"
          >
            Zusammenarbeiten
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-navy-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-cream-50 border-t border-cream-200 shadow-xl md:hidden p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-navy-800 text-lg font-medium py-2 border-b border-cream-200"
            >
              {link.name}
            </a>
          ))}
           <a 
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full py-3 bg-terracotta-500 text-white text-center rounded-lg font-bold"
          >
            Gespräch buchen
          </a>
        </div>
      )}
    </header>
  );
};
