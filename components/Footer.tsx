"use client"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    const year = new Date().getFullYear()

    const hotels = [
        { name: "KGB Coolriver", href: "/hotel/cool-river", phones: ["9676247755", "9666787755"], wa: "9676247755", maps: "https://maps.app.goo.gl/iNkFuPg1n8fTkXKy7" },
        { name: "KGB Legend Grand", href: "/hotel/all-rounder", phones: ["9000907755", "9666587755"], wa: "9000907755", maps: "https://maps.app.goo.gl/BLPF3ahn7erbB4LM9" },
        { name: "KGB Villa Homes", href: "/hotel/beach-view", phones: ["9666597755", "8367214304"], wa: "9666597755", maps: "https://maps.app.goo.gl/jt8CG54gUyHdtVpT9" },
    ]

    const navLinks = [
        { href: "/", label: "Home" }, { href: "/hotel/cool-river", label: "KGB Coolriver" },
        { href: "/hotel/all-rounder", label: "KGB Legend Grand" }, { href: "/hotel/beach-view", label: "KGB Villa Homes" },
        { href: "/gallery", label: "Gallery" }, { href: "/offers", label: "Special Offers" },
        { href: "/contact", label: "Contact Us" },
    ]

    const WA = () => <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

    return (
        <footer className="bg-navy-950 border-t border-gold-400/15">
            {/* Gold shimmer line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <Image src="/logo.jpeg" alt="KGB Hotels Visakhapatnam" width={140} height={46} className="h-12 w-auto rounded-lg" />
                        </Link>
                        <p className="text-white/45 text-sm leading-relaxed mb-6">
                            Three exceptional hotels in Visakhapatnam — offering premium stays for corporate, family and leisure guests.
                        </p>
                        <div className="space-y-2 text-sm text-white/40 font-display">
                            {["📍 Near KA Paul Hall, Ram Nagar, Vizag", "🕐 24-Hour Check-In & Checkout", "🚉 2 km from Railway Station", "🚌 500 m from RTC Complex", "🛕 Near Sampath Vinayaka Temple"].map(t => (
                                <div key={t}>{t}</div>
                            ))}
                        </div>
                    </div>

                    {/* Hotels */}
                    <div>
                        <h4 className="label mb-6">Our Hotels</h4>
                        <div className="space-y-6">
                            {hotels.map(({ name, href, phones, wa, maps }) => (
                                <div key={name} className="pl-4 border-l-2 border-gold-400/25">
                                    <Link href={href} className="font-serif font-semibold text-white text-base hover:text-gold-300 transition-colors block mb-2">{name}</Link>
                                    {phones.map(p => (
                                        <a key={p} href={`tel:+91${p}`} className="block text-xs text-white/40 hover:text-gold-300 transition-colors mb-1">📞 {p}</a>
                                    ))}
                                    <a href={`https://wa.me/91${wa}?text=${encodeURIComponent(`Hi, I'd like to enquire about ${name}`)}`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 hover:text-green-300 transition-colors mt-1">
                                        <WA /> WhatsApp Enquiry
                                    </a>
                                    <a href={maps} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs text-gold-400/50 hover:text-gold-300 transition-colors mt-1.5">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                        Get Directions
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="label mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href} className="flex items-center gap-2.5 text-sm text-white/40 hover:text-gold-300 transition-colors font-display">
                                        <span className="w-1 h-1 rounded-full bg-gold-400/50 flex-shrink-0" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Book Now */}
                    <div>
                        <h4 className="label mb-6">Book Instantly</h4>
                        <p className="text-white/40 text-sm mb-5 font-display">Message us on WhatsApp for instant booking confirmation. We respond 24/7!</p>
                        <div className="space-y-3">
                            <a href="https://wa.me/919676247755?text=Hi, I'd like to enquire about booking at KGB Hotels"
                                target="_blank" rel="noopener noreferrer" className="wa-btn w-full text-sm py-3">
                                <WA /> WhatsApp: 9676247755
                            </a>
                            <a href="tel:+919676247755" className="gold-btn w-full text-sm py-3">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                Call: 9676247755
                            </a>
                            <a href="tel:+919666787755"
                                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/8 text-white/35 text-sm font-display hover:border-white/18 hover:text-white/70 transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                Alt: 9666787755
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gold-400/10 py-5 px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25 font-display">
                    <p>© {year} KGB Hotels, Visakhapatnam. All rights reserved.</p>
                    <p>
                        Made with <span style={{ color: "red" }}>&#10084;</span> comfort, and genuine hospitality.
                    </p>
                    <p>Managed by KGB Hospitality · Ram Nagar, Vizag</p>
                </div>
            </div>
        </footer>
    )
}
