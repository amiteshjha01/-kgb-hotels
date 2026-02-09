import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-black border-t border-yellow-500/20 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">

                {/* Brand */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                        KGB <span className="text-yellow-400">Hotels</span>
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Premium hotels in Visakhapatnam offering comfort, convenience,
                        and exceptional hospitality for corporate, family, and leisure travelers.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                        <li><Link href="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
                        <li><Link href="/offers" className="hover:text-yellow-400">Offers</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Hotels */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Our Hotels</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/hotel/cool-river" className="hover:text-yellow-400">Cool River Hotel</Link></li>
                        <li><Link href="/hotel/all-rounder" className="hover:text-yellow-400">All-Rounder Hotel</Link></li>
                        <li><Link href="/hotel/beach-view" className="hover:text-yellow-400">Beach View Hotel</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Contact</h4>
                    <p className="text-sm mb-2">📍 Visakhapatnam, Andhra Pradesh</p>
                    <p className="text-sm mb-2">📞 +91 XXXXXXXXXX</p>
                    <p className="text-sm mb-4">✉️ reservations@kgbhotels.com</p>

                    <div className="flex gap-3">
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400"
                        >
                            WhatsApp
                        </a>
                        <a
                            href="tel:+91XXXXXXXXXX"
                            className="px-4 py-2 border border-yellow-500 text-yellow-400 rounded-md hover:bg-yellow-500 hover:text-black"
                        >
                            Call
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-yellow-500/10 py-4 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} KGB Hotels. All rights reserved.
            </div>
        </footer>
    )
}
