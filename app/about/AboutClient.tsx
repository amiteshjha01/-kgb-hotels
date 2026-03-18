"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutClient() {
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view")
                    }
                })
            },
            { threshold: 0.12 }
        )
        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const hotels = [
        {
            name: "KGB Coolriver",
            tag: "Corporate & Premium",
            tagVariant: "gold",
            link: "/hotel/cool-river",
            image: "/gallery/cool-river/logo.jpeg",
            description: "Premier hotel near KA Paul Convention Hall, Ram Nagar. The definitive choice for corporate guests, tourists & professionals.",
            features: ["24hr Check-In", "WiFi & AC", "Lift", "Restaurant", "Room Service"],
            guestTypes: "Corporate · Tourist · Couples",
            n: "01",
        },
        {
            name: "KGB Legend Grand",
            tag: "Budget Friendly",
            tagVariant: "silver",
            link: "/hotel/all-rounder",
            image: "/gallery/legend-grand/legend grand.jpeg",
            description: "Quality stays at accessible rates — great amenities and warm hospitality for all types of guests visiting Vizag.",
            features: ["All Guest Types", "WiFi & AC", "Power Backup", "24hr Check-In"],
            guestTypes: "Corporate · Family · Tourist",
            n: "02",
        },
        {
            name: "KGB Villa Homes",
            tag: "Homely Stay",
            tagVariant: "emerald",
            link: "/hotel/beach-view",
            image: "/gallery/villa homes/villa homes.jpeg",
            description: "A warm, home-like retreat for families & tourists. Experience authentic hospitality while exploring beautiful Visakhapatnam.",
            features: ["Family Rooms", "Homely Atmosphere", "WiFi & AC", "Parking"],
            guestTypes: "Families · Tourists",
            n: "03",
        },
    ]

    const tagStyles: Record<string, string> = {
        gold: "border-gold-400/30 text-gold-300 bg-gold-400/08",
        silver: "border-white/20 text-white/70 bg-white/05",
        emerald: "border-emerald-400/30 text-emerald-300 bg-emerald-400/08",
    }

    return (
        <>
            <style>{`
                .reveal {
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
                }
                .reveal.in-view { opacity: 1; transform: translateY(0); }
                .reveal.d1 { transition-delay: 0.1s; }
                .reveal.d2 { transition-delay: 0.2s; }
                .reveal.d3 { transition-delay: 0.3s; }
                .reveal.d4 { transition-delay: 0.4s; }

                /* Hero */
                .hero-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1px solid rgba(212,175,55,0.12);
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    animation: rotateSlow 28s linear infinite;
                    pointer-events: none;
                }
                .hero-ring-2 {
                    animation-direction: reverse;
                    animation-duration: 20s;
                    border-color: rgba(212,175,55,0.07);
                }

                .scroll-line {
                    width: 1px; height: 52px;
                    background: linear-gradient(180deg, #C9A84C 0%, transparent 100%);
                    animation: scrollPulse 2s ease-in-out infinite;
                }
                @keyframes scrollPulse {
                    0%,100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }

                /* Hotel Card */
                .hotel-card {
                    position: relative;
                    border-radius: 1rem;
                    overflow: hidden;
                    background: rgb(13,32,64);
                    border: 1px solid rgba(212,175,55,0.12);
                    transition: border-color 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
                    display: flex;
                    flex-direction: column;
                    text-decoration: none;
                    color: inherit;
                }
                .hotel-card:hover {
                    border-color: rgba(212,175,55,0.35);
                    transform: translateY(-6px);
                    box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.1);
                }
                .hotel-card-img {
                    position: relative;
                    width: 100%;
                    height: 220px;
                    overflow: hidden;
                }
                .hotel-card-img img {
                    transition: transform 0.6s ease;
                }
                .hotel-card:hover .hotel-card-img img {
                    transform: scale(1.06);
                }
                .hotel-card-img::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 40%, rgba(13,32,64,0.95) 100%);
                }

                .hotel-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 3px 12px;
                    border-radius: 999px;
                    border: 1px solid;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 0.62rem;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                }

                .hotel-feature {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 0.75rem;
                    color: rgba(232,237,243,0.55);
                    background: rgba(212,175,55,0.05);
                    border: 1px solid rgba(212,175,55,0.1);
                    border-radius: 0.35rem;
                    padding: 3px 10px;
                }

                .view-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #D4AF37;
                    transition: gap 0.25s ease, color 0.25s ease;
                }
                .hotel-card:hover .view-btn {
                    gap: 10px;
                    color: #F0D060;
                }

                /* Story visual */
                .story-visual {
                    position: relative;
                    aspect-ratio: 4/5;
                    max-height: 500px;
                    width: 100%;
                    border-radius: 1rem;
                    overflow: hidden;
                }
                .story-visual-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 50%, rgba(2,12,27,0.85) 100%);
                    z-index: 1;
                }
                .story-corner {
                    position: absolute;
                    top: 12px; left: 12px;
                    width: 44px; height: 44px;
                    border-top: 2px solid #D4AF37;
                    border-left: 2px solid #D4AF37;
                    z-index: 2;
                    pointer-events: none;
                }
                .story-badge {
                    position: absolute;
                    bottom: 0; right: 0;
                    background: linear-gradient(135deg, #D4AF37, #A8852A);
                    color: #020C1B;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    padding: 0.55rem 1.1rem;
                    border-top-left-radius: 0.5rem;
                    z-index: 2;
                }

                /* Features */
                .features-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }
                @media (max-width: 480px) { .features-grid { grid-template-columns: 1fr; } }

                .feat-card {
                    padding: 1.4rem;
                    border: 1px solid rgba(212,175,55,0.08);
                    border-radius: 0.75rem;
                    background: rgba(13,32,64,0.5);
                    position: relative;
                    overflow: hidden;
                    transition: border-color 0.3s ease, background 0.3s ease;
                }
                .feat-card:hover {
                    border-color: rgba(212,175,55,0.28);
                    background: rgba(13,32,64,0.85);
                }
                .feat-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0;
                    width: 3px; height: 0;
                    background: linear-gradient(180deg, #F0D060, #C9A84C);
                    transition: height 0.35s ease;
                    border-radius: 0 0 2px 2px;
                }
                .feat-card:hover::before { height: 100%; }

                .mission-quote-mark {
                    font-family: 'Cormorant Garamond', Georgia, serif;
                    font-size: 7rem;
                    line-height: 1;
                    color: rgba(212,175,55,0.08);
                    position: absolute;
                    top: -1.5rem; left: -0.5rem;
                    font-style: normal;
                    pointer-events: none;
                }

                .cta-bg {
                    background:
                        radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 70%),
                        rgb(7,21,40);
                }
            `}</style>

            <div style={{ minHeight: '100vh', background: 'rgb(2,12,27)', color: '#E8EDF3' }}>

                {/* ── HERO with real background image ── */}
                <div ref={heroRef} style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

                    {/* Background Image */}
                    <Image
                        src="/gallery/cool-river/logo.jpeg"
                        alt="KGB Hotels Visakhapatnam"
                        fill
                        priority
                        className="object-cover animate-ken-burns"
                        style={{ zIndex: 0 }}
                    />

                    {/* Dark overlays */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(2,12,27,0.75) 0%, rgba(2,12,27,0.55) 40%, rgba(2,12,27,0.85) 100%)' }} />
                    <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse 80% 55% at 50% 40%, rgba(20,46,88,0.4) 0%, transparent 70%)' }} />
                    <div style={{
                        position: 'absolute', inset: 0, zIndex: 1,
                        backgroundImage: 'linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                        maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 0%, transparent 100%)'
                    }} />

                    {/* Rings */}
                    <div className="hero-ring" style={{ width: 'min(680px,88vw)', height: 'min(680px,88vw)', zIndex: 2 }} />
                    <div className="hero-ring hero-ring-2" style={{ width: 'min(500px,68vw)', height: 'min(500px,68vw)', zIndex: 2 }} />

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '2rem', maxWidth: 780 }}>

                        <div className="animate-fade-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <span className="lux-badge">
                                <span className="ornament-gem" />
                                Established in Visakhapatnam
                            </span>
                        </div>

                        <h1 className="animate-fade-up delay-1" style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 'clamp(3rem, 9vw, 6rem)',
                            fontWeight: 300,
                            lineHeight: 1.05,
                            marginBottom: '0.2em'
                        }}>
                            Where Luxury<br />
                            Meets <em className="shimmer-text" style={{ fontStyle: 'italic' }}>Vizag</em>
                        </h1>

                        <div className="animate-fade-up delay-2 ornament" style={{ margin: '1.5rem 0' }}>
                            <span className="ornament-gem" />
                        </div>

                        <p className="animate-fade-up delay-2" style={{
                            fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
                            fontWeight: 300,
                            color: 'rgba(232,237,243,0.75)',
                            lineHeight: 1.75,
                            maxWidth: 520,
                            margin: '0 auto 2.5rem'
                        }}>
                            KGB Hotels redefines hospitality in Visakhapatnam — premium comfort,
                            prime locations and genuine service, for every kind of traveller.
                        </p>

                        <div className="animate-fade-up delay-3" style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(2rem, 6vw, 4rem)', flexWrap: 'wrap' }}>
                            {[{ n: "3+", l: "Properties" }, { n: "24h", l: "Check-in" }, { n: "100%", l: "Guest-first" }].map((s) => (
                                <div key={s.l} style={{ textAlign: 'center' }}>
                                    <div className="gold-text" style={{
                                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                                        fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                                        fontWeight: 400, lineHeight: 1
                                    }}>{s.n}</div>
                                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,237,243,0.45)', marginTop: 5 }}>{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll hint */}
                    <div className="animate-fade-up delay-5" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 3 }}>
                        <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.5)' }}>Discover</span>
                        <div className="scroll-line" />
                    </div>
                </div>

                {/* ── STORY ── */}
                <section style={{ padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem,6vw,4rem)', maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'grid', gap: 'clamp(3rem,6vw,7rem)', alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}>
                        <div>
                            <div className="reveal label" style={{ marginBottom: 12 }}>Our Story</div>
                            <h2 className="reveal d1" style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                                fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem'
                            }}>
                                A Legacy of <em className="gold-text" style={{ fontStyle: 'italic' }}>Genuine</em> Hospitality
                            </h2>
                            <div className="reveal d2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <p style={{ fontSize: 'clamp(0.95rem,1.8vw,1.05rem)', lineHeight: 1.85, color: 'rgba(232,237,243,0.65)' }}>
                                    KGB Hotels was built with a singular vision — to bring world-class hospitality to the heart of Visakhapatnam. Strategically located near RTC Complex, Railway Station and Ram Nagar, our properties serve every kind of guest.
                                </p>
                                <p style={{ fontSize: 'clamp(0.95rem,1.8vw,1.05rem)', lineHeight: 1.85, color: 'rgba(232,237,243,0.65)' }}>
                                    Every detail is crafted with care — immaculate rooms, attentive service, and an atmosphere that makes you feel genuinely at home.
                                </p>
                            </div>
                        </div>

                        {/* Story image — KGB Coolriver */}
                        <div className="reveal d2 story-visual">
                            <Image
                                src="/gallery/cool-river/logo.jpeg"
                                alt="KGB Coolriver Hotel Visakhapatnam"
                                fill
                                className="object-cover"
                            />
                            <div className="story-visual-overlay" />
                            <div className="story-corner" />
                            <div className="story-badge">Vizag's Finest</div>
                        </div>
                    </div>
                </section>

                {/* ── HOTEL CARDS — SEO Internal Links ── */}
                <section style={{ padding: '0 clamp(1.5rem,6vw,4rem) clamp(4rem,10vw,7rem)', maxWidth: 1200, margin: '0 auto' }}>
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(3rem,6vw,5rem)' }}>
                        <div className="label" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                            <span className="ornament-gem" /> Our Collection <span className="ornament-gem" />
                        </div>
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 'clamp(2rem,5vw,3.2rem)',
                            fontWeight: 300, lineHeight: 1.1
                        }}>
                            Three Distinct <em className="gold-text" style={{ fontStyle: 'italic' }}>Experiences</em>
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
                        {hotels.map((hotel, i) => (
                            <Link
                                key={hotel.name}
                                href={hotel.link}
                                className={`reveal d${i + 1} hotel-card`}
                                title={`${hotel.name} - ${hotel.tag} Hotel in Visakhapatnam`}
                            >
                                {/* Image */}
                                <div className="hotel-card-img">
                                    <Image
                                        src={hotel.image}
                                        alt={`${hotel.name} Hotel Visakhapatnam`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>

                                {/* Content */}
                                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>

                                    {/* Tag */}
                                    <div>
                                        <span
                                            className="hotel-tag"
                                            style={{
                                                borderColor: hotel.tagVariant === 'gold' ? 'rgba(212,175,55,0.35)' : hotel.tagVariant === 'emerald' ? 'rgba(52,211,153,0.3)' : 'rgba(255,255,255,0.2)',
                                                color: hotel.tagVariant === 'gold' ? '#E8C97A' : hotel.tagVariant === 'emerald' ? '#6ee7b7' : 'rgba(232,237,243,0.65)',
                                                background: hotel.tagVariant === 'gold' ? 'rgba(212,175,55,0.08)' : hotel.tagVariant === 'emerald' ? 'rgba(52,211,153,0.06)' : 'rgba(255,255,255,0.05)',
                                            }}
                                        >
                                            {hotel.tag}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h3 style={{
                                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                                        fontSize: 'clamp(1.3rem,2.5vw,1.6rem)',
                                        fontWeight: 400,
                                        color: '#E8EDF3',
                                        lineHeight: 1.2
                                    }}>{hotel.name}</h3>

                                    {/* Description */}
                                    <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(232,237,243,0.55)', flex: 1 }}>
                                        {hotel.description}
                                    </p>

                                    {/* Features */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {hotel.features.map((f) => (
                                            <span key={f} className="hotel-feature">✦ {f}</span>
                                        ))}
                                    </div>

                                    {/* Guest types */}
                                    <div style={{ fontSize: '0.72rem', color: 'rgba(212,175,55,0.6)', letterSpacing: '0.08em' }}>
                                        {hotel.guestTypes}
                                    </div>

                                    {/* Divider */}
                                    <div style={{ height: 1, background: 'rgba(212,175,55,0.1)', margin: '0.25rem 0' }} />

                                    {/* CTA */}
                                    <div className="view-btn">
                                        View Hotel
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Hidden SEO links — matching original structure */}
                    <nav aria-label="Explore Our Hotels" style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <p className="label" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                            <span className="ornament-gem" /> Explore Our Hotels <span className="ornament-gem" />
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                            {hotels.map((h) => (
                                <Link
                                    key={h.name}
                                    href={h.link}
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'rgba(212,175,55,0.7)',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: 4,
                                        fontFamily: "'Montserrat', sans-serif",
                                        letterSpacing: '0.05em',
                                        transition: 'color 0.2s'
                                    }}
                                    title={`${h.name} Hotel Visakhapatnam`}
                                >
                                    {h.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </section>

                {/* ── WHY CHOOSE US ── */}
                <div style={{ background: 'rgba(7,21,40,0.8)', borderTop: '1px solid rgba(212,175,55,0.08)', borderBottom: '1px solid rgba(212,175,55,0.08)' }}>
                    <div style={{ padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem,6vw,4rem)', maxWidth: 1200, margin: '0 auto' }}>
                        <div style={{ display: 'grid', gap: 'clamp(3rem,7vw,8rem)', alignItems: 'start', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}>
                            <div>
                                <div className="reveal label" style={{ marginBottom: 12 }}>Why KGB Hotels</div>
                                <h2 className="reveal d1" style={{
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    fontSize: 'clamp(2.2rem,5vw,3.5rem)',
                                    fontWeight: 300, lineHeight: 1.1, marginBottom: '1rem'
                                }}>
                                    Built Around <em className="gold-text" style={{ fontStyle: 'italic' }}>You</em>
                                </h2>
                                <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(232,237,243,0.6)' }}>
                                    Every policy, every amenity, every interaction at KGB Hotels is shaped by one goal — your complete satisfaction.
                                </p>
                            </div>
                            <div className="reveal d2 features-grid">
                                {[
                                    { icon: "🕐", title: "24h Check-in", desc: "Arrive any time. We're always ready." },
                                    { icon: "📍", title: "Prime Locations", desc: "Near RTC, Railway Station & Ram Nagar." },
                                    { icon: "💎", title: "All Budgets", desc: "Luxury suites to smart budget rooms." },
                                    { icon: "💬", title: "WhatsApp Booking", desc: "Instant booking, no forms, no hassle." },
                                    { icon: "✨", title: "Spotless Rooms", desc: "Rigorous cleanliness, every single time." },
                                    { icon: "🤝", title: "Personal Service", desc: "Staff who genuinely care about you." },
                                ].map((f) => (
                                    <div key={f.title} className="feat-card">
                                        <div style={{ fontSize: '1.35rem', marginBottom: '0.7rem' }}>{f.icon}</div>
                                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#E8EDF3', marginBottom: '0.35rem' }}>{f.title}</div>
                                        <div style={{ fontSize: '0.82rem', color: 'rgba(232,237,243,0.45)', lineHeight: 1.6 }}>{f.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── MISSION ── */}
                <section style={{ padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem,6vw,4rem)', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
                    <div className="reveal">
                        <div className="label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: '2.5rem' }}>
                            <span className="ornament-gem" /> Our Mission <span className="ornament-gem" />
                        </div>
                    </div>
                    <div className="reveal d1" style={{ position: 'relative', display: 'inline-block' }}>
                        <span className="mission-quote-mark">"</span>
                        <p style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 'clamp(1.6rem,4vw,2.8rem)',
                            fontWeight: 300, fontStyle: 'italic',
                            lineHeight: 1.4, color: '#E8EDF3',
                            maxWidth: 740, marginBottom: '2rem',
                            position: 'relative', zIndex: 1
                        }}>
                            To make every guest feel genuinely at home — through comfort,
                            affordability, and service that goes beyond expectation.
                        </p>
                    </div>
                    <p className="reveal d2" style={{
                        fontSize: 'clamp(0.95rem,1.8vw,1.05rem)',
                        lineHeight: 1.85, color: 'rgba(232,237,243,0.55)',
                        maxWidth: 580, margin: '0 auto'
                    }}>
                        We are committed to continuously raising the standard of hospitality in Visakhapatnam.
                        Whether you are here for a night or a month, our promise remains the same — an experience
                        that stays with you long after you leave.
                    </p>
                </section>

                {/* ── CTA ── */}
                <div className="cta-bg" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
                    <div style={{ padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem,6vw,4rem)', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
                        <div className="reveal ornament" style={{ marginBottom: '1.5rem' }}>
                            <span className="ornament-gem" />
                        </div>
                        <h2 className="reveal d1" style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 'clamp(2.4rem,6vw,3.8rem)',
                            fontWeight: 300, lineHeight: 1.1, marginBottom: '1rem'
                        }}>
                            Your <em className="shimmer-text" style={{ fontStyle: 'italic' }}>Perfect Stay</em><br />
                            Awaits in Vizag
                        </h2>
                        <p className="reveal d2" style={{
                            fontSize: '1rem', color: 'rgba(232,237,243,0.55)',
                            marginBottom: '2.5rem', lineHeight: 1.75
                        }}>
                            Book instantly via WhatsApp and secure your room at any KGB Hotels property.
                            Our team is available around the clock.
                        </p>
                        <div className="reveal d3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                            <a href="https://wa.me/919676247755" className="wa-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.858L.057 23.714a.5.5 0 0 0 .614.638l6.077-1.595A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.628-.5-5.147-1.374l-.369-.214-3.827 1.004 1.02-3.726-.228-.371A9.974 9.974 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                                </svg>
                                Book via WhatsApp
                            </a>
                            <a href="tel:+919676247755" className="gold-btn">Call Us</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}