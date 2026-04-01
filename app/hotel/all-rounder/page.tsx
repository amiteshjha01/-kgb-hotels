import HotelPageLayout from "@/components/HotelPageLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "KGB Legend Grand Vizag | Best Budget Hotel in Visakhapatnam",
    description:
        "KGB Legend Grand Hotel in Vizag — best budget hotel for families, corporates & tourists. Near railway station & city center. Book now via WhatsApp 9000907755.",
    keywords: [
        "KGB Legend Grand Vizag",
        "budget hotel Visakhapatnam",
        "affordable hotel Vizag",
        "best hotel in Vizag",
        "family hotel Vizag",
        "hotel near railway station Visakhapatnam",
        "cheap hotel Vizag",
        "corporate hotel Vizag",
    ],
}

export default function LegendGrandPage() {
    return (
        <>
            {/* ✅ SCHEMA (GOOGLE BOOST) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        name: "KGB Legend Grand Hotel",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Visakhapatnam",
                            addressRegion: "Andhra Pradesh",
                            addressCountry: "India",
                        },
                        telephone: "+91-9000907755",
                        url: "https://kgbhotels.com/hotel/all-rounder",
                        image: "https://kgbhotels.com/gallery/legend-grand/logo.jpeg",
                        priceRange: "₹",
                        description:
                            "Affordable budget hotel in Vizag for families and corporate travelers.",
                    }),
                }}
            />

            <HotelPageLayout
                name="KGB Legend Grand"
                badge="Budget Friendly & All-Inclusive"
                badgeIcon="⭐"

                tagline="Best budget hotel in Vizag (Visakhapatnam) for families, corporates and tourists."

                image="/gallery/legend-grand/logo.jpeg"

                phone1="9000907755"
                phone2="9666587755"
                waPhone="9000907755"

                waMsg="Hello! I want to book a room at KGB Legend Grand Hotel Vizag. Please share availability and pricing."

                stat1={["45", "Rooms"]}
                stat2={["4.5★", "Guest Rating"]}
                stat3={["24/7", "Check-In"]}
                stat4={["All", "Guest Types"]}

                about="KGB Legend Grand is one of the best budget hotels in Vizag. Located near major city areas and the railway station, it offers affordable rooms, great comfort, and all essential amenities — perfect for families, corporate travelers, and tourists visiting Visakhapatnam."

                keyFeatures={[
                    "Best Budget Hotel in Vizag",
                    "45 Rooms Available",
                    "Family & Corporate Friendly",
                    "24-Hour Check-In",
                    "High-Speed WiFi",
                    "AC Rooms",
                    "Free Parking",
                ]}

                roomTypes={[
                    {
                        icon: "🛏️",
                        title: "Standard Room",
                        desc: "Affordable room in Vizag for solo travelers.",
                    },
                    {
                        icon: "🏨",
                        title: "Deluxe Room",
                        desc: "Comfortable double room for couples and travelers.",
                    },
                    {
                        icon: "👨‍👩‍👧",
                        title: "Family Room",
                        desc: "Spacious room for families visiting Vizag.",
                    },
                    {
                        icon: "👑",
                        title: "Premium Suite",
                        desc: "Luxury suite at budget pricing in Vizag.",
                    },
                ]}

                amenities={[
                    {
                        icon: "📶",
                        title: "WiFi",
                        desc: "Free high-speed internet in all rooms.",
                    },
                    {
                        icon: "❄️",
                        title: "AC Rooms",
                        desc: "Fully air-conditioned rooms.",
                    },
                    {
                        icon: "⚡",
                        title: "Power Backup",
                        desc: "24/7 electricity backup.",
                    },
                    {
                        icon: "🚗",
                        title: "Free Parking",
                        desc: "Safe parking available.",
                    },
                ]}

                ctaHeading="Book Budget Hotel in Vizag Now"
                ctaDesc="Stay at KGB Legend Grand — best affordable hotel in Visakhapatnam. Book instantly via WhatsApp."

                photos={[
                    { src: "/gallery/legend-grand/reception desk.jpeg", caption: "Hotel Reception Vizag" },
                    { src: "/gallery/legend-grand/waiting hall.jpeg", caption: "Lobby Area" },
                    { src: "/gallery/legend-grand/outer.jpeg", caption: "Waiting Area" },
                    { src: "/gallery/legend-grand/2 person bed.jpeg", caption: "Room Interior" },
                    { src: "/gallery/legend-grand/3 bed.jpeg", caption: "Family Room" },
                ]}

                mapsLink="https://maps.app.goo.gl/BLPF3ahn7erbB4LM9"

                backHref="/"
            />
        </>
    )
}