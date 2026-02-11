import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">

            {/* Background Image */}
            <Image
                src="/hero.jfif"
                alt="KGB Hotels Visakhapatnam - Premium Luxury Stays"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Elegant Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
                <div className="max-w-4xl text-center">

                    {/* Badge */}
                    <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full">
                        <span className="text-white text-sm font-medium">Experience Premium Hospitality</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                        Luxury Stays in <span className="text-accent">Visakhapatnam</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Discover three thoughtfully designed hotels, each crafted for unique travel needs—from premium corporate stays to serene beach escapes.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919676247755"
                            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Book Your Stay
                        </a>

                        <a
                            href="tel:+919676247755"
                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition duration-300"
                        >
                            Call: +91 9676 247755
                        </a>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">3</div>
                            <div className="text-white/80 text-sm">Premium Hotels</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">78</div>
                            <div className="text-white/80 text-sm">Rooms</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">25+</div>
                            <div className="text-white/80 text-sm">Years Legacy</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}
