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
        <div className="bg-background min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Exclusive Offers & Packages
                    </h1>
                    <p className="text-lg text-text-light max-w-2xl mx-auto">
                        Discover special rates and curated packages across our premium hotels in Visakhapatnam.
                    </p>
                </header>

                {/* Filter */}
                <nav className="flex flex-wrap justify-center gap-3 mb-16">
                    {hotels.map((hotel) => (
                        <button
                            key={hotel.value}
                            onClick={() => setActiveHotel(hotel.value)}
                            className={`px-6 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all ${activeHotel === hotel.value
                                    ? "bg-accent text-white border-accent shadow-lg"
                                    : "border-border-color text-foreground hover:border-accent hover:text-accent"
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
                                className="border border-border-color rounded-lg p-8 bg-white hover:shadow-xl transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <span className="text-xs font-semibold bg-accent text-white px-4 py-2 rounded-full">
                                        {offer.tag}
                                    </span>

                                    <span
                                        className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap ${isExpired
                                                ? "bg-gray-200 text-gray-600"
                                                : "bg-green-100 text-green-700"
                                            }`}
                                    >
                                        {isExpired ? "Expired" : `Valid Till ${offer.expiry}`}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-primary mb-3">
                                    {offer.title}
                                </h2>

                                <p className="text-text-light text-sm mb-6">
                                    {offer.description}
                                </p>

                                {!isExpired && (
                                    <div className="flex gap-4">
                                        <a
                                            href="https://wa.me/919676247755"
                                            className="px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition"
                                        >
                                            Enquire
                                        </a>
                                        <a
                                            href="tel:+919676247755"
                                            className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
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
