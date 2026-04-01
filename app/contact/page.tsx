import type { Metadata } from "next"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
    title: "Contact KGB Hotels Visakhapatnam | Book Now, Enquiry & Directions",
    description:
        "Contact KGB Hotels in Visakhapatnam for bookings, corporate stays, family trips, or custom hotel packages. Call, WhatsApp, or send an enquiry — we're available 24/7.",
    keywords: [
        "contact kgb hotels",
        "hotel booking visakhapatnam",
        "kgb hotels phone number",
        "hotels near me vizag",
        "hotel enquiry visakhapatnam",
    ],
    openGraph: {
        title: "Contact & Book | KGB Hotels Visakhapatnam",
        description: "Get in touch with KGB Hotels for bookings and enquiries. Available 24/7 via phone, WhatsApp, and email.",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Contact KGB Hotels Visakhapatnam",
        description: "Book your stay or send an enquiry to KGB Hotels in Visakhapatnam.",
    },
    alternates: {
        canonical: "https://kgbhotels.com/contact",
    },
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-navy-950">

            {/* ══ HERO — Server Rendered for SEO ══ */}
            <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 text-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-400/8 rounded-full blur-3xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <span className="lux-badge mb-7 inline-flex">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        We respond within minutes
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
                        Contact &amp; <span className="shimmer-text" style={{ fontStyle: "italic" }}>Book</span>
                    </h1>
                    <div className="ornament mx-auto mb-6" style={{ width: "220px" }}><div className="ornament-gem" /></div>
                    <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Fill in the form below — on submit, WhatsApp opens instantly with your enquiry pre-written and ready to send.
                    </p>
                </div>
            </div>

            {/* ══ Interactive Form — Client Component ══ */}
            <ContactForm />

            {/* ══ JSON-LD Structured Data — Server Rendered ══ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        name: "KGB Hotels",
                        url: "https://kgbhotels.com",
                        telephone: "+91-9676247755",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Near KA Paul Convention Hall, Ram Nagar",
                            addressLocality: "Visakhapatnam",
                            addressRegion: "Andhra Pradesh",
                            addressCountry: "IN",
                        },
                        contactPoint: [
                            {
                                "@type": "ContactPoint",
                                telephone: "+91-9676247755",
                                contactType: "reservations",
                                availableLanguage: ["English", "Hindi", "Telugu"],
                            },
                            {
                                "@type": "ContactPoint",
                                telephone: "+91-9000907755",
                                contactType: "reservations",
                            },
                            {
                                "@type": "ContactPoint",
                                telephone: "+91-9666597755",
                                contactType: "reservations",
                            },
                        ],
                    }),
                }}
            />
        </div>
    )
}