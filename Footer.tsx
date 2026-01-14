
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center transform rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-950 w-5 h-5 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white">CASTAWAYS<span className="text-cyan-400">ENERGY</span></span>
          </div>
          
          <nav className="flex space-x-8">
            <a href="#about" className="text-sm text-slate-500 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-sm text-slate-500 hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="text-sm text-slate-500 hover:text-white transition-colors">Advantage</a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 text-slate-600 text-xs tracking-widest uppercase font-bold">
          <div className="mb-4 md:mb-0">© 2024 Castaways Energy Inc. All Rights Reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
