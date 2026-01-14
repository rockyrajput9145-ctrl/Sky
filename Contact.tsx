
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
      alert("Message received! Our team will contact you within 24 hours.");
    }, 2000);
  };

  return (
    <div className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-cyan-500 p-12 text-slate-950 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Let's build <br />the future</h3>
              <p className="text-slate-900 font-medium mb-12 opacity-80">Ready to optimize your energy strategy? Our consultants are standing by to provide a detailed audit of your needs.</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-950/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="font-bold">contact@castawaysenergy.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-950/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span className="font-bold">+1 (800) ENERGY-C</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-xs font-black uppercase tracking-widest opacity-60">
              © 2024 Castaways Energy Global
            </div>
          </div>
          
          <div className="lg:w-3/5 p-12 bg-slate-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">How can we help?</label>
                <textarea 
                  rows={4} 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Describe your energy project..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitted}
                className={`w-full py-4 rounded-lg font-black uppercase tracking-widest transition-all ${isSubmitted ? 'bg-slate-700 cursor-not-allowed text-slate-400' : 'bg-white text-slate-950 hover:bg-cyan-500 shadow-xl shadow-white/5'}`}
              >
                {isSubmitted ? 'Processing...' : 'Secure Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
