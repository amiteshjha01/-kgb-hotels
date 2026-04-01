export default function ExperienceSection() {
    const roomTypes = [
        { type: "Standard", pax: "1 Guest", icon: "🛏️", accent: "border-gold-400/25 bg-gold-400/5", desc: "Comfortable single rooms with all essentials for solo travellers and executives." },
        { type: "Deluxe", pax: "2 Guests", icon: "🏨", accent: "border-emerald-500/25 bg-emerald-500/5", desc: "Spacious double rooms with premium furnishings, ideal for couples or partners." },
        { type: "Superior", pax: "3 Guests", icon: "🏡", accent: "border-blue-500/25 bg-blue-500/5", desc: "Generous triple rooms offering extra space for small families or travel groups." },
        { type: "Suite", pax: "4 Guests", icon: "👑", accent: "border-rose-500/25 bg-rose-500/5", desc: "Our finest suites — expansive, refined, and fully appointed for families." },
    ]

    const guests = [
        { icon: "💼", type: "Corporate", desc: "High-speed WiFi, quiet workspaces & flexible check-in for business executives." },
        { icon: "👨‍👩‍👧", type: "Family", desc: "Spacious rooms and a warm homely atmosphere for memorable family holidays." },
        { icon: "🌏", type: "Tourist", desc: "Centrally located near RTC Complex & Railway Station — perfect for sightseeing." },
    ]

    return (
        <section className="relative bg-navy-800 py-24 sm:py-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-400/4 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-400/4 blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Room Types */}
                <div className="text-center mb-14">
                    <p className="label mb-4">Room Categories</p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
                        A Room for <span className="gold-text" style={{ fontStyle: "italic" }}>Every Guest</span>
                    </h2>
                    <div className="ornament mx-auto mb-5" style={{ width: "200px" }}><div className="ornament-gem" /></div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
                    {roomTypes.map(({ type, pax, icon, accent, desc }) => (
                        <div key={type} className={`rounded-2xl border p-6 flex flex-col hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 ${accent}`}>
                            <div className="text-3xl mb-4">{icon}</div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <h3 className="font-serif text-lg font-semibold text-white">{type}</h3>
                                <span className="label text-[0.58rem]">{pax}</span>
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed flex-grow mb-5">{desc}</p>
                            <a href={`https://wa.me/919676247755?text=${encodeURIComponent(`Hi! I'd like a ${type} room (${pax}) at KGB Hotels. Please share availability and rates.`)}`}
                                target="_blank" rel="noopener noreferrer"
                                className="wa-btn text-xs py-2.5 w-full">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                Enquire — {type}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Guest types */}
                <div className="text-center mb-10">
                    <p className="label mb-3">Who We Welcome</p>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">
                        Tailored for <span className="gold-text" style={{ fontStyle: "italic" }}>Every Traveler</span>
                    </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-3 mb-16">
                    {guests.map(({ icon, type, desc }) => (
                        <div key={type} className="text-center bg-navy-900 border border-gold-400/10 rounded-2xl p-8 hover:border-gold-400/30 hover:-translate-y-1.5 transition-all duration-300">
                            <div className="text-4xl mb-4">{icon}</div>
                            <h3 className="font-serif text-xl font-semibold text-white mb-3">{type}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="rounded-3xl overflow-hidden bg-navy-900 border border-gold-400/15">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {[["3", "Hotel Properties"], ["90+", "Premium Rooms"], ["24/7", "Check-In Available"], ["4+", "Room Types"]].map(([n, l], i) => (
                            <div key={l} className={`text-center py-10 px-4 ${i < 3 ? "border-r border-gold-400/10" : ""} ${i < 2 ? "border-b border-gold-400/10 md:border-b-0" : ""}`}>
                                <div className="gold-text font-serif font-bold" style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.1 }}>{n}</div>
                                <div className="label mt-2" style={{ fontSize: "0.58rem" }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}