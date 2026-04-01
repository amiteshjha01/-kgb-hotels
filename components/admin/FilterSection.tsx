'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, Calendar, Building, AlertCircle, RotateCcw, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function FilterSection({ onFilterChange, initialFilters }: { onFilterChange: (filters: any) => void, initialFilters: any }) {
  const [filters, setFilters] = useState(initialFilters);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hotels, setHotels] = useState<any[]>([]);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch('/api/admin/hotels');
        const data = await res.json();
        if (data.hotels) setHotels(data.hotels);
      } catch (err) {
        console.error('Failed to fetch hotels for filter:', err);
      }
    };
    fetchHotels();
  }, []);

  const handleReset = () => {
    setIsRefreshing(true);
    setFilters({
      search: '',
      dateRange: 'all',
      hotel: 'all',
      priority: 'all',
      status: 'all',
      page: 1,
    });
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <div className="bg-white p-7 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-900/[0.03] mb-10 space-y-6 transition-all duration-500 hover:border-indigo-200/50">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6">
        {/* Search Input Container */}
        <div className="relative w-full lg:w-2/5 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search records by identity..."
            className="w-full pl-14 pr-6 py-4.5 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-sm font-bold focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white focus:border-indigo-500 transition-all text-slate-800 placeholder:text-slate-400"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value, page: 1 })}
          />
        </div>

        {/* Filter Sliders / Selects */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full lg:w-3/5">
          {/* Date Filter */}
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none" size={16} />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-hover:text-slate-400 transition-colors" size={14} />
            <select
              className="w-full pl-11 pr-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[11px] font-black uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white focus:border-indigo-500 transition-all appearance-none cursor-pointer hover:bg-slate-100/80 text-slate-700"
              value={filters.dateRange}
              onChange={(e) => setFilters({ ...filters, dateRange: e.target.value, page: 1 })}
            >
              <option value="all">Timeline: Perpetual</option>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="this_week">This cycle</option>
              <option value="this_month">Current period</option>
              <option value="this_year">Fiscal year</option>
            </select>
          </div>

          {/* Hotel Filter */}
          <div className="relative group">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none" size={16} />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-hover:text-slate-400 transition-colors" size={14} />
            <select
              className="w-full pl-11 pr-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[11px] font-black uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white focus:border-indigo-500 transition-all appearance-none cursor-pointer hover:bg-slate-100/80 text-slate-700 font-bold"
              value={filters.hotel}
              onChange={(e) => setFilters({ ...filters, hotel: e.target.value, page: 1 })}
            >
              <option value="all">Property: Universal</option>
              {hotels.map((h: any) => (
                <option key={h._id} value={h._id}>{h.name}</option>
              ))}
            </select>
          </div>

          {/* Priority Filter */}
          <div className="relative group">
            <AlertCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none" size={16} />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-hover:text-slate-400 transition-colors" size={14} />
            <select
              className="w-full pl-11 pr-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[11px] font-black uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white focus:border-indigo-500 transition-all appearance-none cursor-pointer hover:bg-slate-100/80 text-slate-700"
              value={filters.priority}
              onChange={(e) => setFilters({ ...filters, priority: e.target.value, page: 1 })}
            >
              <option value="all">Priority: Nominal</option>
              <option value="high">Urgent Response</option>
              <option value="medium">Standard Priority</option>
              <option value="low">Low Engagement</option>
            </select>
          </div>

          {/* Reset Action */}
          <button
            onClick={handleReset}
            disabled={isRefreshing}
            className="w-full flex items-center justify-center gap-2.5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-slate-900/10"
          >
            <RotateCcw size={16} className={cn(isRefreshing && "animate-spin")} />
            Reset State
          </button>
        </div>
      </div>
    </div>
  );
}
