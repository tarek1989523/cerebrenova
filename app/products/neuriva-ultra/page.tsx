import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"
import ProductNeurivaUltraHero from "./hero"
import ProductNeurivaUltraDetails from "./details"
import ProductNeurivaUltraCTA from "./cta"

export const metadata = {
  title: "NEURIVA Ultra Brain Supplement — Memory, Focus & Mental Alertness",
  description: "NEURIVA Ultra with Cognivive, Neurofactor, Phosphatidylserine, Folic Acid, Vitamin B12 & B6. Clinically tested cognitive support. 60 capsules.",
}

export default function NeurivaUltraProduct() {
  return (
    <>
      <Navbar />
      <main>
        <ProductNeurivaUltraHero />
        <ProductNeurivaUltraDetails />
        <ProductNeurivaUltraCTA />
      </main>
      <Footer />
    </>
  )
}
