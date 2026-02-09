"use client"

//import Image from "next/image"
import { useState } from "react"

/* ======================
   GALLERY DATA (DYNAMIC)
====================== */
const galleryImages = [
    // COOL RIVER
    { src: "/gallery/cool-river/1.jpg", hotel: "cool-river" },
    { src: "/gallery/cool-river/2.jpg", hotel: "cool-river" },
    { src: "/gallery/cool-river/3.jpg", hotel: "cool-river" },

    // ALL ROUNDER
    { src: "/gallery/all-rounder/hotel.jpg", hotel: "all-rounder" },
    { src: "/gallery/all-rounder/3.jpg", hotel: "all-rounder" },

    // BEACH VIEW
    { src: "/gallery/beach-view/1.jpg", hotel: "beach-view" },
    { src: "/gallery/beach-view/2.jpg", hotel: "beach-view" },
    { src: "/gallery/beach-view/3.jpg", hotel: "beach-view" },
]


const filters = [
    { label: "All Hotels", value: "all" },
    { label: "Cool River", value: "cool-river" },
    { label: "All-Rounder", value: "all-rounder" },
    { label: "Beach View", value: "beach-view" },
]

export default function GalleryClient() {
    const [activeHotel, setActiveHotel] = useState("all")
    const [activeImage, setActiveImage] = useState<string | null>(null)

    const filteredImages =
        activeHotel === "all"
            ? galleryImages
            : galleryImages.filter((img) => img.hotel === activeHotel)

    return (
        <div className="bg-black min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Hotel <span className="text-yellow-400">Gallery</span>
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Discover our hotels, rooms, and experiences across Visakhapatnam.
                    </p>
                </header>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-14">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveHotel(filter.value)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${activeHotel === filter.value
                                ? "bg-yellow-500 text-black border-yellow-500"
                                : "border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredImages.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveImage(img.src)}
                            className="relative h-48 md:h-64 cursor-pointer overflow-hidden rounded-xl border border-yellow-500/20 group"
                        >
                            <img
                                src={img.src}
                                alt="Hotel Gallery"
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />


                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                        </div>
                    ))}
                </section>
            </div>

            {/* Lightbox */}
            {activeImage && (
                <div
                    onClick={() => setActiveImage(null)}
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
                >
                    <div className="relative w-full max-w-5xl h-[75vh]">
                        <img
                            src={activeImage}
                            alt="Preview"
                            className="w-full h-full object-contain"
                        />

                    </div>
                </div>
            )}
        </div>
    )
}
