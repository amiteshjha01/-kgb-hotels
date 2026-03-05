import HotelPageLayout from "@/components/HotelPageLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "KGB Villa Homes | Homely Family Hotel in Visakhapatnam",
    description: "KGB Villa Homes — a warm, home-like retreat for families and tourists in Vizag. Spacious family rooms, free parking, WiFi. Book via WhatsApp: 9666597755.",
    keywords: ["KGB Villa Homes", "family hotel Visakhapatnam", "homely stay Vizag", "tourist hotel Vizag", "villa hotel Visakhapatnam"],
}

export default function BeachViewHotelPage() {
    return (
        <HotelPageLayout
            name="KGB Villa Homes"
            badge="Homely Stay for Families & Tourists"
            badgeIcon="🏡"
            tagline="A warm, home-like retreat in Visakhapatnam — experience authentic hospitality and genuine warmth that makes families and tourists feel truly at home."
            image="/hotels/beach-view.jpg"
            phone1="9666597755"
            phone2="8367214304"
            waPhone="9666597755"
            waMsg="Hello! I'm looking for a comfortable family stay in Visakhapatnam and came across KGB Villa Homes. Could you please share availability, room types, and rates? Thank you!"
            stat1={["30+", "Rooms"]}
            stat2={["4.6★", "Guest Rating"]}
            stat3={["24/7", "Check-In"]}
            stat4={["100%", "Homely Feel"]}
            about="KGB Villa Homes is designed specifically for families and leisure tourists who seek a genuine home-away-from-home experience. Unlike a standard hotel, Villa Homes provides a warm, relaxed atmosphere where guests can truly unwind and feel at ease. Conveniently located in Visakhapatnam near the RTC Complex and Railway Station, it is the perfect base for exploring the city's beaches, temples, and attractions while feeling completely comfortable."
            keyFeatures={[
                "Spacious Family Rooms",
                "Home-Like Atmosphere & Warm Hospitality",
                "24-Hour Check-In & Checkout",
                "High-Speed WiFi",
                "AC in All Rooms",
                "Free Parking",
                "Near RTC Complex & Railway Station",
                "Ideal for Extended Family Stays",
            ]}
            roomTypes={[
                { icon: "🛏️", title: "Standard Room", desc: "Clean, comfortable solo rooms with all essentials — perfect for individual tourists or business travelers on a leisure trip." },
                { icon: "🏠", title: "Family Room", desc: "Spacious rooms with multiple beds and a homely layout — ideal for families of 3–4. Relax like you're at home with all modern comforts." },
                { icon: "👨‍👩‍👧‍👦", title: "Large Family Suite", desc: "Our biggest family accommodation — generously sized with a living area, multiple beds, and premium amenities for large family groups." },
                { icon: "🌿", title: "Deluxe Room", desc: "Upgraded rooms with premium furnishings and enhanced space — perfect for couples or guests seeking a touch more luxury during their stay." },
            ]}
            amenities={[
                { icon: "📶", title: "High-Speed WiFi", desc: "Stay connected with family back home or stream entertainment throughout your stay." },
                { icon: "❄️", title: "Air Conditioning", desc: "Every room fully air-conditioned — cool comfort even in Vizag's warm coastal climate." },
                { icon: "🚗", title: "Free Parking", desc: "Safe, complimentary on-site parking for all guests — cars and two-wheelers welcome." },
                { icon: "⚡", title: "Power Backup", desc: "24-hour backup generator — no interruptions to your family stay, ever." },
                { icon: "🕐", title: "Flexible Check-In", desc: "Arrive at any time — our 24-hour check-in ensures a warm welcome regardless of your travel schedule." },
                { icon: "🛎️", title: "Caring Staff", desc: "Our attentive and friendly staff treat every guest like family — personalized service you won't find elsewhere." },
            ]}
            ctaHeading="Ready for a Home Away From Home?"
            ctaDesc="KGB Villa Homes is the warmest hotel in Vizag — built for families and tourists who want genuine hospitality. Book directly via WhatsApp for instant confirmation and the best rates."
            photos={[
                /* ── VILLA HOMES SELECTED PHOTOS ──
                   Add your best photos here. Just change the src path and caption.
                   Images go in: public/gallery/beach-view/
                */
                { src: "/gallery/beach-view/1.jpg", caption: "Villa Exterior" },
                { src: "/gallery/beach-view/2.jpg", caption: "Scenic Views" },
                { src: "/gallery/beach-view/3.jpg", caption: "Coastal Elegance" },
                { src: "/gallery/beach-view/bed.avif", caption: "Cozy Bedroom" },
                // { src: "/gallery/beach-view/5.jpg", caption: "Family Room" },
                // { src: "/gallery/beach-view/6.jpg", caption: "Garden Area" },
                // { src: "/gallery/beach-view/7.jpg", caption: "Living Room" },
                // { src: "/gallery/beach-view/8.jpg", caption: "Kitchen" },
                // { src: "/gallery/beach-view/9.jpg", caption: "Balcony View" },
                // { src: "/gallery/beach-view/10.jpg", caption: "Night Ambience" },
            ]}
            mapsLink="https://maps.app.goo.gl/jt8CG54gUyHdtVpT9"
            backHref="/"
        />
    )
}
