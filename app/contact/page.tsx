"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const hotelLocations = [
    {
        id: "cool-river",
        name: "Cool River Hotel",
        address: "Beach Road, Visakhapatnam, Andhra Pradesh 530003",
        phone: "+91 9676247755",
        alternatePhone: "+91 9666787755",
        email: "coolriver@kgbhotels.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
        icon: "🏞️",
        gradient: "from-blue-500 to-cyan-500",
        features: ["River View", "Business Center", "High-Speed WiFi", "Conference Rooms"],
    },
    {
        id: "legend-grand",
        name: "Legend Grand Hotel",
        address: "Main Road, Visakhapatnam, Andhra Pradesh 530016",
        phone: "+91 9000907755",
        alternatePhone: "+91 9666587755",
        email: "legendgrand@kgbhotels.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
        icon: "⭐",
        gradient: "from-green-500 to-emerald-500",
        features: ["Family Suites", "Swimming Pool", "Restaurant", "Kids Play Area"],
    },
    {
        id: "villa-homes",
        name: "Villa Homes Hotel",
        address: "RK Beach, Visakhapatnam, Andhra Pradesh 530023",
        phone: "+91 9666597755",
        alternatePhone: "+91 8367214304",
        email: "villahomes@kgbhotels.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
        icon: "🏖️",
        gradient: "from-purple-500 to-pink-500",
        features: ["Beach Access", "Luxury Villas", "Sea View", "Spa Services"],
    },
]

const contactMethods = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        title: "Phone Support",
        value: "24/7 Available",
        subValue: "+91 9676247755",
        href: "tel:+919676247755",
        gradient: "from-blue-500 to-blue-600",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
        ),
        title: "WhatsApp Chat",
        value: "Instant Replies",
        subValue: "Chat with us now",
        href: "https://wa.me/919676247755",
        gradient: "from-green-500 to-green-600",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Email Support",
        value: "Professional Help",
        subValue: "info@kgbhotels.com",
        href: "mailto:info@kgbhotels.com",
        gradient: "from-purple-500 to-purple-600",
    },
]

