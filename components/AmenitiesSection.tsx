export default function AmenitiesSection() {
    const amenities = [
        { icon: "📶", title: "High-Speed WiFi", desc: "Reliable broadband across all rooms for seamless work and entertainment." },
        { icon: "❄️", title: "Air Conditioning", desc: "Every room fully air-conditioned for optimum comfort in all seasons." },
        { icon: "🛗", title: "Lift / Elevator", desc: "Convenient elevator access across all floors for effortless mobility." },
        { icon: "⚡", title: "Power Backup", desc: "24-hour generator backup ensuring uninterrupted comfort, always." },
        { icon: "🍽️", title: "In-House Restaurant", desc: "Wholesome meals served daily — breakfast, lunch and dinner." },
        { icon: "🛎️", title: "Room Service", desc: "Attentive room service around the clock for privacy and comfort." },
        { icon: "🚗", title: "Free Parking", desc: "Secure, complimentary on-site parking for all guests." },
        { icon: "🕐", title: "24hr Check-In", desc: "Arrive at any hour — flexible 24-hour check-in welcomes you anytime." },
    ]

    return (
        <section className="relative bg-navy-950 py-24 sm:py-32 overflow-hidden">
            {/* Dot grid */}
            <div className="absolute inset-0 pointer-events-none opacity-30"
                style={{ backgroundImage: "radial-gradient(rgba(212,175,55,0.15) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 sm:mb-20">
                    <p className="label mb-4">What We Offer</p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
                        Amenities That <span className="gold-text" style={{ fontStyle: "italic" }}>Define</span> Comfort
                    </h2>
                    <div className="ornament mx-auto mb-5" style={{ width: "220px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
                        Every detail at KGB Hotels is designed to ensure your stay is comfortable, convenient &amp; truly memorable.
                    </p>
                </div>

                <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {amenities.map(({ icon, title, desc }) => (
                        <div key={title} className="group bg-navy-800 border border-gold-400/10 rounded-2xl p-6 hover:border-gold-400/35 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-gold-400/8 border border-gold-400/18 flex items-center justify-center text-2xl mb-5 group-hover:bg-gold-400/14 transition-colors duration-300">
                                {icon}
                            </div>
                            <h3 className="font-serif text-base font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">{title}</h3>
                            <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-400/18 bg-gold-400/4 text-white/40 text-sm font-display">
                        <span className="text-gold-400">✦</span>
                        All amenities available across KGB Hotels properties · Visakhapatnam
                    </span>
                </div>
            </div>
        </section>
    )
}
