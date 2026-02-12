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
        <div className="bg-card-bg border border-border-color overflow-hidden hover:shadow-lg h-full flex flex-col">
                
            {/* Image Container */}
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                />
                
                {/* Tag Badge */}
                <span className="absolute top-4 left-4 bg-accent text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2">
                    {tag}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 line-clamp-2">
                    {title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-5 flex-grow">
                    {description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-accent text-white font-semibold text-xs sm:text-sm text-center hover:bg-accent-light"
                    >
                        Enquire
                    </a>
                    <Link
                        href={link}
                        className="flex-1 px-4 py-2.5 border border-primary text-primary font-semibold text-xs sm:text-sm text-center hover:bg-primary hover:text-white"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
