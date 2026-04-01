'use client';

import { useState } from 'react';
import { KeyRound, ShieldAlert, CheckCircle2, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError("New passwords don't match");
      setLoading(false);
      return;
    }

    if (newPassword.length < 8) {
        setError("New password must be at least 8 characters");
        setLoading(false);
        return;
    }

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess('Password changed successfully!');
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError(data.message || 'Failed to change password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto pt-6 pb-20">
      <Card className="border-slate-200/60 shadow-sm overflow-hidden">
        <CardHeader className="py-8 bg-slate-50/50">
          <div className="flex items-center gap-5">
            <div className="bg-slate-900 p-3.5 rounded-[1.25rem] text-white shadow-xl shadow-slate-900/10">
              <KeyRound size={26} strokeWidth={2} />
            </div>
            <div>
               <Badge variant="success" className="mb-2 gap-1.5 font-bold uppercase tracking-widest text-[9px] bg-emerald-50 border-emerald-100 text-emerald-700">
                  <ShieldCheck size={10} />
                  Secure Protocol
               </Badge>
               <CardTitle className="text-2xl font-bold tracking-tight">Security Access</CardTitle>
               <CardDescription className="text-slate-500 font-medium">Manage and rotate your administrative credentials.</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="bg-rose-50 border border-rose-100/50 text-rose-700 p-4 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="shrink-0 mt-0.5" size={18} />
                  <p className="text-sm font-bold">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-emerald-50 border border-emerald-100/50 text-emerald-700 p-4 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
                  <p className="text-sm font-bold">{success}</p>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-1" htmlFor="oldPassword">
                Verification Password
              </label>
              <input
                id="oldPassword"
                type="password"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="block w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                placeholder="Current secret"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-1" htmlFor="newPassword">
                  Proposed New Credential
                </label>
                <input
                  id="newPassword"
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="block w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                  placeholder="Min. 8 char."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-1" htmlFor="confirmPassword">
                  Repeat New Credential
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                  placeholder="Repeat"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-5">
              <Button
                type="submit"
                isLoading={loading}
                size="lg"
                className="w-full sm:w-auto px-10 py-7 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl transition-all shadow-xl shadow-slate-900/10"
              >
                Sync New Security Status
              </Button>
              <div className="flex items-center gap-2 text-[11px] font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-xl border border-amber-100/50">
                 <ShieldAlert size={16} />
                 <span>Will invalidate other sessions</span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
