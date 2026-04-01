type AmenityItemProps = {
    icon: string
    title: string
    description: string
}

export default function AmenityItem({ icon, title, description }: AmenityItemProps) {
    return (
        <div className="group glass-card rounded-2xl p-6 hover-lift hover:border-[#C9A84C]/30 transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-2xl group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                    {icon}
                </div>
                <div>
                    <h3 className="font-semibold text-white text-base mb-1.5 group-hover:text-[#C9A84C] transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
