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
