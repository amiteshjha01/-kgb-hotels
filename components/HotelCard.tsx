import Image from "next/image"
import Link from "next/link"
import { generateWhatsAppLink } from "@/lib/whatsapp"

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
    const whatsappLink = generateWhatsAppLink(title)
    
    return (
        <div className="bg-card-bg border border-border-color rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
                
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
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3 line-clamp-2">
                    {title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-3 sm:line-clamp-none">
                    {description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2 sm:gap-3 mt-auto">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-accent text-white font-bold text-xs sm:text-sm rounded-lg hover:bg-accent-light transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Enquire
                    </a>
                    <Link
                        href={link}
                        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-primary text-primary font-bold text-xs sm:text-sm rounded-lg hover:bg-primary hover:text-white transition-all"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    )
}
