
import React from 'react';
import ThreeBackground from './ThreeBackground';
import { Github, Mail, MapPin, Terminal, Download, ArrowRight } from 'lucide-react';

interface HeroProps {
  data: any;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const handleDownloadResume = () => {
    // Simulate resume download
    alert('Generating resume PDF... Your download will start shortly.');
    window.print(); // Fallback to browser print as a creative resume generation method
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden scroll-mt-24">
      <ThreeBackground />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100">
            <Terminal size={16} />
            <span>Available for new opportunities</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Crafting <span className="text-blue-600">Scalable</span> <br /> 
              Software Solutions
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Hi, I'm <span className="font-bold text-slate-900">{data.name}</span>. 
              {data.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleDownloadResume}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-200 active:scale-95 flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </button>
            <div className="flex items-center gap-4 px-4">
              <a 
                href={`https://${data.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
              >
                <Github size={20} />
              </a>
              <a 
                href={`mailto:${data.email}`} 
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-slate-500 font-medium">
             <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                <span>{data.location}</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Competitive Programmer</span>
             </div>
          </div>
        </div>

        <div className="relative group lg:block hidden animate-in fade-in slide-in-from-right duration-1000">
           <div className="w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[4rem] border-4 border-white shadow-2xl flex items-center justify-center p-1 relative overflow-hidden rotate-3">
              {/* Actual Image Holder */}
              <img 
                src="/assets/hero.png" 
                alt={data.name}
                className="w-full h-full object-cover rounded-[3.8rem] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3.8rem]"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl -rotate-3 transition-transform group-hover:rotate-0">
                <div className="flex items-center justify-between">
                   <div>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Current Role</p>
                      <h4 className="text-lg font-bold text-slate-900">{data.title}</h4>
                   </div>
                   <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight size={20} />
                   </div>
                </div>
              </div>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-400/20 blur-[100px] rounded-full"></div>
           <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-400/20 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
