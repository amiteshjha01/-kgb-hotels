"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [hotelsOpen, setHotelsOpen] = useState(false)

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 60)
        window.addEventListener("scroll", fn)
        return () => window.removeEventListener("scroll", fn)
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [open])

    const close = () => { setOpen(false); setHotelsOpen(false) }

    const nav = [
        { href: "/", label: "Home" },
        { href: "/gallery", label: "Gallery" },
        { href: "/offers", label: "Offers" },
        { href: "/contact", label: "Contact" },
    ]

    const hotels = [
        { href: "/hotel/cool-river", emoji: "🏨", name: "KGB Coolriver", sub: "Corporate & Premium · Ram Nagar" },
        { href: "/hotel/all-rounder", emoji: "⭐", name: "KGB Legend Grand", sub: "Budget Friendly · All Guest Types" },
        { href: "/hotel/beach-view", emoji: "🏡", name: "KGB Villa Homes", sub: "Homely Stay · Families & Tourists" },
    ]

    const WA_SVG = <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

    return (
        <>
            {/* ── ANNOUNCEMENT BAR ── */}
            <div className="hidden md:flex items-center justify-center gap-5 py-2 px-4 text-xs bg-navy-800 border-b border-gold-400/20 text-gold-300 font-display tracking-widest">
                <span>📍 Ram Nagar, Visakhapatnam</span>
                <span className="text-gold-400/30">|</span>
                <span>🕐 24-Hour Check-In &amp; Check-Out</span>
                <span className="text-gold-400/30">|</span>
                <span>📞 9676247755 &nbsp;·&nbsp; 9666787755</span>
                <span className="text-gold-400/30">|</span>
                <a href="https://wa.me/919676247755?text=Hi, I'd like to book at KGB Hotels"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    WhatsApp Enquiry
                </a>
            </div>

            {/* ── MAIN HEADER ── */}
            <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "top-0 bg-navy-950/97 backdrop-blur-xl border-b border-gold-400/15 shadow-[0_4px_40px_rgba(0,0,0,0.7)]"
                : "top-0 md:top-[36px] bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

                        {/* Logo */}
                        <Link href="/" onClick={close} className="flex-shrink-0">
                            <Image src="/logo.jpeg" alt="KGB Hotels Visakhapatnam" width={130} height={44}
                                priority className="h-10 sm:h-11 w-auto rounded-lg" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-7">
                            {nav.map(({ href, label }) => (
                                <Link key={href} href={href}
                                    className="font-display text-[0.78rem] font-500 tracking-[0.06em] text-white/75 hover:text-gold-300 transition-colors duration-200 relative group">
                                    {label}
                                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                            {/* Hotels dropdown */}
                            <div className="relative group">
                                <button className="font-display text-[0.78rem] font-500 tracking-[0.06em] text-white/75 hover:text-gold-300 transition-colors duration-200 flex items-center gap-1">
                                    Our Hotels
                                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute top-full left-0 mt-4 w-72 bg-navy-800 border border-gold-400/20 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.7)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                    <div className="p-2">
                                        {hotels.map(({ href, emoji, name, sub }, i) => (
                                            <Link key={href} href={href}
                                                className={`flex items-center gap-3 p-3 rounded-xl hover:bg-gold-400/10 transition-all duration-200 ${i < hotels.length - 1 ? "border-b border-gold-400/8" : ""}`}>
                                                <span className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-xl flex-shrink-0">{emoji}</span>
                                                <div>
                                                    <div className="font-serif font-semibold text-sm text-white">{name}</div>
                                                    <div className="text-xs text-white/45 mt-0.5">{sub}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Desktop CTAs */}
                        <div className="hidden lg:flex items-center gap-2.5">
                            <a href="tel:+919676247755" className="gold-btn py-2 px-4 text-xs">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                Call
                            </a>
                            <a href="https://wa.me/919676247755?text=Hi, I'd like to enquire about booking at KGB Hotels"
                                target="_blank" rel="noopener noreferrer"
                                className="wa-btn py-2 px-4 text-xs">
                                {WA_SVG} Book via WhatsApp
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
                            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gold-400/25 bg-gold-400/5">
                            <span className={`block h-px bg-gold-300 rounded transition-all duration-300 ${open ? "w-5 rotate-45 translate-y-2" : "w-5"}`} />
                            <span className={`block h-px bg-gold-300 rounded transition-all duration-300 ${open ? "opacity-0 w-5" : "w-3.5"}`} />
                            <span className={`block h-px bg-gold-300 rounded transition-all duration-300 ${open ? "w-5 -rotate-45 -translate-y-2" : "w-4"}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ── MOBILE DRAWER ── */}
            <div className={`lg:hidden fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={close} />
            <div className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 bg-navy-800 border-l border-gold-400/18 flex flex-col transition-transform duration-400 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
                style={{ width: "min(85vw,340px)" }}>
                <div className="flex items-center justify-between p-5 border-b border-gold-400/15">
                    <Image src="/logo.jpeg" alt="KGB Hotels" width={110} height={36} className="h-10 w-auto rounded-lg" />
                    <button onClick={close} className="w-9 h-9 flex items-center justify-center rounded-xl border border-gold-400/25 text-gold-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {nav.map(({ href, label }) => (
                        <Link key={href} href={href} onClick={close}
                            className="block px-4 py-3.5 rounded-xl font-display text-sm tracking-wide text-white/75 hover:text-gold-300 hover:bg-gold-400/8 transition-all duration-200">
                            {label}
                        </Link>
                    ))}
                    <div>
                        <button onClick={() => setHotelsOpen(!hotelsOpen)}
                            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-display text-sm tracking-wide text-white/75">
                            Our Hotels
                            <svg className={`w-4 h-4 transition-transform duration-300 ${hotelsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${hotelsOpen ? "max-h-80" : "max-h-0"}`}>
                            {hotels.map(({ href, emoji, name, sub }) => (
                                <Link key={href} href={href} onClick={close}
                                    className="flex items-center gap-3 pl-8 pr-4 py-3 border-l-2 border-gold-400/30 ml-4 hover:bg-gold-400/8 transition-all rounded-r-xl">
                                    <span className="text-xl">{emoji}</span>
                                    <div>
                                        <div className="font-serif font-semibold text-sm text-white">{name}</div>
                                        <div className="text-xs text-white/45">{sub}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
                <div className="p-4 space-y-3 border-t border-gold-400/15">
                    <a href="https://wa.me/919676247755?text=Hi, I'd like to book at KGB Hotels"
                        target="_blank" rel="noopener noreferrer" className="wa-btn w-full text-sm">
                        {WA_SVG} WhatsApp Enquiry
                    </a>
                    <a href="tel:+919676247755" className="gold-btn w-full text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                        Call: 9676247755
                    </a>
                </div>
            </div>

            {/* ── STICKY BOTTOM BAR (mobile only) ── */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-2 p-3 bg-navy-950/97 backdrop-blur-xl border-t border-gold-400/18">
                <a href="tel:+919676247755"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-gold-400/40 text-gold-300 text-sm font-bold font-display active:scale-95 transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    Call Now
                </a>
                <a href="https://wa.me/919676247755?text=Hi, I'd like to book at KGB Hotels"
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl wa-btn text-sm font-bold active:scale-95">
                    {WA_SVG} WhatsApp
                </a>
            </div>
        </>
    )
}