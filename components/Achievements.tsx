
import React from 'react';
import { Trophy, GraduationCap, Award } from 'lucide-react';
import { Achievement } from '../types';
import RingBackground from './RingBackground';

interface AchievementsProps {
  achievements: Achievement[];
  education: any[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements, education }) => {
  return (
    <section id="education" className="py-24 bg-white scroll-mt-24 relative overflow-hidden">
      <RingBackground />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Achievements */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center">
                <Trophy size={24} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900">Achievements</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-yellow-200 transition-all group">
                   <div className="mb-4 text-slate-400 group-hover:text-yellow-600 transition-colors">
                     <Award size={20} />
                   </div>
                   <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{item.title}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-indigo-300">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-indigo-200/80 font-medium">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
