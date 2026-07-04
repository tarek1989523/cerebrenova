import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"
import ProductNeurivaOriginalGummiesHero from "./hero"
import ProductNeurivaOriginalGummiesDetails from "./details"
import ProductNeurivaOriginalGummiesCTA from "./cta"

export const metadata = {
  title: "NEURIVA Original Strawberry Gummies — Brain Health Supplement",
  description: "NEURIVA Original Brain Health Strawberry Gummies with Phosphatidylserine and Neurofactor. Clinically tested nootropic. 50 count.",
}

export default function NeurivaOriginalGummiesProduct() {
  return (
    <>
      <Navbar />
      <main>
        <ProductNeurivaOriginalGummiesHero />
        <ProductNeurivaOriginalGummiesDetails />
        <ProductNeurivaOriginalGummiesCTA />
      </main>
      <Footer />
    </>
  )
}
