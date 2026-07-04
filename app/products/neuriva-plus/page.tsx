import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"
import ProductNeurivaPlusHero from "./hero"
import ProductNeurivaPlusDetails from "./details"
import ProductNeurivaPlusCTA from "./cta"

export const metadata = {
  title: "NEURIVA Plus — Advanced Brain Supplement for Memory, Focus & Cognitive Function",
  description: "NEURIVA Plus Brain Supplement with Neurofactor, Phosphatidylserine, Vitamin B12, B6 & Folic Acid. Clinically tested for 6 indicators of brain health. 30 count.",
}

export default function NeurivaPlusProduct() {
  return (
    <>
      <Navbar />
      <main>
        <ProductNeurivaPlusHero />
        <ProductNeurivaPlusDetails />
        <ProductNeurivaPlusCTA />
      </main>
      <Footer />
    </>
  )
}
