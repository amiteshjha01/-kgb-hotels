import Link from "next/link"

type Props = {
    items: { label: string; href?: string }[]
}

export default function Breadcrumbs({ items }: Props) {
    return (
        <nav className="text-sm text-text-light mb-8">
            <ul className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        {item.href ? (
                            <Link href={item.href} className="text-primary hover:text-accent transition">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-accent font-semibold">{item.label}</span>
                        )}
                        {index < items.length - 1 && <span className="text-text-light">›</span>}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
