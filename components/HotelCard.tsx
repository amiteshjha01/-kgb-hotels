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
        <Link href={link}>
            <div className="group bg-card-bg border border-border-color rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Tag Badge */}
                    <span className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-4 py-2.5 rounded-full shadow-lg hover:bg-accent-light transition">
                        {tag}
                    </span>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition">
                        {title}
                    </h3>
                    <p className="text-text-light text-sm mb-6 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                        <span>Explore</span>
                        <span className="text-lg">→</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
