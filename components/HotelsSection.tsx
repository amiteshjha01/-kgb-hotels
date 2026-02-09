import HotelCard from "./HotelCard"

export default function HotelsSection() {
    return (
        <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our Hotels in <span className="text-yellow-400">Visakhapatnam</span>
                    </h2>
                    <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Three thoughtfully designed hotels, each tailored to suit different
                        travel needs — from business stays to relaxing beach getaways.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    <HotelCard
                        title="Cool River Hotel"
                        tag="Corporate Premium"
                        image="/hotels/cool-river.png"
                        link="/hotel/cool-river"
                        description="A premium corporate hotel offering privacy, comfort, and efficiency — ideal for business travelers and long stays."
                    />

                    <HotelCard
                        title="All-Rounder Hotel"
                        tag="Family & Leisure"
                        image="/hotels/all-rounder.jpg"
                        link="/hotel/all-rounder"
                        description="Designed for families, groups, and mixed travelers, offering spacious rooms and versatile amenities."
                    />

                    <HotelCard
                        title="Beach View Hotel"
                        tag="Tourism Focus"
                        image="/hotels/beach-view.jpg"
                        link="/hotel/beach-view"
                        description="A scenic beachfront property perfect for couples, tourists, and weekend escapes with limited exclusive rooms."
                    />

                </div>
            </div>
        </section>
    )
}
