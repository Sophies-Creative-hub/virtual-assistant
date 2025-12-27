
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-navy-800 bg-cream-50">
      {/* Globale Hintergrundelemente */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-terracotta-400 rounded-full watercolor-blob opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-800 rounded-full watercolor-blob opacity-10 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cream-200 rounded-full watercolor-blob opacity-60"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <Testimonials />
          <Booking />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
