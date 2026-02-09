type Props = {
    icon: string
    title: string
    description: string
}

export default function AmenityItem({ icon, title, description }: Props) {
    return (
        <div className="flex gap-4 items-start">
            <div className="text-yellow-400 text-2xl">{icon}</div>
            <div>
                <h4 className="font-semibold mb-1">{title}</h4>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    )
}
