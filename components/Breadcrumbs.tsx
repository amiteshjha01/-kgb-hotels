import Link from "next/link"

type Props = {
    items: { label: string; href?: string }[]
}

export default function Breadcrumbs({ items }: Props) {
    return (
        <nav className="text-sm text-gray-400 mb-6">
            <ul className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        {item.href ? (
                            <Link href={item.href} className="hover:text-yellow-400">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-yellow-400">{item.label}</span>
                        )}
                        {index < items.length - 1 && <span>›</span>}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
