import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 py-20 grid gap-12 md:grid-cols-4">

                {/* Brand & About */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">
                        KGB <span className="text-accent">Hotels</span>
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                        Premium hospitality redefined. Three thoughtfully designed hotels in Visakhapatnam offering exceptional experiences for corporate, family, and leisure travelers.
                    </p>
                    <div className="flex gap-3 mt-6">
                        <a href="https://facebook.com" className="text-accent hover:text-accent-light transition">f</a>
                        <a href="https://twitter.com" className="text-accent hover:text-accent-light transition">𝕏</a>
                        <a href="https://instagram.com" className="text-accent hover:text-accent-light transition">📷</a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-bold text-white mb-6">Navigation</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="text-white/70 hover:text-accent transition">Home</Link></li>
                        <li><Link href="/gallery" className="text-white/70 hover:text-accent transition">Gallery</Link></li>
                        <li><Link href="/offers" className="text-white/70 hover:text-accent transition">Special Offers</Link></li>
                        <li><Link href="/contact" className="text-white/70 hover:text-accent transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Our Hotels */}
                <div>
                    <h4 className="font-bold text-white mb-6">Our Hotels</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/hotel/cool-river" className="text-white/70 hover:text-accent transition">Cool River Hotel</Link></li>
                        <li><Link href="/hotel/all-rounder" className="text-white/70 hover:text-accent transition">All-Rounder Hotel</Link></li>
                        <li><Link href="/hotel/beach-view" className="text-white/70 hover:text-accent transition">Beach View Hotel</Link></li>
                    </ul>
                </div>

                {/* Contact & Booking */}
                <div>
                    <h4 className="font-bold text-white mb-6">Get In Touch</h4>
                    <div className="space-y-3 text-sm mb-6">
                        <p className="text-white/80">📍 Visakhapatnam, Andhra Pradesh</p>
                        <p className="text-white/80">📞 +91 9676 247755</p>
                        <p className="text-white/80">✉️ reservations@kgbhotels.com</p>
                    </div>

                    <div className="flex gap-3">
                        <a
                            href="https://wa.me/919676247755"
                            className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition text-sm"
                        >
                            WhatsApp
                        </a>
                        <a
                            href="tel:+919676247755"
                            className="px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-primary transition text-sm font-semibold"
                        >
                            Call
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
                <p>© {currentYear} KGB Hotels. All rights reserved. | Privacy Policy | Terms & Conditions</p>
            </div>
        </footer>
    )
}
