"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* ======================
   GALLERY DATA (DYNAMIC)
====================== */
const galleryImages = [
    // COOL RIVER
    { src: "/gallery/cool-river/1.jpg", hotel: "cool-river", title: "Riverside Luxury" },
    { src: "/gallery/cool-river/2.jpg", hotel: "cool-river", title: "Premium Suites" },
    { src: "/gallery/cool-river/3.jpg", hotel: "cool-river", title: "Scenic Views" },

    // ALL ROUNDER
    { src: "/gallery/all-rounder/hotel.jpg", hotel: "all-rounder", title: "Modern Comfort" },
    { src: "/gallery/all-rounder/3.jpg", hotel: "all-rounder", title: "Elegant Interiors" },

    // BEACH VIEW
    { src: "/gallery/beach-view/1.jpg", hotel: "beach-view", title: "Beachfront Paradise" },
    { src: "/gallery/beach-view/2.jpg", hotel: "beach-view", title: "Ocean Views" },
    { src: "/gallery/beach-view/3.jpg", hotel: "beach-view", title: "Coastal Elegance" },
]

const filters = [
    { label: "All Hotels", value: "all", icon: "🏨" },
    { label: "Cool River", value: "cool-river", icon: "🌊" },
    { label: "All-Rounder", value: "all-rounder", icon: "⭐" },
    { label: "Beach View", value: "beach-view", icon: "🏖️" },
]

export default function GalleryClient() {
    const [activeHotel, setActiveHotel] = useState("all")
    const [activeImage, setActiveImage] = useState<number | null>(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const filteredImages =
        activeHotel === "all"
            ? galleryImages
            : galleryImages.filter((img) => img.hotel === activeHotel)

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (activeImage === null) return
        const currentIndex = filteredImages.findIndex((_, i) => i === activeImage)
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
        setActiveImage(prevIndex)
    }

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (activeImage === null) return
        const currentIndex = filteredImages.findIndex((_, i) => i === activeImage)
        const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
        setActiveImage(nextIndex)
    }

    return (
        <div className="bg-background min-h-screen pt-20 md:pt-24 pb-20">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-accent text-sm md:text-base font-semibold tracking-wider uppercase bg-accent/10 px-4 py-2 rounded-full border border-accent/30">
                            Visual Showcase
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-primary">
                        Hotel Gallery
                    </h1>
                    <p className="text-base md:text-lg text-text-light max-w-2xl mx-auto leading-relaxed px-4">
                        Explore the stunning interiors and beautiful spaces across our premium hotels in Visakhapatnam
                    </p>
                </motion.header>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4"
                >
                    {filters.map((filter, index) => (
                        <motion.button
                            key={filter.value}
                            onClick={() => setActiveHotel(filter.value)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`group relative px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${activeHotel === filter.value
                                    ? "bg-accent text-white shadow-lg shadow-accent/50"
                                    : "bg-white/10 text-foreground hover:bg-white/20 border border-accent/20 hover:border-accent/40"
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-lg">{filter.icon}</span>
                                <span>{filter.label}</span>
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Gallery Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mb-8"
                >
                    <p className="text-text-light text-sm md:text-base">
                        Showing <span className="text-accent font-semibold">{filteredImages.length}</span> {filteredImages.length === 1 ? 'photo' : 'photos'}
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <AnimatePresence mode="wait">
                    <motion.section
                        key={activeHotel}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
                    >
                        {filteredImages.map((img, index) => (
                            <motion.div
                                key={`${img.src}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                onClick={() => setActiveImage(index)}
                                className="group relative h-64 md:h-72 lg:h-80 cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
                            >
                                {/* Image */}
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* Border Glow */}
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-yellow-500/0 group-hover:ring-yellow-500/50 transition-all duration-300" />

                                {/* Title */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white text-lg md:text-xl font-bold mb-1">{img.title}</h3>
                                    <p className="text-yellow-400 text-xs md:text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Click to view
                                    </p>
                                </div>

                                {/* Zoom Icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </motion.section>
                </AnimatePresence>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {activeImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveImage(null)}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setActiveImage(null)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 text-white flex items-center justify-center transition-all duration-300 z-10 group"
                        >
                            <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image Counter */}
                        <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm md:text-base font-semibold">
                            {activeImage + 1} / {filteredImages.length}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-4 md:left-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={handleNextImage}
                            className="absolute right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl h-[60vh] md:h-[80vh]"
                        >
                            <img
                                src={filteredImages[activeImage].src}
                                alt={filteredImages[activeImage].title}
                                className="w-full h-full object-contain rounded-lg"
                            />

                            {/* Image Title */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 rounded-b-lg">
                                <h2 className="text-white text-xl md:text-3xl font-bold mb-2">
                                    {filteredImages[activeImage].title}
                                </h2>
                                <p className="text-yellow-400 text-sm md:text-base uppercase tracking-wide">
                                    {filters.find(f => f.value === filteredImages[activeImage].hotel)?.label}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
