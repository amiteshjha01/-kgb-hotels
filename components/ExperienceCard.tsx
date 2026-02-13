"use client"
type Props = {
    title: string
    description: string
    tag: string
    icon?: React.ReactNode
    gradient?: "blue" | "green" | "purple"
}

export default function ExperienceCard({
    title,
    description,
    tag,
    icon,
    gradient = "blue"
}: Props) {

    const gradients = {
        blue: "from-blue-500 to-cyan-500",
        green: "from-green-500 to-emerald-500",
        purple: "from-purple-500 to-pink-500",
    }

    const iconBgs = {
        blue: "from-blue-50 to-cyan-50",
        green: "from-green-50 to-emerald-50",
        purple: "from-purple-50 to-pink-50",
    }

    const iconColors = {
        blue: "text-blue-600",
        green: "text-green-600",
        purple: "text-purple-600",
    }

    return (
        <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col transform hover:-translate-y-1">

            {/* Gradient Top Border */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[gradient]}`}></div>

            {/* Decorative Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[gradient]} rounded-full blur-2xl`}></div>
            </div>

            <div className="relative p-6 sm:p-8 flex flex-col flex-grow">

                {/* Icon Container */}
                {icon && (
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${iconBgs[gradient]} flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}>
                        <div className={`${iconColors[gradient]} w-7 h-7 sm:w-8 sm:h-8`}>
                            {icon}
                        </div>
                    </div>
                )}

                {/* Tag Badge */}
                <div className="mb-4">
                    <span className={`inline-block text-xs sm:text-sm font-bold text-white bg-gradient-to-r ${gradients[gradient]} px-4 py-2 rounded-full shadow-md`}>
                        {tag}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Bottom Accent Line (appears on hover) */}
            <div className={`h-0.5 bg-gradient-to-r ${gradients[gradient]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
        </div>
    )
}