"use client"

export default function TestimonialsSection() {
    const reviews = [
        { name: "Rajesh Pattnaik", role: "Corporate Executive, Hyderabad", hotel: "KGB Coolriver", rating: 5, review: "KGB Coolriver exceeded all expectations. Immaculate rooms, lightning-fast WiFi, excellent restaurant, and a location that's perfect for business in Vizag. Truly premium." },
        { name: "Anitha Reddy", role: "Family Traveler, Chennai", hotel: "KGB Villa Homes", rating: 5, review: "Villa Homes was absolutely perfect for our family. It felt like a home away from home — warm, spacious and so conveniently located. Our children loved it. We'll definitely return!" },
        { name: "Suresh Babu", role: "Tourist, Bengaluru", hotel: "KGB Legend Grand", rating: 5, review: "Excellent value at Legend Grand. The 24-hour check-in was a lifesaver after a late train. Clean, comfortable rooms and great service. Close to everything. Highly recommended!" },
    ]

    return (
        <section className="relative bg-navy-900 py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{ backgroundImage: "linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 sm:mb-20">
                    <p className="label mb-4">Guest Reviews</p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
                        Trusted by <span className="gold-text" style={{ fontStyle: "italic" }}>Thousands</span> of Guests
                    </h2>
                    <div className="ornament mx-auto mb-5" style={{ width: "220px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
                        Business executives, families &amp; tourists across India choose KGB Hotels for their Visakhapatnam stays.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {reviews.map(({ name, role, hotel, rating, review }) => (
                        <div key={name} className="flex flex-col bg-navy-800 border border-gold-400/12 rounded-2xl p-7 hover:border-gold-400/30 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: rating }).map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            {/* Quote icon */}
                            <svg className="w-8 h-8 mb-3 text-gold-400/25" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-white/70 text-sm leading-relaxed flex-grow mb-6 italic">&ldquo;{review}&rdquo;</p>
                            <div className="flex items-center justify-between pt-5 border-t border-gold-400/10">
                                <div>
                                    <div className="font-serif font-semibold text-white text-base">{name}</div>
                                    <div className="text-white/40 text-xs mt-0.5">{role}</div>
                                </div>
                                <span className="px-3 py-1.5 rounded-full border border-gold-400/28 bg-gold-400/7 text-gold-300 text-xs font-bold font-display">{hotel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
