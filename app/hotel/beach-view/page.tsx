import Image from "next/image"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function BeachViewHotel() {
    return (
        <div className="bg-background">

            <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
                <Image src="/hotels/beach-view.jpg" alt="Beach View Hotel - Luxury Coastal Retreat in Visakhapatnam" fill sizes="100vw" loading="eager" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

                <div className="relative z-10 h-full flex items-end">
                    <div className="max-w-7xl mx-auto px-4 w-full pb-16">
                        <Breadcrumbs 
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Hotels", href: "/" },
                                { label: "Beach View Hotel" }
                            ]} 
                        />

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                            Beach View Hotel
                        </h1>
                        <p className="max-w-2xl text-xl text-white/90 mb-8">
                            An exclusive coastal sanctuary with limited luxurious rooms. Perfect for couples, tourists, and tranquil getaways.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/919676247755"
                                className="px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-light transition shadow-lg"
                            >
                                Reserve Your Suite
                            </a>
                            <a
                                href="tel:+919676247755"
                                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition"
                            >
                                Call: +91 9676 247755
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-border-color">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold text-primary mb-6">Exclusive Coastal Retreat</h2>
                            <p className="text-text-light text-lg leading-relaxed">
                                Only 9 carefully curated rooms overlooking pristine beaches. Designed for those seeking solitude, romance, and natural beauty in an exclusive setting.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white border border-border-color rounded-lg p-6 hover:shadow-lg transition">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">🌊</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-2">9 Rooms</h4>
                                        <p className="text-sm text-text-light">Limited for exclusivity & intimacy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-border-color rounded-lg p-6 hover:shadow-lg transition">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">🏖️</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-2">Beachfront Access</h4>
                                        <p className="text-sm text-text-light">Direct oceanfront location</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent/10 border-2 border-accent rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">Experience Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Sea View Rooms
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Oceanfront Balconies
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Sunset Deck
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Beach Access
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-border-color">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-primary mb-16 text-center">Luxurious Amenities</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "🏖️", title: "Private Beach", desc: "Exclusive beachfront access" },
                            { icon: "🍷", title: "Wine Bar", desc: "Premium beverage selection" },
                            { icon: "💆", title: "Spa & Wellness", desc: "Rejuvenating treatments" },
                            { icon: "🌅", title: "Sunset Lounge", desc: "Panoramic ocean views" },
                            { icon: "🍽️", title: "Seafood Restaurant", desc: "Fine dining by the shore" },
                            { icon: "🎶", title: "Live Entertainment", desc: "Evening performances" },
                        ].map((amenity, i) => (
                            <div key={i} className="bg-white border border-border-color rounded-lg p-8 hover:shadow-lg transition">
                                <div className="text-5xl mb-4">{amenity.icon}</div>
                                <h4 className="text-xl font-bold text-primary mb-2">{amenity.title}</h4>
                                <p className="text-text-light">{amenity.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-secondary to-primary text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Escape to Paradise</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Book your exclusive beachfront experience at Beach View Hotel and create timeless memories by the sea.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919676247755"
                            className="px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition shadow-lg"
                        >
                            Reserve a Room
                        </a>
                        <a
                            href="tel:+919676247755"
                            className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}
