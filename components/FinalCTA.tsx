export default function FinalCTA() {
    return (
        <section className="py-12 sm:py-20 md:py-32 bg-primary text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                    Ready to Book Your Stay?
                </h2>

                <p className="max-w-2xl mx-auto mb-6 sm:mb-10 text-base sm:text-lg md:text-xl text-white/90">
                    Get in touch with us today and discover the perfect hotel for your Visakhapatnam visit.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
                    <a
                        href="https://wa.me/919676247755"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 sm:px-10 py-3 sm:py-4 bg-accent text-white font-bold text-sm sm:text-base rounded-lg hover:bg-accent-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Enquire on WhatsApp
                    </a>

                    <a
                        href="tel:+919676247755"
                        className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-white text-white font-bold text-sm sm:text-base rounded-lg hover:bg-white hover:text-primary transition-all"
                    >
                        Call Us
                    </a>
                </div>

                {/* Trust Badge */}
                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">✓</span>
                        <span>Secure Booking</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">✓</span>
                        <span>Best Price Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">✓</span>
                        <span>24/7 Support</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
