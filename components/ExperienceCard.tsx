type Props = {
    title: string
    description: string
    tag: string
}

export default function ExperienceCard({ title, description, tag }: Props) {
    return (
        <div className="border border-yellow-500/20 rounded-xl p-6 bg-black hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <span className="inline-block mb-3 text-xs font-semibold text-black bg-yellow-500 px-3 py-1 rounded-full">
                {tag}
            </span>

            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    )
}
