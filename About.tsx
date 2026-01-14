
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 rounded-2xl transform rotate-3 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" 
              alt="Clean Energy Infrastructure" 
              className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 p-8 rounded-xl z-20 shadow-xl">
              <span className="block text-4xl font-black text-cyan-400 mb-1">15+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-500">Years Industry Experience</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-500 mb-4">Our Legacy & Mission</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">WE DON'T JUST SUPPLY POWER. <br /><span className="text-slate-500">WE BUILD TRUST.</span></h3>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Castaways Energy was born from a vision to bridge the gap between legacy infrastructure and the future of renewable resilience. We focus on providing high-impact energy solutions that are both ecologically responsible and commercially viable.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 flex-shrink-0 bg-cyan-500/20 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Innovative Frameworks</h4>
                  <p className="text-sm text-slate-500">Utilizing proprietary AI-driven grid management systems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 flex-shrink-0 bg-cyan-500/20 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Global Reliability</h4>
                  <p className="text-sm text-slate-500">Maintaining 99.99% uptime across all managed infrastructures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
