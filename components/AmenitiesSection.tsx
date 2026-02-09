import AmenityItem from "./AmenityItem"

export default function AmenitiesSection() {
    return (
        <section className="py-20 bg-black border-t border-yellow-500/10">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Amenities at <span className="text-yellow-400">KGB Hotels</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Thoughtfully curated amenities to ensure comfort, convenience,
                        and a seamless stay experience.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-3">

                    <AmenityItem
                        icon="📶"
                        title="High-Speed Wi-Fi"
                        description="Reliable internet connectivity for work, entertainment, and seamless communication."
                    />

                    <AmenityItem
                        icon="🚗"
                        title="Parking Facility"
                        description="Safe and convenient parking space for guests traveling by car."
                    />

                    <AmenityItem
                        icon="🛎️"
                        title="24×7 Front Desk"
                        description="Round-the-clock assistance to ensure a smooth and hassle-free stay."
                    />

                    <AmenityItem
                        icon="🧹"
                        title="Daily Housekeeping"
                        description="Clean, hygienic rooms maintained with professional housekeeping services."
                    />

                    <AmenityItem
                        icon="⚡"
                        title="Power Backup"
                        description="Uninterrupted power supply to ensure comfort at all times."
                    />

                    <AmenityItem
                        icon="📍"
                        title="Prime Locations"
                        description="All hotels are strategically located with easy access to key areas of the city."
                    />

                </div>
            </div>
        </section>
    )
}
