'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  CalendarCheck2, 
  Search,
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  ArrowUpRight,
  Loader2,
  Table as TableIcon,
  BarChart as ChartIcon,
  Clock,
  CheckCircle,
  Calendar,
  Contact,
  CreditCard,
  Building2,
  RefreshCcw,
  X,
  Filter
} from 'lucide-react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
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

export default function UnifiedAdminDashboard() {
  const [view, setView] = useState<'tabular' | 'chart'>('tabular');
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [data, setData] = useState<any>(null);
  const [filters, setFilters] = useState({
    search: '',
    dateRange: 'all',
    hotel: 'all',
    priority: 'all',
    status: 'all',
    page: 1,
    limit: 10
  });

  const fetchDashboardData = async () => {
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
      
      if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
      }

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error('Failed to fetch dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDashboardData();
    }, 500); // Debounce search
    return () => clearTimeout(timer);
  }, [filters]);

  const handlePageChange = (newPage: number) => {
    setFilters({ ...filters, page: newPage });
  };

  if (loading && !data) {
    return (
      <div className="h-[60vh] w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
            <div className="relative">
               <Loader2 className="animate-spin text-indigo-600" size={48} strokeWidth={1.5} />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
               </div>
            </div>
            <div className="text-center">
               <p className="text-slate-900 font-bold text-lg">Loading Analytics</p>
               <p className="text-slate-500 text-sm font-medium">Preparing your real-time dashboard...</p>
            </div>
        </div>
      </div>
    );
  }

  const stats = [
    { name: 'Total Enquiries', value: data?.pagination?.total || 0, change: '+12%', icon: Users, variant: 'info' as const },
    { name: 'Conversions', value: data?.bookings?.filter((b:any) => b.status === 'converted').length || 0, change: '+18%', icon: TrendingUp, variant: 'success' as const },
    { name: 'Upcoming', value: data?.bookings?.filter((b:any) => b.bookingStatus === 'upcoming').length || 0, change: '0%', icon: CalendarCheck2, variant: 'default' as const },
    { name: 'Revenue', value: '₹' + (data?.bookings?.reduce((acc:any, b:any) => acc + (b.tokenAmount || 0), 0) || 0).toLocaleString(), change: '+14%', icon: CreditCard, variant: 'warning' as const },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <Badge variant="success" className="mb-3 px-3 py-1 gap-2 font-bold bg-emerald-50 border-emerald-100 text-emerald-700">
              <TrendingUp size={12} />
              Real-time Activity
           </Badge>
           <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Overview Dashboard</h1>
           <p className="text-slate-500 font-medium text-sm mt-1">Manage leads and bookings across KGB Hotels portfolio.</p>
        </div>
        <div className="flex items-center gap-3">
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm mr-2">
                <button
                    onClick={() => setView('tabular')}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all",
                        view === 'tabular' ? "bg-slate-900 text-white shadow-md shadow-slate-900/10" : "text-slate-500 hover:text-slate-700"
                    )}
                >
                    <TableIcon size={16} />
                    Tables
                </button>
                <button
                    onClick={() => setView('chart')}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all",
                        view === 'chart' ? "bg-slate-900 text-white shadow-md shadow-slate-900/10" : "text-slate-500 hover:text-slate-700"
                    )}
                >
                    <ChartIcon size={16} />
                    Analytics
                </button>
            </div>
            <Button 
                variant={showFilters ? 'primary' : 'outline'} 
                size="md" 
                className="gap-2"
                onClick={() => setShowFilters(!showFilters)}
            >
                {showFilters ? <X size={16} /> : <Filter size={16} />}
                <span>{showFilters ? 'Done' : 'Filters'}</span>
            </Button>
            <Button variant="outline" size="sm" onClick={() => fetchDashboardData()} className="h-10 w-10 p-0 rounded-xl">
               <RefreshCcw size={16} className={cn(loading && "animate-spin")} />
            </Button>
        </div>
      </div>

      {showFilters && (
        <Card className="animate-in fade-in slide-in-from-top-4 duration-300">
          <FilterSection onFilterChange={setFilters} initialFilters={filters} />
        </Card>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="relative overflow-hidden group hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                 <div className={cn(
                    "p-2.5 rounded-xl transition-all",
                    stat.variant === 'info' ? "bg-indigo-50 text-indigo-600" :
                    stat.variant === 'success' ? "bg-emerald-50 text-emerald-600" :
                    stat.variant === 'warning' ? "bg-amber-50 text-amber-600" :
                    "bg-slate-50 text-slate-600"
                 )}>
                    <stat.icon size={22} />
                 </div>
                 <Badge variant={stat.change.startsWith('+') ? "success" : "secondary"} className="font-bold border-none">
                    {stat.change}
                 </Badge>
              </div>
              <div>
                 <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-1">{stat.name}</p>
                 <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</h3>
              </div>
            </CardContent>
            <div className={cn(
               "absolute bottom-0 left-0 h-1 transition-all group-hover:w-full",
               stat.variant === 'info' ? "bg-indigo-500 w-8" :
               stat.variant === 'success' ? "bg-emerald-500 w-8" :
               stat.variant === 'warning' ? "bg-amber-500 w-8" :
               "bg-slate-500 w-8"
            )} />
          </Card>
        ))}
      </div>

      <div className="h-0" />

      {view === 'chart' ? (
        <Card className="animate-in fade-in zoom-in-95 duration-500">
             <CardHeader>
                <div className="flex items-center justify-between">
                   <div>
                      <CardTitle>Booking Trends</CardTitle>
                      <CardDescription>Activity overview for the selected period</CardDescription>
                   </div>
                </div>
             </CardHeader>
             <CardContent>
                <div className="h-[400px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data?.chartData}>
                            <defs>
                                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis 
                                dataKey="date" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fill: '#64748b', fontSize: 11, fontWeight: 600}} 
                                dy={10}
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fill: '#64748b', fontSize: 11, fontWeight: 600}} 
                            />
                            <Tooltip
                                contentStyle={{
                                   borderRadius: '16px', 
                                   border: '1px solid #e2e8f0', 
                                   boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
                                   fontWeight: 700, 
                                   padding: '12px'
                                }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="count" 
                                stroke="#4f46e5" 
                                strokeWidth={3} 
                                fillOpacity={1} 
                                fill="url(#colorCount)" 
                                animationDuration={1000}
                                dot={{r: 4, fill: '#4f46e5', strokeWidth: 2, stroke: '#fff'}}
                                activeDot={{r: 6, strokeWidth: 0}}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
             </CardContent>
        </Card>
      ) : (
        <Card className="overflow-hidden border-slate-200/60 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="overflow-x-auto custom-scrollbar">
            <Table>
              <TableHeader>
                  <TableRow>
                      <TableHead className="pl-8">Guest & Context</TableHead>
                      <TableHead>Hotel / Priority</TableHead>
                      <TableHead>Dates</TableHead>
                      <TableHead>Payment & Progress</TableHead>
                      <TableHead className="text-center">Pipeline Segment</TableHead>
                      <TableHead className="text-center pr-8">Stay Lifecycle</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  {loading ? (
                      <TableRow>
                          <TableCell colSpan={6} className="h-64 text-center">
                              <div className="flex flex-col items-center gap-3">
                                 <Loader2 className="animate-spin text-indigo-500" size={32} />
                                 <p className="text-slate-400 font-bold text-sm">Refreshing table...</p>
                              </div>
                          </TableCell>
                      </TableRow>
                  ) : data?.bookings?.length > 0 ? (
                      data.bookings.map((booking: any) => (
                          <TableRow key={booking._id}>
                              <TableCell className="pl-8">
                                  <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm border border-slate-200 shrink-0">
                                          {booking.guestName.charAt(0)}
                                      </div>
                                      <div className="min-w-0">
                                          <div className="flex items-center gap-2 mb-0.5">
                                              <p className="font-bold text-slate-900 truncate tracking-tight text-sm">{booking.guestName}</p>
                                              {booking.guestAge && <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md font-bold uppercase shrink-0">Age: {booking.guestAge}</span>}
                                          </div>
                                          <div className="flex flex-col gap-0.5 text-[11px] font-medium text-slate-500">
                                              <div className="flex items-center gap-1.5"><Contact size={12} className="text-slate-400" /> {booking.guestPhone}</div>
                                              <div className="flex items-center gap-1.5"><Clock size={12} className="text-slate-400" /> {new Date(booking.enquiryDate).toLocaleDateString()}</div>
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
                                     <Badge 
                                        variant={
                                          booking.priority === 'high' ? 'error' : 
                                          booking.priority === 'medium' ? 'warning' : 
                                          'secondary'
                                        }
                                        className="w-fit text-[10px] py-0 h-5"
                                     >
                                        {booking.priority} Priority
                                     </Badge>
                                  </div>
                              </TableCell>
                              <TableCell>
                                  <div className="flex flex-col gap-1 text-[11px] font-bold text-slate-600">
                                      <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md w-fit">
                                          IN: {new Date(booking.checkInDate).toLocaleDateString()}
                                      </div>
                                      <div className="flex items-center gap-2 bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md w-fit">
                                          OUT: {new Date(booking.checkOutDate).toLocaleDateString()}
                                      </div>
                                  </div>
                              </TableCell>
                              <TableCell>
                                  <div className="flex flex-col gap-2 min-w-[120px]">
                                     <div className="flex flex-col">
                                        <span className="text-sm font-bold text-slate-900">₹{booking.tokenAmount?.toLocaleString()}</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Token Paid</span>
                                     </div>
                                     <div className="w-full space-y-1">
                                          <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase">
                                              <span>Payment Status</span>
                                              <span>{booking.paymentProgress}%</span>
                                          </div>
                                          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                              <div 
                                                className={cn(
                                                  "h-full rounded-full transition-all duration-500",
                                                  booking.paymentProgress === 100 ? "bg-emerald-500" : "bg-indigo-500"
                                                )} 
                                                style={{width: `${booking.paymentProgress}%`}}
                                              />
                                          </div>
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
                                          {booking.status || 'pending'}
                                      </Badge>
                                  </div>
                              </TableCell>
                              <TableCell className="pr-8">
                                  <div className="flex justify-center">
                                      <Badge 
                                          variant={
                                            booking.bookingStatus === 'staying' ? 'info' : 
                                            booking.bookingStatus === 'upcoming' ? 'secondary' : 
                                            booking.bookingStatus === 'checked_out' ? 'outline' : 'success'
                                          }
                                          className={cn(
                                             "px-4 py-1 h-7 font-bold uppercase tracking-widest text-[9px] gap-1.5 border-2",
                                             booking.bookingStatus === 'staying' ? "border-blue-100 bg-blue-50 text-blue-700" :
                                             booking.bookingStatus === 'checked_out' ? "border-slate-100 bg-slate-50 text-slate-500" :
                                             "border-slate-100 bg-white text-slate-400"
                                           )}
                                      >
                                          {booking.bookingStatus === 'staying' && <Loader2 size={10} className="animate-spin" />}
                                          {booking.bookingStatus === 'upcoming' && <Calendar size={10} />}
                                          {booking.bookingStatus === 'checked_out' && <CheckCircle size={10} />}
                                          <span className="">{booking.bookingStatus?.replace('_', ' ') || 'upcoming'}</span>
                                      </Badge>
                                  </div>
                              </TableCell>
                          </TableRow>
                      ))
                  ) : (
                      <TableRow>
                          <TableCell colSpan={6} className="h-64 text-center">
                              <div className="flex flex-col items-center gap-4">
                                  <div className="p-4 bg-slate-50 rounded-full">
                                     <Search className="text-slate-300" size={40} />
                                  </div>
                                  <div className="space-y-1">
                                     <p className="text-slate-900 font-bold">No results found</p>
                                     <p className="text-slate-500 text-sm">Try adjusting your filters or search query.</p>
                                  </div>
                                  <Button variant="secondary" size="sm" onClick={() => setFilters({...filters, search: '', dateRange: 'all', hotel: 'all'})}>
                                     Clear All Filters
                                  </Button>
                              </div>
                          </TableCell>
                      </TableRow>
                  )}
              </TableBody>
            </Table>
          </div>

            {data?.pagination?.pages > 1 && (
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                       Showing page {data.pagination.currentPage} of {data.pagination.pages}
                    </p>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={filters.page === 1}
                            onClick={() => handlePageChange(filters.page - 1)}
                            className="h-9 w-9 p-0"
                        >
                            <ChevronLeft size={16} />
                        </Button>
                        <div className="flex items-center gap-2 font-bold text-sm text-slate-700">
                           <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                              {filters.page}
                           </span>
                           <span className="text-slate-400">/</span>
                           <span>{data.pagination.pages}</span>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={filters.page === data.pagination.pages}
                            onClick={() => handlePageChange(filters.page + 1)}
                            className="h-9 w-9 p-0"
                        >
                            <ChevronRight size={16} />
                        </Button>
                    </div>
                </div>
            )}
        </Card>
      )}
    </div>
  );
}
