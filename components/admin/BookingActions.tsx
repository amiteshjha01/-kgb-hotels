'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  MoreHorizontal, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Loader2, 
  UserCheck, 
  UserMinus,
  Calendar,
  Bed,
  LogOut,
  ChevronRight,
  ClipboardCheck,
  Ban
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function BookingActions({ id, currentStatus, currentBookingStatus }: { id: string, currentStatus: string, currentBookingStatus?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updateField = async (field: string, value: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: value })
      });

      if (res.ok) {
        router.refresh();
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Update field error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm active:scale-95 ml-auto",
          isOpen && "bg-slate-50 border-indigo-200 text-indigo-600"
        )}
      >
        {loading ? <Loader2 className="animate-spin" size={16} /> : <MoreHorizontal size={18} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10, x: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 z-50 p-2 overflow-hidden origin-top-right ring-1 ring-slate-900/5"
          >
             
             {/* Lead Status Section */}
             <div className="px-3 pt-3 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <ClipboardCheck size={12} className="text-slate-300" />
                Pipeline Management
             </div>
             
             <div className="space-y-1 mb-2">
               <button
                  onClick={() => updateField('status', 'converted')}
                  className={cn(
                      "flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-xs font-bold transition-all",
                      currentStatus === 'converted' ? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
               >
                  <div className="flex items-center gap-2.5">
                    <UserCheck size={16} />
                    <span>Mark Converted</span>
                  </div>
                  {currentStatus === 'converted' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
               </button>

               <button
                  onClick={() => updateField('status', 'lost')}
                  className={cn(
                      "flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-xs font-bold transition-all",
                      currentStatus === 'lost' ? "bg-rose-50 text-rose-700" : "text-slate-600 hover:bg-rose-50/50 hover:text-rose-700"
                  )}
               >
                  <div className="flex items-center gap-2.5">
                    <UserMinus size={16} />
                    <span>Mark Lost</span>
                  </div>
                  {currentStatus === 'lost' && <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
               </button>
             </div>

             <div className="mt-3 pt-2 pb-2 bg-slate-50/50 -mx-2 -mb-2 border-t border-slate-100 px-4">
                <p className="text-[9px] text-slate-400 font-medium italic text-center">Protocol updates sync to global record.</p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
