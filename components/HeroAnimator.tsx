"use client"

import { useState, useEffect } from "react"

export default function HeroAnimator({ children }: { children: React.ReactNode }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 80)
        return () => clearTimeout(t)
    }, [])

    return (
        <div data-visible={visible ? "true" : "false"}>
            <style>{`
                [data-visible="false"] .hero-fade { opacity: 0; transform: translateY(8px); }
                [data-visible="true"] .hero-fade { opacity: 1; transform: translateY(0); transition: opacity 0.7s ease, transform 0.7s ease; }
                [data-visible="true"] .hero-fade.d1 { transition-delay: 0.1s; }
                [data-visible="true"] .hero-fade.d2 { transition-delay: 0.2s; }
                [data-visible="true"] .hero-fade.d3 { transition-delay: 0.3s; }
                [data-visible="true"] .hero-fade.d4 { transition-delay: 0.4s; }
                [data-visible="true"] .hero-fade.d5 { transition-delay: 0.5s; }
                [data-visible="true"] .hero-fade.d6 { transition-delay: 0.6s; }
            `}</style>
            {children}
        </div>
    )
}
