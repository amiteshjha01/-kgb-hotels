"use client"
import { useState } from "react"
import { offers } from "@/data/offers"

const WA = () => <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

const filters = [
    { label: "All Hotels", value: "all", icon: "🏨" },
    { label: "KGB Coolriver", value: "cool-river", icon: "🏢" },
    { label: "KGB Legend Grand", value: "legend-grand", icon: "⭐" },
    { label: "KGB Villa Homes", value: "villa-homes", icon: "🏡" },
]

export default function OffersClient() {
    const [active, setActive] = useState("all")
    const filtered = active === "all" ? offers : offers.filter(o => o.hotel === active || o.hotel === "all")

    return (
        <div className="min-h-screen bg-navy-950 pt-28 sm:pt-32 pb-24">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-400/4 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-400/4 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="lux-badge mb-6 inline-flex">
                        <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                        Limited Time Offers
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-5 mt-4 leading-tight">
                        Exclusive <span className="gold-text" style={{ fontStyle: "italic" }}>Offers</span> &amp;{" "}
                        <span className="shimmer-text" style={{ fontStyle: "italic" }}>Packages</span>
                    </h1>
                    <div className="ornament mx-auto mb-5" style={{ width: "200px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
                        Discover special rates and curated packages across our premium hotels in Visakhapatnam. Book via WhatsApp for instant confirmation.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map(f => (
                        <button key={f.value} onClick={() => setActive(f.value)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-sm font-semibold transition-all duration-300 ${active === f.value
                                ? "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                                : "border border-gold-400/25 bg-gold-400/5 text-white/60 hover:border-gold-400/45 hover:text-gold-300"
                                }`}>
                            <span>{f.icon}</span>{f.label}
                        </button>
                    ))}
                </div>

                {/* Offers Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy-800 border border-gold-400/20 flex items-center justify-center text-3xl">📭</div>
                        <h3 className="font-serif text-2xl text-white mb-2">No Offers Available</h3>
                        <p className="text-white/40 font-display">Check back soon for new deals!</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {filtered.map((offer, i) => {
                            const expired = new Date(offer.expiry).getTime() < Date.now()
                            const hotelInfo = filters.find(h => h.value === offer.hotel) || filters[0]
                            return (
                                <article key={offer.id}
                                    className={`relative luxury-card p-7 sm:p-8 overflow-hidden ${expired ? "opacity-60" : ""}`}>
                                    {/* Gold top bar */}
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

                                    {/* Header */}
                                    <div className="flex justify-between items-start gap-4 mb-5">
                                        <div className="flex items-center gap-3">
                                            <span className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-2xl flex-shrink-0">{hotelInfo.icon}</span>
                                            <span className="px-3 py-1.5 rounded-full text-xs font-bold font-display bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950">{offer.tag}</span>
                                        </div>
                                        <span className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-bold font-display whitespace-nowrap ${expired
                                            ? "border border-white/10 text-white/30"
                                            : "border border-green-400/30 bg-green-400/8 text-green-400"}`}>
                                            {expired ? "⊘ Expired" : <><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Till {offer.expiry}</>}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h2 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-3 leading-snug">{offer.title}</h2>
                                    <p className="text-white/50 text-sm leading-relaxed mb-7">{offer.description}</p>

                                    {/* Actions */}
                                    {!expired ? (
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a href={`https://wa.me/919676247755?text=${encodeURIComponent(`Hi, I'm interested in the "${offer.title}" offer at KGB Hotels.`)}`}
                                                target="_blank" rel="noopener noreferrer" className="wa-btn flex-1 text-sm py-3">
                                                <WA /> Book via WhatsApp
                                            </a>
                                            <a href="tel:+919676247755" className="gold-btn flex-1 text-sm py-3">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                                Call Now
                                            </a>
                                        </div>
                                    ) : (
                                        <p className="text-white/30 text-sm font-display">This offer has expired — contact us for current deals.</p>
                                    )}
                                </article>
                            )
                        })}
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="mt-16 rounded-3xl bg-navy-800 border border-gold-400/15 p-10 sm:p-14 text-center">
                    <p className="label mb-4">Custom Packages</p>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">Can't Find What You're Looking For?</h2>
                    <div className="ornament mx-auto mb-5" style={{ width: "180px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/45 text-base mb-8 max-w-xl mx-auto">Contact us directly and we&apos;ll create a custom package tailored specifically to your needs and budget.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/919676247755?text=Hi, I'd like to enquire about a custom package at KGB Hotels"
                            target="_blank" rel="noopener noreferrer" className="wa-btn text-base px-8 py-4">
                            <WA /> Chat on WhatsApp
                        </a>
                        <a href="tel:+919676247755" className="gold-btn text-base px-8 py-4">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                            Call Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}