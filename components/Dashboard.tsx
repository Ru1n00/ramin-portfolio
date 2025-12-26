
import React, { useState } from 'react';
import { Save, Plus, Trash2, Layout, Briefcase, GraduationCap, Trophy, Cpu, FolderOpen, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface DashboardProps {
  data: any;
  onUpdate: (newData: any) => Promise<void>;
}

const Dashboard: React.FC<DashboardProps> = ({ data, onUpdate }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [localData, setLocalData] = useState(data);

  const handleSave = async () => {
    try {
      await onUpdate(localData);
      alert('Changes saved successfully!');
    } catch (error) {
      alert('Failed to save changes. Please try again.');
      console.error('Save error:', error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const updateProfile = (key: string, val: string) => {
    setLocalData({
      ...localData,
      personal: { ...localData.personal, [key]: val }
    });
  };

  const addExperience = () => {
    const newExp = { company: 'New Company', role: 'Role', period: '2025', bullets: ['Responsibility'] };
    setLocalData({ ...localData, experiences: [newExp, ...localData.experiences] });
  };

  const removeExperience = (idx: number) => {
    const next = [...localData.experiences];
    next.splice(idx, 1);
    setLocalData({ ...localData, experiences: next });
  };

  const addEducation = () => {
    const newEdu = { degree: 'Degree', institution: 'University', score: 'N/A' };
    setLocalData({ ...localData, education: [...localData.education, newEdu] });
  };

  const removeEducation = (idx: number) => {
    const next = [...localData.education];
    next.splice(idx, 1);
    setLocalData({ ...localData, education: next });
  };

  const addSkillGroup = () => {
    const newGroup = { category: 'New Category', items: ['Skill 1'] };
    setLocalData({ ...localData, skills: [...localData.skills, newGroup] });
  };

  const removeSkillGroup = (idx: number) => {
    const next = [...localData.skills];
    next.splice(idx, 1);
    setLocalData({ ...localData, skills: next });
  };

  const addSkillItem = (groupIdx: number) => {
    const next = [...localData.skills];
    next[groupIdx].items.push('New Skill');
    setLocalData({ ...localData, skills: next });
  };

  const removeSkillItem = (groupIdx: number, itemIdx: number) => {
    const next = [...localData.skills];
    next[groupIdx].items.splice(itemIdx, 1);
    setLocalData({ ...localData, skills: next });
  };

  const addAchievement = () => {
    const newAch = { title: 'New Achievement', description: 'Description' };
    setLocalData({ ...localData, achievements: [...localData.achievements, newAch] });
  };

  const removeAchievement = (idx: number) => {
    const next = [...localData.achievements];
    next.splice(idx, 1);
    setLocalData({ ...localData, achievements: next });
  };

  const addPortfolioItem = () => {
    const newItem = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Project description',
      image: '/api/placeholder/400/300',
      technologies: ['Technology 1'],
      githubUrl: '',
      liveUrl: '',
      featured: false
    };
    setLocalData({ ...localData, portfolio: [...localData.portfolio, newItem] });
  };

  const removePortfolioItem = (idx: number) => {
    const next = [...localData.portfolio];
    next.splice(idx, 1);
    setLocalData({ ...localData, portfolio: next });
  };

  const updatePortfolioItem = (idx: number, field: string, value: any) => {
    const next = [...localData.portfolio];
    next[idx] = { ...next[idx], [field]: value };
    setLocalData({ ...localData, portfolio: next });
  };

  const addPortfolioTechnology = (idx: number) => {
    const next = [...localData.portfolio];
    next[idx].technologies.push('New Tech');
    setLocalData({ ...localData, portfolio: next });
  };

  const removePortfolioTechnology = (idx: number, techIdx: number) => {
    const next = [...localData.portfolio];
    next[idx].technologies.splice(techIdx, 1);
    setLocalData({ ...localData, portfolio: next });
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: Layout },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: FolderOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Dashboard</h1>
            <p className="text-slate-500">Manage your portfolio content in real-time.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white text-slate-600 px-6 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all active:scale-95"
            >
              <LogOut size={18} />
              Logout
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-blue-100 shadow-xl scale-105' : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 bg-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400">Full Name</label>
                    <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" value={localData.personal.name} onChange={(e) => updateProfile('name', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400">Title</label>
                    <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" value={localData.personal.title} onChange={(e) => updateProfile('title', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400">Email</label>
                    <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" value={localData.personal.email} onChange={(e) => updateProfile('email', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400">Location</label>
                    <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" value={localData.personal.location} onChange={(e) => updateProfile('location', e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Bio Summary</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" value={localData.personal.summary} onChange={(e) => updateProfile('summary', e.target.value)} />
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-slate-900">Work Experience</h2>
                  <button onClick={addExperience} className="flex items-center gap-2 text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-xl transition-all">
                    <Plus size={18} /> Add New
                  </button>
                </div>
                <div className="space-y-6">
                  {localData.experiences.map((exp: any, idx: number) => (
                    <div key={idx} className="p-6 border border-slate-200 rounded-2xl relative group">
                      <button onClick={() => removeExperience(idx)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input className="font-bold text-slate-900 bg-transparent border-b border-transparent focus:border-blue-500 outline-none" placeholder="Company" value={exp.company} onChange={(e) => {
                          const next = [...localData.experiences];
                          next[idx].company = e.target.value;
                          setLocalData({...localData, experiences: next});
                        }} />
                        <input className="text-blue-600 bg-transparent border-b border-transparent focus:border-blue-500 outline-none" placeholder="Role" value={exp.role} onChange={(e) => {
                          const next = [...localData.experiences];
                          next[idx].role = e.target.value;
                          setLocalData({...localData, experiences: next});
                        }} />
                      </div>
                      <input className="text-sm text-slate-400 bg-transparent border-b border-transparent focus:border-blue-500 outline-none w-full" placeholder="Period" value={exp.period} onChange={(e) => {
                        const next = [...localData.experiences];
                        next[idx].period = e.target.value;
                        setLocalData({...localData, experiences: next});
                      }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
               <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-slate-900">Education Background</h2>
                  <button onClick={addEducation} className="flex items-center gap-2 text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-xl transition-all">
                    <Plus size={18} /> Add New
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {localData.education.map((edu: any, idx: number) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                      <input className="block w-full text-lg font-bold bg-transparent border-b border-slate-200 outline-none" value={edu.degree} onChange={(e) => {
                         const next = [...localData.education];
                         next[idx].degree = e.target.value;
                         setLocalData({...localData, education: next});
                      }} />
                      <input className="block w-full bg-transparent border-b border-slate-200 outline-none" value={edu.institution} onChange={(e) => {
                         const next = [...localData.education];
                         next[idx].institution = e.target.value;
                         setLocalData({...localData, education: next});
                      }} />
                    </div>
                  ))}
                </div>
               </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-slate-900">Skills</h2>
                  <button onClick={addSkillGroup} className="flex items-center gap-2 text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-xl transition-all">
                    <Plus size={18} /> Add Category
                  </button>
                </div>
                <div className="space-y-6">
                  {localData.skills.map((group: any, groupIdx: number) => (
                    <div key={groupIdx} className="p-6 border border-slate-200 rounded-2xl relative group">
                      <button onClick={() => removeSkillGroup(groupIdx)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                      <div className="space-y-4">
                        <input 
                          className="text-lg font-bold text-slate-900 bg-transparent border-b border-transparent focus:border-blue-500 outline-none w-full" 
                          placeholder="Category" 
                          value={group.category} 
                          onChange={(e) => {
                            const next = [...localData.skills];
                            next[groupIdx].category = e.target.value;
                            setLocalData({...localData, skills: next});
                          }} 
                        />
                        <div className="space-y-2">
                          {group.items.map((item: string, itemIdx: number) => (
                            <div key={itemIdx} className="flex items-center gap-2">
                              <input 
                                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                                value={item} 
                                onChange={(e) => {
                                  const next = [...localData.skills];
                                  next[groupIdx].items[itemIdx] = e.target.value;
                                  setLocalData({...localData, skills: next});
                                }} 
                              />
                              <button onClick={() => removeSkillItem(groupIdx, itemIdx)} className="text-slate-400 hover:text-red-500 transition-colors">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ))}
                          <button onClick={() => addSkillItem(groupIdx)} className="text-blue-600 font-medium hover:bg-blue-50 px-3 py-1 rounded-lg transition-all">
                            + Add Skill
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-slate-900">Achievements</h2>
                  <button onClick={addAchievement} className="flex items-center gap-2 text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-xl transition-all">
                    <Plus size={18} /> Add Achievement
                  </button>
                </div>
                <div className="space-y-6">
                  {localData.achievements.map((ach: any, idx: number) => (
                    <div key={idx} className="p-6 border border-slate-200 rounded-2xl relative group">
                      <button onClick={() => removeAchievement(idx)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                      <div className="space-y-4">
                        <input 
                          className="text-lg font-bold text-slate-900 bg-transparent border-b border-transparent focus:border-blue-500 outline-none w-full" 
                          placeholder="Achievement Title" 
                          value={ach.title} 
                          onChange={(e) => {
                            const next = [...localData.achievements];
                            next[idx].title = e.target.value;
                            setLocalData({...localData, achievements: next});
                          }} 
                        />
                        <textarea 
                          rows={3} 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
                          placeholder="Description" 
                          value={ach.description} 
                          onChange={(e) => {
                            const next = [...localData.achievements];
                            next[idx].description = e.target.value;
                            setLocalData({...localData, achievements: next});
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-slate-900">Portfolio Projects</h2>
                  <div className="flex items-center gap-3">
                    <button onClick={handleSave} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                      <Save size={16} />
                      Save Portfolio
                    </button>
                    <button onClick={addPortfolioItem} className="flex items-center gap-2 text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-xl transition-all">
                      <Plus size={18} /> Add Project
                    </button>
                  </div>
                </div>
                <div className="space-y-6">
                  {localData.portfolio.map((project: any, idx: number) => (
                    <div key={project.id} className="p-6 border border-slate-200 rounded-2xl relative group">
                      <button onClick={() => removePortfolioItem(idx)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <input
                            className="flex-1 text-lg font-bold text-slate-900 bg-transparent border-b border-transparent focus:border-blue-500 outline-none"
                            placeholder="Project Title"
                            value={project.title}
                            onChange={(e) => updatePortfolioItem(idx, 'title', e.target.value)}
                          />
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={project.featured}
                              onChange={(e) => updatePortfolioItem(idx, 'featured', e.target.checked)}
                              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            Featured
                          </label>
                        </div>

                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                          placeholder="Project description"
                          value={project.description}
                          onChange={(e) => updatePortfolioItem(idx, 'description', e.target.value)}
                        />

                        <input
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                          placeholder="Image URL"
                          value={project.image}
                          onChange={(e) => updatePortfolioItem(idx, 'image', e.target.value)}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="GitHub URL (optional)"
                            value={project.githubUrl}
                            onChange={(e) => updatePortfolioItem(idx, 'githubUrl', e.target.value)}
                          />
                          <input
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Live Demo URL (optional)"
                            value={project.liveUrl}
                            onChange={(e) => updatePortfolioItem(idx, 'liveUrl', e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="text-sm font-bold uppercase text-slate-400">Technologies</label>
                            <button onClick={() => addPortfolioTechnology(idx)} className="text-blue-600 font-medium hover:bg-blue-50 px-3 py-1 rounded-lg transition-all">
                              + Add Tech
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string, techIdx: number) => (
                              <div key={techIdx} className="flex items-center gap-2">
                                <input
                                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                                  value={tech}
                                  onChange={(e) => {
                                    const next = [...localData.portfolio];
                                    next[idx].technologies[techIdx] = e.target.value;
                                    setLocalData({ ...localData, portfolio: next });
                                  }}
                                />
                                <button onClick={() => removePortfolioTechnology(idx, techIdx)} className="text-slate-400 hover:text-red-500 transition-colors">
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
