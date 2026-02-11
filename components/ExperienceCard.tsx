type Props = {
    title: string
    description: string
    tag: string
}

export default function ExperienceCard({ title, description, tag }: Props) {
    return (
        <div className="border-2 border-accent/30 rounded-lg p-8 bg-white hover:border-accent hover:shadow-xl transition-all duration-300">
            <span className="inline-block mb-4 text-xs font-semibold text-white bg-accent px-4 py-2 rounded-full">
                {tag}
            </span>

            <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-text-light leading-relaxed">
                {description}
            </p>
        </div>
    )
}
