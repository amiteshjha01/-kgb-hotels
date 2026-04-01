'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  BarChart3, 
  Calendar, 
  Hotel, 
  LogOut, 
  Menu, 
  X, 
  User,
  LayoutDashboard,
  KeyRound,
  ChevronRight,
  Bell,
  Search
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/Button';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (err) {
      console.error('Logout failed');
    }
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Bookings', href: '/admin/bookings', icon: Calendar },
    { name: 'Hotels', href: '/admin/hotels', icon: Hotel },
    { name: 'Change Password', href: '/admin/change-password', icon: KeyRound },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar - Desktop */}
      <aside
        className={cn(
          "bg-slate-900 text-white transition-all duration-300 ease-in-out hidden lg:flex flex-col z-40 border-r border-slate-800",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center px-6 border-b border-slate-800 shrink-0">
            <Link href="/admin" className="flex items-center gap-3 overflow-hidden">
              <div className="bg-indigo-600 p-2 rounded-xl flex-shrink-0 shadow-lg shadow-indigo-500/20">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              {isSidebarOpen && (
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight leading-none text-white">KGB Admin</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Hospitality CRM</span>
                </div>
              )}
            </Link>
          </div>

          {/* User Profile Summary */}
          {isSidebarOpen && (
             <div className="px-6 py-6 border-b border-slate-800">
                <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-2xl border border-slate-700/50">
                   <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                      <User size={20} />
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">Administrator</p>
                      <p className="text-[10px] text-slate-400 font-medium truncate uppercase tracking-wider">Super Auth</p>
                   </div>
                </div>
             </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative",
                    isActive 
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                      : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
                  )}
                  title={!isSidebarOpen ? item.name : ""}
                >
                  <item.icon className={cn("w-5 h-5 shrink-0 transition-transform group-hover:scale-110", isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300")} />
                  {isSidebarOpen && <span className="font-bold text-[13px] tracking-tight">{item.name}</span>}
                  {isActive && isSidebarOpen && (
                    <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Toggle Sidebar & Logout */}
          <div className="p-4 border-t border-slate-800 space-y-2">
            <button
               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
               className="hidden lg:flex items-center gap-3 px-3 py-2 w-full rounded-xl text-slate-500 hover:text-white hover:bg-slate-800 transition-all text-sm font-medium"
            >
               <div className={cn("transition-transform duration-300", !isSidebarOpen && "rotate-180")}>
                  <ChevronRight size={18} />
               </div>
               {isSidebarOpen && <span>Collapse Sidebar</span>}
            </button>
            <button
              onClick={handleLogout}
              className={cn(
                "flex items-center gap-3 px-3 py-3 w-full rounded-xl text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all text-sm font-bold"
              )}
            >
              <LogOut className="w-5 h-5 shrink-0" />
              {isSidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer (Overlay) */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity lg:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 w-72 bg-slate-900 text-white z-50 transition-transform duration-300 transform lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
           <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                 <div className="bg-indigo-600 p-2 rounded-xl">
                    <BarChart3 className="w-6 h-6" />
                 </div>
                 <span className="font-bold text-lg">KGB Admin</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400">
                 <X size={24} />
              </button>
           </div>
           <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-4 px-4 py-4 rounded-2xl font-bold text-sm transition-all",
                    pathname === item.href 
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                      : "text-slate-400 hover:bg-slate-800"
                  )}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              ))}
           </nav>
           <div className="p-6 border-t border-slate-800">
              <button onClick={handleLogout} className="flex items-center gap-4 w-full px-4 py-4 rounded-2xl bg-rose-500/10 text-rose-400 font-bold text-sm">
                 <LogOut size={20} />
                 Sign Out
              </button>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 relative z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Breadcrumb Context */}
            <div className="hidden md:flex flex-col justify-center">
               <h2 className="text-lg font-bold text-slate-900 leading-tight">
                 {navItems.find(item => item.href === pathname)?.name || 'Admin Area'}
               </h2>
               <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  <span>KGB Hotels</span>
                  <ChevronRight size={10} />
                  <span className="text-indigo-500">{navItems.find(item => item.href === pathname)?.name || 'Overview'}</span>
               </div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
             {/* Simple Search Toggle */}
             <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all hidden sm:flex">
                <Search size={20} />
             </button>
             
             {/* Notifications */}
             <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
             </button>

             <div className="w-px h-8 bg-slate-200 mx-1 hidden sm:block" />

             <div className="flex items-center gap-3 pl-1">
                <div className="text-right hidden sm:block">
                   <p className="text-sm font-bold text-slate-900 leading-none">Admin User</p>
                   <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Online</p>
                </div>
                <div className="h-11 w-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm transition-transform hover:scale-105 cursor-pointer">
                  <User className="w-5 h-5" />
                </div>
             </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50 p-4 md:p-8 lg:p-10">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </div>
  );
}
