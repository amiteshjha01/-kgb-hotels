type Props = {
    name: string
    role: string
    review: string
}

export default function TestimonialCard({ name, role, review }: Props) {
    return (
        <div className="bg-white border border-border-color rounded-lg p-8 hover:shadow-xl transition-shadow">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                ))}
            </div>

            <p className="text-text-light leading-relaxed mb-6">
                "{review}"
            </p>

            <div className="border-t border-border-color pt-4">
                <h4 className="font-bold text-primary">{name}</h4>
                <p className="text-sm text-accent font-medium">{role}</p>
            </div>
        </div>
    )
}

export default function TestimonialCard({ name, role, review }: Props) {
    return (
        <div className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                “{review}”
            </p>

            <div className="border-t border-yellow-500/10 pt-4">
                <h4 className="font-semibold">{name}</h4>
                <p className="text-xs text-gray-400">{role}</p>
            </div>
        </div>
    )
}
