
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Lock, Mail, Loader2, ArrowLeft } from 'lucide-react';

interface LoginProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const Login: React.FC<LoginProps> = ({ onSuccess, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      onSuccess();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-md">
        <button 
          onClick={onCancel}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-medium"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
            <p className="text-slate-500 text-sm mt-2">Enter credentials to manage portfolio</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-400 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-400 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg active:scale-95 disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
