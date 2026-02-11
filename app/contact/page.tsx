"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const hotelLocations = [
    {
        id: "cool-river",
        name: "Cool River Hotel",
        address: "Beach Road, Visakhapatnam, Andhra Pradesh 530003",
        phone: "+91 9676247755",
        email: "coolriver@kgbhotels.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
        icon: "🌊",
        features: ["River View", "AC Rooms", "Free WiFi"],
    },
    {
        id: "all-rounder",
        name: "All-Rounder Hotel",
        address: "Main Road, Visakhapatnam, Andhra Pradesh 530016",
        phone: "+91 9676247755",
        email: "allrounder@kgbhotels.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
        icon: "⭐",
        features: ["City Center", "Restaurant", "Parking"],
    },
    {
        id: "beach-view",
        name: "Beach View Hotel",
        address: "RK Beach, Visakhapatnam, Andhra Pradesh 530023",
        phone: "+91 9676247755",
        email: "beachview@kgbhotels.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
        icon: "🏖️",
        features: ["Beach Front", "Sea View", "Premium Rooms"],
    },
]

const contactMethods = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        title: "Phone",
        value: "+91 9676247755",
        href: "tel:+919676247755",
        color: "blue",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
        ),
        title: "WhatsApp",
        value: "Chat with us",
        href: "https://wa.me/919676247755",
        color: "green",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Email",
        value: "info@kgbhotels.com",
        href: "mailto:info@kgbhotels.com",
        color: "purple",
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
        // Clear error when user starts typing
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
        <div className="bg-background py-16 sm:py-20 lg:py-24 min-h-screen">
            {/* Background Decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-accent text-sm md:text-base font-semibold tracking-wider uppercase bg-accent/10 px-4 py-2 rounded-full border border-accent/30">
                            We're Here to Help
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                        Get in <span className="text-accent">Touch</span>
                    </h1>
                    <p className="mt-4 text-text-light text-base md:text-lg max-w-2xl mx-auto">
                        Contact us for bookings, corporate stays, family trips, or custom hotel packages.
                        We're available 24/7 to assist you.
                    </p>
                </motion.div>

                {/* Contact Methods */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
                >
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.title}
                            href={method.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative bg-slate-900/40 backdrop-blur border border-slate-700/50 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent transition-all duration-300" />
                            <div className="relative">
                                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:bg-yellow-500/20 transition-colors">
                                    {method.icon}
                                </div>
                                <h3 className="text-white font-semibold text-lg mb-1">{method.title}</h3>
                                <p className="text-gray-400 text-sm">{method.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                    {/* LEFT: CONTACT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-slate-900/40 backdrop-blur rounded-2xl p-6 md:p-8 border border-yellow-500/10 shadow-2xl"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Send an <span className="text-yellow-400">Enquiry</span>
                        </h2>
                        <p className="text-gray-400 text-sm mb-6">
                            Fill in your details and we'll get back to you within 24 hours
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Hotel Selection */}
                            <div>
                                <label className="text-sm text-gray-300 mb-2 block font-medium">
                                    Select Hotel *
                                </label>
                                <select
                                    value={selectedHotel}
                                    onChange={(e) => setSelectedHotel(e.target.value)}
                                    className="w-full bg-black/50 border border-yellow-500/30 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
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
                                <label className="text-sm text-gray-300 mb-2 block font-medium">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`w-full bg-black/50 border rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.name
                                            ? "border-red-500 focus:border-red-400 focus:ring-red-400/20"
                                            : "border-yellow-500/20 focus:border-yellow-400 focus:ring-yellow-400/20"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                )}
                            </div>

                            {/* Phone & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-300 mb-2 block font-medium">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className={`w-full bg-black/50 border rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.phone
                                                ? "border-red-500 focus:border-red-400 focus:ring-red-400/20"
                                                : "border-yellow-500/20 focus:border-yellow-400 focus:ring-yellow-400/20"
                                            }`}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="text-sm text-gray-300 mb-2 block font-medium">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={`w-full bg-black/50 border rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.email
                                                ? "border-red-500 focus:border-red-400 focus:ring-red-400/20"
                                                : "border-yellow-500/20 focus:border-yellow-400 focus:ring-yellow-400/20"
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Check-in & Check-out */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-300 mb-2 block font-medium">
                                        Check-in Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkIn"
                                        value={form.checkIn}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full bg-black/50 border border-yellow-500/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-300 mb-2 block font-medium">
                                        Check-out Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkOut"
                                        value={form.checkOut}
                                        onChange={handleChange}
                                        min={form.checkIn || new Date().toISOString().split('T')[0]}
                                        className="w-full bg-black/50 border border-yellow-500/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Guests */}
                            <div>
                                <label className="text-sm text-gray-300 mb-2 block font-medium">
                                    Number of Guests
                                </label>
                                <select
                                    name="guests"
                                    value={form.guests}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-yellow-500/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                        <option key={num} value={num}>
                                            {num} {num === 1 ? "Guest" : "Guests"}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm text-gray-300 mb-2 block font-medium">
                                    Message / Special Requirements *
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us about your booking requirements, special requests, or any questions..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className={`w-full bg-black/50 border rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                                            ? "border-red-500 focus:border-red-400 focus:ring-red-400/20"
                                            : "border-yellow-500/20 focus:border-yellow-400 focus:ring-yellow-400/20"
                                        }`}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full mt-2 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <div className="mt-6 pt-6 border-t border-yellow-500/10">
                            <p className="text-gray-400 text-sm mb-3 text-center">Or contact us directly</p>
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="https://wa.me/919676247755"
                                    className="group flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp
                                </a>
                                <a
                                    href="tel:+919676247755"
                                    className="group flex items-center justify-center gap-2 py-3 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
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
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Hotel Info Card */}
                        <div className="bg-slate-900/40 backdrop-blur rounded-2xl p-6 border border-yellow-500/10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-4xl">{selectedHotelData?.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {selectedHotelData?.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-3">
                                        {selectedHotelData?.address}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedHotelData?.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Contact Details */}
                                    <div className="space-y-2">
                                        <a
                                            href={`tel:${selectedHotelData?.phone}`}
                                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {selectedHotelData?.phone}
                                        </a>
                                        <a
                                            href={`mailto:${selectedHotelData?.email}`}
                                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {selectedHotelData?.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-slate-900/40 backdrop-blur rounded-2xl p-4 border border-yellow-500/10 h-[400px] lg:h-[500px]">
                            <iframe
                                src={selectedHotelData?.mapUrl}
                                width="100%"
                                height="100%"
                                className="rounded-xl border border-yellow-500/20"
                                loading="lazy"
                                title={`${selectedHotelData?.name} Location`}
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Success Toast */}
                <AnimatePresence>
                    {submitSuccess && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.3 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                            className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="font-semibold">Enquiry Submitted!</p>
                                <p className="text-sm opacity-90">We'll contact you soon</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
