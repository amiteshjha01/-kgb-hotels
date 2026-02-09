import OffersClient from "./OffersClient"

/* =========================
   SEO METADATA (SERVER ONLY)
========================= */
export const metadata = {
    title: "Hotel Offers in Visakhapatnam | KGB Hotels Deals & Packages",
    description:
        "Explore exclusive hotel offers in Visakhapatnam from KGB Hotels. Corporate stays, family packages, beach getaways, and limited-time discounts.",
    keywords: [
        "hotel offers in visakhapatnam",
        "kgb hotels offers",
        "corporate hotel deals vizag",
        "family hotel packages visakhapatnam",
        "beach hotel offers vizag",
    ],
}

export default function OffersPage() {
    return <OffersClient />
}
