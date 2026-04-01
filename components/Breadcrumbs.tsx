import Link from "next/link"

type Props = {
    items: { label: string; href?: string }[]
}

export default function Breadcrumbs({ items }: Props) {
    return (
        <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-white/20 hover:text-white hover:border-white/40 transition-all duration-300"
                            >
                                {index === 0 && (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                )}
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        ) : (
                            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-blue-600 font-bold shadow-lg">
                                {item.label}
                            </span>
                        )}
                        {index < items.length - 1 && (
                            <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}