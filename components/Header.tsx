"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [hotelOpen, setHotelOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.jpeg"
                        alt="KGB Hotels"
                        width={120}
                        height={40}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

                    <Link href="/" className="hover:text-yellow-400">
                        Home
                    </Link>

                    {/* Hotels Dropdown (Desktop) */}
                    <div className="relative group">
                        <button className="hover:text-yellow-400 flex items-center gap-1">
                            Hotels ▾
                        </button>

                        <div className="absolute left-0 top-full mt-3 w-56 bg-black border border-yellow-500/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                            <Link
                                href="/hotel/cool-river"
                                className="block px-4 py-3 hover:bg-yellow-500 hover:text-black"
                            >
                                Cool River Hotel
                            </Link>
                            <Link
                                href="/hotel/all-rounder"
                                className="block px-4 py-3 hover:bg-yellow-500 hover:text-black"
                            >
                                All-Rounder Hotel
                            </Link>
                            <Link
                                href="/hotel/beach-view"
                                className="block px-4 py-3 hover:bg-yellow-500 hover:text-black"
                            >
                                Beach View Hotel
                            </Link>
                        </div>
                    </div>

                    <Link href="/gallery" className="hover:text-yellow-400">
                        Gallery
                    </Link>
                    <Link href="/offers" className="hover:text-yellow-400">
                        Offers
                    </Link>
                    <Link href="/contact" className="hover:text-yellow-400">
                        Contact
                    </Link>
                </nav>

                {/* CTA Buttons (Desktop) */}
                <div className="hidden md:flex gap-3">
                    <a
                        href="https://wa.me/919676247755"
                        className="px-4 py-2 rounded-md bg-yellow-500 text-black font-semibold hover:bg-yellow-400"
                    >
                        WhatsApp
                    </a>
                    <a
                        href="tel:+919676247755"
                        className="px-4 py-2 rounded-md border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                    >
                        Call
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-yellow-400 text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-black border-t border-yellow-500/20 px-4 py-4 space-y-4">

                    <Link onClick={() => setOpen(false)} href="/">
                        Home
                    </Link>

                    {/* Hotels Dropdown (Mobile) */}
                    <button
                        onClick={() => setHotelOpen(!hotelOpen)}
                        className="w-full text-left flex justify-between items-center"
                    >
                        <span>Hotels</span>
                        <span>{hotelOpen ? "−" : "+"}</span>
                    </button>

                    {hotelOpen && (
                        <div className="pl-4 space-y-2 text-sm">
                            <Link onClick={() => setOpen(false)} href="/hotel/cool-river">
                                Cool River Hotel
                            </Link>
                            <Link onClick={() => setOpen(false)} href="/hotel/all-rounder">
                                All-Rounder Hotel
                            </Link>
                            <Link onClick={() => setOpen(false)} href="/hotel/beach-view">
                                Beach View Hotel
                            </Link>
                        </div>
                    )}

                    <Link onClick={() => setOpen(false)} href="/gallery">
                        Gallery
                    </Link>
                    <Link onClick={() => setOpen(false)} href="/offers">
                        Offers
                    </Link>
                    <Link onClick={() => setOpen(false)} href="/contact">
                        Contact
                    </Link>

                    {/* CTA Buttons (Mobile) */}
                    <div className="flex gap-3 pt-3">
                        <a
                            href="https://wa.me/919676247755"
                            className="flex-1 text-center py-2 bg-yellow-500 text-black rounded-md font-semibold"
                        >
                            WhatsApp
                        </a>
                        <a
                            href="tel:+919676247755"
                            className="flex-1 text-center py-2 border border-yellow-500 text-yellow-500 rounded-md"
                        >
                            Call
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
