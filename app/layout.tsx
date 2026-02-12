import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "KGB Hotels Visakhapatnam | Corporate & Luxury Hotel Stays",
  description:
    "Book premium hotels in Visakhapatnam - Cool River (corporate), All-Rounder (family), Beach View (tourism). Direct booking with best rates.",
  keywords: "hotels in Visakhapatnam, corporate hotel Vizag, beach resort Visakhapatnam, luxury stays, hotel booking",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Header />
        <main className="pt-20 pb-24 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
