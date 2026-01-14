
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAdvisor from './components/GeminiAdvisor';

const App: React.FC = () => {
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Hero onOpenAdvisor={() => setIsAdvisorOpen(true)} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="why-us">
          <WhyChooseUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {/* Floating AI Advisor Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsAdvisorOpen(!isAdvisorOpen)}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 p-4 rounded-full shadow-lg transition-all transform hover:scale-110 energy-glow flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        </button>
      </div>

      <GeminiAdvisor isOpen={isAdvisorOpen} onClose={() => setIsAdvisorOpen(false)} />
    </div>
  );
};

export default App;
