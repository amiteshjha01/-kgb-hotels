"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [hotelOpen, setHotelOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Handle scroll effect for header background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [open])

    const closeMenu = () => {
        setOpen(false)
        setHotelOpen(false)
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-md'
                    : 'bg-white shadow-sm'
                    } border-b border-gray-200`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center flex-shrink-0 transition-transform hover:scale-105 duration-200"
                            onClick={closeMenu}
                        >
                            <Image
                                src="/logo.jpeg"
                                alt="KGB Hotels - Luxury Accommodation"
                                width={140}
                                height={44}
                                priority
                                className="h-9 lg:h-11 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                            <Link
                                href="/"
                                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                            >
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>

                            {/* Hotels Dropdown (Desktop) */}
                            <div className="relative group">
                                <button className="text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1.5 transition-colors duration-200">
                                    Our Hotels
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                    <Link
                                        href="/hotel/cool-river"
                                        className="flex items-center gap-3 px-5 py-4 hover:bg-blue-50 transition-colors duration-200 group/item"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                                            <span className="text-xl">🏞️</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800 text-sm">Cool River Hotel</div>
                                            <div className="text-xs text-gray-500">Riverside Retreat</div>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/hotel/all-rounder"
                                        className="flex items-center gap-3 px-5 py-4 hover:bg-blue-50 border-t border-gray-100 transition-colors duration-200 group/item"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                                            <span className="text-xl">⭐</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800 text-sm">All-Rounder Hotel</div>
                                            <div className="text-xs text-gray-500">Complete Experience</div>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/hotel/beach-view"
                                        className="flex items-center gap-3 px-5 py-4 hover:bg-blue-50 border-t border-gray-100 transition-colors duration-200 group/item"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center group-hover/item:bg-cyan-200 transition-colors">
                                            <span className="text-xl">🏖️</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800 text-sm">Beach View Hotel</div>
                                            <div className="text-xs text-gray-500">Ocean Paradise</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <Link
                                href="/gallery"
                                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                            >
                                Gallery
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link
                                href="/offers"
                                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group flex items-center gap-1"
                            >
                                Offers
                                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">NEW</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                            >
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </nav>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="tel:+919676247755"
                                className="group flex items-center gap-2 px-4 py-2.5 border-2 border-blue-600 text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/919676247755"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-sm rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 flex flex-col gap-1.5">
                                <span className={`h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {open && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeMenu}
                    ></div>
                )}

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed top-[65px] left-0 right-0 bottom-0 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="px-4 py-6 space-y-1 pb-24">

                        <Link
                            onClick={closeMenu}
                            href="/"
                            className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                            🏠 Home
                        </Link>

                        {/* Hotels Dropdown (Mobile) */}
                        <div className="rounded-lg overflow-hidden">
                            <button
                                onClick={() => setHotelOpen(!hotelOpen)}
                                className="w-full px-4 py-3 flex justify-between items-center text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-lg"
                            >
                                <span className="flex items-center gap-2">
                                    🏨 Our Hotels
                                </span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${hotelOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${hotelOpen ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="pl-4 pr-4 pt-2 pb-2 space-y-1">
                                    <Link
                                        onClick={closeMenu}
                                        href="/hotel/cool-river"
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 border-l-4 border-blue-500"
                                    >
                                        <span className="text-2xl">🏞️</span>
                                        <div>
                                            <div className="font-semibold text-gray-800 text-sm">Cool River Hotel</div>
                                            <div className="text-xs text-gray-500">Riverside Retreat</div>
                                        </div>
                                    </Link>
                                    <Link
                                        onClick={closeMenu}
                                        href="/hotel/all-rounder"
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 border-l-4 border-green-500"
                                    >
                                        <span className="text-2xl">⭐</span>
                                        <div>
                                            <div className="font-semibold text-gray-800 text-sm">All-Rounder Hotel</div>
                                            <div className="text-xs text-gray-500">Complete Experience</div>
                                        </div>
                                    </Link>
                                    <Link
                                        onClick={closeMenu}
                                        href="/hotel/beach-view"
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 border-l-4 border-cyan-500"
                                    >
                                        <span className="text-2xl">🏖️</span>
                                        <div>
                                            <div className="font-semibold text-gray-800 text-sm">Beach View Hotel</div>
                                            <div className="text-xs text-gray-500">Ocean Paradise</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            onClick={closeMenu}
                            href="/gallery"
                            className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                            📷 Gallery
                        </Link>
                        <Link
                            onClick={closeMenu}
                            href="/offers"
                            className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center justify-between"
                        >
                            <span>🎁 Offers</span>
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">NEW</span>
                        </Link>
                        <Link
                            onClick={closeMenu}
                            href="/contact"
                            className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                            📧 Contact
                        </Link>

                        {/* Mobile Menu CTA Section */}
                        <div className="pt-6 px-4 space-y-3">
                            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border-2 border-dashed border-blue-200">
                                <div className="text-center mb-3">
                                    <p className="text-sm font-semibold text-gray-800">Ready to Book?</p>
                                    <p className="text-xs text-gray-600 mt-1">Get instant confirmation via WhatsApp or Call</p>
                                </div>
                                <div className="space-y-2">
                                    <a
                                        href="https://wa.me/919676247755"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md active:scale-95"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        WhatsApp Booking
                                    </a>
                                    <a
                                        href="tel:+919676247755"
                                        className="flex items-center justify-center gap-2 w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all duration-200 active:scale-95"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sticky Mobile CTA Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-40 safe-area-bottom">
                <div className="flex gap-2 p-3">
                    <a
                        href="tel:+919676247755"
                        className="flex-1 py-3.5 bg-blue-600 text-white font-bold text-sm text-center rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call
                    </a>
                    <a
                        href="https://wa.me/919676247755"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm text-center rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        WhatsApp
                    </a>
                </div>
            </div>

            {/* Spacer for fixed header */}
            <div className="h-16 lg:h-20"></div>
        </>
    )
}