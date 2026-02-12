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

            {/* Soft Dark Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-center">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-4 sm:mb-6">
                        Premium Hotels in <span className="text-accent">Visakhapatnam</span>
                    </h1>

                    <p className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                        Discover three thoughtfully designed hotels for corporate stays, family holidays, and leisure escapes.
                    </p>

                    {/* Primary CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://wa.me/919676247755"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-accent text-white font-semibold rounded hover:bg-accent-light"
                        >
                            Enquire Now
                        </a>

                        <a
                            href="tel:+919676247755"
                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-primary"
                        >
                            Call
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
