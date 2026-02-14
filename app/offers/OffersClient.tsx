"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { offers } from "@/data/offers"

const hotels = [
    { label: "All Hotels", value: "all", icon: "🏨", gradient: "from-gray-600 to-gray-700" },
    { label: "Cool River", value: "cool-river", icon: "🏞️", gradient: "from-blue-500 to-cyan-500" },
    { label: "Legend Grand", value: "legend-grand", icon: "⭐", gradient: "from-green-500 to-emerald-500" },
    { label: "Villa Homes", value: "villa-homes", icon: "🏖️", gradient: "from-purple-500 to-pink-500" },
]

export default function OffersClient() {
    const [activeHotel, setActiveHotel] = useState("all")

    const filteredOffers =
        activeHotel === "all"
            ? offers
            : offers.filter(
                (offer) => offer.hotel === activeHotel || offer.hotel === "all"
            )

    return (
        <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen pt-24 pb-20">

            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-200 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    {/* Badge */}
                    <div className="inline-block mb-5">
                        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wide uppercase px-5 py-2.5 rounded-full shadow-sm animate-pulse">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                            </svg>
                            Limited Time Offers
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-5 leading-tight">
                        Exclusive{" "}
                        <span className="relative inline-block">
                            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-40"></span>
                            <span className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
                                Offers
                            </span>
                        </span>
                        {" "}&{" "}
                        <span className="relative inline-block">
                            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-40"></span>
                            <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
                                Packages
                            </span>
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover special rates and curated packages across our premium hotels in Visakhapatnam.<br className="hidden sm:block" />
                        Book now and save on your next stay!
                    </p>
                </motion.header>

                {/* Filter Tabs */}
                <motion.nav
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {hotels.map((hotel, index) => (
                            <motion.button
                                key={hotel.value}
                                onClick={() => setActiveHotel(hotel.value)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`group relative px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 overflow-hidden ${activeHotel === hotel.value
                                    ? "text-white shadow-xl"
                                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg"
                                    }`}
                            >
                                {activeHotel === hotel.value && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute inset-0 bg-gradient-to-r ${hotel.gradient}`}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative flex items-center gap-2">
                                    <span className="text-lg">{hotel.icon}</span>
                                    {hotel.label}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.nav>

                {/* Offers Grid */}
                <AnimatePresence mode="wait">
                    <motion.section
                        key={activeHotel}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {filteredOffers.length === 0 ? (
                            <div className="col-span-2 text-center py-20">
                                <div className="inline-block p-8 bg-gray-100 rounded-full mb-6">
                                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Offers Available</h3>
                                <p className="text-gray-600">Check back soon for new deals and packages!</p>
                            </div>
                        ) : (
                            filteredOffers.map((offer, index) => {
                                const isExpired =
                                    new Date(offer.expiry).getTime() <
                                    new Date().getTime()

                                const hotelInfo = hotels.find(h => h.value === offer.hotel) || hotels[0]

                                return (
                                    <motion.article
                                        key={offer.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                        className={`group relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden ${isExpired ? "border-gray-200 opacity-75" : "border-gray-100"
                                            }`}
                                    >
                                        {/* Gradient Border Top */}
                                        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${hotelInfo.gradient}`}></div>

                                        {/* Decorative Background */}
                                        {!isExpired && (
                                            <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${hotelInfo.gradient} rounded-full blur-3xl`}></div>
                                            </div>
                                        )}

                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-5 gap-4 relative">
                                            <div className="flex items-center gap-3">
                                                <span className={`text-2xl sm:text-3xl p-2 sm:p-3 bg-gradient-to-br ${hotelInfo.gradient} bg-opacity-10 rounded-xl`}>
                                                    {hotelInfo.icon}
                                                </span>
                                                <span className={`text-xs sm:text-sm font-bold text-white px-4 py-2 rounded-full bg-gradient-to-r ${hotelInfo.gradient} shadow-md`}>
                                                    {offer.tag}
                                                </span>
                                            </div>

                                            <span
                                                className={`text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold whitespace-nowrap flex items-center gap-1.5 ${isExpired
                                                    ? "bg-gray-100 text-gray-600 border border-gray-200"
                                                    : "bg-green-50 text-green-700 border border-green-200 animate-pulse"
                                                    }`}
                                            >
                                                {isExpired ? (
                                                    <>
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                        </svg>
                                                        Expired
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                        </svg>
                                                        Till {offer.expiry}
                                                    </>
                                                )}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                            {offer.title}
                                        </h2>

                                        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                                            {offer.description}
                                        </p>

                                        {/* Actions */}
                                        {!isExpired ? (
                                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative">
                                                <a
                                                    href={`https://wa.me/919676247755?text=Hi, I'm interested in the "${offer.title}" offer`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/btn flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                    </svg>
                                                    Book via WhatsApp
                                                </a>
                                                <a
                                                    href="tel:+919676247755"
                                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    Call Now
                                                </a>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 text-gray-500 font-medium">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                This offer has expired
                                            </div>
                                        )}

                                        {/* Shine Effect on Hover */}
                                        {!isExpired && (
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                            </div>
                                        )}
                                    </motion.article>
                                )
                            })
                        )}
                    </motion.section>
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 md:mt-20 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Can't Find What You're Looking For?
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                            Contact us directly and we'll create a custom package tailored to your needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919676247755?text=Hi, I'd like to inquire about custom packages"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                            <a
                                href="tel:+919676247755"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Us
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* SEO SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "OfferCatalog",
                        name: "KGB Hotels Offers",
                        itemListElement: offers.map((offer) => ({
                            "@type": "Offer",
                            name: offer.title,
                            description: offer.description,
                            availabilityEnds: offer.expiry,
                        })),
                    }),
                }}
            />

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </div>
    )
}