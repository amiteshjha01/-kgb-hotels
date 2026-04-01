"use client"
import { useState } from "react"
import Image from "next/image"

type GalleryImage = {
    src: string
    hotel: string
    title: string
    label: string
}

const filters = [
    { label: "All Hotels", value: "all", icon: "🏨" },
    { label: "KGB Coolriver", value: "cool-river", icon: "🏢" },
    { label: "KGB Legend Grand", value: "legend-grand", icon: "⭐" },
    { label: "KGB Villa Homes", value: "villa-homes", icon: "🏡" },
]

export default function GalleryInteractive({ galleryImages }: { galleryImages: GalleryImage[] }) {
    const [active, setActive] = useState("all")
    const [lightbox, setLightbox] = useState<number | null>(null)

    const images = active === "all" ? galleryImages : galleryImages.filter(i => i.hotel === active)

    const prev = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => l === null ? null : l > 0 ? l - 1 : images.length - 1) }
    const next = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => l === null ? null : l < images.length - 1 ? l + 1 : 0) }

    return (
        <>
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
        </>
    )
}
