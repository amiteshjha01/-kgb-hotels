import HotelPageLayout from "@/components/HotelPageLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "KGB Legend Grand Hotel | Budget Friendly Hotel in Visakhapatnam",
    description: "KGB Legend Grand Hotel — quality stays at accessible rates for corporate guests, families & tourists in Vizag. 24hr check-in, WiFi, AC. Book via WhatsApp: 9000907755.",
    keywords: ["KGB Legend Grand Hotel", "budget hotel Visakhapatnam", "affordable hotel Vizag", "family hotel Vizag", "hotel all guest types Vizag"],
}

export default function AllRounderHotelPage() {
    return (
        <HotelPageLayout
            name="KGB Legend Grand"
            badge="Budget Friendly & All-Inclusive"
            badgeIcon="⭐"
            tagline="Quality accommodation at accessible rates — perfect for corporate guests, families and tourists seeking a comfortable and well-located Vizag stay."
            image="/hotels/all-rounder.jpg"
            phone1="9000907755"
            phone2="9666587755"
            waPhone="9000907755"
            waMsg="Hello! I'm interested in staying at KGB Legend Grand Hotel in Visakhapatnam. Could you please share room availability, tariff details, and any special packages currently available? Thank you!"
            stat1={["45", "Rooms"]}
            stat2={["4.5★", "Guest Rating"]}
            stat3={["24/7", "Check-In"]}
            stat4={["All", "Guest Types"]}
            about="KGB Legend Grand is the ideal choice for travelers who seek excellent value without compromising on comfort or service. With 45 thoughtfully designed rooms across multiple categories, the hotel warmly welcomes corporate professionals, family groups, friends, and individual tourists. Centrally located in Visakhapatnam, it provides easy access to key landmarks, markets, and the railway station."
            keyFeatures={[
                "45 Rooms Across Multiple Categories",
                "Corporate & Family Friendly",
                "24-Hour Check-In & Checkout",
                "High-Speed WiFi in All Rooms",
                "AC in All Rooms",
                "Power Backup",
                "Free Parking",
                "Group & Family Packages Available",
            ]}
            roomTypes={[
                { icon: "🛏️", title: "Standard Room", desc: "Clean, well-appointed single rooms with WiFi, AC, and all essential amenities — perfect for solo business travelers or overnight stays." },
                { icon: "🏨", title: "Deluxe Room", desc: "Spacious double rooms with upgraded furnishings, ideal for couples, co-travelers, or guests who prefer extra space and comfort." },
                { icon: "👨‍👩‍👧", title: "Family Room", desc: "Generously sized rooms for families of 3–4 with a warm, welcoming setup and all essential comforts for a memorable stay." },
                { icon: "👑", title: "Premium Suite", desc: "Our best rooms with premium furnishings, large beds, and enhanced amenities — great for celebrating occasions or demanding maximum comfort." },
            ]}
            amenities={[
                { icon: "📶", title: "High-Speed WiFi", desc: "Reliable broadband across all rooms for seamless work and entertainment throughout your stay." },
                { icon: "❄️", title: "Air Conditioning", desc: "Individual climate control in every room ensuring perfect comfort regardless of the season." },
                { icon: "⚡", title: "Power Backup", desc: "24-hour generator backup for uninterrupted comfort — no blackouts, ever." },
                { icon: "🚗", title: "Free Parking", desc: "Secure, complimentary on-site parking for all guests — car or two-wheeler welcome." },
                { icon: "🛎️", title: "Room Service", desc: "Attentive in-room dining and service throughout the day and night." },
                { icon: "🕐", title: "24hr Check-In", desc: "Arrive at any hour — our 24-hour check-in ensures a smooth welcome anytime you land." },
            ]}
            ctaHeading="Plan Your Perfect Vizag Stay"
            ctaDesc="Families, corporates and tourists love KGB Legend Grand for its unbeatable combination of comfort, value, and hospitality. Book via WhatsApp for instant confirmation."
            photos={[
                /* ── LEGEND GRAND SELECTED PHOTOS ──
                   Add your best photos here. Just change the src path and caption.
                   Images go in: public/gallery/all-rounder/
                */
                { src: "/gallery/all-rounder/hotel.jpg", caption: "Hotel Exterior" },
                { src: "/gallery/all-rounder/3.jpg", caption: "Elegant Interiors" },
                { src: "/gallery/all-rounder/bed.avif", caption: "Comfortable Bedroom" },
                // { src: "/gallery/all-rounder/4.jpg", caption: "Family Room" },
                // { src: "/gallery/all-rounder/5.jpg", caption: "Dining Area" },
                // { src: "/gallery/all-rounder/6.jpg", caption: "Reception" },
                // { src: "/gallery/all-rounder/7.jpg", caption: "Parking Area" },
                // { src: "/gallery/all-rounder/8.jpg", caption: "Room View" },
                // { src: "/gallery/all-rounder/9.jpg", caption: "Building Front" },
                // { src: "/gallery/all-rounder/10.jpg", caption: "Night View" },
            ]}
            mapsLink="https://maps.app.goo.gl/BLPF3ahn7erbB4LM9"
            backHref="/"
        />
    )
}
