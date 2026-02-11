import Image from "next/image"
import HotelTabs from "@/components/HotelTabs"

export default function BeachViewHotel() {
    return (
        <div className="bg-black">

            <section className="relative h-[70vh]">
                <Image src="/hotels/beach-view.jpg" alt="Beach View Hotel" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold">Beach View Hotel</h1>
                        <p className="mt-4 max-w-xl text-gray-300">
                            A scenic beachside stay designed for couples, tourists, and weekend escapes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <HotelTabs hotelSlug="beach-view" />

                </div>
            </section>

        </div>
    )
}
