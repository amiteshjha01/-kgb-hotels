"use client"

import { useState } from "react"

type Props = {
    hotelSlug: "cool-river" | "all-rounder" | "beach-view"
}

export default function HotelTabs({ hotelSlug }: Props) {
    const [active, setActive] = useState<"rooms" | "amenities" | "gallery">("rooms")

    // Dynamic gallery images based on hotel slug
    const galleryImages = [
        `/gallery/${hotelSlug}/1.jpg`,
        `/gallery/${hotelSlug}/2.jpg`,
        `/gallery/${hotelSlug}/3.jpg`,
    ]

    return (
        <div className="mt-12">

            {/* Tabs */}
            <div className="flex gap-6 border-b border-yellow-500/20 mb-8">
                {["rooms", "amenities", "gallery"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActive(tab as any)}
                        className={`pb-3 capitalize font-semibold ${active === tab
                                ? "text-yellow-400 border-b-2 border-yellow-400"
                                : "text-gray-400 hover:text-yellow-400"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Rooms */}
            {active === "rooms" && (
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border border-yellow-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-2">Premium Room</h3>
                        <p className="text-sm text-gray-300">
                            Ideal for business and leisure travelers.
                        </p>
                    </div>
                    <div className="border border-yellow-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-2">Executive Room</h3>
                        <p className="text-sm text-gray-300">
                            Spacious rooms with modern comfort.
                        </p>
                    </div>
                </div>
            )}

            {/* Amenities */}
            {active === "amenities" && (
                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300">
                    <p>✔ High-Speed Wi-Fi</p>
                    <p>✔ 24×7 Front Desk</p>
                    <p>✔ Airport Transfers</p>
                    <p>✔ Daily Housekeeping</p>
                </div>
            )}

            {/* Gallery */}
            {active === "gallery" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="Hotel Gallery"
                            className="h-40 w-full object-cover rounded-lg hover:scale-105 transition"
                        />
                    ))}
                </div>
            )}

        </div>
    )
}
