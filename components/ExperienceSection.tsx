import ExperienceCard from "./ExperienceCard"

export default function ExperienceSection() {
    return (
        <section className="py-20 bg-black border-t border-yellow-500/10">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Crafted Experiences at <span className="text-yellow-400">KGB Hotels</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Whether you are traveling for business, with family, or for a relaxing
                        getaway, our hotels are designed to match your journey.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    <ExperienceCard
                        tag="Corporate Comfort"
                        title="Designed for Business Travelers"
                        description="Quiet rooms, high-speed Wi-Fi, work-friendly spaces, and seamless service — ensuring productivity and comfort throughout your stay."
                    />

                    <ExperienceCard
                        tag="Family Friendly"
                        title="Comfort for Families & Groups"
                        description="Spacious rooms, flexible amenities, and thoughtful services that make family stays relaxed, safe, and enjoyable."
                    />

                    <ExperienceCard
                        tag="Leisure & Tourism"
                        title="Relaxing Stays by the Beach"
                        description="Scenic locations, calm surroundings, and exclusive rooms designed for couples, tourists, and weekend escapes."
                    />

                </div>
            </div>
        </section>
    )
}
