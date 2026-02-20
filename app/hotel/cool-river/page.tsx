import HotelPageLayout from "@/components/HotelPageLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "KGB Coolriver Hotel | Premium Corporate Hotel in Visakhapatnam",
    description: "KGB Coolriver Hotel — premium corporate stay near KA Paul Convention Hall, Ram Nagar, Vizag. 24hr check-in, WiFi, AC, restaurant. Book via WhatsApp: 9676247755.",
    keywords: ["KGB Coolriver Hotel", "corporate hotel Visakhapatnam", "premium hotel Ram Nagar Vizag", "business hotel Vizag", "hotel near KA Paul Hall"],
}

export default function CoolRiverHotelPage() {
    return (
        <HotelPageLayout
            name="KGB Coolriver"
            badge="Corporate Excellence"
            badgeIcon="🏢"
            tagline="Premium corporate hospitality designed for business travelers seeking elegance, efficiency, and exceptional service in the heart of Visakhapatnam."
            image="/hotels/cool-river.png"
            phone1="9676247755"
            phone2="9666787755"
            waPhone="9676247755"
            waMsg="Hello! I came across KGB Coolriver Hotel in Visakhapatnam and I'm very interested in making a booking. Could you please share room availability, tariff details, and any current offers? Thank you!"
            stat1={["24", "Premium Rooms"]}
            stat2={["4.8★", "Guest Rating"]}
            stat3={["24/7", "Support"]}
            stat4={["100%", "Satisfaction"]}
            about="KGB Coolriver Hotel stands as the premier choice for corporate travelers in Visakhapatnam. Located strategically near KA Paul Convention Hall, Ram Nagar — every detail, from soundproofed rooms to high-speed connectivity, is engineered for productivity and comfort. Whether you're attending a conference or an extended business stay, Coolriver delivers an experience that elevates your work and rest."
            keyFeatures={[
                "Executive & Premium Room Categories",
                "Gigabit Wi-Fi & Work Desk",
                "24-Hour Check-In & Checkout",
                "Lift & Elevator Access",
                "In-House Restaurant & Room Service",
                "Free Parking",
                "Power Backup",
                "Early Check-in on Request",
            ]}
            roomTypes={[
                { icon: "🛏️", title: "Premium Room", desc: "Thoughtfully appointed for business professionals. Modern amenities, spacious work desk, ergonomic chair, and premium comfort for extended stays. 350 sq ft. King bed & seating area." },
                { icon: "⭐", title: "Executive Room", desc: "Our finest offering for discerning corporate guests. Spacious, luxurious, with dedicated workspace, lounge area, and premium toiletries & amenities. 450 sq ft. King bed." },
                { icon: "👥", title: "Deluxe Twin", desc: "Perfect for two guests — spacious twin configuration with all executive amenities, premium bedding, and dedicated workspaces for both occupants." },
                { icon: "👑", title: "Suite", desc: "The pinnacle of luxury at Coolriver — expansive suite with a separate living area, premium furnishings, and personalized concierge-level service." },
            ]}
            amenities={[
                { icon: "📶", title: "High-Speed WiFi", desc: "Gigabit fibre connectivity in every room — zero buffering, perfect for video calls and large uploads." },
                { icon: "❄️", title: "Air Conditioning", desc: "Individual room climate control for the perfect working and sleeping temperature." },
                { icon: "🍽️", title: "In-House Restaurant", desc: "Wholesome multi-cuisine meals — breakfast, lunch, and dinner served fresh daily." },
                { icon: "🛎️", title: "24hr Room Service", desc: "Attentive round-the-clock room service — food, refreshments and essentials on demand." },
                { icon: "🛗", title: "Lift / Elevator", desc: "Convenient elevator access across all floors for effortless movement." },
                { icon: "⚡", title: "Power Backup", desc: "24-hour generator backup ensuring uninterrupted comfort and connectivity at all times." },
            ]}
            ctaHeading="Ready to Book Your Corporate Stay?"
            ctaDesc="Secure your room at KGB Coolriver Hotel and experience premium business hospitality in Visakhapatnam. WhatsApp us for instant confirmation."
            photos={[
                { src: "/gallery/cool-river/1.jpg", caption: "Lobby & Reception" },
                { src: "/gallery/cool-river/2.jpg", caption: "Premium Room" },
                { src: "/gallery/cool-river/3.jpg", caption: "Hotel View" },
                { src: "/gallery/cool-river/bed.avif", caption: "Luxury Bedroom" },
            ]}
            mapsLink="https://maps.app.goo.gl/iNkFuPg1n8fTkXKy7"
            backHref="/"
        />
    )
}