"use client"
import HotelCard from "./HotelCard"

export default function HotelsSection() {
    return (
        <section className="relative bg-navy-900 py-24 sm:py-32 overflow-hidden">
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-gold-400/4 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-gold-400/4 blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 sm:mb-20">
                    <p className="label mb-4">Our Properties</p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
                        Three Distinct Hotels,{" "}
                        <span className="gold-text" style={{ fontStyle: "italic" }}>One Exceptional</span> Standard
                    </h2>
                    <div className="ornament mx-auto mb-5" style={{ width: "240px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Each property crafted for your unique travel need — corporate efficiency, family warmth, or budget comfort — all in the heart of Visakhapatnam.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    <HotelCard title="KGB Coolriver" tag="Corporate & Premium" tagVariant="gold"
                        link="/hotel/cool-river" featured
                        description="Premier hotel near KA Paul Convention Hall, Ram Nagar. The definitive choice for corporate guests, tourists & professionals."
                        features={["24hr Check-In", "WiFi & AC", "Lift", "Restaurant", "Room Service"]}
                        phone1="9676247755" phone2="9666787755" whatsappPhone="9676247755"
                        whatsappMsg="Hello! I came across KGB Coolriver Hotel and I'm interested in making a booking. Could you please share room availability, rates, and any current offers? Thank you!"
                        guestTypes="Corporate · Tourist · Couples" />
                    <HotelCard title="KGB Legend Grand" tag="Budget Friendly" tagVariant="silver"
                        link="/hotel/all-rounder"
                        description="Quality stays at accessible rates — great amenities and warm hospitality for all types of guests visiting Vizag."
                        features={["All Guest Types", "WiFi & AC", "Power Backup", "24hr Check-In"]}
                        phone1="9000907755" phone2="9666587755" whatsappPhone="9000907755"
                        whatsappMsg="Hello! I'm interested in staying at KGB Legend Grand Hotel. Could you please share room availability, tariff details, and any special packages? Thank you!"
                        guestTypes="Corporate · Family · Tourist" />
                    <HotelCard title="KGB Villa Homes" tag="Homely Stay" tagVariant="emerald"
                        link="/hotel/beach-view"
                        description="A warm, home-like retreat for families & tourists. Experience authentic hospitality while exploring beautiful Visakhapatnam."
                        features={["Family Rooms", "Homely Atmosphere", "WiFi & AC", "Parking"]}
                        phone1="9666597755" phone2="8367214304" whatsappPhone="9666597755"
                        whatsappMsg="Hello! I'm looking for a comfortable family stay and came across KGB Villa Homes. Could you please share availability, room types, and rates? Thank you!"
                        guestTypes="Families · Tourists" />
                </div>
                <div className="mt-12 text-center">
                    <p className="text-white/40 text-sm mb-4 font-display">Not sure which property suits you?</p>
                    <a href={`https://wa.me/919676247755?text=${encodeURIComponent("Hello! I need some help choosing the right KGB Hotel for my stay in Visakhapatnam. Could you guide me based on my requirements? Thank you!")}`}
                        target="_blank" rel="noopener noreferrer" className="wa-btn inline-flex text-sm px-6 py-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Ask Us on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}