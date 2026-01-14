
import React from 'react';

interface HeroProps {
  onOpenAdvisor: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAdvisor }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Leading the Energy Transition</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">
            EMPOWERING THE <br />
            <span className="gradient-text">FUTURE OF ENERGY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            At Castaways Energy, we design and deliver next-generation power solutions that redefine reliability, sustainability, and efficiency for the modern world.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-cyan-500 text-slate-950 rounded-full font-extrabold text-lg hover:bg-cyan-400 transition-all transform hover:-translate-y-1 shadow-xl energy-glow text-center"
            >
              Get In Touch
            </a>
            <button 
              onClick={onOpenAdvisor}
              className="px-10 py-5 bg-slate-900 text-white border border-slate-700 rounded-full font-extrabold text-lg hover:bg-slate-800 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Consult with AI</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.047a1 1 0 01.897.487l1.174 1.956a1 1 0 01-.504 1.414l-1.673.837a1 1 0 00-.546 1.103l.362 1.81a1 1 0 01-.613 1.121l-1.35.54a1 1 0 00-.6 1.076l.243 1.458a1 1 0 01-.676 1.12l-1.503.501a1 1 0 00-.638 1.192l.332 1.33a1 1 0 01-.84 1.233l-1.465.183a1 1 0 00-.816 1.25l.286 1.144a1 1 0 01-.818 1.232l-1.53.191a1 1 0 00-.816 1.25l.286 1.144a1 1 0 01-.818 1.232l-1.53.191a1 1 0 00-.816 1.25l.286 1.144a1 1 0 01-.818 1.232l-1.53.191a1 1 0 00-.882.973v2a1 1 0 11-2 0v-2a3 3 0 012.647-2.98l1.53-.192a3 3 0 012.449-3.75l-.286-1.144a3 3 0 012.454-3.696l1.53-.192a3 3 0 012.449-3.75l-.286-1.144a3 3 0 012.454-3.696l1.504-.501a3 3 0 011.913-3.576l-.243-1.458a3 3 0 011.802-3.228l1.35-.54a3 3 0 011.838-3.364l.613-1.121a3 3 0 011.637-3.309l-.362-1.81a3 3 0 011.638-3.309l1.674-.836a3 3 0 011.512-4.243l-1.174-1.956a3 3 0 01-2.69-1.46z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-20 flex items-center space-x-12 opacity-50 grayscale hover:grayscale-0 transition-all overflow-hidden whitespace-nowrap">
          <span className="text-xl font-black tracking-widest uppercase">SolarX</span>
          <span className="text-xl font-black tracking-widest uppercase">PowerGrid</span>
          <span className="text-xl font-black tracking-widest uppercase">EcoCharge</span>
          <span className="text-xl font-black tracking-widest uppercase">NexGen</span>
          <span className="text-xl font-black tracking-widest uppercase">TeraWatts</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
