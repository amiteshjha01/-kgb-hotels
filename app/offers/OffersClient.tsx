"use client"

import { useState } from "react"
import { offers } from "@/data/offers"

const hotels = [
    { label: "All Hotels", value: "all" },
    { label: "Cool River", value: "cool-river" },
    { label: "All-Rounder", value: "all-rounder" },
    { label: "Beach View", value: "beach-view" },
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
        <div className="bg-black min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Special <span className="text-yellow-400">Offers & Packages</span>
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Discover exclusive deals across our premium hotels in Visakhapatnam.
                    </p>
                </header>

                {/* Filter */}
                <nav className="flex flex-wrap justify-center gap-3 mb-14">
                    {hotels.map((hotel) => (
                        <button
                            key={hotel.value}
                            onClick={() => setActiveHotel(hotel.value)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border ${activeHotel === hotel.value
                                    ? "bg-yellow-500 text-black border-yellow-500"
                                    : "border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                                }`}
                        >
                            {hotel.label}
                        </button>
                    ))}
                </nav>

                {/* Offers */}
                <section className="grid md:grid-cols-2 gap-8">
                    {filteredOffers.map((offer) => {
                        const isExpired =
                            new Date(offer.expiry).getTime() <
                            new Date().getTime()

                        return (
                            <article
                                key={offer.id}
                                className="border border-yellow-500/20 rounded-xl p-8 bg-black"
                            >
                                <div className="flex justify-between mb-4">
                                    <span className="text-xs font-semibold bg-yellow-500 text-black px-3 py-1 rounded-full">
                                        {offer.tag}
                                    </span>

                                    <span
                                        className={`text-xs px-3 py-1 rounded-full ${isExpired
                                                ? "bg-gray-600 text-white"
                                                : "bg-emerald-500 text-black"
                                            }`}
                                    >
                                        {isExpired ? "Expired" : `Valid Till ${offer.expiry}`}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-semibold mb-3">
                                    {offer.title}
                                </h2>

                                <p className="text-gray-300 text-sm mb-6">
                                    {offer.description}
                                </p>

                                {!isExpired && (
                                    <div className="flex gap-4">
                                        <a
                                            href="https://wa.me/91XXXXXXXXXX"
                                            className="px-5 py-2 bg-yellow-500 text-black font-semibold rounded-md"
                                        >
                                            Enquire
                                        </a>
                                        <a
                                            href="tel:+91XXXXXXXXXX"
                                            className="px-5 py-2 border border-yellow-500 text-yellow-400 rounded-md"
                                        >
                                            Call
                                        </a>
                                    </div>
                                )}
                            </article>
                        )
                    })}
                </section>
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
        </div>
    )
}
