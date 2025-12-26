
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { INITIAL_DATA } from './constants';
import { supabase } from './lib/supabase';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'dashboard' | 'login'>('home');
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState(INITIAL_DATA);

  // Initialize Auth & Fetch Data
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    const fetchPortfolio = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('portfolio_content')
        .select('content')
        .single();

      if (!error && data) {
        // Merge with INITIAL_DATA to ensure all fields are present
        setPortfolioData({ ...INITIAL_DATA, ...data.content });
      } else {
        // Use local fallback if nothing in Supabase yet
        const saved = localStorage.getItem('ruhul_portfolio_data');
        if (saved) {
          setPortfolioData({ ...INITIAL_DATA, ...JSON.parse(saved) });
        } else {
          setPortfolioData(INITIAL_DATA);
        }
      }
      setLoading(false);
    };

    fetchPortfolio();
    return () => subscription.unsubscribe();
  }, []);

  // Enforce login for dashboard
  useEffect(() => {
    if (view === 'dashboard' && !session) {
      setView('login');
    }
  }, [view, session]);

  const updateData = async (newData: any) => {
    setPortfolioData(newData);
    localStorage.setItem('ruhul_portfolio_data', JSON.stringify(newData));

    if (session?.user) {
      // Upsert to Supabase
      const { error } = await supabase
        .from('portfolio_content')
        .upsert({ 
          user_id: session.user.id, 
          content: newData,
          updated_at: new Date()
        }, { onConflict: 'user_id' });
      
      if (error) {
        console.error('Supabase update error:', error);
        throw new Error('Failed to save to Supabase');
      }
    }
  };

  const handleDashboardClick = () => {
    setView(view === 'dashboard' ? 'home' : 'dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  if (view === 'login') {
    return (
      <Login 
        onSuccess={() => setView('dashboard')} 
        onCancel={() => setView('home')} 
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar onDashboardClick={handleDashboardClick} isDashboard={view === 'dashboard'} />
      
      {view === 'home' && (
        <main>
          <Hero data={portfolioData.personal} />
          
          <div id="about" className="py-24 bg-white border-y border-slate-100 scroll-mt-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">About Me</h2>
              <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed italic">
                "{portfolioData.personal.summary}"
              </p>
            </div>
          </div>

          <Skills data={portfolioData.skills} />
          <Experience data={portfolioData.experiences} />
          <Portfolio data={portfolioData.portfolio} />
          <Achievements achievements={portfolioData.achievements} education={portfolioData.education} />
          
          <Contact />
        </main>
      )}

      {view === 'dashboard' && session && (
        <Dashboard data={portfolioData} onUpdate={updateData} />
      )}

      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <button onClick={handleDashboardClick} className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-widest transition-colors">
              {view === 'dashboard' ? 'View Live' : 'Manage Portfolio'}
            </button>
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Built with React & Supabase</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
