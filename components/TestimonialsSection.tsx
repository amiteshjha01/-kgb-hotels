import TestimonialCard from "./TestimonialCard"

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-black border-t border-yellow-500/10">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        What Our Guests Say About <span className="text-yellow-400">KGB Hotels</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Trusted by business travelers, families, and leisure guests across Visakhapatnam.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    <TestimonialCard
                        name="Rajesh Kumar"
                        role="Corporate Traveler"
                        review="Excellent stay experience. Clean rooms, professional staff, and perfect location for business travel."
                    />

                    <TestimonialCard
                        name="Anita Sharma"
                        role="Family Guest"
                        review="Very comfortable stay with my family. Spacious rooms and great service made our trip enjoyable."
                    />

                    <TestimonialCard
                        name="Sandeep Verma"
                        role="Leisure Traveler"
                        review="Loved the calm atmosphere and hospitality. Perfect place to relax after exploring the city."
                    />

                </div>
            </div>
        </section>
    )
}
