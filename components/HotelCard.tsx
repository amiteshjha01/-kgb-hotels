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
            <div className="group bg-card-bg border border-border-color rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Tag Badge */}
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-accent text-primary text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg hover:bg-accent-light transition whitespace-nowrap">
                        {tag}
                    </span>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-accent transition line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-text-light text-sm leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-3 sm:line-clamp-none">
                        {description}
                    </p>

                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all mt-auto">
                        <span className="text-sm sm:text-base">Explore</span>
                        <span className="text-lg">→</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
