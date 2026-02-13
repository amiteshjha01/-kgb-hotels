"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [hotelOpen, setHotelOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[var(--border-color)] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center flex-shrink-0">
                    <Image
                        src="/logo.jpeg"
                        alt="KGB Hotels Logo"
                        width={120}
                        height={38}
                        priority
                        style={{ width: "auto", height: "auto" }}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-foreground">
                    <Link href="/" className="hover:text-accent transition">
                        Home
                    </Link>

                    {/* Hotels Dropdown (Desktop) */}
                    <div className="relative group">
                        <button className="hover:text-accent flex items-center gap-1 transition">
                            Hotels <span className="text-xs">▾</span>
                        </button>

                        <div className="absolute left-0 top-full mt-2 w-56 bg-card-bg border border-[var(--border-color)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                            <Link
                                href="/hotel/cool-river"
                                className="block px-4 py-3 hover:bg-accent/10 text-foreground"
                            >
                                Cool River Hotel
                            </Link>
                            <Link
                                href="/hotel/all-rounder"
                                className="block px-4 py-3 hover:bg-accent/10 border-t border-[var(--border-color)]"
                            >
                                All-Rounder Hotel
                            </Link>
                            <Link
                                href="/hotel/beach-view"
                                className="block px-4 py-3 hover:bg-accent/10 border-t border-[var(--border-color)]"
                            >
                                Beach View Hotel
                            </Link>
                        </div>
                    </div>

                    <Link href="/gallery" className="hover:text-accent transition">
                        Gallery
                    </Link>
                    <Link href="/offers" className="hover:text-accent transition">
                        Offers
                    </Link>
                    <Link href="/contact" className="hover:text-accent transition">
                        Contact
                    </Link>
                </nav>

                {/* CTA Button (Desktop) */}
                <div className="hidden md:block">
                    <a
                        href="https://wa.me/919676247755"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded hover:bg-accent-light"
                    >
                        Enquire
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-primary text-2xl font-bold"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-[var(--border-color)] px-4 py-4 space-y-4">

                    <Link onClick={() => setOpen(false)} href="/" className="block py-2 hover:text-accent">
                        Home
                    </Link>

                    {/* Hotels Dropdown (Mobile) */}
                    <button
                        onClick={() => setHotelOpen(!hotelOpen)}
                        className="w-full text-left flex justify-between items-center py-2 hover:text-accent"
                    >
                        <span>Hotels</span>
                        <span className="text-xl">{hotelOpen ? "−" : "+"}</span>
                    </button>

                    {hotelOpen && (
                        <div className="pl-4 space-y-2 text-sm border-l-2 border-accent">
                            <Link onClick={() => setOpen(false)} href="/hotel/cool-river" className="block py-2">
                                Cool River Hotel
                            </Link>
                            <Link onClick={() => setOpen(false)} href="/hotel/all-rounder" className="block py-2">
                                All-Rounder Hotel
                            </Link>
                            <Link onClick={() => setOpen(false)} href="/hotel/beach-view" className="block py-2">
                                Beach View Hotel
                            </Link>
                        </div>
                    )}

                    <Link onClick={() => setOpen(false)} href="/gallery" className="block py-2 hover:text-accent">
                        Gallery
                    </Link>
                    <Link onClick={() => setOpen(false)} href="/offers" className="block py-2 hover:text-accent">
                        Offers
                    </Link>
                    <Link onClick={() => setOpen(false)} href="/contact" className="block py-2 hover:text-accent">
                        Contact
                    </Link>

                    {/* CTA Buttons (Mobile) */}
                    <div className="flex gap-3 pt-4 border-t border-[var(--border-color)]">
                        <a
                            href="https://wa.me/919676247755"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2.5 bg-accent text-white rounded-lg font-bold hover:bg-accent-light transition"
                        >
                            Enquire
                        </a>
                        <a
                            href="tel:+919676247755"
                            className="flex-1 text-center py-2.5 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition"
                        >
                            Call
                        </a>
                    </div>
                </div>
            )}

            {/* Sticky Mobile CTA Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--border-color)] shadow-lg z-40">
                <div className="flex gap-2 p-3">
                    <a
                        href="tel:+919676247755"
                        className="flex-1 py-3 bg-primary text-white font-semibold text-sm text-center rounded hover:bg-primary-light"
                    >
                        Call
                    </a>
                    <a
                        href="https://wa.me/919676247755"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 bg-accent text-white font-semibold text-sm text-center rounded hover:bg-accent-light"
                    >
                        Enquire
                    </a>
                </div>
            </div>
        </header>
    )
}
