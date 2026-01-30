
import React, { useState } from 'react';
import Logo from './components/Logo';
import ProfileCard from './components/ProfileCard';
import { FOUNDERS, COMPANY_DATA } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contacts' | 'company'>('contacts');

  return (
    <div className="min-h-screen w-full bg-black text-white pb-24 overflow-x-hidden relative">
      {/* Background Glow Effect - Responsive sizing */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-orange-500/10 blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered and spacious */}
        <header className="pt-12 pb-10 sticky top-0 bg-black/80 backdrop-blur-md z-50 text-center">
          <div className="flex flex-col items-center">
            <Logo className="text-4xl md:text-5xl" />
            <p className="text-gray-500 text-xs md:text-sm mt-3 font-medium tracking-[0.2em] uppercase">
              Democratizing the Influencer Economy
            </p>
          </div>
        </header>

        {/* Tab Navigation - Narrower container for better UX */}
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-white/5 p-1.5 rounded-2xl flex">
            <button 
              onClick={() => setActiveTab('contacts')}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'contacts' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              The Team
            </button>
            <button 
              onClick={() => setActiveTab('company')}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'company' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              The Vision
            </button>
          </div>
        </div>

        <main className="pb-10">
          {activeTab === 'contacts' ? (
            <div className="animate-in slide-in-from-left-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {FOUNDERS.map((founder, idx) => (
                  <ProfileCard key={idx} founder={founder} />
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-10 animate-in slide-in-from-right-4 duration-500 max-w-5xl mx-auto">
              {/* Mission & Values Responsive Card */}
              <div className="glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <h3 className="text-orange-500 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Our Mission</h3>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6">
                      {COMPANY_DATA.mission}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                      {COMPANY_DATA.description}
                    </p>
                  </div>

                  <div className="space-y-8 bg-white/5 p-8 rounded-3xl border border-white/5">
                    {COMPANY_DATA.values.map((val, idx) => (
                      <div key={idx} className="flex gap-5 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                          <i className={`fas ${idx === 0 ? 'fa-eye' : idx === 1 ? 'fa-users' : 'fa-globe'} text-orange-500 text-xl`}></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg mb-1">{val.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed">{val.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card rounded-3xl p-8 relative overflow-hidden group border border-orange-500/10">
                   <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
                      <i className="fas fa-rocket text-8xl text-orange-500"></i>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-3">Join the Revolution</h3>
                   <p className="text-gray-400 text-base mb-6">Start your journey from shopkeeper to enterprise influencer marketing today.</p>
                   <a 
                    href="mailto:krish@influrunner.com" 
                    className="inline-flex items-center text-orange-500 font-bold hover:gap-3 transition-all text-lg"
                   >
                     Partner With Us <i className="fas fa-arrow-right ml-2"></i>
                   </a>
                </div>

                <div className="glass-card rounded-3xl p-8 relative overflow-hidden group border border-white/10 flex flex-col justify-center">
                   <h3 className="text-2xl font-bold text-white mb-3">Contact Support</h3>
                   <p className="text-gray-400 text-base mb-6">Have questions? Our team is available to help you navigate the influencer economy.</p>
                   <div className="flex gap-4">
                     <a href="mailto:krish@influrunner.com" className="text-gray-400 hover:text-white transition-colors"><i className="fas fa-envelope mr-2"></i> Email</a>
                     <a href="https://wa.me/919099368070" className="text-gray-400 hover:text-green-500 transition-colors"><i className="fab fa-whatsapp mr-2"></i> WhatsApp</a>
                   </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Persistent Footer CTA - Centered and sleek */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <a 
          href="https://influrunner.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-3 bg-white text-black font-extrabold py-3.5 px-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform active:scale-95 text-sm uppercase tracking-widest"
        >
          <span>Visit Website</span>
          <i className="fas fa-external-link-alt text-xs"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
