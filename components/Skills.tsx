
import React from 'react';
import { Layers, Cpu, Users } from 'lucide-react';
import { SkillGroup } from '../types';

interface SkillsProps {
  data: SkillGroup[];
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Languages': return <Cpu size={20} />;
      case 'Frameworks & Tech': return <Layers size={20} />;
      default: return <Users size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Expertise</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Technical Arsenal</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((group) => (
            <div key={group.category} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                {getIcon(group.category)}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
