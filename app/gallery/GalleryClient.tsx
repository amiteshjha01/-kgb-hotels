"use client"
import { useState } from "react"
import Image from "next/image"

const galleryImages = [
    /* ═══════════════════════════════════════════════════════
       GALLERY PAGE — ALL IMAGES FROM ALL HOTELS
       Add every image here. Put files in: public/gallery/<hotel-folder>/
       The gallery page shows ALL entries and lets guests filter by hotel.
    ═══════════════════════════════════════════════════════ */

    // ── KGB COOLRIVER ── (folder: public/gallery/cool-river/)
    { src: "/gallery/cool-river/1.jpg", hotel: "cool-river", title: "Lobby & Reception", label: "KGB Coolriver" },
    { src: "/gallery/cool-river/2.jpg", hotel: "cool-river", title: "Premium Room", label: "KGB Coolriver" },
    { src: "/gallery/cool-river/3.jpg", hotel: "cool-river", title: "Executive Comfort", label: "KGB Coolriver" },
    { src: "/gallery/cool-river/bed.avif", hotel: "cool-river", title: "Luxury Bedroom", label: "KGB Coolriver" },
    // { src: "/gallery/cool-river/5.jpg", hotel: "cool-river", title: "Restaurant", label: "KGB Coolriver" },
    // { src: "/gallery/cool-river/6.jpg", hotel: "cool-river", title: "Conference Room", label: "KGB Coolriver" },
    // { src: "/gallery/cool-river/7.jpg", hotel: "cool-river", title: "Bathroom", label: "KGB Coolriver" },
    // { src: "/gallery/cool-river/8.jpg", hotel: "cool-river", title: "Corridor", label: "KGB Coolriver" },
    // { src: "/gallery/cool-river/9.jpg", hotel: "cool-river", title: "Building Exterior", label: "KGB Coolriver" },
    // { src: "/gallery/cool-river/10.jpg", hotel: "cool-river", title: "Night View", label: "KGB Coolriver" },

    // ── KGB LEGEND GRAND ── (folder: public/gallery/legend-grand/)
    { src: "/gallery/legend-grand/hotel.jpg", hotel: "legend-grand", title: "Hotel Exterior", label: "KGB Legend Grand" },
    { src: "/gallery/legend-grand/3.jpg", hotel: "legend-grand", title: "Elegant Interiors", label: "KGB Legend Grand" },
    { src: "/gallery/legend-grand/bed.avif", hotel: "legend-grand", title: "Comfortable Bedroom", label: "KGB Legend Grand" },
    // { src: "/gallery/legend-grand/4.jpg", hotel: "legend-grand", title: "Family Room", label: "KGB Legend Grand" },
    // { src: "/gallery/legend-grand/5.jpg", hotel: "legend-grand", title: "Dining Area", label: "KGB Legend Grand" },
    // { src: "/gallery/legend-grand/6.jpg", hotel: "legend-grand", title: "Reception", label: "KGB Legend Grand" },
    // { src: "/gallery/legend-grand/7.jpg", hotel: "legend-grand", title: "Parking Area", label: "KGB Legend Grand" },
    // { src: "/gallery/legend-grand/8.jpg", hotel: "legend-grand", title: "Room View", label: "KGB Legend Grand" },
    // { src: "/gallery/legend-grand/9.jpg", hotel: "legend-grand", title: "Building Front", label: "KGB Legend Grand" },
    // { src: "/gallery/legend-grand/10.jpg", hotel: "legend-grand", title: "Night View", label: "KGB Legend Grand" },

    // ── KGB VILLA HOMES ── (folder: public/gallery/villa homes/)
    { src: "/gallery/villa homes/1.jpg", hotel: "villa-homes", title: "Villa Exterior", label: "KGB Villa Homes" },
    { src: "/gallery/villa homes/2.jpg", hotel: "villa-homes", title: "Scenic Views", label: "KGB Villa Homes" },
    { src: "/gallery/villa homes/3.jpg", hotel: "villa-homes", title: "Coastal Elegance", label: "KGB Villa Homes" },
    { src: "/gallery/villa homes/bed.avif", hotel: "villa-homes", title: "Cozy Bedroom", label: "KGB Villa Homes" },
    // { src: "/gallery/villa homes/5.jpg", hotel: "villa-homes", title: "Family Room", label: "KGB Villa Homes" },
    // { src: "/gallery/villa homes/6.jpg", hotel: "villa-homes", title: "Garden Area", label: "KGB Villa Homes" },
    // { src: "/gallery/villa homes/7.jpg", hotel: "villa-homes", title: "Living Room", label: "KGB Villa Homes" },
    // { src: "/gallery/villa homes/8.jpg", hotel: "villa-homes", title: "Kitchen", label: "KGB Villa Homes" },
    // { src: "/gallery/villa homes/9.jpg", hotel: "villa-homes", title: "Balcony View", label: "KGB Villa Homes" },
    // { src: "/gallery/villa homes/10.jpg", hotel: "villa-homes", title: "Night Ambience", label: "KGB Villa Homes" },
]

