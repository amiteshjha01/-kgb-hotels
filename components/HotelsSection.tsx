import HotelCard from "./HotelCard"
import connectDB from "@/lib/mongodb"
import Hotel from "@/lib/models/Hotel"
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export default async function HotelsSection() {
    await connectDB();
    const hotels = await Hotel.find().sort({ name: 1 });

    const getHotelMeta = (name: string) => {
        const n = name.toLowerCase();
        if (n.includes('cool')) return { 
            tag: "Corporate & Premium", 
            variant: "gold" as const,
            features: ["24hr Check-In", "WiFi & AC", "Lift", "Restaurant", "Room Service"],
            phone1: "9676247755",
            phone2: "9666787755",
            guestTypes: "Corporate · Tourist · Couples",
            path: "/hotel/cool-river"
        };
        if (n.includes('legend')) return { 
            tag: "Budget Friendly", 
            variant: "silver" as const,
            features: ["All Guest Types", "WiFi & AC", "Power Backup", "24hr Check-In"],
            phone1: "9000907755",
            phone2: "9666587755",
            guestTypes: "Corporate · Family · Tourist",
            path: "/hotel/legend-grand"
        };
        return { 
            tag: "Homely Stay", 
            variant: "emerald" as const,
            features: ["Family Rooms", "Homely Atmosphere", "WiFi & AC", "Parking"],
            phone1: "9666597755",
            phone2: "8367214304",
            guestTypes: "Families · Tourists",
            path: "/hotel/villa-homes"
        };
    }

    return (
        <section className="relative bg-navy-900 py-24 sm:py-32 overflow-hidden">
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-gold-400/4 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-gold-400/4 blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 sm:mb-20">
                    <p className="label mb-4">Our Properties</p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
                        Our Handpicked Portfolio,{" "}
                        <span className="gold-text" style={{ fontStyle: "italic" }}>
                            Your Premium
                        </span>{" "}
                        Stay
                    </h2>
                    <div className="ornament mx-auto mb-5" style={{ width: "240px" }}>
                        <div className="ornament-gem" />
                    </div>
                    <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore our dynamic inventory across Visakhapatnam. Updated in real-time by our property managers.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {hotels.map((hotel) => {
                        const meta = getHotelMeta(hotel.name);
                        return (
                            <HotelCard
                                key={hotel._id.toString()}
                                title={hotel.name}
                                tag={meta.tag}
                                tagVariant={meta.variant}
                                link={meta.path}
                                featured={meta.variant === 'gold'}
                                image={hotel.imageUrl}
                                description={hotel.description || "Experience authentic hospitality with KGB Hotels."}
                                features={meta.features}
                                phone1={meta.phone1}
                                phone2={meta.phone2}
                                whatsappPhone={meta.phone1}
                                guestTypes={meta.guestTypes}
                                basePrice={hotel.basePrice}
                                isAvailable={hotel.isAvailable}
                                offer={hotel.offer}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}