import Image from "next/image"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function AllRounderHotel() {
    return (
        <div className="bg-background">

            <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
                <Image src="/hotels/all-rounder.jpg" alt="All-Rounder Hotel - Family & Leisure Stays in Visakhapatnam" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

                <div className="relative z-10 h-full flex items-end">
                    <div className="max-w-7xl mx-auto px-4 w-full pb-16">
                        <Breadcrumbs 
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Hotels", href: "/" },
                                { label: "All-Rounder Hotel" }
                            ]} 
                        />

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                            All-Rounder Hotel
                        </h1>
                        <p className="max-w-2xl text-xl text-white/90 mb-8">
                            Versatile comfort for families, friends, and groups. Everything you need for a memorable stay in Visakhapatnam.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/919676247755"
                                className="px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-light transition shadow-lg"
                            >
                                Book Your Room
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
                            <h2 className="text-4xl font-bold text-primary mb-6">Perfect for Everyone</h2>
                            <p className="text-text-light text-lg leading-relaxed">
                                With 45 thoughtfully designed rooms across multiple categories, All-Rounder Hotel welcomes families, corporate groups, friends, and everyone in between.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white border border-border-color rounded-lg p-6 hover:shadow-lg transition">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">👨‍👩‍👧‍👦</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-2">45 Rooms</h4>
                                        <p className="text-sm text-text-light">Diverse options for all group sizes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-border-color rounded-lg p-6 hover:shadow-lg transition">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">🎉</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-2">Group Packages</h4>
                                        <p className="text-sm text-text-light">Special rates & arrangements</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent/10 border-2 border-accent rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">Room Types</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Standard Rooms
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Deluxe Rooms
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Family Rooms
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="text-accent text-xl">✓</span> Premium Suites
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-border-color">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-primary mb-16 text-center">Complete Amenities</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "🏊", title: "Swimming Pool", desc: "Refreshing pool facility for family fun" },
                            { icon: "🧒", title: "Kids Play Area", desc: "Safe & entertaining for children" },
                            { icon: "🍽️", title: "Multi-Cuisine Restaurant", desc: "Diverse dining options" },
                            { icon: "🛎️", title: "Room Service", desc: "24/7 dining convenience" },
                            { icon: "⚡", title: "Power Backup", desc: "Uninterrupted comfort" },
                            { icon: "🅿️", title: "Parking", desc: "Secure vehicle parking" },
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

            <section className="py-24 bg-gradient-to-br from-primary to-primary-light text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Plan Your Family Getaway</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Create unforgettable memories with special group packages and family rates at All-Rounder Hotel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919676247755"
                            className="px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition shadow-lg"
                        >
                            Book Family Package
                        </a>
                        <a
                            href="tel:+919676247755"
                            className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition"
                        >
                            Call for Group Rates
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}
