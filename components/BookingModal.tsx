"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
    X, Calendar, Users, Home, Loader2, AlertCircle, 
    TrendingUp, ShieldCheck, Zap, User, Mail, Phone, 
    CalendarDays, CreditCard, ChevronRight, ChevronLeft,
    CheckCircle2, Smartphone, Globe, Star
} from "lucide-react"
import { DayPicker, DateRange } from "react-day-picker"
import { format, differenceInDays, isBefore, startOfToday, addDays } from "date-fns"
import "react-day-picker/dist/style.css"
import BookingConfirmation from "./BookingConfirmation"

type BookingModalProps = {
    isOpen: boolean;
    onClose: () => void;
    hotelId: string;
}

type HotelData = {
    id: string;
    name: string;
    pricePerNight: number;
    totalRooms: number;
}

type BookingData = {
    hotelId: string;
    checkIn: string;
    checkOut: string;
    rooms: number;
}

type Step = 'selection' | 'details' | 'payment' | 'success'

export default function BookingModal({ isOpen, onClose, hotelId }: BookingModalProps) {
    // ── STATE ──
    const [step, setStep] = useState<Step>('selection')
    const [hotel, setHotel] = useState<HotelData | null>(null)
    const [bookings, setBookings] = useState<BookingData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Step 1: Selection State
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: addDays(new Date(), 1),
        to: addDays(new Date(), 3)
    })
    const [guests, setGuests] = useState({ adults: 2, children: 0 })
    const [roomsRequested, setRoomsRequested] = useState(1)

    // Step 2: Guest Details State
    const [guestInfo, setGuestInfo] = useState({
        name: "",
        email: "",
        phone: "",
        dob: ""
    })

    // Step 3: Payment State
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)

    // Final State
    const [bookingId, setBookingId] = useState("")

    // ── DATA FETCHING ──
    useEffect(() => {
        if (!isOpen) return

        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const [hotelRes, bookingsRes] = await Promise.all([
                    fetch(`/api/hotels/${hotelId}`),
                    fetch(`/api/bookings?hotelId=${hotelId}`)
                ])

                if (!hotelRes.ok) throw new Error("Failed to load hotel data")
                const hotelData = await hotelRes.json()
                const bookingsData = await bookingsRes.json()

                setHotel(hotelData)
                setBookings(bookingsData)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [isOpen, hotelId])

    // ── CALCULATIONS ──
    const { nights, totalPrice, availableRooms, isSoldOut } = useMemo(() => {
        if (!hotel || !dateRange?.from || !dateRange?.to) {
            return { nights: 0, totalPrice: 0, availableRooms: 0, isSoldOut: false }
        }

        const n = differenceInDays(dateRange.to, dateRange.from)
        if (n <= 0) return { nights: 0, totalPrice: 0, availableRooms: 0, isSoldOut: false }

        const selectedCheckIn = dateRange.from.getTime()
        const selectedCheckOut = dateRange.to.getTime()

        const bookedCount = bookings
            .filter(b => {
                const bStart = new Date(b.checkIn).getTime()
                const bEnd = new Date(b.checkOut).getTime()
                return selectedCheckIn < bEnd && bStart < selectedCheckOut
            })
            .reduce((sum, b) => sum + b.rooms, 0)

        const avail = hotel.totalRooms - bookedCount
        return {
            nights: n,
            totalPrice: n * hotel.pricePerNight * roomsRequested,
            availableRooms: avail,
            isSoldOut: avail <= 0
        }
    }, [hotel, bookings, dateRange, roomsRequested])

    // ── NAVIGATION ──
    const nextStep = () => {
        if (step === 'selection') setStep('details')
        else if (step === 'details') setStep('payment')
    }

    const prevStep = () => {
        if (step === 'details') setStep('selection')
        else if (step === 'payment') setStep('details')
    }

    const reset = () => {
        setStep('selection')
        setIsProcessing(false)
        onClose()
    }

    const handleFinalPay = () => {
        setIsProcessing(true)
        setTimeout(() => {
            setBookingId(`BOOK-${Math.random().toString(36).substr(2, 9).toUpperCase()}`)
            setStep('success')
            setIsProcessing(false)
        }, 2500)
    }

    // ── RENDER HELPERS ──
    const StepIndicator = () => (
        <div className="flex items-center justify-between mb-10 px-4 sm:px-8">
            {[
                { s: 'selection', l: 'Selection' },
                { s: 'details', l: 'Your Info' },
                { s: 'payment', l: 'Payment' }
            ].map((item, idx) => (
                <React.Fragment key={item.s}>
                    <div className="flex flex-col items-center gap-3 relative z-10">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-500 shadow-lg ${
                            step === item.s ? "bg-navy-950 text-white ring-[10px] ring-navy-50 scale-110 shadow-2xl shadow-navy-100" : 
                            (['details', 'payment', 'success'].includes(step) && idx === 0) || 
                            (['payment', 'success'].includes(step) && idx === 1) ? "bg-[#C5A059] text-white" : "bg-slate-100 text-slate-400"
                        }`}>
                            {(['details', 'payment', 'success'].includes(step) && idx === 0) || (['payment', 'success'].includes(step) && idx === 1) ? <CheckCircle2 size={18} strokeWidth={3} /> : <span className="text-base">{idx + 1}</span>}
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-center ${step === item.s ? "text-navy-950" : "text-slate-400"}`}>{item.l}</span>
                    </div>
                    {idx < 2 && <div className={`flex-grow h-[3px] mx-2 -mt-7 rounded-full transition-all duration-700 ${
                        (['details', 'payment', 'success'].includes(step) && idx === 0) || (['payment', 'success'].includes(step) && idx === 1) ? "bg-[#C5A059]" : "bg-slate-100"
                    }`} />}
                </React.Fragment>
            ))}
        </div>
    )

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex justify-end">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-navy-950/40 backdrop-blur-md"
                />

                {/* Drawer */}
                <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 32, stiffness: 200 }}
                    className="relative w-full sm:max-w-xl md:max-w-2xl bg-white/95 backdrop-blur-2xl h-full shadow-[0_0_100px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden"
                >
                    {/* Premium Header */}
                    <header className="px-6 sm:px-10 py-8 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white/50 sticky top-0 z-20">
                        <div className="flex items-center gap-6">
                            {step !== 'selection' && step !== 'success' && (
                                <button onClick={prevStep} className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:bg-navy-900 hover:text-white transition-all shadow-sm">
                                    <ChevronLeft size={20} strokeWidth={3} />
                                </button>
                            )}
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-serif font-black text-navy-950 tracking-tight leading-none">
                                    {step === 'success' ? "Booking Confirmed" : "Premium Reservation"}
                                </h1>
                                <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.3em] mt-3 flex items-center gap-2">
                                    <Star size={10} fill="currentColor" /> Exclusive Guest Access
                                </p>
                            </div>
                        </div>
                        <button 
                            onClick={reset}
                            className="p-3.5 rounded-2xl bg-slate-50 text-slate-400 hover:bg-rose-500 hover:text-white transition-all border border-slate-100 shadow-sm"
                        >
                            <X size={20} strokeWidth={3} />
                        </button>
                    </header>

                    {/* Content */}
                    <div className="flex-grow overflow-y-auto px-6 sm:px-10 py-10 custom-scrollbar">
                        {loading ? (
                            <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-10">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-[2.5rem] border-4 border-slate-100 border-t-[#C5A059] animate-spin shadow-2xl shadow-gold-100" />
                                    <Home className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-navy-600/20" />
                                </div>
                                <div className="text-center">
                                    <p className="text-navy-950 font-black text-2xl tracking-tighter">Securing Vault</p>
                                    <p className="text-[10px] text-slate-400 mt-3 uppercase tracking-[0.4em] font-black">Syncing Hotel Inventory</p>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-[3rem] shadow-2xl border border-slate-100">
                                <div className="w-24 h-24 bg-rose-50 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-rose-100">
                                    <AlertCircle className="w-12 h-12 text-rose-500" />
                                </div>
                                <h3 className="text-2xl font-black text-navy-950 mb-4">System Disruption</h3>
                                <p className="text-slate-500 mb-10 leading-relaxed font-medium">Our premium network encountered a temporary handshake error. Please refresh.</p>
                                <button onClick={() => window.location.reload()} className="w-full py-5 bg-navy-950 text-white rounded-2xl font-black shadow-2xl shadow-navy-200">Retry Authentication</button>
                            </div>
                        ) : step === 'success' ? (
                            <div className="bg-white min-h-full rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                                <BookingConfirmation 
                                    bookingId={bookingId}
                                    hotelName={hotel!.name}
                                    checkIn={dateRange!.from!}
                                    checkOut={dateRange!.to!}
                                    guests={guests}
                                    rooms={roomsRequested}
                                    totalPrice={totalPrice}
                                    onClose={reset}
                                />
                            </div>
                        ) : (
                            <div className="pb-48">
                                <StepIndicator />
                                
                                <AnimatePresence mode="wait">
                                    {step === 'selection' && (
                                        <motion.div key="selection" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-12">
                                            <section>
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className="w-12 h-12 rounded-2xl bg-navy-50 flex items-center justify-center text-navy-900 border border-navy-100 shadow-sm">
                                                        <Calendar size={22} strokeWidth={2.5} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-black text-navy-950 tracking-tight">Select Stay Duration</h3>
                                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Available check-in from tomorrow</p>
                                                    </div>
                                                </div>
                                                <div className="border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex justify-center overflow-x-auto overflow-y-hidden">
                                                    <DayPicker
                                                        mode="range"
                                                        selected={dateRange}
                                                        onSelect={setDateRange}
                                                        disabled={{ before: addDays(new Date(), 1) }}
                                                        numberOfMonths={1}
                                                        className="origin-top"
                                                    />
                                                </div>
                                            </section>

                                            <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-xl shadow-slate-100/50 space-y-6">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <Users size={18} className="text-[#C5A059]" strokeWidth={3} />
                                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Party Size</h4>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                                            <span className="text-sm font-bold text-navy-900">Adults</span>
                                                            <div className="flex items-center gap-4">
                                                                <button onClick={() => setGuests({...guests, adults: Math.max(1, guests.adults-1)})} className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-black">-</button>
                                                                <span className="w-4 text-center font-black">{guests.adults}</span>
                                                                <button onClick={() => setGuests({...guests, adults: Math.min(10, guests.adults+1)})} className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-black">+</button>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                                            <span className="text-sm font-bold text-navy-900">Children</span>
                                                            <div className="flex items-center gap-4">
                                                                <button onClick={() => setGuests({...guests, children: Math.max(0, guests.children-1)})} className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-black">-</button>
                                                                <span className="w-4 text-center font-black">{guests.children}</span>
                                                                <button onClick={() => setGuests({...guests, children: Math.min(10, guests.children+1)})} className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-black">+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-xl shadow-slate-100/50 space-y-6">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <Home size={18} className="text-[#C5A059]" strokeWidth={3} />
                                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Accommodations</h4>
                                                    </div>
                                                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center space-y-4">
                                                        <div className="flex items-center justify-center gap-8">
                                                            <button onClick={() => setRoomsRequested(Math.max(1, roomsRequested-1))} className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-black text-lg transition-transform active:scale-95 shadow-sm">-</button>
                                                            <span className="text-3xl font-black text-navy-950 w-8">{roomsRequested}</span>
                                                            <button onClick={() => setRoomsRequested(Math.min(availableRooms, roomsRequested+1))} className="w-12 h-12 rounded-2xl bg-navy-900 text-white flex items-center justify-center font-black text-lg transition-transform active:scale-95 shadow-xl shadow-navy-100">+</button>
                                                        </div>
                                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rooms Requested</p>
                                                    </div>
                                                </div>
                                            </section>

                                            <section>
                                                {isSoldOut ? (
                                                    <div className="bg-rose-50 border border-rose-100 rounded-[2.5rem] p-8 flex items-center gap-8">
                                                        <div className="w-20 h-20 bg-rose-500 rounded-[1.75rem] flex items-center justify-center text-white shrink-0 shadow-2xl shadow-rose-200">
                                                            <X size={36} strokeWidth={4} />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-black text-rose-950 text-xl tracking-tight">Sold Out</h4>
                                                            <p className="text-sm text-rose-700 font-medium leading-relaxed mt-1 opacity-80">Our luxury suites are fully committed for these dates.</p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="bg-[#C5A059]/5 border border-[#C5A059]/10 rounded-[2.5rem] p-10 flex flex-col sm:flex-row items-center gap-10">
                                                        <div className="w-24 h-24 bg-[#C5A059] rounded-[2rem] flex items-center justify-center text-white shrink-0 shadow-2xl shadow-gold-200 relative">
                                                            <Zap size={40} fill="currentColor" />
                                                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#C5A059] shadow-lg border-2 border-[#C5A059]/10">
                                                                <CheckCircle2 size={24} strokeWidth={3} />
                                                            </div>
                                                        </div>
                                                        <div className="text-center sm:text-left">
                                                            <h4 className="font-black text-navy-950 text-2xl tracking-tighter">Inventory Clearance Confirmed</h4>
                                                            <p className="text-sm text-slate-600 font-medium leading-relaxed mt-2">
                                                                {availableRooms < 5 ? (
                                                                    <span className="text-rose-600 font-black tracking-tight">CRITICAL ALERT: Only {availableRooms} elite suites remaining.</span>
                                                                ) : (
                                                                    <span className="opacity-80">We currently have {availableRooms} suites ready for immediate placement.</span>
                                                                )}
                                                            </p>
                                                            <div className="flex flex-wrap gap-3 mt-6 justify-center sm:justify-start">
                                                                <div className="px-4 py-2 bg-white rounded-xl border border-[#C5A059]/20 text-[10px] font-black text-[#C5A059] uppercase tracking-widest flex items-center gap-2 shadow-sm">
                                                                    <ShieldCheck size={12} strokeWidth={3} /> Diamond Verified
                                                                </div>
                                                                <div className="px-4 py-2 bg-white rounded-xl border border-[#C5A059]/20 text-[10px] font-black text-[#C5A059] uppercase tracking-widest flex items-center gap-2 shadow-sm">
                                                                    <Globe size={12} strokeWidth={3} /> Best Rate Guarantee
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </section>
                                        </motion.div>
                                    )}

                                    {step === 'details' && (
                                        <motion.div key="details" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-10">
                                            <div className="text-center mb-4">
                                                <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.4em] mb-4">Personal Clearance</p>
                                                <h3 className="text-4xl font-serif font-black text-navy-950 tracking-tighter">Guest Credentialing</h3>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Legal Name <span className="text-rose-500">*</span></label>
                                                    <div className="relative group">
                                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-navy-900 transition-colors">
                                                            <User size={20} />
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            autoFocus
                                                            placeholder="e.g. Alexander Knight"
                                                            value={guestInfo.name}
                                                            onChange={e => setGuestInfo({...guestInfo, name: e.target.value})}
                                                            className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.75rem] outline-none focus:border-navy-900 focus:bg-white transition-all font-bold text-navy-950 placeholder:text-slate-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Authenticated Email <span className="text-rose-500">*</span></label>
                                                    <div className="relative group">
                                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-navy-900 transition-colors">
                                                            <Mail size={20} />
                                                        </div>
                                                        <input 
                                                            type="email" 
                                                            placeholder="alex@premium.com"
                                                            value={guestInfo.email}
                                                            onChange={e => setGuestInfo({...guestInfo, email: e.target.value})}
                                                            className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.75rem] outline-none focus:border-navy-900 focus:bg-white transition-all font-bold text-navy-950 placeholder:text-slate-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Mobile Number <span className="text-rose-500">*</span></label>
                                                    <div className="relative group">
                                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-navy-900 transition-colors">
                                                            <Phone size={20} />
                                                        </div>
                                                        <input 
                                                            type="tel" 
                                                            placeholder="+91 88888 88888"
                                                            value={guestInfo.phone}
                                                            onChange={e => setGuestInfo({...guestInfo, phone: e.target.value})}
                                                            className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.75rem] outline-none focus:border-navy-900 focus:bg-white transition-all font-bold text-navy-950 placeholder:text-slate-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Date of Birth <span className="text-rose-500">*</span></label>
                                                    <div className="relative group">
                                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-navy-900 transition-colors">
                                                            <CalendarDays size={20} />
                                                        </div>
                                                        <input 
                                                            type="date" 
                                                            value={guestInfo.dob}
                                                            onChange={e => setGuestInfo({...guestInfo, dob: e.target.value})}
                                                            className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.75rem] outline-none focus:border-navy-900 focus:bg-white transition-all font-bold text-navy-950 pr-8"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-navy-950 text-white rounded-[2rem] p-8 flex items-start gap-6 shadow-2xl shadow-navy-200">
                                                <ShieldCheck className="text-[#C5A059] w-8 h-8 shrink-0" strokeWidth={2.5} />
                                                <div>
                                                    <h5 className="font-black text-lg tracking-tight mb-2">GDPR Compliant Data Handling</h5>
                                                    <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Your credentials are processed through an isolated secure layer. We maintain strict non-discretionary confidentiality protocols for all premium guests.</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 'payment' && (
                                        <motion.div key="payment" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-10">
                                            <div className="text-center">
                                                <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.4em] mb-4">Financial Gateway</p>
                                                <h3 className="text-4xl font-serif font-black text-navy-950 tracking-tighter">Settlement Selection</h3>
                                            </div>

                                            <div className="space-y-5">
                                                {[
                                                    { id: 'upi', label: 'Instant UPI Settlement', desc: 'Secure smartphone authorization', icon: <Smartphone className="text-violet-500" /> },
                                                    { id: 'card', label: 'Credit / AMEX / Debit', desc: 'Global card acceptance layer', icon: <CreditCard className="text-blue-500" /> },
                                                    { id: 'net', label: 'Priority Net-Banking', desc: 'Direct institutional transfer', icon: <Globe className="text-emerald-500" /> },
                                                ].map(method => (
                                                    <button
                                                        key={method.id}
                                                        onClick={() => setPaymentMethod(method.id)}
                                                        className={`w-full flex items-center justify-between p-6 sm:p-8 rounded-[2rem] border-2 transition-all duration-300 ${
                                                            paymentMethod === method.id 
                                                            ? "border-navy-900 bg-navy-50/20 shadow-xl shadow-navy-100 scale-[1.02]" 
                                                            : "border-slate-100 bg-white hover:border-slate-200"
                                                        }`}
                                                    >
                                                        <div className="flex items-center gap-6">
                                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${paymentMethod === method.id ? "bg-white" : "bg-slate-50"}`}>
                                                                {method.icon}
                                                            </div>
                                                            <div className="text-left">
                                                                <p className="font-black text-navy-950 text-base">{method.label}</p>
                                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{method.desc}</p>
                                                            </div>
                                                        </div>
                                                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                                                            paymentMethod === method.id ? "border-navy-900 bg-navy-900" : "border-slate-200"
                                                        }`}>
                                                            {paymentMethod === method.id && <Check size={16} strokeWidth={4} className="text-white" />}
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                                    <Star size={100} fill="currentColor" />
                                                </div>
                                                <div className="space-y-4 relative z-10">
                                                    <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                                                        <span>Booking Subtotal</span>
                                                        <span className="text-white">₹{totalPrice.toLocaleString()}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase tracking-widest pb-6 border-b border-white/10">
                                                        <span>Priority Handling</span>
                                                        <span className="text-emerald-400">Complimentary</span>
                                                    </div>
                                                    <div className="flex justify-between items-center pt-2">
                                                        <span className="text-lg font-black tracking-tight">Total Clearance</span>
                                                        <span className="text-3xl font-serif font-black text-[#C5A059] tracking-tighter">₹{totalPrice.toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Trust signals moved into content area (scrollable) */}
                                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center gap-6 pb-12">
                                    <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl text-emerald-600 border border-emerald-100">
                                        <CheckCircle2 size={16} strokeWidth={3} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Pricing Locked & Guaranteed</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-6">
                                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] flex items-center gap-2">
                                            <ShieldCheck size={12} strokeWidth={3} /> SSL Sealed
                                        </p>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-100" />
                                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] flex items-center gap-2">
                                            <CheckCircle2 size={12} strokeWidth={3} /> PCI Compliant
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* SLIM Professional Footer */}
                    {step !== 'success' && hotel && !loading && !error && (
                        <footer className="shrink-0 bg-white/40 backdrop-blur-md border-t border-slate-100 p-5 sm:px-10 flex items-center justify-between gap-6 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] pr-10 sm:pr-10">
                            <div>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Total Amount</p>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-2xl font-black text-navy-950 tracking-tighter">₹{(totalPrice || 0).toLocaleString()}</span>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">/ {nights || 0} nts</span>
                                </div>
                            </div>

                            <button
                                onClick={step === 'payment' ? handleFinalPay : nextStep}
                                disabled={
                                    (step === 'selection' && (isSoldOut || nights === 0)) ||
                                    (step === 'details' && (!guestInfo.name || !guestInfo.email || !guestInfo.phone || !guestInfo.dob)) ||
                                    (step === 'payment' && (!paymentMethod || isProcessing))
                                }
                                className={`flex-grow sm:flex-grow-0 sm:min-w-[200px] py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-3 active:scale-[0.97] shadow-xl relative overflow-hidden group mr-4 sm:mr-0 ${
                                    ((step === 'selection' && (isSoldOut || nights === 0)) ||
                                    (step === 'details' && (!guestInfo.name || !guestInfo.email || !guestInfo.phone || !guestInfo.dob)) ||
                                    (step === 'payment' && (!paymentMethod || isProcessing)))
                                    ? "bg-slate-50 text-slate-300 cursor-not-allowed" 
                                    : "bg-navy-950 text-white shadow-navy-200"
                                }`}
                            >
                                {isProcessing ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        <span className="uppercase tracking-widest">
                                            {step === 'selection' ? "Proceed" : step === 'details' ? "Gateway" : "Confirm"}
                                        </span>
                                        <ChevronRight size={18} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>
                        </footer>
                    )}
                </motion.div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
                
                /* DayPicker ULTRA-CONTRAST LUXURY Theme */
                .rdp {
                    --rdp-cell-size: 52px;
                    --rdp-accent-color: #0f172a;
                    --rdp-background-color: #f8fafc;
                    margin: 0;
                }
                /* FORCE NUMBERS TO BE VISIBLE */
                .rdp-day {
                    font-weight: 900 !important;
                    color: #000000 !important;
                    height: 52px !important;
                    width: 52px !important;
                    font-size: 1rem !important;
                    border-radius: 14px !important;
                    opacity: 1 !important;
                    transition: all 0.2s ease;
                    cursor: pointer !important;
                }
                .rdp-day:hover {
                    background-color: #f1f5f9 !important;
                    color: #0f172a !important;
                }
                .rdp-day_selected { 
                    background-color: #0f172a !important; 
                    color: #ffffff !important;
                    font-weight: 900 !important;
                    box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.4) !important;
                }
                .rdp-day_range_middle {
                    background-color: #f1f5f9 !important;
                    color: #0f172a !important;
                    border-radius: 0 !important;
                    opacity: 1 !important;
                }
                .rdp-day_range_start, .rdp-day_range_end {
                    background-color: #0f172a !important;
                    color: #ffffff !important;
                    border-radius: 14px !important;
                }
                .rdp-day_disabled {
                    color: #e2e8f0 !important;
                    opacity: 0.3 !important;
                    cursor: not-allowed !important;
                }
                .rdp-caption_label {
                    font-weight: 900 !important;
                    color: #0f172a !important;
                    font-size: 1.5rem !important;
                    letter-spacing: -0.04em !important;
                    font-family: serif !important;
                }
                .rdp-nav_button {
                    border: 1px solid #e2e8f0 !important;
                    border-radius: 12px !important;
                    background: white !important;
                    color: #0f172a !important;
                }
                .rdp-head_cell {
                    font-size: 0.85rem !important;
                    font-weight: 900 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.15em !important;
                    color: #475569 !important; /* Darker Slate for Su/Mo/Tu... */
                    padding-bottom: 25px !important;
                }

                @media (max-width: 640px) {
                    .rdp { --rdp-cell-size: 40px; }
                    .rdp-day { width: 40px !important; height: 40px !important; }
                }
            `}</style>
        </AnimatePresence>
    )
}
