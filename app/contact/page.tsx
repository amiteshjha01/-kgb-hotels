"use client"

import { useState } from "react"

const hotelLocations = [
    {
        id: "cool-river",
        name: "Cool River Hotel",
        mapUrl: "https://www.google.com/maps?q=Cool+River+Hotel+Visakhapatnam&output=embed",
    },
    {
        id: "all-rounder",
        name: "All-Rounder Hotel",
        mapUrl: "https://www.google.com/maps?q=All+Rounder+Hotel+Visakhapatnam&output=embed",
    },
    {
        id: "beach-view",
        name: "Beach View Hotel",
        mapUrl: "https://www.google.com/maps?q=Beach+View+Hotel+Visakhapatnam&output=embed",
    },
]

export default function ContactPage() {
    const [selectedHotel, setSelectedHotel] = useState("cool-river")
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="bg-gradient-to-br from-slate-950 via-black to-slate-900 py-16 sm:py-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Get in <span className="text-yellow-400">Touch</span>
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Contact us for bookings, corporate stays, family trips, or custom hotel packages.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT: CONTACT FORM */}
                    <div className="bg-slate-900/40 backdrop-blur rounded-2xl p-8 border border-yellow-500/10">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Send an <span className="text-yellow-400">Enquiry</span>
                        </h2>

                        <form className="space-y-5">
                            {/* Hotel */}
                            <div>
                                <label className="text-sm text-gray-400 mb-1 block">
                                    Select Hotel
                                </label>
                                <select
                                    value={selectedHotel}
                                    onChange={(e) => setSelectedHotel(e.target.value)}
                                    className="w-full bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                                >
                                    {hotelLocations.map((hotel) => (
                                        <option key={hotel.id} value={hotel.id}>
                                            {hotel.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Name */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full bg-black border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                            />

                            {/* Phone */}
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full bg-black border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full bg-black border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Your message / booking requirement"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full bg-black border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full mt-2 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition"
                            >
                                Submit Enquiry
                            </button>
                        </form>

                        {/* Quick CTA */}
                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://wa.me/91XXXXXXXXXX"
                                className="flex-1 text-center py-3 bg-green-500 text-black font-semibold rounded-lg"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="flex-1 text-center py-3 border border-yellow-500 text-yellow-400 rounded-lg"
                            >
                                Call
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: MAP */}
                    <div className="bg-slate-900/40 backdrop-blur rounded-2xl p-4 border border-yellow-500/10">
                        <iframe
                            src={
                                hotelLocations.find((h) => h.id === selectedHotel)?.mapUrl
                            }
                            width="100%"
                            height="100%"
                            className="min-h-[420px] rounded-xl border border-yellow-500/20"
                            loading="lazy"
                            title="Hotel Location"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
