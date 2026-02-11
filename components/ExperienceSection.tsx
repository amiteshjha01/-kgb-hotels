import ExperienceCard from "./ExperienceCard"

export default function ExperienceSection() {
    return (
        <section className="py-24 bg-white border-t border-border-color">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Curated Experiences
                    </h2>
                    <p className="text-lg text-text-light max-w-2xl mx-auto">
                        Whether you're traveling for business, with family, or seeking a peaceful retreat, our hotels are designed to exceed expectations.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    <ExperienceCard
                        tag="Corporate Excellence"
                        title="Premium Business Stays"
                        description="Sophisticated rooms, high-speed connectivity, dedicated work spaces, and attentive service to keep you productive and comfortable."
                    />

                    <ExperienceCard
                        tag="Family Comfort"
                        title="Spaces for Every Family"
                        description="Thoughtfully designed rooms, comprehensive amenities, and warm hospitality that makes family vacations memorable and stress-free."
                    />

                    <ExperienceCard
                        tag="Leisure Escape"
                        title="Coastal Serenity"
                        description="Scenic beauty, tranquil ambiance, and exclusive accommodations perfect for couples, travelers, and weekend retreats."
                    />

                </div>
            </div>
        </section>
    )
}
