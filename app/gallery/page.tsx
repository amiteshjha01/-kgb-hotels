import type { Metadata } from "next"
import GalleryInteractive from "./GalleryInteractive"

export const metadata: Metadata = {
    title: "Photo Gallery – KGB Hotels Visakhapatnam",
    description:
        "Browse photos of KGB Hotels in Visakhapatnam — KGB Coolriver (corporate hotel), KGB Legend Grand (budget hotel), and KGB Villa Homes (family hotel). View rooms, lobby, reception and hotel amenities.",
    keywords: [
        "KGB Hotels photos",
        "hotel rooms Vizag",
        "KGB Coolriver photos",
        "KGB Legend Grand photos",
        "KGB Villa Homes photos",
        "hotel gallery Visakhapatnam",
        "best hotel photos Vizag",
    ],
    alternates: {
        canonical: "https://kgbhotels.com/gallery",
    },
}

const galleryImages = [
    // KGB Coolriver
    { src: "/gallery/cool-river/fo desk.jpeg", hotel: "cool-river", title: "Reception — KGB Coolriver", label: "KGB Coolriver · Corporate" },
    { src: "/gallery/cool-river/waiting area.jpeg", hotel: "cool-river", title: "Waiting Area", label: "KGB Coolriver · Corporate" },
    { src: "/gallery/cool-river/bed 2.jpeg", hotel: "cool-river", title: "Premium Room", label: "KGB Coolriver · Corporate" },
    { src: "/gallery/cool-river/bed 5.jpeg", hotel: "cool-river", title: "Executive Room", label: "KGB Coolriver · Corporate" },
    { src: "/gallery/cool-river/wash.jpeg", hotel: "cool-river", title: "Bathroom", label: "KGB Coolriver · Corporate" },
    // KGB Legend Grand
    { src: "/gallery/legend-grand/reception desk.jpeg", hotel: "legend-grand", title: "Reception — KGB Legend Grand", label: "KGB Legend Grand · Budget" },
    { src: "/gallery/legend-grand/waiting hall.jpeg", hotel: "legend-grand", title: "Lobby Area", label: "KGB Legend Grand · Budget" },
    { src: "/gallery/legend-grand/outer.jpeg", hotel: "legend-grand", title: "Waiting Area", label: "KGB Legend Grand · Budget" },
    { src: "/gallery/legend-grand/2 person bed.jpeg", hotel: "legend-grand", title: "Room Interior", label: "KGB Legend Grand · Budget" },
    { src: "/gallery/legend-grand/3 bed.jpeg", hotel: "legend-grand", title: "Family Room", label: "KGB Legend Grand · Budget" },
    // KGB Villa Homes
    { src: "/gallery/villa homes/front.jpeg", hotel: "villa-homes", title: "Hotel Front — KGB Villa Homes", label: "KGB Villa Homes · Family" },
    { src: "/gallery/villa homes/fo.jpeg", hotel: "villa-homes", title: "Reception Area", label: "KGB Villa Homes · Family" },
    { src: "/gallery/villa homes/lobby.jpeg", hotel: "villa-homes", title: "Lobby Area", label: "KGB Villa Homes · Family" },
    { src: "/gallery/villa homes/bed 3.jpeg", hotel: "villa-homes", title: "Family Room", label: "KGB Villa Homes · Family" },
    { src: "/gallery/villa homes/wr1.jpeg", hotel: "villa-homes", title: "Bathroom", label: "KGB Villa Homes · Family" },
]

export default function GalleryPage() {
    return (
        <div className="bg-navy-950 min-h-screen pt-32 sm:pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14 sm:mb-20">
                    <p className="label mb-4">Our Collection</p>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
                        Hotel <span className="gold-text" style={{ fontStyle: "italic" }}>Gallery</span>
                    </h1>
                    <div className="ornament mx-auto mb-5" style={{ width: "220px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
                        Explore premium rooms, lobbies and amenities across all three KGB Hotels properties in Visakhapatnam — KGB Coolriver, KGB Legend Grand, and KGB Villa Homes.
                    </p>
                </div>

                <GalleryInteractive galleryImages={galleryImages} />
            </div>
        </div>
    )
}