import TestimonialCard from "./TestimonialCard"

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-background border-t border-border-color">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Guest Stories
                    </h2>
                    <p className="text-lg text-text-light max-w-2xl mx-auto">
                        Trusted by corporate travelers, families, and leisure guests across India and beyond.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    <TestimonialCard
                        name="Rajesh Kumar"
                        role="Business Executive"
                        review="Exceptional experience! The rooms are immaculate, staff is highly professional, and the location is perfect for my business needs."
                    />

                    <TestimonialCard
                        name="Anita Sharma"
                        role="Family Traveler"
                        review="Our family loved every moment. The spacious rooms, friendly service, and excellent amenities made our vacation truly special."
                    />

                    <TestimonialCard
                        name="Sandeep Verma"
                        role="Leisure Guest"
                        review="A perfect escape! The tranquil atmosphere, beachfront beauty, and warm hospitality made this an unforgettable getaway."
                    />

                </div>
            </div>
        </section>
    )
}
