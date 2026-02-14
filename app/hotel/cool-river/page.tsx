"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function CoolRiverHotel() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">

            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
                <Image
                    src="/hotels/cool-river.png"
                    alt="Cool River Hotel - Premium Corporate Stay in Visakhapatnam"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover"
                    quality={90}
                />

                {/* Enhanced Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

                <div className="relative z-10 h-full flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 md:pb-20">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Hotels", href: "/" },
                                { label: "Cool River Hotel" }
                            ]}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-white text-sm font-semibold mb-5 shadow-lg">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                Corporate Excellence
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                                Cool River Hotel
                            </h1>

                            <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-10 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                Premium corporate hospitality designed for business travelers seeking elegance, efficiency, and exceptional service.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/919676247755?text=Hi, I'd like to book a room at Cool River Hotel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Book on WhatsApp
                                </a>
                                <a
                                    href="tel:+919676247755"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/15 backdrop-blur-md border-2 border-white/80 text-white font-bold text-base rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-xl"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call: +91 9676 247755
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Stats Bar */}
            <section className="relative -mt-20 md:-mt-24 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-2">24</div>
                                <div className="text-sm md:text-base text-gray-600 font-medium">Premium Rooms</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text mb-2">4.8★</div>
                                <div className="text-sm md:text-base text-gray-600 font-medium">Guest Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">24/7</div>
                                <div className="text-sm md:text-base text-gray-600 font-medium">Support</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text mb-2">100%</div>
                                <div className="text-sm md:text-base text-gray-600 font-medium">Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 md:py-24 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Designed for{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
                                    Business
                                </span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Cool River Hotel stands as the premier choice for corporate travelers. Every detail—from soundproofed rooms to high-speed connectivity—is engineered for productivity and comfort.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="grid gap-4"
                        >
                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="text-3xl">🏢</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">24 Rooms</h4>
                                        <p className="text-sm text-gray-600">Carefully designed for executive comfort</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="text-3xl">📍</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Prime Location</h4>
                                        <p className="text-sm text-gray-600">Strategic business hub access</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 shadow-lg"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">Key Features</h3>
                            <ul className="space-y-3 relative">
                                {[
                                    "Executive Room Categories",
                                    "Gigabit Wi-Fi & Work Desk",
                                    "Airport Transfers",
                                    "Early Check-in Available",
                                    "Power Backup & 24/7 Support"
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Rooms Section */}
            <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                            Rooms &{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
                                Suites
                            </span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                            Choose from our thoughtfully designed accommodations, each crafted for comfort and productivity
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        {[
                            {
                                icon: "🛏️",
                                title: "Premium Room",
                                description: "Thoughtfully appointed for business professionals. Modern amenities, spacious work desk, and premium comfort for extended stays.",
                                features: ["350 sq ft", "King bed & seating area", "Work desk with ergonomic chair", "Premium bedding & toiletries"],
                                gradient: "from-blue-500 to-cyan-500",
                                buttonGradient: "from-blue-600 to-cyan-600",
                            },
                            {
                                icon: "⭐",
                                title: "Executive Room",
                                description: "Our finest offering for discerning corporate guests. Spacious, luxurious, with dedicated workspace and premium hospitality.",
                                features: ["450 sq ft", "King bed with lounge area", "Executive workspace", "Luxury toiletries & amenities"],
                                gradient: "from-purple-500 to-pink-500",
                                buttonGradient: "from-purple-600 to-pink-600",
                            }
                        ].map((room, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                            >
                                <div className={`relative h-64 md:h-80 bg-gradient-to-br ${room.gradient} bg-opacity-10 overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-8xl md:text-9xl opacity-20 group-hover:scale-110 transition-transform duration-500">{room.icon}</span>
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${room.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                                    <div className="absolute top-4 right-4">
                                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${room.buttonGradient} text-white text-sm font-bold rounded-full shadow-lg`}>
                                            Available
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-10">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                                        {room.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {room.description}
                                    </p>
                                    <div className="space-y-2.5 mb-8">
                                        {room.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-gray-700">
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${room.gradient} flex items-center justify-center flex-shrink-0`}>
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        href="https://wa.me/919676247755?text=Hi, I'd like to check availability for the {room.title} at Cool River Hotel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r ${room.buttonGradient} text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Check Availability
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <section className="py-16 md:py-24 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                            Amenities &{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
                                Services
                            </span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                            Everything you need for a productive and comfortable stay
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            { icon: "📶", title: "High-Speed Wi-Fi", desc: "Reliable gigabit connectivity throughout", gradient: "from-blue-500 to-cyan-500" },
                            { icon: "🚗", title: "Airport Transfers", desc: "Convenient pickup & drop service", gradient: "from-green-500 to-emerald-500" },
                            { icon: "🏋️", title: "Fitness Center", desc: "Equipped with modern workout equipment", gradient: "from-purple-500 to-pink-500" },
                            { icon: "🍽️", title: "Fine Dining", desc: "In-house restaurant & room service", gradient: "from-orange-500 to-red-500" },
                            { icon: "🛎️", title: "Concierge Service", desc: "24/7 dedicated guest assistance", gradient: "from-indigo-500 to-purple-500" },
                            { icon: "⚡", title: "Power Backup", desc: "Uninterrupted electricity supply", gradient: "from-yellow-500 to-orange-500" },
                        ].map((amenity, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2"
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${amenity.gradient} rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${amenity.gradient} bg-opacity-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                    <span className="text-4xl">{amenity.icon}</span>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2 relative">{amenity.title}</h4>
                                <p className="text-gray-600 text-sm relative leading-relaxed">{amenity.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to Book Your<br className="hidden sm:block" /> Corporate Stay?
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Secure your room at Cool River Hotel and experience premium business hospitality in Visakhapatnam.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919676247755?text=Hi, I'd like to reserve a room at Cool River Hotel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-700 font-bold text-base rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Reserve on WhatsApp
                            </a>
                            <a
                                href="tel:+919676247755"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-base rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Instant Confirmation
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Best Price Guarantee
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                24/7 Support
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}