"use client"
import { useState } from "react"
import Link from "next/link"

/* ── DATA ────────────────────────────────────────────── */
const hotels = [
    {
        id: "coolriver",
        name: "KGB Coolriver",
        short: "Coolriver",
        icon: "🏢",
        badge: "Corporate & Premium",
        phone1: "9676247755", phone2: "9666787755", wa: "9676247755",
        guests: "Corporate · Tourist · Couples",
        location: "Near KA Paul Convention Hall, Ram Nagar, Vizag",
        mapsLink: "https://maps.app.goo.gl/iNkFuPg1n8fTkXKy7",
        features: ["24hr Check-In", "WiFi & AC", "Lift", "Parking", "Restaurant"],
        href: "/hotel/cool-river",
        accent: "from-gold-400 to-gold-600",
    },
    {
        id: "legendgrand",
        name: "KGB Legend Grand",
        short: "Legend Grand",
        icon: "⭐",
        badge: "Budget Friendly",
        phone1: "9000907755", phone2: "9666587755", wa: "9000907755",
        guests: "Corporate · Family · Tourist",
        location: "Visakhapatnam, Andhra Pradesh",
        mapsLink: "https://maps.app.goo.gl/BLPF3ahn7erbB4LM9",
        features: ["24hr Check-In", "WiFi & AC", "Power Backup", "Parking"],
        href: "/hotel/all-rounder",
        accent: "from-gold-500 to-gold-700",
    },
    {
        id: "villahomes",
        name: "KGB Villa Homes",
        short: "Villa Homes",
        icon: "🏡",
        badge: "Homely Stay",
        phone1: "9666597755", phone2: "8367214304", wa: "9666597755",
        guests: "Families · Tourists",
        location: "Visakhapatnam, Andhra Pradesh",
        mapsLink: "https://maps.app.goo.gl/jt8CG54gUyHdtVpT9",
        features: ["Family Rooms", "Home-Like Stay", "WiFi & AC", "Parking"],
        href: "/hotel/beach-view",
        accent: "from-gold-300 to-gold-500",
    },
]

const roomTypes = ["Standard", "Deluxe", "Superior", "Suite", "Family Room"]
const guestCounts = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"]

const locationFacts = [
    { icon: "📍", text: "Near KA Paul Convention Hall, Ram Nagar" },
    { icon: "🚉", text: "2 km from Railway Station" },
    { icon: "🚌", text: "500 m from RTC Complex" },
    { icon: "✈️", text: "10 km from Vizag Airport" },
    { icon: "🛕", text: "Near Sampath Vinayaka Temple" },
    { icon: "🚗", text: "Free parking on premises" },
]

/* ── ICONS ────────────────────────────────── */
const PhoneIcon = () => <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
const WAIcon = ({ cls = "w-5 h-5" }: { cls?: string }) => <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

/* ── FORM INPUT STYLES ──────────────────────────────── */
const inputCls = "w-full bg-navy-900 border border-gold-400/15 focus:border-gold-400/50 focus:outline-none rounded-xl px-4 py-3 text-white text-sm font-display placeholder:text-white/25 transition-colors duration-200"
const selectCls = `${inputCls} appearance-none cursor-pointer`
const labelCls = "block text-xs font-semibold font-display text-white/55 mb-2 uppercase tracking-wider"

