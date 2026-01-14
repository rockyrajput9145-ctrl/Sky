
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const stats = [
    { label: 'Uptime', value: '99.9%' },
    { label: 'CO2 Saved', value: '1.2M Tons' },
    { label: 'Projects', value: '450+' },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-cyan-500/5 -skew-y-3 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-500 mb-4">The Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">WHY LEADING BRANDS <br />PARTNER WITH US</h3>
            
            <div className="space-y-8">
              <div className="p-6 bg-slate-900/50 border-l-4 border-cyan-500 rounded-r-xl">
                <h4 className="text-xl font-bold text-white mb-2">Unmatched Resilience</h4>
                <p className="text-slate-400">Our systems are stress-tested against the most extreme environmental conditions, ensuring your operations never stop.</p>
              </div>
              
              <div className="p-6 bg-slate-900/50 border-l-4 border-cyan-500 rounded-r-xl">
                <h4 className="text-xl font-bold text-white mb-2">Hyper-Efficient ROI</h4>
                <p className="text-slate-400">We don't just reduce carbon; we optimize your bottom line by drastically lowering operational energy expenditure.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl text-center group hover:bg-slate-800 transition-all">
                <div className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
