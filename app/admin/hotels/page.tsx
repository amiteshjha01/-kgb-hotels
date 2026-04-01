'use client';

import { useState, useEffect } from 'react';
import { 
  Plus, 
  Hotel as HotelIcon, 
  Settings2, 
  Edit2, 
  Star, 
  MapPin, 
  Tag, 
  DollarSign, 
  Loader2,
  X,
  Save,
  ImageIcon,
  Building2,
  CalendarCheck
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Modal, ModalFooter } from '@/components/ui/Modal';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function HotelsManagement() {
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingHotel, setEditingHotel] = useState<any>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [isSaving, setIsSaving] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newHotelForm, setNewHotelForm] = useState({
    name: '',
    location: '',
    basePrice: 0,
    offer: '',
    isAvailable: true,
    priceRange: '₹₹',
    description: '',
    imageUrl: ''
  });

  const fetchHotels = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/hotels');
      const data = await res.json();
      setHotels(data.hotels);
    } catch (err) {
      console.error('Failed to fetch hotels');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleEdit = (hotel: any) => {
    setEditingHotel(hotel);
    setEditForm({
      basePrice: hotel.basePrice || 0,
      offer: hotel.offer || '',
      isAvailable: hotel.isAvailable ?? true,
      priceRange: hotel.priceRange || '₹₹'
    });
  };

  const handleSave = async () => {
    if (!editingHotel) return;
    setIsSaving(true);
    try {
      const res = await fetch(`/api/admin/hotels/${editingHotel._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      });
      if (res.ok) {
        setEditingHotel(null);
        fetchHotels();
      }
    } catch (err) {
      console.error('Failed to update hotel');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddHotel = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/admin/hotels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newHotelForm)
      });
      if (res.ok) {
        setIsAddModalOpen(false);
        setNewHotelForm({ name: '', location: '', basePrice: 0, offer: '', isAvailable: true, priceRange: '₹₹', description: '', imageUrl: '' });
        fetchHotels();
      }
    } catch (err) {
      console.error('Failed to add hotel');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteHotel = async (id: string) => {
    if (!confirm('Are you absolutely sure you want to remove this property? This action is irreversible.')) return;
    try {
      const res = await fetch(`/api/admin/hotels/${id}`, { method: 'DELETE' });
      if (res.ok) fetchHotels();
    } catch (err) {
      console.error('Failed to delete hotel');
    }
  };

  const toggleAvailability = async (hotel: any) => {
    try {
      const res = await fetch(`/api/admin/hotels/${hotel._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isAvailable: !hotel.isAvailable })
      });
      if (res.ok) fetchHotels();
    } catch (err) {
        console.error('Failed to toggle availability');
    }
  };

  if (loading && hotels.length === 0) {
    return (
      <div className="h-[60vh] w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
            <Loader2 className="animate-spin text-indigo-600" size={40} strokeWidth={1.5} />
            <div className="text-center">
               <p className="text-slate-900 font-bold text-lg leading-none">Portfolio Fetching</p>
               <p className="text-slate-500 text-sm font-medium mt-2">Accessing your hospitality network...</p>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <Badge variant="info" className="mb-3 px-3 py-1 gap-2 font-bold bg-indigo-50 border-indigo-100 text-indigo-700">
              <Building2 size={12} />
              Portfolio Inventory
           </Badge>
           <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Manage Your Hotels</h1>
           <p className="text-slate-500 font-medium text-sm mt-1">Configure property settings, dynamic pricing and inventory status.</p>
        </div>
        <Button size="lg" className="gap-2 shadow-lg shadow-indigo-600/15" onClick={() => setIsAddModalOpen(true)}>
            <Plus size={18} strokeWidth={3} />
            <span>Add New Hotel</span>
        </Button>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <Card key={hotel._id} className="group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500 flex flex-col h-full border-slate-200/60 overflow-visible relative">
            
            {/* Action Bar Overlay */}
            <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300">
                <button 
                   onClick={() => handleDeleteHotel(hotel._id)}
                   className="p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-rose-500 shadow-xl border border-rose-100 hover:bg-rose-500 hover:text-white transition-all shadow-rose-900/10"
                   title="Remove Property"
                >
                   <X size={16} strokeWidth={3} />
                </button>
            </div>

            {/* Status Indicator */}
            <div className="absolute top-4 left-4 z-20">
                <button
                    onClick={() => toggleAvailability(hotel)}
                    className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all backdrop-blur-md shadow-lg border-2",
                        hotel.isAvailable 
                          ? "bg-emerald-500 text-white border-emerald-400/30 font-black" 
                          : "bg-rose-500 text-white border-rose-400/30 font-black"
                    )}
                >
                    <div className={cn("w-1.5 h-1.5 rounded-full", hotel.isAvailable ? "bg-emerald-400" : "bg-white animate-pulse")}></div>
                    {hotel.isAvailable ? 'Inventory Active' : 'Sold Out'}
                </button>
            </div>

            <div className="h-52 bg-slate-100 relative overflow-hidden group-hover:bg-slate-200 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center justify-center h-full text-slate-300 group-hover:scale-105 transition-transform duration-700">
                   {hotel.imageUrl ? (
                      <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-full object-cover" />
                   ) : (
                      <HotelIcon size={64} strokeWidth={1} />
                   )}
                </div>
            </div>

            <CardContent className="p-7 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1.5 group-hover:text-indigo-600 transition-colors">{hotel.name}</h3>
                  <p className="flex items-center gap-1.5 text-slate-400 font-bold text-[11px] uppercase tracking-wider">
                     <MapPin size={12} className="text-rose-500" />
                     {hotel.location}
                  </p>
                </div>
              </div>

              {/* Info Stats */}
              <div className="grid grid-cols-2 gap-4 py-5 border-y border-slate-50 my-2">
                 <div className="space-y-1.5">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Base Rate</p>
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mt-1">
                       <DollarSign size={16} className="text-emerald-500" />
                       ₹{hotel.basePrice?.toLocaleString() || '---'}
                    </div>
                 </div>
                 <div className="space-y-1.5 border-l border-slate-100 pl-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Price Class</p>
                    <div className="flex items-center gap-1 text-slate-700 font-bold text-sm mt-1">
                       {hotel.priceRange || '₹₹'}
                       <span className="text-[10px] text-slate-400 ml-1">Segment</span>
                    </div>
                 </div>
              </div>

              <div className="mt-4 space-y-1">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Promotion</p>
                 <Badge 
                    variant={hotel.offer ? "info" : "secondary"} 
                    className="w-full justify-start py-1.5 px-3 font-bold border-none h-auto bg-indigo-50/50 text-indigo-700 rounded-xl"
                 >
                    <Tag size={12} className="mr-2" />
                    <span className="truncate">{hotel.offer || 'No marketing offer active'}</span>
                 </Badge>
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0 bg-transparent border-none">
              <div className="flex items-center gap-3 w-full">
                  <Button 
                      onClick={() => handleEdit(hotel)}
                      variant="primary"
                      className="flex-1 py-6 rounded-2xl text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-indigo-600/10"
                  >
                      <Edit2 size={14} className="mr-2" /> 
                      Manage Detail
                  </Button>
                  <Button 
                      variant="outline"
                      className="px-4 py-6 rounded-2xl bg-white hover:bg-slate-50 border-slate-200"
                  >
                      <Settings2 size={18} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </Button>
              </div>
            </CardFooter>
          </Card>
        ))}

        {/* Empty State / Add Card */}
        <Card onClick={() => setIsAddModalOpen(true)} className="border-2 border-dashed border-slate-200 bg-slate-50/50 group cursor-pointer hover:bg-white hover:border-indigo-400 hover:border-solid transition-all duration-300 min-h-[440px]">
           <CardContent className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-3xl bg-white shadow-xl shadow-slate-900/5 flex items-center justify-center text-slate-300 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all mb-4">
                 <Plus size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">Expand Portfolio</h3>
              <p className="text-sm text-slate-500 font-medium mt-2 max-w-[200px]">Add a new property to your management network.</p>
           </CardContent>
        </Card>
      </div>

      {/* Edit Modal */}
      <Modal 
        isOpen={!!editingHotel} 
        onClose={() => setEditingHotel(null)}
        title="Configuration Management"
        description={`Refining data for ${editingHotel?.name}`}
      >
        <div className="space-y-6 pt-4">
           <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-indigo-600 tracking-widest pl-1">Base Price (INR)</label>
                 <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors font-bold">₹</div>
                    <input
                       type="number"
                       className="w-full text-base font-bold pl-10 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 text-slate-900 transition-all"
                       value={editForm.basePrice}
                       onChange={(e) => setEditForm({...editForm, basePrice: parseInt(e.target.value)})}
                    />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-indigo-600 tracking-widest pl-1">Market Segment</label>
                 <div className="relative group">
                    <select
                        className="w-full text-base font-bold px-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 text-slate-900 transition-all appearance-none cursor-pointer"
                        value={editForm.priceRange}
                        onChange={(e) => setEditForm({...editForm, priceRange: e.target.value})}
                    >
                        <option value="₹">Budget (₹)</option>
                        <option value="₹₹">Mid-range (₹₹)</option>
                        <option value="₹₹₹">Premium (₹₹₹)</option>
                        <option value="₹₹₹₹">Luxury (₹₹₹₹)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                        <Settings2 size={16} />
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-indigo-600 tracking-widest pl-1">Promotional Offer Banner</label>
              <div className="relative group">
                 <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                 <input
                    placeholder="e.g. 20% Early Bird Discount"
                    className="w-full text-base font-bold pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 text-slate-900 transition-all"
                    value={editForm.offer}
                    onChange={(e) => setEditForm({...editForm, offer: e.target.value})}
                 />
              </div>
           </div>

           <div className="flex items-start gap-4 p-5 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl text-emerald-800">
              <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-sm shrink-0">
                 <CalendarCheck size={20} />
              </div>
              <div className="space-y-1 pt-0.5">
                 <p className="text-sm font-bold leading-tight uppercase tracking-wide">Live Propagation</p>
                 <p className="text-xs font-medium opacity-80 leading-relaxed">
                    Changes to pricing or offers will immediately propagate to the frontend booking engine.
                 </p>
              </div>
           </div>
        </div>

        <ModalFooter className="bg-slate-50/50 border-t border-slate-100 px-8 py-5">
           <Button variant="ghost" onClick={() => setEditingHotel(null)} className="rounded-xl px-10 font-bold text-slate-500 hover:text-slate-900">Discard</Button>
           <Button 
              onClick={handleSave} 
              isLoading={isSaving}
              className="rounded-xl px-12 bg-slate-900 hover:bg-black text-white font-bold h-14 group"
           >
              <span>Update Inventory</span>
              <Save size={16} className="ml-2 opacity-30 group-hover:opacity-100 transition-opacity" />
           </Button>
        </ModalFooter>
      </Modal>

      {/* Add Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)}
        title="Register New Property"
        description="Expand your hospitality network with a new verified listing."
      >
        <div className="space-y-6 pt-4">
           <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-indigo-600 tracking-widest pl-1">Property Identity</label>
                 <input
                    placeholder="Hotel Name"
                    className="w-full text-base font-bold px-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 text-slate-900 transition-all font-serif"
                    value={newHotelForm.name}
                    onChange={(e) => setNewHotelForm({...newHotelForm, name: e.target.value})}
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-indigo-600 tracking-widest pl-1">Geographic Location</label>
                 <div className="relative group">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                    <input
                        placeholder="e.g. Ram Nagar, Vizag"
                        className="w-full text-base font-bold pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 text-slate-900 transition-all"
                        value={newHotelForm.location}
                        onChange={(e) => setNewHotelForm({...newHotelForm, location: e.target.value})}
                    />
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-indigo-600 tracking-widest pl-1">Opening Rate (INR)</label>
                 <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors font-bold">₹</div>
                    <input
                        type="number"
                        className="w-full text-base font-bold pl-10 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 text-slate-900 transition-all"
                        value={newHotelForm.basePrice}
                        onChange={(e) => setNewHotelForm({...newHotelForm, basePrice: parseInt(e.target.value)})}
                    />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-indigo-600 tracking-widest pl-1">Price Tier</label>
                 <div className="relative group">
                    <select
                        className="w-full text-base font-bold px-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 text-slate-900 transition-all appearance-none cursor-pointer"
                        value={newHotelForm.priceRange}
                        onChange={(e) => setNewHotelForm({...newHotelForm, priceRange: e.target.value})}
                    >
                        <option value="₹">Budget (₹)</option>
                        <option value="₹₹">Mid-range (₹₹)</option>
                        <option value="₹₹₹">Premium (₹₹₹)</option>
                        <option value="₹₹₹₹">Luxury (₹₹₹₹)</option>
                    </select>
                    <Settings2 size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                 </div>
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-indigo-600 tracking-widest pl-1">Property Cover Image URL</label>
              <div className="relative group">
                 <ImageIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                 <input
                    placeholder="https://images.unsplash.com/..."
                    className="w-full text-base font-bold pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 text-slate-900 transition-all"
                    value={newHotelForm.imageUrl}
                    onChange={(e) => setNewHotelForm({...newHotelForm, imageUrl: e.target.value})}
                 />
              </div>
           </div>
        </div>

        <ModalFooter className="bg-slate-50/50 border-t border-slate-100 px-8 py-5">
           <Button variant="ghost" onClick={() => setIsAddModalOpen(false)} className="rounded-xl px-10 font-bold text-slate-500 hover:text-slate-900">Cancel</Button>
           <Button 
              onClick={handleAddHotel} 
              isLoading={isSaving}
              className="rounded-xl px-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-14 group shadow-xl shadow-indigo-600/20"
           >
              <span>Onboard Property</span>
              <Plus size={18} strokeWidth={3} className="ml-2 group-hover:scale-125 transition-transform" />
           </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
