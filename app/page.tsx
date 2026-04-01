import Hero from "@/components/Hero"
import HotelsSection from "@/components/HotelsSection"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      {/* 🔥 SEO (hidden but powerful) */}
      <h1 className="sr-only">
        Best Hotels in Visakhapatnam | Luxury & Budget Stay in Vizag
      </h1>

      <p className="sr-only">
        KGB Hotels offers premium luxury and budget hotel stays in
        Visakhapatnam (Vizag). Located near RTC Complex, Railway Station
        and Ram Nagar with 24-hour check-in and instant WhatsApp booking.
      </p>

      {/* 🎨 UI Sections */}
      <Hero />
      <HotelsSection />

      {/* 🔥 SEO Content Section */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">

        <div className="ornament mb-6">
          <span className="ornament-gem" />
        </div>

        <h2
          className="mb-5"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "#E8EDF3",
          }}
        >
          Best Hotels in{" "}
          <em className="gold-text" style={{ fontStyle: "italic" }}>
            Visakhapatnam
          </em>
        </h2>

        <p
          style={{
            fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
            lineHeight: 1.85,
            color: "rgba(232,237,243,0.6)",
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          KGB Hotels provides luxury and budget accommodations in Visakhapatnam
          (Vizag). Our hotels are located near RTC Complex, Railway Station and
          Ram Nagar, making them ideal for corporate, family and tourist stays.
          Enjoy 24-hour check-in, premium comfort and easy booking via WhatsApp.
        </p>
      </section>

      {/* 🔗 Internal Linking (SEO boost) */}
      <section className="pb-16 text-center px-6">

        <style>{`
          .seo-hotel-link {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.82rem;
            font-weight: 500;
            letter-spacing: 0.08em;
            color: rgba(212,175,55,0.75);
            text-decoration: underline;
            text-underline-offset: 5px;
            transition: color 0.2s ease;
          }
          .seo-hotel-link:hover {
            color: #F0D060;
          }
          .seo-gold-divider {
            width: 80px;
            height: 1px;
            background: linear-gradient(90deg, transparent, #C9A84C, transparent);
            margin: 3rem auto 0;
          }
        `}</style>

        <p
          className="label mb-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <span className="ornament-gem" />
          Explore Our Hotels
          <span className="ornament-gem" />
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {[
            { label: "KGB Coolriver", href: "/hotel/cool-river" },
            { label: "KGB Legend Grand", href: "/hotel/legend-grand" },
            { label: "KGB Villa Homes", href: "/hotel/villa-homes" },
          ].map((h) => (
            <Link
              key={h.href}
              href={h.href}
              title={`${h.label} Hotel in Visakhapatnam`}
              className="seo-hotel-link"
            >
              {h.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {[
            { label: "About Us", href: "/about" },
            { label: "Gallery", href: "/gallery" },
            { label: "Offers", href: "/offers" },
            { label: "Contact", href: "/contact" },
          ].map((p) => (
            <Link
              key={p.href}
              href={p.href}
              title={`${p.label} — KGB Hotels Visakhapatnam`}
              className="seo-hotel-link"
              style={{ fontSize: "0.75rem", color: "rgba(212,175,55,0.55)" }}
            >
              {p.label}
            </Link>
          ))}
        </div>

        <div className="seo-gold-divider" />
      </section>
    </>
  )
}