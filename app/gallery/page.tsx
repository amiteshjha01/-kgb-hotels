import GalleryClient from "./GalleryClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Hotel Gallery in Visakhapatnam | KGB Hotels Photos & Virtual Tours",
    description:
        "Explore stunning photos of KGB Hotels in Visakhapatnam. Browse our gallery featuring Cool River, All-Rounder, and Beach View properties with luxury rooms, interiors, and beachfront views.",
    keywords: [
        "hotel gallery visakhapatnam",
        "kgb hotels photos",
        "cool river hotel images",
        "beach view hotel gallery vizag",
        "luxury hotel pictures visakhapatnam",
        "hotel room photos vizag",
        "kgb hotels virtual tour",
    ],
    openGraph: {
        title: "KGB Hotels Gallery - Luxury Accommodations in Visakhapatnam",
        description: "Browse beautiful photos of our hotels in Visakhapatnam. Cool River, All-Rounder & Beach View properties.",
        type: "website",
        images: ["/gallery/cool-river/1.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "KGB Hotels Gallery | Visakhapatnam",
        description: "Explore luxury hotels in Vizag through our stunning photo gallery",
    },
}

export default function GalleryPage() {
    return <GalleryClient />
}