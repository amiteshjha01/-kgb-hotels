"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
    CheckCircle2, Calendar, Users, Home, Printer, 
    Share2, Copy, Check, MessageSquare, Star, Crown,
    ShieldCheck, Globe
} from "lucide-react"

type ConfirmationProps = {
    bookingId: string;
    hotelName: string;
    checkIn: Date;
    checkOut: Date;
    guests: { adults: number; children: number };
    rooms: number;
    totalPrice: number;
    onClose: () => void;
}

export default function BookingConfirmation({ 
    bookingId, hotelName, checkIn, checkOut, 
    guests, rooms, totalPrice, onClose 
}: ConfirmationProps) {
    const [copied, setCopied] = useState(false)

    // ── HELPERS ──
    const handleCopy = () => {
        navigator.clipboard.writeText(bookingId)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleWhatsAppShare = () => {
        const text = `*Luxury Reservation Confirmed!*%0A%0A` +
                     `*ID:* ${bookingId}%0A` +
                     `*Property:* ${hotelName}%0A` +
                     `*Dates:* ${checkIn.toLocaleDateString()} to ${checkOut.toLocaleDateString()}%0A` +
                     `*Guests:* ${guests.adults + guests.children}%0A` +
                     `*Total Settlement:* ₹${totalPrice.toLocaleString()}%0A%0A` +
                     `Welcome to the KGB Elite Collection. 🥂✨`
        
        window.open(`https://wa.me/?text=${text}`, '_blank')
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-12 flex flex-col items-center text-center bg-white"
        >
            {/* Success Aura */}
            <div className="relative mb-12">
                <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.3 }}
                    className="w-28 h-28 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] relative z-10"
                >
                    <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={3} />
                </motion.div>
                <div className="absolute inset-0 bg-emerald-400/20 blur-[60px] rounded-full scale-150 animate-pulse" />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#C5A059] rounded-2xl flex items-center justify-center text-white shadow-xl z-20 border-4 border-white">
                    <Crown size={24} fill="currentColor" />
                </div>
            </div>

            <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.5em] mb-4">Reservation Executed</p>
            <h2 className="text-4xl sm:text-5xl font-serif font-black text-navy-950 mb-4 tracking-tighter">Your Stay is Locked In.</h2>
            <p className="text-slate-400 font-medium max-w-sm mx-auto mb-14 text-sm leading-relaxed">
                A digital certificate has been dispatched to your secure terminal. We await your arrival with anticipation.
            </p>

            {/* Luxury Ticket Card */}
            <div className="w-full bg-slate-50 border border-slate-100 rounded-[3rem] p-8 sm:p-12 mb-14 text-left shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 sm:p-10 pointer-events-none opacity-[0.03]">
                    <Star size={150} fill="currentColor" className="text-navy-900" />
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-10 pb-10 border-b-2 border-dashed border-slate-200">
                    <div className="w-full sm:w-auto">
                        <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] mb-3">Booking Identifier</p>
                        <div className="flex items-center gap-4">
                            <p className="text-2xl font-mono font-black text-navy-950 tracking-wider bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">{bookingId}</p>
                            <button 
                                onClick={handleCopy}
                                className={`p-3 rounded-2xl transition-all shadow-sm border ${copied ? "bg-emerald-500 text-white border-emerald-500" : "bg-white text-slate-400 hover:text-navy-900 border-slate-100"}`}
                            >
                                {copied ? <Check size={18} strokeWidth={3} /> : <Copy size={18} strokeWidth={2.5} />}
                            </button>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto sm:text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Settlement Status</p>
                        <div className="flex flex-col sm:items-end">
                            <p className="text-3xl font-black text-navy-950 tracking-tighter">₹{totalPrice.toLocaleString()}</p>
                            <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mt-2 shadow-lg shadow-emerald-100 border border-emerald-400">
                                <ShieldCheck size={10} strokeWidth={4} /> Full Clearance
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex gap-5">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                            <Home className="w-6 h-6 text-[#C5A059]" strokeWidth={2.5} />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">Property</p>
                            <p className="text-lg font-black text-navy-950 leading-tight">{hotelName}</p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                            <Calendar className="w-6 h-6 text-[#C5A059]" strokeWidth={2.5} />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">Window</p>
                            <p className="text-lg font-black text-navy-950 leading-tight">
                                {checkIn.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })} — {checkOut.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                            <Users className="w-6 h-6 text-[#C5A059]" strokeWidth={2.5} />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">Party Size</p>
                            <p className="text-lg font-black text-navy-950 leading-tight">{guests.adults + guests.children} Guests · {rooms} Suites</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions Section */}
            <div className="w-full flex shrink-0 flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <button 
                        onClick={handleWhatsAppShare}
                        className="flex items-center justify-center gap-4 py-5 rounded-[1.75rem] bg-[#25D366] text-white font-black text-sm hover:bg-[#1ebd5d] transition-all shadow-xl shadow-emerald-100 active:scale-95 group"
                    >
                        <MessageSquare className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" /> Share via WhatsApp
                    </button>
                    <button 
                        onClick={() => window.print()} 
                        className="flex items-center justify-center gap-4 py-5 rounded-[1.75rem] bg-white text-navy-900 font-black text-sm hover:bg-slate-50 transition-all border-2 border-slate-100 shadow-sm active:scale-95"
                    >
                        <Printer className="w-5 h-5 text-[#C5A059]" /> Manifest PDF
                    </button>
                </div>
                
                <button 
                    onClick={onClose} 
                    className="w-full py-6 bg-navy-950 text-white rounded-[2rem] font-black text-xl hover:bg-black transition-all shadow-2xl shadow-navy-200 active:scale-[0.98]"
                >
                    Complete Process
                </button>
            </div>
            
            <div className="mt-16 flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-8 bg-slate-200" />
                    <p className="text-[10px] text-slate-300 font-extrabold uppercase tracking-[0.5em]">KGB Elite Protocols</p>
                    <div className="h-[1px] w-8 bg-slate-200" />
                </div>
                <div className="flex items-center gap-6 opacity-30 grayscale contrast-125">
                    <ShieldCheck size={16} />
                    <Globe size={16} />
                    <Star size={16} />
                </div>
            </div>
        </motion.div>
    )
}
