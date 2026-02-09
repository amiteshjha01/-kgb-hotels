"use client"

import { useState } from "react"

export default function HotelTabs() {
    const [active, setActive] = useState<"rooms" | "amenities" | "gallery">("rooms")

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

            {/* Content */}
            {active === "rooms" && (
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border border-yellow-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-2">Premium Room</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Ideal for solo business travelers with modern amenities and a work desk.
                        </p>
                    </div>

                    <div className="border border-yellow-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-2">Executive Room</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Spacious rooms designed for long corporate stays with extra comfort.
                        </p>
                    </div>
                </div>
            )}

            {active === "amenities" && (
                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300">
                    <p>✔ High-Speed Wi-Fi</p>
                    <p>✔ Power Backup</p>
                    <p>✔ Airport Transfers</p>
                    <p>✔ Daily Housekeeping</p>
                    <p>✔ 24×7 Front Desk</p>
                    <p>✔ Work-Friendly Rooms</p>
                </div>
            )}

            {active === "gallery" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="h-40 bg-gray-800 rounded-lg" />
                    <div className="h-40 bg-gray-800 rounded-lg" />
                    <div className="h-40 bg-gray-800 rounded-lg" />
                </div>
            )}
        </div>
    )
}
