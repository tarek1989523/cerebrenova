import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"
import ProductCerefolinHero from "./hero"
import ProductCerefolinDetails from "./details"
import ProductCerefolinCTA from "./cta"

export const metadata = {
  title: "Cerefolin Brain Wellness — Targeted Nutrition for Cognitive Support",
  description: "Cerefolin Brain Wellness with L-Methylfolate, NAC & Vitamin B12. Neurologist recommended brain health supplement. 60 count.",
}

export default function CerefolinProduct() {
  return (
    <>
      <Navbar />
      <main>
        <ProductCerefolinHero />
        <ProductCerefolinDetails />
        <ProductCerefolinCTA />
      </main>
      <Footer />
    </>
  )
}
