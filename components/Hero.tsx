import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative h-[90vh] w-full">

            {/* Background Image */}
            <Image
                src="/hero.jfif"
                alt="KGB Hotels Visakhapatnam"
                fill
                priority
                className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4">

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-yellow-400">KGB Hotels</span>
                        <br />
                        Premium Stays in Visakhapatnam
                    </h1>

                    <p className="mt-4 max-w-xl text-gray-200 text-sm md:text-base">
                        Experience comfort, convenience, and premium hospitality across our
                        carefully curated hotels in Visakhapatnam — designed for corporate,
                        family, and leisure travelers.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
                        >
                            Book on WhatsApp
                        </a>

                        <a
                            href="tel:+91XXXXXXXXXX"
                            className="px-6 py-3 border border-yellow-500 text-yellow-400 font-semibold rounded-md hover:bg-yellow-500 hover:text-black transition"
                        >
                            Call Now
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
