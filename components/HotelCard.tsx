"use client"
import Image from "next/image"
import Link from "next/link"

type HotelCardProps = {
    title: string
    description: string
    image: string
    link: string
    tag: string
    tagColor?: "blue" | "green" | "purple"
    features?: string[]
    phone?: string
    whatsappPhone?: string
    featured?: boolean
}

export default function HotelCard({
    title,
    description,
    image,
    link,
    tag,
    tagColor = "blue",
    features = [],
    phone,
    whatsappPhone,
    featured = false,
}: HotelCardProps) {

    const tagColors = {
        blue: "bg-gradient-to-r from-blue-500 to-blue-600",
        green: "bg-gradient-to-r from-green-500 to-green-600",
        purple: "bg-gradient-to-r from-purple-500 to-purple-600",
    }

    const whatsappLink = whatsappPhone
        ? `https://wa.me/91${whatsappPhone}?text=Hi, I'm interested in booking at ${title}`
        : `https://wa.me/919676247755?text=Hi, I'm interested in booking at ${title}`

    const callLink = phone ? `tel:+91${phone}` : "tel:+919676247755"

    return (
        <div className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden border border-gray-100 transform hover:-translate-y-2 ${featured ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>

            {/* Featured Badge */}
            {featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                    ⭐ POPULAR
                </div>
            )}

            {/* Image Container */}
            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Tag Badge */}
                <div className={`absolute top-4 left-4 ${tagColors[tagColor]} text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm`}>
                    {tag}
                </div>

                {/* Quick View on Hover */}
                <Link
                    href={link}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"
                >
                    <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                        View Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </Link>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-grow line-clamp-3">
                    {description}
                </p>

                {/* Features List */}
                {features.length > 0 && (
                    <div className="mb-5 pb-5 border-b border-gray-100">
                        <div className="flex flex-wrap gap-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full"
                                >
                                    <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                    {/* WhatsApp Button - Primary */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Book via WhatsApp
                    </a>

                    {/* Secondary Actions */}
                    <div className="flex gap-3">
                        <a
                            href={callLink}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-blue-600 text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call
                        </a>
                        <Link
                            href={link}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-200 transition-all duration-300"
                        >
                            Details
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Phone Number Display */}
                {phone && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="font-medium">+91 {phone}</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Decorative Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className={`absolute -top-10 -right-10 w-20 h-20 ${tagColors[tagColor]} opacity-10 rounded-full transform rotate-45`}></div>
            </div>
        </div>
    )
}
