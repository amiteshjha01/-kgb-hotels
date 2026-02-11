"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [hotelOpen, setHotelOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
                    <span>KGB Hotels</span>
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

                {/* CTA Buttons (Desktop) */}
                <div className="hidden md:flex gap-3">
                    <a
                        href="https://wa.me/919676247755"
                        className="px-6 py-2 rounded-lg bg-accent text-white font-semibold hover:bg-accent-light transition"
                    >
                        Book Now
                    </a>
                    <a
                        href="tel:+919676247755"
                        className="px-6 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition"
                    >
                        Call
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
                            className="flex-1 text-center py-2 bg-accent text-white rounded-lg font-semibold"
                        >
                            Book
                        </a>
                        <a
                            href="tel:+919676247755"
                            className="flex-1 text-center py-2 border-2 border-primary text-primary rounded-lg"
                        >
                            Call
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
