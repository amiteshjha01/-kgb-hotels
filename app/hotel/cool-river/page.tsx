import Image from "next/image"

export default function CoolRiverHotel() {
    return (
        <div className="bg-black">

            {/* Hero */}
            <section className="relative h-[70vh]">
                <Image
                    src="/hotels/cool-river.png"
                    alt="Cool River Hotel Visakhapatnam"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Cool River Hotel
                        </h1>
                        <p className="mt-4 max-w-xl text-gray-300">
                            A premium corporate hotel in Visakhapatnam designed for business
                            travelers seeking comfort, privacy, and efficiency.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://wa.me/91XXXXXXXXXX"
                                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md"
                            >
                                Enquire on WhatsApp
                            </a>
                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-md"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Corporate Comfort Redefined
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Cool River Hotel is thoughtfully designed for corporate travelers
                            and long stays. From quiet workspaces to premium services, every
                            detail ensures a productive and comfortable stay in Visakhapatnam.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <p>✔ Executive Rooms</p>
                        <p>✔ High-Speed Wi-Fi</p>
                        <p>✔ Power Backup</p>
                        <p>✔ Airport Transfers</p>
                        <p>✔ Early Check-in</p>
                        <p>✔ 24×7 Support</p>
                    </div>
                </div>
            </section>

            {/* Rooms */}
            <section className="py-16 border-t border-yellow-500/10">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Rooms & Suites</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border border-yellow-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-2">Premium Room</h3>
                            <p className="text-sm text-gray-300 mb-4">
                                Ideal for solo business travelers with modern amenities and
                                a comfortable workspace.
                            </p>
                            <a href="https://wa.me/91XXXXXXXXXX" className="text-yellow-400 font-semibold">
                                Check Availability →
                            </a>
                        </div>

                        <div className="border border-yellow-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-2">Executive Room</h3>
                            <p className="text-sm text-gray-300 mb-4">
                                Spacious rooms with enhanced comfort for long corporate stays.
                            </p>
                            <a href="https://wa.me/91XXXXXXXXXX" className="text-yellow-400 font-semibold">
                                Check Availability →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
