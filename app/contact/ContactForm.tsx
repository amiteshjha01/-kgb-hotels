"use client"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
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
        href: "/hotel/legend-grand",
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
        href: "/hotel/villa-homes",
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

/* ── ICONS ────────────────────────────── */
const PhoneIcon = () => <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
const WAIcon = ({ cls = "w-5 h-5" }: { cls?: string }) => <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

/* ── FORM INPUT STYLES ──────────────────────────────── */
const inputCls = "w-full bg-navy-900 border border-gold-400/15 focus:border-gold-400/50 focus:outline-none rounded-xl px-4 py-3 text-white text-sm font-display placeholder:text-white/25 transition-colors duration-200"
const selectCls = `${inputCls} appearance-none cursor-pointer`
const labelCls = "block text-xs font-semibold font-display text-white/55 mb-2 uppercase tracking-wider"

function ContactFormContent() {
    const searchParams = useSearchParams()
    const hotelParam = searchParams.get('hotel')
    const msgParam = searchParams.get('msg')

    const [selected, setSelected] = useState("coolriver")
    const hotel = hotels.find(h => h.id === selected) || hotels[0]

    const [form, setForm] = useState({
        name: "", phone: "", checkIn: "", checkOut: "",
        roomType: "", guests: "", message: "",
    })
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if (hotelParam) {
            const found = hotels.find(h => h.name.toLowerCase().includes(hotelParam.toLowerCase()))
            if (found) setSelected(found.id)
        }
        if (msgParam) {
            setForm(f => ({ ...f, message: msgParam }))
        }
    }, [hotelParam, msgParam])

    const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm(f => ({ ...f, [k]: e.target.value }))

    const handleSubmit = async (e: React.FormEvent) => {
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

        try {
            await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    hotelId: hotel.name,
                    guestName: form.name,
                    guestPhone: form.phone,
                    guestAge: 0,
                    guestEmail: '',
                    roomsRequested: parseInt(form.guests) || 1,
                    checkInDate: form.checkIn ? new Date(form.checkIn) : new Date(),
                    checkOutDate: form.checkOut ? new Date(form.checkOut) : new Date(),
                    enquiryDate: new Date(),
                }),
                keepalive: true
            });
        } catch (err) {
            console.error('CRM logging failed');
        }

        const url = `https://wa.me/91${hotel.wa}?text=${encodeURIComponent(waMsg)}`
        window.open(url, "_blank")
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
    }

    const quickEnquire = () => {
        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
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
                        </button>
                    ))}
                </div>
            </div>

            <div id="booking-form" className="grid lg:grid-cols-5 gap-6 lg:gap-8">
                <div className="lg:col-span-3">
                    <div className="bg-navy-800 border border-gold-400/18 rounded-3xl overflow-hidden">
                        <div className={`h-1 bg-gradient-to-r ${hotel.accent}`} />
                        <div className="p-7 sm:p-8">
                            <div className="flex items-center gap-3 mb-7">
                                <div className="w-11 h-11 bg-gold-400/8 border border-gold-400/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{hotel.icon}</div>
                                <div>
                                    <h2 className="font-serif text-lg font-semibold text-white">{hotel.name}</h2>
                                    <p className="text-white/35 text-xs font-display">📍 {hotel.location}</p>
                                </div>
                            </div>

                            <p className="label mb-6">Booking Enquiry Form</p>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelCls}>Full Name *</label>
                                        <input type="text" required placeholder="Name"
                                            value={form.name} onChange={set("name")} className={inputCls} />
                                    </div>
                                    <div>
                                        <label className={labelCls}>Phone Number *</label>
                                        <input type="tel" required placeholder="Phone"
                                            value={form.phone} onChange={set("phone")} className={inputCls} />
                                    </div>
                                </div>
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
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelCls}>Room Type</label>
                                        <div className="relative">
                                            <select value={form.roomType} onChange={set("roomType")} className={selectCls}>
                                                <option value="">Select room type…</option>
                                                {roomTypes.map(r => <option key={r} value={r}>{r}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelCls}>Number of Guests</label>
                                        <div className="relative">
                                            <select value={form.guests} onChange={set("guests")} className={selectCls}>
                                                <option value="">Select guests…</option>
                                                {guestCounts.map(g => <option key={g} value={g}>{g}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className={labelCls}>Message</label>
                                    <textarea rows={3} value={form.message} onChange={set("message")} className={inputCls + " resize-none"} />
                                </div>
                                <button type="submit" className={`wa-btn w-full text-base py-4 ${submitted ? "!bg-green-700" : ""}`}>
                                    {submitted ? "Opening WhatsApp…" : "Send Enquiry via WhatsApp"}
                                </button>
                            </form>
                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <button onClick={quickEnquire} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500/8 border border-green-500/20 text-green-400 text-sm font-semibold hover:bg-green-500/15 transition-all">
                                    <WAIcon cls="w-4 h-4" /> Quick Enquiry
                                </button>
                                <a href={`tel:+91${hotel.phone1}`} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-400/6 border border-gold-400/20 text-gold-300 text-sm font-semibold hover:bg-gold-400/12 transition-all">
                                    <PhoneIcon /> Call {hotel.short}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-5">
                    <div className="bg-navy-800 border border-gold-400/15 rounded-3xl p-7">
                        <h3 className="font-serif text-lg font-semibold text-white mb-6">All KGB Properties</h3>
                        <div className="space-y-5">
                            {hotels.map(h => (
                                <div key={h.id} className="border-b border-gold-400/8 pb-5 last:border-0 last:pb-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-serif font-semibold text-white text-sm">{h.icon} {h.name}</span>
                                        <Link href={h.href} className="text-xs text-gold-400/60 hover:text-gold-300 transition-colors">Details →</Link>
                                    </div>
                                    <div className="flex flex-col gap-1 mb-2">
                                        <a href={`tel:+91${h.phone1}`} className="text-xs text-white/40 hover:text-gold-300 transition-colors">📞 +91 {h.phone1}</a>
                                        <a href={`tel:+91${h.phone2}`} className="text-xs text-white/40 hover:text-gold-300 transition-colors">📞 +91 {h.phone2}</a>
                                    </div>
                                    <a href={`https://wa.me/91${h.wa}?text=${encodeURIComponent(`Hi, I'd like to enquire about ${h.name}.`)}`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs text-green-400 hover:text-green-300 font-semibold transition-colors">
                                        <WAIcon cls="w-3.5 h-3.5" /> WhatsApp Enquiry
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-navy-800 border border-gold-400/10 rounded-3xl p-7">
                        <h3 className="label mb-5">Location Landmarks</h3>
                        <div className="space-y-3">
                            {locationFacts.map(({ icon, text }) => (
                                <div key={text} className="flex items-start gap-3 text-sm text-white/50">
                                    <span className="text-gold-400">{icon}</span> {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ContactForm() {
    return (
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-gold-400">Loading form...</div>}>
            <ContactFormContent />
        </Suspense>
    )
}
