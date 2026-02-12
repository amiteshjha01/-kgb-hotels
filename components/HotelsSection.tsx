import HotelCard from "./HotelCard"

export default function HotelsSection() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
                        Our Premium Collection
                    </h2>
                    <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2">
                        Three thoughtfully designed hotels, each with its own unique character and purpose—crafted to exceed your expectations.
                    </p>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-3 auto-rows-fr">

                    <HotelCard
                        title="Cool River Hotel"
                        tag="Corporate Premium"
                        image="/hotels/cool-river.png"
                        link="/hotel/cool-river"
                        description="A sophisticated corporate sanctuary offering privacy, comfort, and efficiency—ideal for business travelers and extended stays."
                    />

                    <HotelCard
                        title="All-Rounder Hotel"
                        tag="Family & Leisure"
                        image="/hotels/all-rounder.jpg"
                        link="/hotel/all-rounder"
                        description="Versatile luxury designed for families and groups, with spacious rooms and comprehensive amenities for every guest."
                    />

                    <HotelCard
                        title="Beach View Hotel"
                        tag="Tourism Focus"
                        image="/hotels/beach-view.jpg"
                        link="/hotel/beach-view"
                        description="An exclusive beachfront retreat perfect for couples, tourists, and memorable escapes with limited luxurious rooms."
                    />

                </div>
            </div>
        </section>
    )
}
