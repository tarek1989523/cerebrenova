import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"
import ProductTurmericHero from "./hero"
import ProductTurmericDetails from "./details"
import ProductTurmericCTA from "./cta"

export const metadata = {
  title: "Golden Guard Turmeric Extract — BCM-95® Joint & Cognitive Support",
  description: "Golden Guard Turmeric Extract with BCM-95® Turmeric (500 mg). Natural cell defense supplement for joint health and cognitive support.",
}

export default function TurmericProduct() {
  return (
    <>
      <Navbar />
      <main>
        <ProductTurmericHero />
        <ProductTurmericDetails />
        <ProductTurmericCTA />
      </main>
      <Footer />
    </>
  )
}