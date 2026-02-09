export default function FinalCTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black">
            <div className="max-w-7xl mx-auto px-4 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Book Your Stay?
                </h2>

                <p className="max-w-2xl mx-auto mb-8 text-sm md:text-base font-medium">
                    Choose from our premium hotels in Visakhapatnam and enjoy comfort,
                    convenience, and exceptional hospitality.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="https://wa.me/91XXXXXXXXXX"
                        className="px-8 py-3 bg-black text-yellow-400 font-semibold rounded-md hover:bg-black/90 transition"
                    >
                        Book on WhatsApp
                    </a>

                    <a
                        href="tel:+91XXXXXXXXXX"
                        className="px-8 py-3 border-2 border-black text-black font-semibold rounded-md hover:bg-black hover:text-yellow-400 transition"
                    >
                        Call Now
                    </a>
                </div>

            </div>
        </section>
    )
}
