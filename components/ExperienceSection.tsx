"use client"
import ExperienceCard from "./ExperienceCard"

export default function ExperienceSection() {
    return (
        <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    {/* Subtitle Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-5 animate-fade-in-up shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Tailored for Every Traveler
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight animate-fade-in-up animation-delay-200">
                        Curated{" "}
                        <span className="relative inline-block">
                            <span className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-40"></span>
                            <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
                                Experiences
                            </span>
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 animate-fade-in-up animation-delay-400">
                        Whether you're traveling for business, with family, or seeking a peaceful retreat, our hotels are designed to exceed expectations at every touchpoint.
                    </p>
                </div>

                {/* Experience Cards Grid */}
                <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-3 mb-12 sm:mb-16">

                    <ExperienceCard
                        tag="Corporate Excellence"
                        title="Premium Business Stays"
                        description="Sophisticated rooms, high-speed connectivity, dedicated work spaces, and attentive service to keep you productive and comfortable throughout your stay."
                        gradient="blue"
                        icon={
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        }
                    />

                    <ExperienceCard
                        tag="Family Comfort"
                        title="Spaces for Every Family"
                        description="Thoughtfully designed rooms, comprehensive amenities, and warm hospitality that makes family vacations memorable, stress-free, and filled with joy."
                        gradient="green"
                        icon={
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        }
                    />

                    <ExperienceCard
                        tag="Leisure Escape"
                        title="Coastal Serenity"
                        description="Scenic beauty, tranquil ambiance, and exclusive accommodations perfect for couples, travelers, and weekend retreats seeking unforgettable moments."
                        gradient="purple"
                        icon={
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    />

                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl">

                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">3</div>
                        <div className="text-sm sm:text-base text-white/90 font-medium">Unique Hotels</div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">100+</div>
                        <div className="text-sm sm:text-base text-white/90 font-medium">Premium Rooms</div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
                        <div className="text-sm sm:text-base text-white/90 font-medium">Guest Support</div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">4.8★</div>
                        <div className="text-sm sm:text-base text-white/90 font-medium">Guest Rating</div>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="mt-12 sm:mt-16 text-center">
                    <p className="text-gray-600 text-base sm:text-lg mb-5 font-medium">
                        Ready to experience exceptional hospitality?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://wa.me/919676247755"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Book Your Stay via WhatsApp
                        </a>
                        <a
                            href="tel:+919676247755"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call to Book
                        </a>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(30px, -30px) rotate(5deg); }
                    66% { transform: translate(-20px, 20px) rotate(-5deg); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(-30px, 30px) rotate(-5deg); }
                    66% { transform: translate(20px, -20px) rotate(5deg); }
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
                
                .animate-float {
                    animation: float 20s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 25s ease-in-out infinite;
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
                    animation: gradient 4s ease infinite;
                }
            `}</style>
        </section>
    )
}