const filters = [
    { label: "All Hotels", value: "all", icon: "🏨" },
    { label: "KGB Coolriver", value: "cool-river", icon: "🏢" },
    { label: "KGB Legend Grand", value: "legend-grand", icon: "⭐" },
    { label: "KGB Villa Homes", value: "villa-homes", icon: "🏡" },
]

export default function GalleryClient() {
    const [active, setActive] = useState("all")
    const [lightbox, setLightbox] = useState<number | null>(null)

    const images = active === "all" ? galleryImages : galleryImages.filter(i => i.hotel === active)

    const prev = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => l === null ? null : l > 0 ? l - 1 : images.length - 1) }
    const next = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => l === null ? null : l < images.length - 1 ? l + 1 : 0) }

    return (
        <div className="min-h-screen bg-navy-950 pt-28 sm:pt-32 pb-24">
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/4 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/4 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-14 sm:mb-18">
                    <p className="label mb-4">Visual Showcase</p>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
                        Our Hotels <span className="gold-text" style={{ fontStyle: "italic" }}>Gallery</span>
                    </h1>
                    <div className="ornament mx-auto mb-5" style={{ width: "200px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
                        Explore the stunning interiors and beautiful spaces across our three premium hotels in Visakhapatnam.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map(f => (
                        <button key={f.value} onClick={() => setActive(f.value)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-sm font-semibold tracking-wide transition-all duration-300 ${active === f.value
                                ? "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                                : "border border-gold-400/25 bg-gold-400/5 text-white/60 hover:border-gold-400/45 hover:text-gold-300 hover:bg-gold-400/10"
                                }`}>
                            <span>{f.icon}</span>{f.label}
                        </button>
                    ))}
                </div>

                {/* Count */}
                <p className="text-center text-white/35 text-sm font-display mb-8">
                    Showing <span className="text-gold-400 font-semibold">{images.length}</span> {images.length === 1 ? "photo" : "photos"}
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {images.map((img, i) => (
                        <div key={`${img.src}-${i}`} onClick={() => setLightbox(i)}
                            className="group relative h-64 sm:h-72 cursor-pointer overflow-hidden rounded-2xl bg-navy-800 border border-gold-400/10 hover:border-gold-400/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                            <img src={img.src} alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy" onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none" }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-gold-400/0 group-hover:ring-gold-400/40 transition-all duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="font-serif text-lg font-semibold text-white">{img.title}</h3>
                                <span className="label text-[0.58rem] mt-0.5 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</span>
                            </div>
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-950/70 backdrop-blur-sm border border-gold-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-5 h-5 text-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-white/40 text-sm mb-5 font-display">Love what you see? Book your stay via WhatsApp for instant confirmation.</p>
                    <a href="https://wa.me/919676247755?text=Hi, I saw your gallery and I'd like to book a room at KGB Hotels!"
                        target="_blank" rel="noopener noreferrer"
                        className="wa-btn inline-flex text-base px-8 py-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Book Your Stay Now
                    </a>
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}>
                    <button onClick={() => setLightbox(null)}
                        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-navy-800 border border-gold-400/25 text-gold-300 flex items-center justify-center hover:bg-navy-700 transition-all z-10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-navy-800 border border-gold-400/20 text-gold-300 text-sm font-display">
                        {lightbox + 1} / {images.length}
                    </div>
                    <button onClick={prev} className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-navy-800 border border-gold-400/25 text-gold-300 flex items-center justify-center hover:bg-navy-700 transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={next} className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-navy-800 border border-gold-400/25 text-gold-300 flex items-center justify-center hover:bg-navy-700 transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="relative w-full max-w-5xl max-h-[80vh]" onClick={e => e.stopPropagation()}>
                        <img src={images[lightbox].src} alt={images[lightbox].title} className="w-full h-full object-contain rounded-2xl" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-2xl bg-gradient-to-t from-navy-950/90 to-transparent">
                            <h2 className="font-serif text-2xl font-semibold text-white">{images[lightbox].title}</h2>
                            <span className="label text-[0.6rem]">{images[lightbox].label}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
