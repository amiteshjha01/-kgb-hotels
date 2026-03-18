"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 60)
        window.addEventListener("scroll", fn)
        return () => window.removeEventListener("scroll", fn)
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [open])

    const close = () => setOpen(false)

    const nav = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/gallery", label: "Gallery" },
        { href: "/offers", label: "Offers" },
        { href: "/contact", label: "Contact" },
    ]

    const hotels = [
        { href: "/hotel/cool-river", name: "KGB Coolriver" },
        { href: "/hotel/all-rounder", name: "KGB Legend Grand" },
        { href: "/hotel/beach-view", name: "KGB Villa Homes" },
    ]

    return (
        <>
            {/* HEADER */}
            <header
                className={`fixed left-0 right-0 z-50 transition ${scrolled
                    ? "bg-navy-950/95 backdrop-blur border-b border-gold-400/10"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4">

                    {/* 🔥 PERFECT CENTER LAYOUT */}
                    <div className="relative flex items-center h-16">

                        {/* LEFT LOGO */}
                        <div className="absolute left-0">
                            <Link href="/">
                                <Image
                                    src="/logo.jpeg"
                                    alt="KGB Hotels"
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>

                        {/* CENTER NAV */}
                        <nav className="hidden lg:flex items-center gap-8 mx-auto">

                            {nav.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`text-sm relative ${pathname === href
                                        ? "text-gold-300"
                                        : "text-white/70 hover:text-gold-300"
                                        }`}
                                >
                                    {label}

                                    {/* underline */}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-[1px] bg-gold-400 transition-all ${pathname === href
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </Link>
                            ))}

                            {/* HOTELS DROPDOWN */}
                            <div className="relative group">
                                <button className="text-white/70 hover:text-gold-300 text-sm">
                                    Our Hotels
                                </button>

                                <div className="absolute top-full left-0 mt-3 w-56 bg-navy-900 border border-gold-400/20 rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                                    {hotels.map((h) => (
                                        <Link
                                            key={h.href}
                                            href={h.href}
                                            className={`block px-4 py-2 text-sm ${pathname === h.href
                                                ? "bg-gold-400/20 text-gold-300"
                                                : "text-white/70 hover:bg-gold-400/10"
                                                }`}
                                        >
                                            {h.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </nav>

                        {/* RIGHT MOBILE BUTTON */}
                        <div className="absolute right-0 lg:hidden">
                            <button onClick={() => setOpen(true)}>☰</button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */}
            <div
                className={`lg:hidden fixed inset-0 z-50 bg-black/60 ${open ? "block" : "hidden"
                    }`}
                onClick={close}
            />

            <div
                className={`lg:hidden fixed top-0 right-0 bottom-0 w-[80%] bg-navy-900 z-50 transition-transform ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-5 flex flex-col gap-3">

                    {nav.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={close}
                            className={`block px-4 py-3 rounded-lg ${pathname === href
                                ? "bg-gold-400/20 text-gold-300"
                                : "text-white/80"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}

                    {/* HOTELS (MOBILE) */}
                    <div className="mt-4 border-t border-white/10 pt-4">
                        <p className="text-white/50 text-xs mb-2">Our Hotels</p>

                        {hotels.map((h) => (
                            <Link
                                key={h.href}
                                href={h.href}
                                onClick={close}
                                className="block px-4 py-2 text-white/70"
                            >
                                {h.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}