
import React, { useState } from 'react';
import { Mail, Github, Send, ExternalLink, Loader2, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('contact_messages')
      .insert([formData]);

    setLoading(false);
    if (!error) {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } else {
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-12 lg:p-20 bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold mb-6 leading-tight">Let's build something <br /> <span className="text-blue-500">amazing</span> together.</h2>
                <p className="text-slate-400 text-lg mb-12 max-w-sm">
                  Ready to take your project to the next level? Reach out for collaborations or just to say hi.
                </p>

                <div className="space-y-6">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email me at</p>
                      <p className="font-semibold">{PERSONAL_INFO.email}</p>
                    </div>
                  </a>

                  <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Follow on</p>
                      <p className="font-semibold">{PERSONAL_INFO.github}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10 flex gap-6">
                 <div className="text-xs font-medium text-slate-500 italic">
                    Based in {PERSONAL_INFO.location}
                 </div>
              </div>
            </div>

            <div className="p-12 lg:p-20 relative">
              {success && (
                <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-10 animate-in fade-in duration-500">
                   <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={40} />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                   <p className="text-slate-500">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Project Inquiry" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    required
                    rows={5} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project..." 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95 group disabled:opacity-70"
                >
                  {loading ? <Loader2 className="animate-spin" /> : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
