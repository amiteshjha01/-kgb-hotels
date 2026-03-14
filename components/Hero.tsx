"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
    const [visible, setVisible] = useState(false)

    useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t) }, [])

    const WA = <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

    return (
        <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">

            {/* Background */}
            <div className="absolute inset-0 bg-navy-950">
                <Image src="/logo-hero.jpg" alt="KGB Hotels Visakhapatnam — Luxury Hotel Stay" fill priority sizes="100vw"
                    className={`object-cover transition-opacity duration-1000 ${visible ? "opacity-100 animate-ken-burns" : "opacity-0"}`}
                    quality={95} />
                {/* Cinematic overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/55 to-navy-950/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-navy-950/50" />
            </div>

            {/* Decorative ring */}
            <div className="absolute top-24 right-12 w-52 h-52 hidden xl:block opacity-8 animate-rotate pointer-events-none">
                <svg viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="92" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="6 4" />
                    <circle cx="100" cy="100" r="68" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="3 7" />
                    <circle cx="100" cy="100" r="44" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2 8" />
                </svg>
            </div>

            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-20">

                {/* Live badge */}
                <div className={`flex justify-center mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                    <span className="lux-badge animate-pulse-gold">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                        Premium Hotels · Visakhapatnam · Accepting Bookings Now
                    </span>
                </div>

                {/* Heading */}
                <h1 className={`font-serif mb-6 leading-[1.08] transition-all duration-700 delay-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "#EFF3F8", textShadow: "0 4px 40px rgba(0,0,0,0.9)", letterSpacing: "-0.02em" }}>
                    Experience
                    <br />
                    <span className="shimmer-text" style={{ fontStyle: "italic" }}>Luxury &amp; Comfort</span>
                    <br />
                    <span className="text-white/85 font-light" style={{ fontStyle: "italic", fontSize: "0.8em" }}>in Visakhapatnam</span>
                </h1>

                {/* Ornament */}
                <div className={`flex justify-center mb-6 transition-all duration-700 delay-2 ${visible ? "opacity-100" : "opacity-0"}`}>
                    <div className="ornament" style={{ width: "220px" }}>
                        <div className="ornament-gem" />
                    </div>
                </div>

                {/* Subtext */}
                <p className={`text-base sm:text-lg md:text-xl font-light leading-relaxed text-white/70 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-3 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    Three distinctive hotels — <strong className="text-white/90 font-normal">KGB Coolriver</strong>, <strong className="text-white/90 font-normal">Legend Grand</strong> &amp; <strong className="text-white/90 font-normal">Villa Homes</strong> — serving business travelers, families &amp; tourists with world-class hospitality.
                </p>

                {/* Location pills */}
                <div className={`flex flex-wrap justify-center gap-2.5 mb-10 transition-all duration-700 delay-4 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    {["📍 Ram Nagar, Vizag", "🚉 2 km · Railway Station", "🚌 500 m · RTC Complex"].map(t => (
                        <span key={t} className="lux-badge">{t}</span>
                    ))}
                </div>

                {/* CTAs */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-14 transition-all duration-700 delay-5 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <a href="https://wa.me/919676247755?text=Hi, I'd like to enquire about booking at KGB Hotels. Please share availability and rates."
                        target="_blank" rel="noopener noreferrer"
                        className="wa-btn text-sm sm:text-base px-8 py-4 shadow-[0_8px_32px_rgba(37,211,102,0.3)]">
                        {WA} Enquire on WhatsApp
                    </a>
                    <a href="tel:+919676247755"
                        className="gold-btn text-sm sm:text-base px-8 py-4">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                        Call: 9676247755
                    </a>
                </div>

                {/* Stats */}
                <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl mx-auto transition-all duration-700 delay-6 ${visible ? "opacity-100" : "opacity-0"}`}>
                    {[["3", "Properties"], ["90+", "Rooms"], ["24/7", "Check-In"], ["4★", "Rating"]].map(([n, l]) => (
                        <div key={l} className="text-center">
                            <div className="gold-text font-serif font-bold" style={{ fontSize: "1.8rem", lineHeight: 1.1 }}>{n}</div>
                            <div className="label mt-1" style={{ fontSize: "0.58rem" }}>{l}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float opacity-40">
                <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            </div>
        </section>
    )
}