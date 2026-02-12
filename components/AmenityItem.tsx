type Props = {
    icon: string
    title: string
    description: string
}

export default function AmenityItem({ icon, title, description }: Props) {
    return (
        <div className="flex gap-4 items-start p-6 sm:p-8 bg-white border border-border-color">
            <div className="text-2xl flex-shrink-0 text-accent">{icon}</div>
            <div>
                <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">{title}</h4>
                <p className="text-sm text-text-light leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