/* ── PAGE ────────────────────────────────────────────── */
export default function ContactPage() {
    const [selected, setSelected] = useState("coolriver")
    const hotel = hotels.find(h => h.id === selected)!

    /* form state */
    const [form, setForm] = useState({
        name: "", phone: "", checkIn: "", checkOut: "",
        roomType: "", guests: "", message: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm(f => ({ ...f, [k]: e.target.value }))

    /* Build WhatsApp message from form fields */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const lines = [
            `🏨 *KGB Hotels Booking Enquiry*`,
            ``,
            `*Hotel:* ${hotel.name}`,
            form.name && `*Name:* ${form.name}`,
            form.phone && `*Phone:* ${form.phone}`,
            form.checkIn && `*Check-In:* ${form.checkIn}`,
            form.checkOut && `*Check-Out:* ${form.checkOut}`,
            form.roomType && `*Room Type:* ${form.roomType}`,
            form.guests && `*Guests:* ${form.guests}`,
            form.message && ``,
            form.message && `*Message:* ${form.message}`,
            ``,
            `Please share availability and rates. Thank you!`,
        ].filter(Boolean) as string[]

        const waMsg = lines.join("\n")
        const url = `https://wa.me/91${hotel.wa}?text=${encodeURIComponent(waMsg)}`
        window.open(url, "_blank")
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
    }

    /* Quick enquiry (no form) */
    const quickWaLink = `https://wa.me/91${hotel.wa}?text=${encodeURIComponent(`Hi, I'd like to enquire about booking at ${hotel.name}. Please share availability and rates.`)}`

    return (
        <div className="min-h-screen bg-navy-950">

            {/* ══ HERO ══ */}
            <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 text-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-400/8 rounded-full blur-3xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <span className="lux-badge mb-7 inline-flex">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        We respond within minutes
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
                        Contact &amp; <span className="shimmer-text" style={{ fontStyle: "italic" }}>Book</span>
                    </h1>
                    <div className="ornament mx-auto mb-6" style={{ width: "220px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Fill in the form below — on submit, WhatsApp opens instantly with your enquiry pre-written and ready to send.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

                {/* ══ HOTEL SELECTOR ══ */}
                <div className="mb-10">
                    <p className="label text-center mb-6">Select Hotel</p>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {hotels.map(h => (
                            <button key={h.id} onClick={() => setSelected(h.id)}
                                className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 overflow-hidden ${selected === h.id
                                    ? "bg-gold-400/10 border-gold-400/60 shadow-[0_0_28px_rgba(212,175,55,0.18)]"
                                    : "bg-navy-800 border-gold-400/10 hover:border-gold-400/30 hover:bg-gold-400/5"
                                    }`}>
                                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${h.accent} transition-opacity duration-300 ${selected === h.id ? "opacity-100" : "opacity-0 group-hover:opacity-40"}`} />
                                <div className="text-2xl mb-2">{h.icon}</div>
                                <div className="font-serif font-semibold text-white text-sm mb-0.5">{h.name}</div>
                                <div className="text-xs text-white/40 font-display">{h.badge}</div>
                                {selected === h.id && (
                                    <div className="mt-2 flex items-center gap-1.5 text-gold-400 text-xs font-semibold font-display">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        Selected
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ══ MAIN GRID ══ */}
                <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">

                    {/* ── LEFT (3 cols) — BOOKING FORM ── */}
                    <div className="lg:col-span-3">
                        <div className="bg-navy-800 border border-gold-400/18 rounded-3xl overflow-hidden">
                            {/* accent bar */}
                            <div className={`h-1 bg-gradient-to-r ${hotel.accent}`} />

                            <div className="p-7 sm:p-8">
                                {/* Hotel mini-header */}
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="w-11 h-11 bg-gold-400/8 border border-gold-400/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{hotel.icon}</div>
                                    <div>
                                        <h2 className="font-serif text-lg font-semibold text-white">{hotel.name}</h2>
                                        <p className="text-white/35 text-xs font-display">📍 {hotel.location}</p>
                                        <a href={hotel.mapsLink} target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-gold-400/60 hover:text-gold-300 font-display transition-colors mt-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>

                                <p className="label mb-6">Booking Enquiry Form</p>

                                <form onSubmit={handleSubmit} className="space-y-5">

                                    {/* Row 1 — Name + Phone */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelCls}>Full Name *</label>
                                            <input type="text" required placeholder="e.g. Ramesh Kumar"
                                                value={form.name} onChange={set("name")} className={inputCls} />
                                        </div>
                                        <div>
                                            <label className={labelCls}>Phone Number *</label>
                                            <input type="tel" required placeholder="e.g. 9876543210"
                                                value={form.phone} onChange={set("phone")} className={inputCls} />
                                        </div>
                                    </div>

                                    {/* Row 2 — Check-in + Check-out */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelCls}>Check-In Date</label>
                                            <input type="date" value={form.checkIn} onChange={set("checkIn")}
                                                min={new Date().toISOString().split("T")[0]}
                                                className={inputCls + " [color-scheme:dark]"} />
                                        </div>
                                        <div>
                                            <label className={labelCls}>Check-Out Date</label>
                                            <input type="date" value={form.checkOut} onChange={set("checkOut")}
                                                min={form.checkIn || new Date().toISOString().split("T")[0]}
                                                className={inputCls + " [color-scheme:dark]"} />
                                        </div>
                                    </div>

                                    {/* Row 3 — Room Type + Guests */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelCls}>Room Type</label>
                                            <div className="relative">
                                                <select value={form.roomType} onChange={set("roomType")} className={selectCls}>
                                                    <option value="">Select room type…</option>
                                                    {roomTypes.map(r => <option key={r} value={r}>{r}</option>)}
                                                </select>
                                                <svg className="w-4 h-4 text-gold-400/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <label className={labelCls}>Number of Guests</label>
                                            <div className="relative">
                                                <select value={form.guests} onChange={set("guests")} className={selectCls}>
                                                    <option value="">Select guests…</option>
                                                    {guestCounts.map(g => <option key={g} value={g}>{g}</option>)}
                                                </select>
                                                <svg className="w-4 h-4 text-gold-400/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className={labelCls}>Special Requirements / Message</label>
                                        <textarea rows={3} placeholder="e.g. Early check-in needed, vegetarian meals, ground floor room…"
                                            value={form.message} onChange={set("message")}
                                            className={inputCls + " resize-none"} />
                                    </div>

                                    {/* Submit */}
                                    <button type="submit"
                                        className={`wa-btn w-full text-base py-4 transition-all duration-300 ${submitted ? "!bg-green-700 scale-95" : ""}`}>
                                        {submitted ? (
                                            <><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Opening WhatsApp…</>
                                        ) : (
                                            <><WAIcon cls="w-6 h-6" /> Send Enquiry via WhatsApp</>
                                        )}
                                    </button>

                                    <p className="text-center text-white/25 text-xs font-display">
                                        WhatsApp opens with your details pre-filled &amp; ready to send — no account needed.
                                    </p>
                                </form>

                                {/* Divider */}
                                <div className="my-7 flex items-center gap-4">
                                    <div className="flex-1 h-px bg-gold-400/10" />
                                    <span className="text-white/25 text-xs font-display">or reach us directly</span>
                                    <div className="flex-1 h-px bg-gold-400/10" />
                                </div>

                                {/* Direct links */}
                                <div className="grid grid-cols-2 gap-3">
                                    <a href={quickWaLink} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500/8 border border-green-500/20 text-green-400 text-sm font-semibold font-display hover:bg-green-500/15 transition-all">
                                        <WAIcon cls="w-4 h-4" /> Quick Enquiry
                                    </a>
                                    <a href={`tel:+91${hotel.phone1}`}
                                        className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-400/6 border border-gold-400/20 text-gold-300 text-sm font-semibold font-display hover:bg-gold-400/12 transition-all">
                                        <PhoneIcon /> {hotel.phone1}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT (2 cols) ── */}
                    <div className="lg:col-span-2 space-y-5">

                        {/* All 3 properties */}
                        <div className="bg-navy-800 border border-gold-400/15 rounded-3xl p-7">
                            <h3 className="font-serif text-lg font-semibold text-white mb-6">All KGB Properties</h3>
                            <div className="space-y-5">
                                {hotels.map(h => (
                                    <div key={h.id} className="border-b border-gold-400/8 pb-5 last:border-0 last:pb-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{h.icon}</span>
                                                <span className="font-serif font-semibold text-white text-sm">{h.name}</span>
                                            </div>
                                            <Link href={h.href} className="text-xs text-gold-400/60 hover:text-gold-300 font-display transition-colors">Details →</Link>
                                        </div>
                                        <a href={h.mapsLink} target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-gold-400/40 hover:text-gold-300 font-display transition-colors mb-2">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                            Get Directions
                                        </a>
                                        <div className="flex flex-col gap-1 mb-2">
                                            <a href={`tel:+91${h.phone1}`} className="text-xs text-white/40 hover:text-gold-300 font-display transition-colors">📞 +91 {h.phone1}</a>
                                            <a href={`tel:+91${h.phone2}`} className="text-xs text-white/40 hover:text-gold-300 font-display transition-colors">📞 +91 {h.phone2}</a>
                                        </div>
                                        <a href={`https://wa.me/91${h.wa}?text=${encodeURIComponent(`Hi, I'd like to enquire about ${h.name}. Please share availability and rates.`)}`}
                                            target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs text-green-400 hover:text-green-300 font-semibold font-display transition-colors">
                                            <WAIcon cls="w-3.5 h-3.5" /> WhatsApp Enquiry
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-navy-800 border border-gold-400/10 rounded-3xl p-7">
                            <h3 className="label mb-5">Location &amp; Landmarks</h3>
                            <div className="space-y-3">
                                {locationFacts.map(({ icon, text }) => (
                                    <div key={text} className="flex items-start gap-3 text-sm text-white/50 font-display">
                                        <span className="text-gold-400 mt-0.5 flex-shrink-0">{icon}</span>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* What happens when you submit */}
                        <div className="bg-navy-800 border border-gold-400/10 rounded-3xl p-7">
                            <h3 className="label mb-4">How It Works</h3>
                            <div className="space-y-4">
                                {[
                                    { step: "1", text: "Fill in the form with your details" },
                                    { step: "2", text: "Click 'Send Enquiry via WhatsApp'" },
                                    { step: "3", text: "WhatsApp opens with your message pre-written" },
                                    { step: "4", text: "Just press Send — we reply within minutes!" },
                                ].map(({ step, text }) => (
                                    <div key={step} className="flex items-center gap-4">
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 text-xs font-bold flex-shrink-0">{step}</div>
                                        <p className="text-white/55 text-sm font-display">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ══ TRUST STRIP ══ */}
                <div className="mt-8 rounded-3xl bg-navy-800 border border-gold-400/12 px-8 py-7">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        {[
                            { n: "3", l: "Premium Hotels" },
                            { n: "24/7", l: "Support" },
                            { n: "⚡ Fast", l: "WhatsApp Reply" },
                            { n: "100%", l: "Guest Satisfaction" },
                        ].map(({ n, l }) => (
                            <div key={l}>
                                <div className="gold-text font-serif font-bold text-2xl sm:text-3xl">{n}</div>
                                <div className="label mt-1" style={{ fontSize: "0.55rem" }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}