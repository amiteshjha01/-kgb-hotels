import type { Metadata } from "next"
import connectDB from "@/lib/mongodb"
import Hotel from "@/lib/models/Hotel"
import OffersFilter from "./OffersFilter"

export const metadata: Metadata = {
    title: "Offers & Deals – KGB Hotels Visakhapatnam",
    description:
        "Check out the latest offers and deals at KGB Hotels in Visakhapatnam. Special rates for corporate stays, family packages, and seasonal discounts at KGB Coolriver, KGB Legend Grand, and KGB Villa Homes.",
}

export default async function OffersPage() {
    await connectDB();
    const hotelsWithOffers = await Hotel.find({ 
        offer: { $exists: true, $ne: "" } 
    });

    const dynamicOffers = hotelsWithOffers.map((hotel, index) => {
        // Map DB hotel to Offer interface
        const hotelSlug = hotel.name.toLowerCase().includes('cool') ? 'cool-river' : 
                         hotel.name.toLowerCase().includes('legend') ? 'legend-grand' : 
                         'villa-homes';

        return {
            id: index + 1,
            title: `Exclusive Deal at ${hotel.name}`,
            hotel: hotelSlug,
            tag: "Limited Time",
            description: hotel.offer,
            expiry: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(), // Sample expiry
            hotelName: hotel.name
        };
    });

    return (
        <div className="bg-navy-950 min-h-screen pt-32 sm:pt-40 pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14 sm:mb-20">
                    <p className="label mb-4">Exclusive Deals</p>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
                        Current <span className="gold-text" style={{ fontStyle: "italic" }}>Offers</span>
                    </h1>
                    <div className="ornament mx-auto mb-5" style={{ width: "220px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore real-time discounts and curated packages updated daily across our portfolio.
                    </p>
                </div>

                <OffersFilter offers={dynamicOffers} />
            </div>
        </div>
    )
}
