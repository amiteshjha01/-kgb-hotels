import AmenityItem from "./AmenityItem"

export default function AmenitiesSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-border-color">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        World-Class Amenities
                    </h2>
                    <p className="text-lg text-text-light max-w-2xl mx-auto">
                        Every detail is thoughtfully curated to ensure your comfort, convenience, and unforgettable stay.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    <AmenityItem
                        icon="📶"
                        title="High-Speed Wi-Fi"
                        description="Reliable gigabit internet connectivity for seamless work, streaming, and communication."
                    />

                    <AmenityItem
                        icon="🚗"
                        title="Secure Parking"
                        description="Safe, monitored parking facilities available for all guests."
                    />

                    <AmenityItem
                        icon="🛎️"
                        title="24/7 Concierge"
                        description="Round-the-clock dedicated support for all your needs and inquiries."
                    />

                    <AmenityItem
                        icon="🧹"
                        title="Premium Housekeeping"
                        description="Daily professional cleaning with premium standards and attention to detail."
                    />

                    <AmenityItem
                        icon="⚡"
                        title="Power Backup"
                        description="Uninterrupted electricity supply with backup generators for your peace of mind."
                    />

                    <AmenityItem
                        icon="📍"
                        title="Prime Locations"
                        description="Strategically positioned for easy access to city attractions and business hubs."
                    />

                </div>
            </div>
        </section>
    )
}
