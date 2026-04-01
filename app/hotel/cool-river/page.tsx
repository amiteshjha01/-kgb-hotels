import HotelPageLayout from "@/components/HotelPageLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "KGB Coolriver Hotel Vizag | Best Corporate Hotel in Visakhapatnam",
    description:
        "Book KGB Coolriver Hotel in Vizag (Visakhapatnam). Premium corporate stay near Ram Nagar & KA Paul Hall. Best hotel in Vizag for business travelers. Call or WhatsApp 9676247755.",
    keywords: [
        "KGB Coolriver Hotel Vizag",
        "Hotels in Vizag",
        "Best hotel in Visakhapatnam",
        "corporate hotel Visakhapatnam",
        "hotel near Ram Nagar Vizag",
        "hotel near railway station Visakhapatnam",
        "business hotel Vizag",
        "premium hotel Vizag",
    ],
    alternates: {
        canonical: "https://kgbhotels.com/hotel/cool-river",
    },
}

export default function CoolRiverHotelPage() {
    return (
        <>
            {/* ✅ SCHEMA (VERY IMPORTANT FOR GOOGLE RANKING) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        name: "KGB Coolriver Hotel",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Visakhapatnam",
                            addressRegion: "Andhra Pradesh",
                            addressCountry: "India",
                        },
                        telephone: "+91-9676247755",
                        url: "https://kgbhotels.com/hotel/cool-river",
                        image: "https://kgbhotels.com/gallery/cool-river/logo.jpeg",
                        priceRange: "₹₹",
                        description:
                            "Premium corporate hotel in Visakhapatnam near Ram Nagar and KA Paul Convention Hall.",
                    }),
                }}
            />

            <HotelPageLayout
                name="KGB Coolriver"
                badge="Corporate Excellence"
                badgeIcon="🏢"

                tagline="Premium corporate hotel in Visakhapatnam (Vizag) designed for business travelers seeking comfort and luxury."

                image="/gallery/cool-river/logo.jpeg"

                phone1="9676247755"
                phone2="9666787755"
                waPhone="9676247755"

                waMsg="Hello! I want to book a room at KGB Coolriver Hotel Vizag. Please share availability and price."

                stat1={["24", "Premium Rooms"]}
                stat2={["4.8★", "Guest Rating"]}
                stat3={["24/7", "Support"]}
                stat4={["100%", "Satisfaction"]}

                about="KGB Coolriver Hotel is one of the best hotels in Vizag for corporate travelers. Located near Ram Nagar and KA Paul Convention Hall, it offers premium rooms, high-speed WiFi, and 24-hour service — perfect for business stays in Visakhapatnam."

                keyFeatures={[
                    "Premium Rooms in Vizag",
                    "High-Speed WiFi",
                    "24-Hour Check-In & Checkout",
                    "Lift & Elevator",
                    "Restaurant & Room Service",
                    "Free Parking",
                    "Power Backup",
                ]}

                roomTypes={[
                    {
                        icon: "🛏️",
                        title: "Premium Room",
                        desc: "Best premium room in Vizag for business travelers with workspace and comfort.",
                    },
                    {
                        icon: "⭐",
                        title: "Executive Room",
                        desc: "Luxury executive room in Visakhapatnam with workspace and premium amenities.",
                    },
                    {
                        icon: "👥",
                        title: "Deluxe Twin",
                        desc: "Twin room for 2 guests — ideal for business stays in Vizag.",
                    },
                    {
                        icon: "👑",
                        title: "Suite",
                        desc: "Luxury suite in Vizag with separate living space and premium experience.",
                    },
                ]}

                amenities={[
                    {
                        icon: "📶",
                        title: "High-Speed WiFi",
                        desc: "Fast internet in all rooms — ideal for business travelers.",
                    },
                    {
                        icon: "❄️",
                        title: "Air Conditioning",
                        desc: "Comfortable AC rooms in Vizag.",
                    },
                    {
                        icon: "🍽️",
                        title: "Restaurant",
                        desc: "Best hotel dining experience in Vizag.",
                    },
                    {
                        icon: "🛎️",
                        title: "Room Service",
                        desc: "24-hour room service available.",
                    },
                ]}

                ctaHeading="Book Best Hotel in Vizag Now"
                ctaDesc="Stay at KGB Coolriver — top-rated hotel in Visakhapatnam. Instant booking via WhatsApp."

                photos={[
                    { src: "/gallery/cool-river/fo desk.jpeg", caption: "Hotel Reception Vizag" },
                    { src: "/gallery/cool-river/waiting area.jpeg", caption: "Hotel Lobby Vizag" },
                    { src: "/gallery/cool-river/bed 2.jpeg", caption: "Premium Room Vizag" },
                    { src: "/gallery/cool-river/bed 5.jpeg", caption: "Family Room Vizag" },
                    { src: "/gallery/cool-river/wash.jpeg", caption: "Bathroom Hotel Vizag" },
                ]}

                mapsLink="https://maps.app.goo.gl/iNkFuPg1n8fTkXKy7"

                backHref="/"
            />
        </>
    )
}