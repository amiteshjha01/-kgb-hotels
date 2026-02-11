export default function FinalCTA() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-light to-secondary text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full -ml-36 -mb-36"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Ready to Experience Luxury?
                </h2>

                <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-white/90 font-light">
                    Book your unforgettable stay at one of our premium hotels in Visakhapatnam. 
                    Choose your perfect destination and secure special rates today.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                    <a
                        href="https://wa.me/919676247755"
                        className="px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Book on WhatsApp
                    </a>

                    <a
                        href="tel:+919676247755"
                        className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition duration-300"
                    >
                        Call: +91 9676 247755
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
