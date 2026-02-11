import Image from "next/image"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function CoolRiverHotel() {
    return (
        <div className="bg-background">

            {/* Hero Section */}
            <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
                <Image
                    src="/hotels/cool-river.png"
                    alt="Cool River Hotel - Premium Corporate Stay in Visakhapatnam"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

                <div className="relative z-10 h-full flex items-end">
                    <div className="max-w-7xl mx-auto px-4 w-full pb-16">
                        <Breadcrumbs 
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Hotels", href: "/" },
                                { label: "Cool River Hotel" }
                            ]} 
                        />

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                            Cool River Hotel
                        </h1>
                        <p className="max-w-2xl text-xl text-white/90 mb-8">
                            Premium corporate hospitality designed for business travelers seeking elegance, efficiency, and exceptional service.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/919676247755"
                                className="px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-light transition shadow-lg"
                            >
                                Enquire on WhatsApp
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

            {/* Overview Section */}
            <section className="py-24 border-b border-border-color">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold text-primary mb-6">
                                Designed for Business
                            </h2>
                            <p className="text-text-light text-lg leading-relaxed">
                                Cool River Hotel stands as the premier choice for corporate travelers. Every detail—from soundproofed rooms to high-speed connectivity—is engineered for productivity and comfort.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white border border-border-color rounded-lg p-6 hover:shadow-lg transition">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">🏢</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-2">24 Rooms</h4>
                                        <p className="text-sm text-text-light">Carefully designed for executive comfort</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-border-color rounded-lg p-6 hover:shadow-lg transition">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">📍</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-2">Prime Location</h4>
                                        <p className="text-sm text-text-light">Strategic business hub access</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent/10 border-2 border-accent rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">Key Features</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Executive Room Categories
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Gigabit Wi-Fi & Work Desk
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Airport Transfers
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Early Check-in Available
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Power Backup & 24/7 Support
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rooms Section */}
            <section className="py-24 border-b border-border-color">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-primary mb-16 text-center">Rooms & Suites</h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white border border-border-color rounded-lg overflow-hidden hover:shadow-xl transition">
                            <div className="h-64 bg-gray-200 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                    <span className="text-6xl">🛏️</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-primary mb-3">Premium Room</h3>
                                <p className="text-text-light mb-6 leading-relaxed">
                                    Thoughtfully appointed for business professionals. Modern amenities, spacious work desk, and premium comfort for extended stays.
                                </p>
                                <div className="space-y-2 mb-6 text-sm text-foreground">
                                    <p>✓ 350 sq ft</p>
                                    <p>✓ King bed & seating area</p>
                                    <p>✓ Work desk with ergonomic chair</p>
                                    <p>✓ Premium bedding & toiletries</p>
                                </div>
                                <a 
                                    href="https://wa.me/919676247755" 
                                    className="inline-block px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-light transition"
                                >
                                    Check Availability
                                </a>
                            </div>
                        </div>

                        <div className="bg-white border border-border-color rounded-lg overflow-hidden hover:shadow-xl transition">
                            <div className="h-64 bg-gray-200 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                    <span className="text-6xl">⭐</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-primary mb-3">Executive Room</h3>
                                <p className="text-text-light mb-6 leading-relaxed">
                                    Our finest offering for discerning corporate guests. Spacious, luxurious, with dedicated workspace and premium hospitality.
                                </p>
                                <div className="space-y-2 mb-6 text-sm text-foreground">
                                    <p>✓ 450 sq ft</p>
                                    <p>✓ King bed with lounge area</p>
                                    <p>✓ Executive workspace</p>
                                    <p>✓ Luxury toiletries & amenities</p>
                                </div>
                                <a 
                                    href="https://wa.me/919676247755" 
                                    className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-primary mb-16 text-center">Amenities & Services</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "📶", title: "High-Speed Wi-Fi", desc: "Reliable gigabit connectivity throughout" },
                            { icon: "🚗", title: "Airport Transfers", desc: "Convenient pickup & drop service" },
                            { icon: "🏋️", title: "Fitness Center", desc: "Equipped with modern workout equipment" },
                            { icon: "🍽️", title: "Fine Dining", desc: "In-house restaurant & room service" },
                            { icon: "🛎️", title: "Concierge Service", desc: "24/7 dedicated guest assistance" },
                            { icon: "⚡", title: "Power Backup", desc: "Uninterrupted electricity supply" },
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

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary to-primary-light text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Corporate Stay?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Secure your room at Cool River Hotel and experience premium business hospitality in Visakhapatnam.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919676247755"
                            className="px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition shadow-lg"
                        >
                            Reserve on WhatsApp
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
