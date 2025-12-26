
import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { Experience as ExperienceType } from '../types';
import TorusBackground from './TorusBackground';

interface ExperienceProps {
  data: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-24 bg-slate-50 scroll-mt-24 relative overflow-hidden">
      <TorusBackground />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The Journey</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Professional Experience</h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {data.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {idx !== data.length - 1 && (
                <div className="absolute left-[11px] md:left-1/2 top-8 bottom-0 w-[2px] bg-slate-200 -ml-[1px]"></div>
              )}
              
              <div className={`flex flex-col md:flex-row items-start md:items-center mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full border-4 border-slate-50 bg-blue-600 -ml-3 z-10 hidden md:block"></div>
                
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="p-8 rounded-3xl bg-white shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                        <Briefcase size={20} />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-tighter">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h4>
                    <p className="text-blue-600 font-semibold mb-6">{exp.company}</p>
                    
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                          <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
