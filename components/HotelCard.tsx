import Image from "next/image"
import Link from "next/link"

type HotelCardProps = {
    title: string
    description: string
    image: string
    link: string
    tag: string
}

export default function HotelCard({
    title,
    description,
    image,
    link,
    tag,
}: HotelCardProps) {
    return (
        <div className="bg-black border border-yellow-500/20 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <div className="relative h-56">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                </span>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                    {description}
                </p>

                <Link
                    href={link}
                    className="inline-block text-yellow-400 font-semibold hover:underline"
                >
                    View Hotel →
                </Link>
            </div>
        </div>
    )
}
