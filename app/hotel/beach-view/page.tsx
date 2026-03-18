import HotelPageLayout from "@/components/HotelPageLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "KGB Villa Homes Vizag | Best Family Hotel in Visakhapatnam",
    description:
        "Stay at KGB Villa Homes in Vizag — best family hotel near RTC Complex & Railway Station. Spacious rooms, homely stay, WiFi & parking. Book now via WhatsApp 9666597755.",
    keywords: [
        "KGB Villa Homes Vizag",
        "family hotel Visakhapatnam",
        "homely stay Vizag",
        "best hotel in Vizag for family",
        "hotel near RTC complex Vizag",
        "hotel near railway station Visakhapatnam",
        "tourist hotel Vizag",
        "budget hotel Vizag",
    ],
}

export default function VillaHomesPage() {
    return (
        <>
            {/* ✅ SCHEMA (IMPORTANT FOR GOOGLE) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        name: "KGB Villa Homes",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Visakhapatnam",
                            addressRegion: "Andhra Pradesh",
                            addressCountry: "India",
                        },
                        telephone: "+91-9666597755",
                        url: "https://kgbhotels.com/hotel/beach-view",
                        image: "https://kgbhotels.com/gallery/villa homes/logo.jpeg",
                        priceRange: "₹",
                        description:
                            "Family hotel in Vizag offering homely stay near RTC Complex and Railway Station.",
                    }),
                }}
            />

            <HotelPageLayout
                name="KGB Villa Homes"
                badge="Homely Stay for Families & Tourists"
                badgeIcon="🏡"

                tagline="Best family hotel in Vizag (Visakhapatnam) offering a homely stay experience for families and tourists."

                image="/gallery/villa homes/logo.jpeg"

                phone1="9666597755"
                phone2="8367214304"
                waPhone="9666597755"

                waMsg="Hello! I want to book a family room at KGB Villa Homes Vizag. Please share availability and price."

                stat1={["30+", "Rooms"]}
                stat2={["4.6★", "Guest Rating"]}
                stat3={["24/7", "Check-In"]}
                stat4={["100%", "Homely Stay"]}

                about="KGB Villa Homes is one of the best family hotels in Vizag. Located near RTC Complex and Railway Station, it offers spacious rooms, a homely environment, and all essential amenities — perfect for tourists and family stays in Visakhapatnam."

                keyFeatures={[
                    "Best Family Hotel in Vizag",
                    "Spacious Family Rooms",
                    "24-Hour Check-In",
                    "High-Speed WiFi",
                    "AC Rooms",
                    "Free Parking",
                    "Near RTC Complex & Railway Station",
                ]}

                roomTypes={[
                    {
                        icon: "🛏️",
                        title: "Standard Room",
                        desc: "Affordable room in Vizag for solo travelers and tourists.",
                    },
                    {
                        icon: "🏠",
                        title: "Family Room",
                        desc: "Spacious family room in Vizag — perfect for 3–4 guests.",
                    },
                    {
                        icon: "👨‍👩‍👧‍👦",
                        title: "Large Family Suite",
                        desc: "Best suite for big families visiting Vizag.",
                    },
                    {
                        icon: "🌿",
                        title: "Deluxe Room",
                        desc: "Premium room in Vizag with extra comfort.",
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
                        desc: "Fully air-conditioned rooms in Vizag.",
                    },
                    {
                        icon: "🚗",
                        title: "Free Parking",
                        desc: "Safe parking available.",
                    },
                    {
                        icon: "⚡",
                        title: "Power Backup",
                        desc: "24/7 electricity backup.",
                    },
                ]}

                ctaHeading="Book Your Family Hotel in Vizag Now"
                ctaDesc="Stay at KGB Villa Homes — best homely hotel in Visakhapatnam. Book instantly via WhatsApp."

                photos={[
                    { src: "/gallery/villa homes/front.jpeg", caption: "Hotel Front View Vizag" },
                    { src: "/gallery/villa homes/fo.jpeg", caption: "Reception Area" },
                    { src: "/gallery/villa homes/lobby.jpeg", caption: "Lobby Area" },
                    { src: "/gallery/villa homes/bed 3.jpeg", caption: "Family Room Vizag" },
                    { src: "/gallery/villa homes/wr1.jpeg", caption: "Bathroom" },
                ]}

                mapsLink="https://maps.app.goo.gl/jt8CG54gUyHdtVpT9"

                backHref="/"
            />
        </>
    )
}