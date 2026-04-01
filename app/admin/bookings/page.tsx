'use client';

import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Search, 
  Filter, 
  ArrowUpDown, 
  ChevronRight, 
  ChevronLeft, 
  LayoutList,
  Building2,
  Clock,
  Phone,
  ArrowUpRight,
  Plus,
  Loader2,
  Table as TableIcon,
  RefreshCcw,
  X
} from 'lucide-react';
import FilterSection from '@/components/admin/FilterSection';
import BookingActions from '@/components/admin/BookingActions';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/Table';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default function BookingsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    dateRange: 'all',
    hotel: 'all',
    priority: 'all',
    status: 'all',
    page: 1,
    limit: 15
  });

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search: filters.search,
        dateRange: filters.dateRange,
        hotel: filters.hotel,
        priority: filters.priority,
        status: filters.status,
        page: filters.page.toString(),
        limit: filters.limit.toString()
      });
      const res = await fetch(`/api/admin/bookings?${params}`);
      if (!res.ok) throw new Error('API Error');
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error('Failed to fetch bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBookings();
    }, 400);
    return () => clearTimeout(timer);
  }, [filters]);

  const handlePageChange = (newPage: number) => {
    setFilters({ ...filters, page: newPage });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <Badge variant="info" className="mb-3 px-3 py-1 gap-2 font-bold bg-indigo-50 border-indigo-100 text-indigo-700">
              <LayoutList size={12} />
              Booking Ledger
           </Badge>
           <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Lead Management</h1>
           <p className="text-slate-500 font-medium text-sm mt-1">Review and process hotel enquiries received via WhatsApp.</p>
        </div>
        <div className="flex items-center gap-3">
            <Button 
                variant={showFilters ? 'primary' : 'outline'} 
                size="md" 
                className="gap-2"
                onClick={() => setShowFilters(!showFilters)}
            >
                {showFilters ? <X size={16} /> : <Filter size={16} />}
                <span>{showFilters ? 'Hide Filters' : 'Advanced Search'}</span>
            </Button>
            <Button variant="primary" size="lg" className="gap-2 shadow-lg shadow-indigo-600/10">
                <Plus size={18} strokeWidth={3} />
                <span>Manual Record</span>
            </Button>
        </div>
      </div>

      {showFilters && (
        <Card className="animate-in fade-in slide-in-from-top-4 duration-300">
          <FilterSection onFilterChange={setFilters} initialFilters={filters} />
        </Card>
      )}

      <Card className="border-slate-200/60 shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-5 border-b border-slate-100 bg-slate-50/10 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                <input 
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all font-semibold placeholder:text-slate-400" 
                    placeholder="Quick search guest or phone..." 
                    value={filters.search}
                    onChange={(e) => setFilters({...filters, search: e.target.value, page: 1})}
                />
            </div>
            <div className="flex items-center gap-2">
                <div className="flex bg-slate-100/50 p-1 rounded-2xl border border-slate-200 shadow-sm shrink-0">
                    {['all', 'converted', 'pending', 'lost'].map((status) => (
                      <button 
                        key={status}
                        onClick={() => setFilters({...filters, status, page: 1})}
                        className={cn(
                          "px-5 py-2 text-[11px] font-black uppercase tracking-widest transition-all rounded-xl",
                          filters.status === status 
                            ? "bg-slate-900 text-white shadow-md shadow-slate-900/20" 
                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
                        )}
                      >
                        {status === 'all' ? 'All Records' : status}
                      </button>
                    ))}
                </div>
                <Button variant="outline" size="sm" onClick={fetchBookings} className="h-10 w-10 p-0 rounded-2xl">
                    <RefreshCcw size={16} className={loading ? "animate-spin" : ""} />
                </Button>
            </div>
        </div>

        {/* Optimized Table Display */}
        <div className="overflow-x-auto min-h-[500px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-8">Guest Profile</TableHead>
                <TableHead>Property Detail</TableHead>
                <TableHead>Stay Schedule</TableHead>
                <TableHead className="text-center">Pipeline Segment</TableHead>
                <TableHead className="text-center pr-8">Stay Lifecycle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && !data ? (
                <TableRow>
                   <TableCell colSpan={5} className="h-64 text-center">
                     <div className="flex flex-col items-center gap-3">
                        <Loader2 className="animate-spin text-indigo-500" size={32} />
                        <p className="text-slate-400 font-bold text-sm">Accessing Ledger...</p>
                     </div>
                   </TableCell>
                </TableRow>
              ) : data?.bookings?.length > 0 ? (
                data.bookings.map((booking: any) => (
                  <TableRow key={booking._id}>
                    <TableCell className="pl-8">
                      <div className="flex items-center gap-4 py-1">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-base border border-indigo-100/50 shadow-sm shrink-0">
                          {booking.guestName.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-slate-900 leading-none mb-2 truncate text-sm">{booking.guestName}</p>
                          <div className="flex flex-col gap-1 text-[11px] font-medium text-slate-500 tracking-tight">
                             <div className="flex items-center gap-1.5"><Phone size={12} className="text-slate-300" /> {booking.guestPhone}</div>
                             <div className="flex items-center gap-1.5"><Clock size={12} className="text-slate-300" /> {new Date(booking.createdAt).toLocaleDateString()}</div>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1.5">
                         <div className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                            <Building2 size={14} className="text-indigo-500" />
                            <span className="capitalize">{booking.hotelId.replace('_', ' ')}</span>
                         </div>
                         <Badge variant="secondary" className="w-fit text-[10px] bg-slate-100 border-none h-5 px- selection:py-0">
                            {booking.roomsRequested} Room{(booking.roomsRequested || 0) > 1 ? 's' : ''} requested
                         </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                         <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg w-fit text-[11px] font-bold border border-emerald-100/50">
                            <ArrowUpRight size={12} />
                            {new Date(booking.checkInDate).toLocaleDateString()}
                         </div>
                         <div className="flex items-center gap-2 bg-slate-100 text-slate-600 px-2 py-1 rounded-lg w-fit text-[11px] font-bold border border-slate-200/50">
                            <ChevronRight size={12} className="text-slate-400 rotate-90" />
                            {new Date(booking.checkOutDate).toLocaleDateString()}
                         </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Badge 
                           variant={
                             booking.status === 'converted' ? 'success' : 
                             booking.status === 'lost' ? 'error' : 
                             'warning'
                           }
                           className="px-4 py-1 h-7 font-bold uppercase tracking-widest text-[9px] border-none shadow-sm"
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="pr-8">
                      <div className="flex justify-center">
                        <Badge 
                           variant={
                             booking.bookingStatus === 'staying' ? 'info' : 
                             booking.bookingStatus === 'checked_out' ? 'secondary' : 
                             'outline'
                           }
                           className={cn(
                             "px-4 py-1 h-7 font-bold uppercase tracking-widest text-[9px] border-2",
                             booking.bookingStatus === 'staying' ? "border-blue-100 bg-blue-50 text-blue-700" :
                             booking.bookingStatus === 'checked_out' ? "border-slate-100 bg-slate-50 text-slate-500" :
                             "border-slate-100 bg-white text-slate-400"
                           )}
                        >
                          {booking.bookingStatus || 'upcoming'}
                        </Badge>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-64 text-center">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-center text-slate-300 shadow-inner">
                            {filters.search ? <Search size={40} strokeWidth={1} /> : <Calendar size={40} strokeWidth={1} />}
                        </div>
                        <div className="space-y-1">
                           <p className="text-slate-900 font-bold text-lg tracking-tight">No records matched</p>
                           <p className="text-sm text-slate-500 font-medium">Try refining your search or filters.</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setFilters({
                            ...filters,
                            search: '',
                            status: 'all',
                            dateRange: 'all',
                            hotel: 'all'
                          })}
                        >
                          Clear All Filters
                        </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination Console */}
        {data?.pagination?.pages > 1 && (
          <div className="px-6 py-5 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Page {data.pagination.currentPage} of {data.pagination.pages}</p>
            <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-10 w-10 p-0 rounded-2xl"
                  disabled={filters.page === 1}
                  onClick={() => handlePageChange(filters.page - 1)}
                >
                    <ChevronLeft size={18} />
                </Button>
                <div className="flex items-center gap-2 font-bold text-sm text-slate-800">
                    <span className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">{filters.page}</span>
                    <span className="text-slate-300 px-1">/</span>
                    <span className="text-slate-500">{data.pagination.pages}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-10 w-10 p-0 rounded-2xl"
                  disabled={filters.page === data.pagination.pages}
                  onClick={() => handlePageChange(filters.page + 1)}
                >
                    <ChevronRight size={18} />
                </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
