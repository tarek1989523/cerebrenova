import type { Metadata } from "next"
import { Raleway, Lora } from "next/font/google"
import "./globals.css"

const raleway = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

const lora = Lora({
  variable: "--font-geist-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "CerebraNova — Next Generation Brain Formula | Cognitive Support",
  description:
    "CerebraNova: Xerenoos® Citicoline, Bacognize® Bacopa Monnieri & SerinAid® Phosphatidylserine. Premium brain health support. Made in USA.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${lora.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}