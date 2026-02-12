type Props = {
    title: string
    description: string
    tag: string
}

export default function ExperienceCard({ title, description, tag }: Props) {
    return (
        <div className="bg-white border border-border-color p-6 sm:p-8">
            <span className="inline-block mb-4 text-xs font-semibold text-white bg-accent px-3 py-1.5">
                {tag}
            </span>

            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">{title}</h3>
            <p className="text-sm sm:text-base text-text-light leading-relaxed">
                {description}
            </p>
        </div>
    )
}
