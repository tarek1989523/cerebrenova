import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"
import ProductNeurivaHero from "./hero"
import ProductNeurivaDetails from "./details"
import ProductNeurivaCTA from "./cta"

export const metadata = {
  title: "NEURIVA Memory 3D — Brain Supplements for Memory and Focus",
  description: "NEURIVA Memory 3D with Cognicell, Neurofactor, Vitamin B12 & B6, Folic Acid. Clinically tested brain health supplement. 50 count.",
}

export default function NeurivaProduct() {
  return (
    <>
      <Navbar />
      <main>
        <ProductNeurivaHero />
        <ProductNeurivaDetails />
        <ProductNeurivaCTA />
      </main>
      <Footer />
    </>
  )
}
