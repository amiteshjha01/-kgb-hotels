"use client"

import Image from "next/image"
import { useState } from "react"

type Photo = { src: string; caption: string }

export default function HotelLightbox({ photos }: { photos: Photo[] }) {
    const [lightbox, setLightbox] = useState<number | null>(null)

    const prev = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => l === null ? null : l > 0 ? l - 1 : photos.length - 1) }
    const next = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => l === null ? null : l < photos.length - 1 ? l + 1 : 0) }

    return (
        <>
            {/* Gallery grid — clickable thumbnails */}
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

            {/* Lightbox overlay */}
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
        </>
    )
}
