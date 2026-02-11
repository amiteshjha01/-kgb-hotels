import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "KGB Hotels | Premium Hospitality in Visakhapatnam",
  description:
    "Discover luxury stays at KGB Hotels - Three premium properties in Visakhapatnam for corporate, family, and leisure travelers. Book directly for the best rates.",
  keywords: "hotels in Visakhapatnam, luxury stays, corporate hotels, beach resort, hospitality",
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
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
