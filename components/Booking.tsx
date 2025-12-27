
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24 container mx-auto px-6">
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-cream-200">
        <div className="flex flex-col lg:flex-row">
          
          {/* Info */}
          <div className="lg:w-2/5 bg-terracotta-500 p-12 text-cream-50 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-navy-900 opacity-10 rounded-full -ml-20 -mb-20"></div>

             <div>
               <h2 className="font-serif text-4xl mb-6">Bereit, Zeit zurückzugewinnen?</h2>
               <p className="opacity-90 text-lg leading-relaxed mb-8">
                 Buchen Sie ein kostenloses 20-minütiges Kennenlerngespräch. Wir sprechen über Ihre Herausforderungen und schauen, ob wir zusammenpassen.
               </p>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                   <Calendar className="text-cream-100" />
                   <div>
                     <p className="font-bold">Verfügbarkeit</p>
                     <p className="text-sm opacity-80">Mo - Do, 09:00 - 16:00 Uhr</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                   <Clock className="text-cream-100" />
                   <div>
                     <p className="font-bold">Dauer</p>
                     <p className="text-sm opacity-80">20 - 30 Minuten</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="mt-12 text-sm opacity-60">
               Lieber per E-Mail? <a href="mailto:hello@sarahdoe.com" className="underline hover:text-white">hello@sarahdoe.com</a>
             </div>
          </div>

          {/* Kalender Dummy */}
          <div className="lg:w-3/5 p-12 bg-cream-50">
            <h3 className="text-navy-900 font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-navy-100 text-navy-800 flex items-center justify-center text-sm">1</span>
              Datum & Uhrzeit wählen
            </h3>

            <div className="border border-cream-200 rounded-xl bg-white p-6 shadow-sm mb-8">
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg text-navy-900">November 2024</span>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-cream-100 rounded-full text-navy-600">&lt;</button>
                  <button className="p-2 hover:bg-cream-100 rounded-full text-navy-600">&gt;</button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 text-navy-400 font-medium">
                <div>So</div><div>Mo</div><div>Di</div><div>Mi</div><div>Do</div><div>Fr</div><div>Sa</div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                 {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                   <button 
                    key={day}
                    disabled={day < 5 || day % 7 === 0 || day % 7 === 6}
                    className={`
                      aspect-square flex items-center justify-center rounded-full text-sm
                      ${day === 12 ? 'bg-navy-900 text-white shadow-lg shadow-navy-900/30' : ''}
                      ${(day < 5 || day % 7 === 0 || day % 7 === 6) ? 'text-gray-300 cursor-not-allowed' : 'text-navy-800 hover:bg-terracotta-100 cursor-pointer'}
                    `}
                   >
                     {day}
                   </button>
                 ))}
              </div>

              <div className="mt-6 pt-6 border-t border-cream-100">
                <p className="text-sm font-bold text-navy-900 mb-3">Verfügbare Zeiten für den 12. Nov:</p>
                <div className="flex flex-wrap gap-2">
                  {['10:00', '11:30', '14:00', '15:15'].map(time => (
                    <button key={time} className="px-4 py-2 border border-terracotta-200 text-terracotta-600 rounded-lg text-sm hover:bg-terracotta-500 hover:text-white transition-colors">
                      {time} Uhr
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-terracotta-500 text-white rounded-xl font-bold shadow-xl shadow-terracotta-500/20 hover:bg-terracotta-600 transition-all">
              Termin bestätigen
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
