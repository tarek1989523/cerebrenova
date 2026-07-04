import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"
import ProductNeurivaOriginalHero from "./hero"
import ProductNeurivaOriginalDetails from "./details"
import ProductNeurivaOriginalCTA from "./cta"

export const metadata = {
  title: "NEURIVA Original — Brain Supplements for Memory, Focus & Concentration",
  description: "NEURIVA Original Brain Supplement with Phosphatidylserine and Neurofactor. Clinically tested nootropic. Caffeine free. 28 count capsules.",
}

export default function NeurivaOriginalProduct() {
  return (
    <>
      <Navbar />
      <main>
        <ProductNeurivaOriginalHero />
        <ProductNeurivaOriginalDetails />
        <ProductNeurivaOriginalCTA />
      </main>
      <Footer />
    </>
  )
}