export default function ContactPage() {
    const [selectedHotel, setSelectedHotel] = useState("cool-river")
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const selectedHotelData = hotelLocations.find((h) => h.id === selectedHotel)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" })
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!form.name.trim()) newErrors.name = "Name is required"
        if (!form.phone.trim()) newErrors.phone = "Phone is required"
        else if (!/^\+?[\d\s-()]{10,}$/.test(form.phone)) newErrors.phone = "Invalid phone number"
        if (!form.email.trim()) newErrors.email = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email"
        if (!form.message.trim()) newErrors.message = "Message is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setSubmitSuccess(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setForm({
                name: "",
                phone: "",
                email: "",
                message: "",
                checkIn: "",
                checkOut: "",
                guests: "1",
            })
            setSubmitSuccess(false)
        }, 3000)
    }

    return (
        <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20 lg:py-28 min-h-screen">
            {/* Background Decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-200 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-block mb-5">
                        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-600 text-sm font-bold tracking-wide uppercase px-5 py-2.5 rounded-full shadow-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            We're Here to Help 24/7
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-5">
                        Get in{" "}
                        <span className="relative inline-block">
                            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30"></span>
                            <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                                Touch
                            </span>
                        </span>
                    </h1>

                    <p className="mt-5 text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Contact us for bookings, corporate stays, family trips, or custom hotel packages.<br className="hidden sm:block" />
                        We're available round the clock to assist you with your hospitality needs.
                    </p>
                </motion.div>

                {/* Contact Methods */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16"
                >
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.title}
                            href={method.href}
                            target={method.href.includes('wa.me') ? '_blank' : undefined}
                            rel={method.href.includes('wa.me') ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                        >
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            <div className="relative">
                                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${method.gradient} bg-opacity-10 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <div className={`bg-gradient-to-br ${method.gradient} p-3 rounded-xl`}>
                                        {method.icon}
                                    </div>
                                </div>

                                <h3 className="text-gray-900 font-bold text-lg lg:text-xl mb-2">{method.title}</h3>
                                <p className="text-gray-600 text-sm mb-1">{method.value}</p>
                                <p className="text-gray-500 text-sm font-medium">{method.subValue}</p>

                                {/* Arrow */}
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* LEFT: CONTACT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100"
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                                Send an{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                                    Enquiry
                                </span>
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base">
                                Fill in your details and we'll get back to you within 24 hours
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Hotel Selection */}
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Select Hotel *
                                </label>
                                <select
                                    value={selectedHotel}
                                    onChange={(e) => setSelectedHotel(e.target.value)}
                                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                                >
                                    {hotelLocations.map((hotel) => (
                                        <option key={hotel.id} value={hotel.id}>
                                            {hotel.icon} {hotel.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`w-full bg-gray-50 border-2 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 transition-all ${errors.name
                                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Phone & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className={`w-full bg-gray-50 border-2 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 transition-all ${errors.phone
                                            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                                            : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                                            }`}
                                    />
                                    {errors.phone && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={`w-full bg-gray-50 border-2 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 transition-all ${errors.email
                                            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                                            : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Check-in & Check-out */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        Check-in Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkIn"
                                        value={form.checkIn}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        Check-out Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkOut"
                                        value={form.checkOut}
                                        onChange={handleChange}
                                        min={form.checkIn || new Date().toISOString().split('T')[0]}
                                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Guests */}
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Number of Guests
                                </label>
                                <select
                                    name="guests"
                                    value={form.guests}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                                        <option key={num} value={num}>
                                            {num} {num === 1 ? "Guest" : "Guests"}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Message / Special Requirements *
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us about your booking requirements, special requests, or any questions you might have..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className={`w-full bg-gray-50 border-2 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 transition-all resize-none ${errors.message
                                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                                        }`}
                                />
                                {errors.message && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full mt-4 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base lg:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : submitSuccess ? (
                                        <>
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Submitted Successfully!
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Submit Enquiry
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>

                        {/* Quick CTAs */}
                        <div className="mt-8 pt-8 border-t-2 border-gray-100">
                            <p className="text-gray-600 text-sm font-medium mb-4 text-center">Or contact us directly</p>
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="https://wa.me/919676247755"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp
                                </a>
                                <a
                                    href="tel:+919676247755"
                                    className="group flex items-center justify-center gap-2 py-3.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: MAP & LOCATION INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="space-y-6"
                    >
                        {/* Hotel Info Card */}
                        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100">
                            <div className="flex items-start gap-5 mb-6">
                                <div className={`text-5xl lg:text-6xl p-4 bg-gradient-to-br ${selectedHotelData?.gradient} bg-opacity-10 rounded-2xl`}>
                                    {selectedHotelData?.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                        {selectedHotelData?.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm lg:text-base mb-4 leading-relaxed">
                                        {selectedHotelData?.address}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {selectedHotelData?.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className={`px-3 py-1.5 bg-gradient-to-r ${selectedHotelData.gradient} bg-opacity-10 border-2 border-opacity-20 text-sm font-medium rounded-full`}
                                                style={{
                                                    borderColor: `${selectedHotelData.gradient.includes('blue') ? '#3B82F6' : selectedHotelData.gradient.includes('green') ? '#22C55E' : '#A855F7'}33`
                                                }}
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Contact Details */}
                                    <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                                        <a
                                            href={`tel:${selectedHotelData?.phone}`}
                                            className="flex items-center gap-3 text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold">{selectedHotelData?.phone}</span>
                                        </a>

                                        {selectedHotelData?.alternatePhone && (
                                            <a
                                                href={`tel:${selectedHotelData?.alternatePhone}`}
                                                className="flex items-center gap-3 text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <span className="font-semibold">{selectedHotelData?.alternatePhone}</span>
                                            </a>
                                        )}

                                        <a
                                            href={`mailto:${selectedHotelData?.email}`}
                                            className="flex items-center gap-3 text-sm lg:text-base text-gray-700 hover:text-purple-600 transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">{selectedHotelData?.email}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 h-[350px] lg:h-[450px]">
                            <iframe
                                src={selectedHotelData?.mapUrl}
                                width="100%"
                                height="100%"
                                className="rounded-2xl"
                                loading="lazy"
                                title={`${selectedHotelData?.name} Location`}
                                allowFullScreen
                            />
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 lg:p-8 border-2 border-blue-100">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                Quick Information
                            </h4>
                            <ul className="space-y-3 text-sm lg:text-base text-gray-700">
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    24/7 Front Desk Support
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Instant Booking Confirmation
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Free Cancellation Available
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Best Price Guarantee
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Success Toast */}
            <AnimatePresence>
                {submitSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50 max-w-sm"
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-lg">Enquiry Submitted!</p>
                            <p className="text-sm text-white/90">We'll contact you within 24 hours</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
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
            `}</style>
        </div>
    )
}