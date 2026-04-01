import Image from "next/image"
import Link from "next/link"
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type HotelCardProps = {
    title: string; description: string; image?: string; link: string; tag: string
    tagVariant?: "gold" | "silver" | "emerald"; features?: string[]; phone1?: string
    phone2?: string; whatsappPhone?: string; whatsappMsg?: string; featured?: boolean; guestTypes?: string;
    basePrice?: number; isAvailable?: boolean; offer?: string;
}

const WA_ICON = () => (
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
)

const tagCls = {
    gold: "bg-gradient-to-r from-gold-400 to-gold-300 text-navy-950",
    silver: "bg-gradient-to-r from-slate-500 to-slate-400 text-white",
    emerald: "bg-gradient-to-r from-emerald-600 to-emerald-400 text-white",
}
const emoji = { gold: "🏨", silver: "⭐", emerald: "🏡" }

export default function HotelCard({ title, description, image, link, tag, tagVariant = "gold", features = [], phone1, phone2, whatsappPhone, whatsappMsg, featured = false, guestTypes, basePrice, isAvailable = true, offer }: HotelCardProps) {
    const contactLink = `/contact?hotel=${encodeURIComponent(title)}&targetPhone=${whatsappPhone || "9676247755"}&msg=${encodeURIComponent(whatsappMsg || `Hi, I'd like to enquire about ${title} (Price: ₹${basePrice})`)}`

    return (
        <div className={`luxury-card flex flex-col overflow-hidden group ${featured ? "ring-1 ring-gold-400/25 shadow-[0_0_40px_rgba(212,175,55,0.07)]" : ""} ${!isAvailable ? "grayscale-[0.5] opacity-80" : ""}`}>
            {featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold font-display tracking-wider bg-gradient-to-r from-gold-400 to-gold-300 text-navy-950">
                    ★ FEATURED
                </div>
            )}
            {!isAvailable && (
                <div className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full text-[10px] font-black font-display tracking-widest bg-rose-600 text-white shadow-xl shadow-rose-900/40">
                    SOLD OUT
                </div>
            )}
            {/* Image */}
            <div className="relative h-52 flex-shrink-0 overflow-hidden bg-navy-900">
                {image ? (
                    <Image src={image} alt={title} fill sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
                        <span className="text-5xl mb-2">{emoji[tagVariant]}</span>
                        <span className="font-serif text-sm text-white/50">{title}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold font-display tracking-wider shadow-lg ${tagCls[tagVariant]}`}>{tag}</span>
            </div>
            {/* Content */}
            <div className="flex flex-col flex-grow p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-xl font-semibold text-white group-hover:text-gold-300 transition-colors duration-300">{title}</h3>
                    {basePrice && (
                        <div className="text-right">
                           <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest leading-none mb-1">Starting From</p>
                           <p className="text-gold-300 font-serif text-lg leading-none italic font-bold">₹{basePrice}</p>
                        </div>
                    )}
                </div>
                {guestTypes && <p className="label text-[0.6rem] mb-3">{guestTypes}</p>}
                
                {offer && (
                    <div className="mb-4 bg-gold-400/10 border border-gold-400/20 rounded-xl p-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-navy-950 font-bold text-xs ring-4 ring-gold-400/10 shrink-0">%</div>
                        <p className="text-xs font-bold text-gold-200 leading-snug">{offer}</p>
                    </div>
                )}

                <p className="text-white/50 text-sm leading-relaxed mb-5 flex-grow">{description}</p>
                {features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-gold-400/10">
                        {features.map(f => (
                            <span key={f} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gold-400/6 border border-gold-400/14 text-gold-400/80 font-display">
                                <span className="text-gold-400">✦</span>{f}
                            </span>
                        ))}
                    </div>
                )}
                <div className="space-y-1.5 mb-5">
                    {phone1 && <a href={`tel:+91${phone1}`} className="flex items-center gap-2 text-sm text-white/45 hover:text-gold-300 transition-colors"><span>📞</span>+91 {phone1}</a>}
                    {phone2 && <a href={`tel:+91${phone2}`} className="flex items-center gap-2 text-sm text-white/45 hover:text-gold-300 transition-colors"><span>📞</span>+91 {phone2}</a>}
                </div>
                <div className="space-y-2.5 mt-auto">
                    <Link 
                        href={isAvailable ? contactLink : "#"} 
                        className={cn("wa-btn w-full text-sm py-3", !isAvailable && "opacity-50 cursor-not-allowed grayscale pointer-events-none")}
                    >
                        <WA_ICON /> {isAvailable ? "Book via WhatsApp" : "Currently Unavailable"}
                    </Link>
                    <div className="flex gap-2">
                        {phone1 && (
                            <a href={`tel:+91${phone1}`} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gold-400/30 text-gold-300 text-xs font-bold font-display hover:bg-gold-400/10 transition-all">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                Call
                            </a>
                        )}
                        <Link href={link} className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl border border-white/10 text-white/50 text-xs font-bold font-display hover:border-white/20 hover:text-white transition-all">
                            View Details <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
