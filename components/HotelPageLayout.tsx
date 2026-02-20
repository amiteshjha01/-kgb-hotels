"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const WA = () => <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

type HotelPageProps = {
    name: string; badge: string; badgeIcon: string; tagline: string; image: string
    phone1: string; phone2: string; waPhone: string; waMsg: string
    stat1: [string, string]; stat2: [string, string]; stat3: [string, string]; stat4: [string, string]
    about: string; roomTypes: { icon: string; title: string; desc: string }[]
    amenities: { icon: string; title: string; desc: string }[]
    keyFeatures: string[]; ctaHeading: string; ctaDesc: string; backHref: string
    photos?: { src: string; caption: string }[]
    mapsLink?: string
}

export default function HotelPageLayout(p: HotelPageProps) {
    const [lightbox, setLightbox] = useState<number | null>(null)
    const photos = p.photos ?? []
    const waLink = `https://wa.me/91${p.waPhone}?text=${encodeURIComponent(p.waMsg)}`

    const prev = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => l === null ? null : l > 0 ? l - 1 : photos.length - 1) }
    const next = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => l === null ? null : l < photos.length - 1 ? l + 1 : 0) }

    return (
        <div className="bg-navy-950 min-h-screen">
            {/* ── HERO ── */}
            <section className="relative h-[80vh] sm:h-[90vh] overflow-hidden">
                <div className="absolute inset-0 bg-navy-950">
                    <Image src={p.image} alt={`${p.name} – ${p.tagline}`} fill sizes="100vw" priority quality={90}
                        className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/45 to-navy-950/90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/40" />
                </div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

                <div className="relative z-10 h-full flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 sm:pb-24">
                        <nav className="flex items-center gap-2 mb-6 text-xs font-display text-white/35">
                            <Link href="/" className="hover:text-gold-300 transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/" className="hover:text-gold-300 transition-colors">Hotels</Link>
                            <span>/</span>
                            <span className="text-gold-400 font-semibold">{p.name}</span>
                        </nav>

                        <span className="lux-badge mb-5 inline-flex">
                            <span className="text-base">{p.badgeIcon}</span> {p.badge}
                        </span>

                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                            {p.name}
                        </h1>
                        <p className="text-white/80 text-base sm:text-xl max-w-2xl mb-9 leading-relaxed">{p.tagline}</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="wa-btn text-base px-8 py-4 shadow-[0_8px_28px_rgba(37,211,102,0.3)]">
                                <WA /> Book on WhatsApp
                            </a>
                            <a href={`tel:+91${p.phone1}`} className="gold-btn text-base px-8 py-4">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                Call: +91 {p.phone1}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="bg-navy-800 border-y border-gold-400/15">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {[p.stat1, p.stat2, p.stat3, p.stat4].map(([n, l], i) => (
                            <div key={l} className={`text-center py-10 px-4 ${i < 3 ? "border-r border-gold-400/10" : ""} ${i < 2 ? "border-b border-gold-400/10 md:border-b-0" : ""}`}>
                                <div className="gold-text font-serif font-bold" style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", lineHeight: 1.1 }}>{n}</div>
                                <div className="label mt-2" style={{ fontSize: "0.58rem" }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="bg-navy-900 py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
                        <div>
                            <p className="label mb-4">About the Property</p>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">{p.name}</h2>
                            <div className="ornament mb-8 justify-start" style={{ width: "200px" }}><div className="ornament-gem" /></div>
                            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8">{p.about}</p>
                            <div className="space-y-2">
                                {[`📞 +91 ${p.phone1}`, `📞 +91 ${p.phone2}`, "📍 Ram Nagar, Visakhapatnam", "🕐 24-Hour Check-In & Checkout"].map(t => (
                                    <div key={t} className="text-white/45 text-sm font-display">{t}</div>
                                ))}
                                {p.mapsLink && (
                                    <a href={p.mapsLink} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-gold-400/70 hover:text-gold-300 font-display transition-colors pt-1">
                                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                        Get Directions on Google Maps
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="bg-navy-800 border border-gold-400/15 rounded-3xl p-8">
                            <h3 className="font-serif text-xl font-semibold text-white mb-6">Key Features</h3>
                            <ul className="space-y-4">
                                {p.keyFeatures.map(f => (
                                    <li key={f} className="flex items-center gap-3 text-white/70 text-sm font-display">
                                        <span className="w-6 h-6 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PHOTO GALLERY ── */}
            {photos.length > 0 && (
                <section className="bg-navy-950 py-20 sm:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-14">
                            <p className="label mb-4">Photo Gallery</p>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5">
                                Explore Our <span className="gold-text" style={{ fontStyle: "italic" }}>Spaces</span>
                            </h2>
                            <div className="ornament mx-auto" style={{ width: "180px" }}><div className="ornament-gem" /></div>
                        </div>

                        {/* Gallery grid — first image spans full width on mobile, 2-col on md+ */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                            {photos.map((photo, i) => (
                                <div key={i}
                                    onClick={() => setLightbox(i)}
                                    className={`group relative overflow-hidden rounded-2xl bg-navy-800 border border-gold-400/10 hover:border-gold-400/35 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                                    ${i === 0 ? "col-span-2 md:col-span-2 row-span-1 h-64 sm:h-80" : "h-48 sm:h-60"}`}>
                                    <Image src={photo.src} alt={photo.caption} fill sizes="(max-width:768px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-gold-400/0 group-hover:ring-gold-400/40 transition-all duration-300" />
                                    {/* Caption */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <p className="font-serif text-sm font-semibold text-white">{photo.caption}</p>
                                    </div>
                                    {/* Zoom icon */}
                                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-navy-950/75 border border-gold-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-4 h-4 text-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <Link href="/gallery"
                                className="gold-btn inline-flex text-sm px-6 py-3">
                                View Full Gallery
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* ── ROOM TYPES ── */}
            <section className={`py-20 sm:py-28 ${photos.length > 0 ? "bg-navy-800" : "bg-navy-950"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="label mb-4">Accommodation</p>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5">Room <span className="gold-text" style={{ fontStyle: "italic" }}>Categories</span></h2>
                        <div className="ornament mx-auto" style={{ width: "180px" }}><div className="ornament-gem" /></div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {p.roomTypes.map(({ icon, title, desc }) => (
                            <div key={title} className="luxury-card p-8 flex flex-col gap-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 flex-shrink-0 bg-gold-400/8 border border-gold-400/20 rounded-xl flex items-center justify-center text-2xl">{icon}</div>
                                    <div>
                                        <h3 className="font-serif text-xl font-semibold text-white mb-1">{title}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                                <a href={`https://wa.me/91${p.waPhone}?text=${encodeURIComponent(`Hi! I'd like to enquire about the ${title} at ${p.name}.`)}`}
                                    target="_blank" rel="noopener noreferrer" className="wa-btn text-sm py-3 mt-1">
                                    <WA /> Check Availability
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── AMENITIES ── */}
            <section className={`py-20 sm:py-28 ${photos.length > 0 ? "bg-navy-900" : "bg-navy-800"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="label mb-4">What's Included</p>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5">Amenities &amp; <span className="gold-text" style={{ fontStyle: "italic" }}>Services</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {p.amenities.map(({ icon, title, desc }) => (
                            <div key={title} className="group bg-navy-800 border border-gold-400/10 rounded-2xl p-6 hover:border-gold-400/30 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
                                <div className="text-3xl mb-4">{icon}</div>
                                <h4 className="font-serif text-base font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors">{title}</h4>
                                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-navy-950 py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[500px] h-[500px] rounded-full bg-gold-400/6 blur-3xl" />
                </div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <span className="lux-badge mb-7 inline-flex">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Accepting Bookings Now
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">{p.ctaHeading}</h2>
                    <div className="ornament mx-auto mb-6" style={{ width: "180px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/50 text-base sm:text-lg mb-10 max-w-xl mx-auto">{p.ctaDesc}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="wa-btn text-base px-8 py-4 shadow-[0_8px_32px_rgba(37,211,102,0.3)]">
                            <WA /> Reserve on WhatsApp
                        </a>
                        <a href={`tel:+91${p.phone1}`} className="gold-btn text-base px-8 py-4">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                            Call Now
                        </a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/30 text-sm font-display">
                        {["✅ Instant Confirmation", "📍 Ram Nagar, Vizag", "🕐 24hr Check-In", "🚗 Free Parking"].map(t => <span key={t}>{t}</span>)}
                    </div>
                </div>
            </section>

            {/* ── LIGHTBOX ── */}
            {lightbox !== null && (
                <div className="fixed inset-0 z-50 bg-navy-950/97 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}>
                    <button onClick={() => setLightbox(null)}
                        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-navy-800 border border-gold-400/25 text-gold-300 flex items-center justify-center hover:bg-navy-700 transition-all z-10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-navy-800 border border-gold-400/20 text-gold-300 text-sm font-display">
                        {lightbox + 1} / {photos.length}
                    </div>
                    {photos.length > 1 && <>
                        <button onClick={prev} className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-navy-800 border border-gold-400/25 text-gold-300 flex items-center justify-center hover:bg-navy-700 transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={next} className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-navy-800 border border-gold-400/25 text-gold-300 flex items-center justify-center hover:bg-navy-700 transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </>}
                    <div className="relative w-full max-w-5xl max-h-[80vh]" onClick={e => e.stopPropagation()}>
                        <Image src={photos[lightbox].src} alt={photos[lightbox].caption} fill
                            className="object-contain rounded-2xl" sizes="90vw" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-2xl bg-gradient-to-t from-navy-950/90 to-transparent">
                            <p className="font-serif text-xl font-semibold text-white">{photos[lightbox].caption}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
