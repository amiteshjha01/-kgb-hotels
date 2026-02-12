export default function FinalCTA() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-primary text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 leading-tight">
                    Ready to Book Your Stay?
                </h2>

                <p className="max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base text-white/90">
                    Contact us today and find the perfect hotel for your Visakhapatnam visit.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="https://wa.me/919676247755"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-accent text-white font-semibold text-sm sm:text-base hover:bg-accent-light"
                    >
                        Enquire on WhatsApp
                    </a>

                    <a
                        href="tel:+919676247755"
                        className="px-8 py-3 border border-white text-white font-semibold text-sm sm:text-base hover:bg-white hover:text-primary"
                    >
                        Call
                    </a>
                </div>

            </div>
        </section>
    )
}
