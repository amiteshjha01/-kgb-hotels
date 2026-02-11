type Props = {
    icon: string
    title: string
    description: string
}

export default function AmenityItem({ icon, title, description }: Props) {
    return (
        <div className="flex gap-5 items-start p-6 rounded-lg bg-white hover:bg-accent/5 transition">
            <div className="text-4xl flex-shrink-0">{icon}</div>
            <div>
                <h4 className="font-bold text-primary mb-2">{title}</h4>
                <p className="text-sm text-text-light leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
