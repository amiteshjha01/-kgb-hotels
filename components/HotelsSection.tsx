"use client"
import HotelCard from "./HotelCard"

export default function HotelsSection() {
    return (
        <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 -right-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    {/* Subtitle Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4 animate-fade-in-up">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        Explore Our Collection
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-fade-in-up animation-delay-200">
                        Our Premium{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-transparent bg-clip-text animate-gradient">
                            Collection
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 animate-fade-in-up animation-delay-400">
                        Three thoughtfully designed hotels, each with its own unique character and purpose—crafted to exceed your expectations and create unforgettable stays.
                    </p>
                </div>

                {/* Hotel Cards Grid */}
                <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-3 auto-rows-fr">

                    <HotelCard
                        title="Cool River Hotel"
                        tag="Corporate Premium"
                        tagColor="blue"
                        image="/hotels/cool-river.png"
                        link="/hotel/cool-river"
                        description="A sophisticated corporate sanctuary offering privacy, comfort, and efficiency—ideal for business travelers and extended stays."
                        features={["Business Center", "High-Speed WiFi", "Conference Rooms"]}
                        phone="9676247755"
                        whatsappPhone="9676247755"
                    />

                    <HotelCard
                        title="Legend Grand Hotel"
                        tag="Family & Leisure"
                        tagColor="green"
                        image="/hotels/all-rounder.jpg"
                        link="/hotel/all-rounder"
                        description="Versatile luxury designed for families and groups, with spacious rooms and comprehensive amenities for every guest."
                        features={["Family Suites", "Swimming Pool", "Kids Play Area"]}
                        phone="9000907755"
                        whatsappPhone="9000907755"
                        featured={true}
                    />

                    <HotelCard
                        title="Villa Homes Hotel"
                        tag="Tourism Focus"
                        tagColor="purple"
                        image="/hotels/beach-view.jpg"
                        link="/hotel/beach-view"
                        description="An exclusive beachfront retreat perfect for couples, tourists, and memorable escapes with limited luxurious rooms."
                        features={["Beach Access", "Luxury Villas", "Spa Services"]}
                        phone="9666597755"
                        whatsappPhone="9666597755"
                    />

                </div>

                {/* Bottom CTA */}
                <div className="mt-12 sm:mt-16 text-center">
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                        Can't decide? Let our team help you find the perfect stay
                    </p>
                    <a
                        href="https://wa.me/919676247755"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Get Personalized Recommendations
                    </a>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }
                
                .animation-delay-200 {
                    animation-delay: 0.2s;
                    animation-fill-mode: both;
                }
                
                .animation-delay-400 {
                    animation-delay: 0.4s;
                    animation-fill-mode: both;
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    )
}