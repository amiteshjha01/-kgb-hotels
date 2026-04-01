'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Building2, Lock, User, AlertCircle, Loader2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/admin');
      } else {
        setError(data.message || 'Verification failed. Please check credentials.');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred. System connectivity issue.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      <div className="max-w-md w-full relative z-10 animate-in fade-in zoom-in-95 duration-700">
        <div className="bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl p-10">
          <div className="text-center mb-10">
            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-indigo-500/20 relative group overflow-hidden">
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
               <Building2 className="text-white w-10 h-10 relative z-10" />
            </div>
            <div className="space-y-2">
               <Badge variant="info" className="bg-indigo-500/10 text-indigo-400 border-none px-4 py-1 font-bold uppercase tracking-[0.2em] text-[10px]">
                  Central Command
               </Badge>
               <h1 className="text-3xl font-black text-white tracking-tight">KGB Hotels</h1>
               <p className="text-slate-400 font-medium text-sm">Secure administrative gatekeeper</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-7">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest pl-1" htmlFor="email">
                Administrative ID
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                  <User size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-6 py-4 bg-white/[0.05] border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all text-sm text-white font-bold placeholder:text-slate-600"
                  placeholder="ID Number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest pl-1" htmlFor="password">
                Security Cipher
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-6 py-4 bg-white/[0.05] border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all text-sm text-white font-bold placeholder:text-slate-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="shrink-0 mt-0.5" size={18} />
                <p className="text-xs font-bold leading-relaxed">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              isLoading={loading}
              className="w-full bg-white text-black hover:bg-slate-200 py-7 rounded-2xl font-black text-xs uppercase tracking-widest gap-3 shadow-xl active:scale-[0.98] transition-all"
            >
              Initialize Session
              <ArrowRight size={16} />
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center gap-2">
            <ShieldCheck size={14} className="text-emerald-500" />
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">
               Encrypted Protocol • V2.4.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
