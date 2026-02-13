"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">

            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.jfif"
                    alt="KGB Hotels Visakhapatnam - Premium Luxury Stays"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover scale-105 animate-subtle-zoom"
                    quality={90}
                />
            </div>

            {/* Enhanced Gradient Overlays for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

            {/* Vignette Effect for Focus */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />

            {/* Animated Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className={`max-w-5xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* Premium Badge - Improved Contrast */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full text-white text-sm sm:text-base font-semibold mb-6 sm:mb-8 animate-fade-in shadow-lg">
                        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
                        Now Taking Bookings
                    </div>

                    {/* Main Heading - Better Readability */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6">
                        <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                            Premium Hotels in{" "}
                        </span>
                        <br className="hidden sm:block" />
                        <span className="relative inline-block">
                            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-60"></span>
                            <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 text-transparent bg-clip-text animate-gradient drop-shadow-[0_4px_12px_rgba(59,130,246,0.8)]">
                                Visakhapatnam
                            </span>
                        </span>
                    </h1>

                    {/* Subheading - Enhanced Contrast */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-4 sm:mb-6 leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        Discover three thoughtfully designed hotels for corporate stays, family holidays,<br className="hidden md:block" /> and leisure escapes.
                    </p>

                    {/* Trust Indicators - Improved Visibility */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 text-white text-sm sm:text-base">
                        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="font-semibold drop-shadow-md">4.8 Rating</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold drop-shadow-md">Instant Confirmation</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold drop-shadow-md">Best Price Guarantee</span>
                        </div>
                    </div>

                    {/* Enhanced CTA Buttons with Better Contrast */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-8">
                        <a
                            href="https://wa.me/919676247755"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full sm:w-auto min-w-[240px] px-8 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base sm:text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/60 transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center justify-center gap-3">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Book via WhatsApp
                            </span>
                        </a>

                        <a
                            href="tel:+919676247755"
                            className="group relative w-full sm:w-auto min-w-[240px] px-8 py-4 sm:py-5 bg-white/15 backdrop-blur-md border-3 border-white/80 text-white font-bold text-base sm:text-lg rounded-2xl overflow-hidden shadow-xl hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            <span className="relative flex items-center justify-center gap-3">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Now
                            </span>
                        </a>
                    </div>

                    {/* Special Offer Badge - Enhanced */}
                    <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full text-white text-sm sm:text-base font-bold shadow-2xl animate-bounce-slow border-2 border-white/30">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                        </svg>
                        Limited Time: 20% Off on Advance Bookings
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Improved Design */}
            <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3">
                <div className="text-white/90 text-sm font-medium tracking-wide drop-shadow-lg">Scroll to Explore</div>
                <div className="w-6 h-10 border-2 border-white/80 rounded-full flex items-start justify-center p-2 animate-bounce-slow shadow-lg">
                    <div className="w-1.5 h-2 bg-white rounded-full animate-scroll-dot"></div>
                </div>
            </div>

            {/* Floating Feature Cards - Enhanced Design */}
            <div className="absolute bottom-0 left-0 right-0 z-20 hidden lg:block pb-12">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-3 gap-6 xl:gap-8">
                        {/* Feature 1 */}
                        <div className="group bg-white/15 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-6 xl:p-8 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer shadow-2xl">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-2xl flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-blue-600/40 transition-all shadow-lg">
                                    <svg className="w-7 h-7 xl:w-8 xl:h-8 text-blue-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                {/* <div>
                                    <h3 className="text-white font-bold text-lg xl:text-xl mb-2 drop-shadow-lg">3 Unique Hotels</h3>
                                    <p className="text-white/90 text-sm xl:text-base leading-relaxed drop-shadow-md">From riverside to beachfront, find your perfect stay</p>
                                </div> */}
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group bg-white/15 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-6 xl:p-8 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer shadow-2xl">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-2xl flex items-center justify-center group-hover:from-green-500/40 group-hover:to-green-600/40 transition-all shadow-lg">
                                    <svg className="w-7 h-7 xl:w-8 xl:h-8 text-green-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg xl:text-xl mb-2 drop-shadow-lg">24/7 Support</h3>
                                    <p className="text-white/90 text-sm xl:text-base leading-relaxed drop-shadow-md">Round-the-clock assistance for all your needs</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group bg-white/15 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-6 xl:p-8 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer shadow-2xl">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-2xl flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-purple-600/40 transition-all shadow-lg">
                                    <svg className="w-7 h-7 xl:w-8 xl:h-8 text-purple-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg xl:text-xl mb-2 drop-shadow-lg">Best Price</h3>
                                    <p className="text-white/90 text-sm xl:text-base leading-relaxed drop-shadow-md">Guaranteed lowest rates when you book direct</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes subtle-zoom {
                    0%, 100% { transform: scale(1.05); }
                    50% { transform: scale(1.08); }
                }
                
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }
                
                @keyframes scroll-dot {
                    0% { transform: translateY(0); opacity: 1; }
                    100% { transform: translateY(16px); opacity: 0; }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .animate-subtle-zoom {
                    animation: subtle-zoom 20s ease-in-out infinite;
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 4s ease infinite;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 2.5s ease-in-out infinite;
                }
                
                .animate-scroll-dot {
                    animation: scroll-dot 2s ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </section>
    )
}