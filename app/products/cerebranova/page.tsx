import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"
import ProductCerebraNovaHero from "./hero"
import ProductCerebraNovaDetails from "./details"
import ProductCerebraNovaCTA from "./cta"

export const metadata = {
  title: "Brain Formula — Next Generation Cognitive Support",
  description: "Brain Formula with Xerenoos® Citicoline, Bacognize® Bacopa & SerinAid® PS. Clinically studied brain health supplement. 60 capsules.",
}

export default function CerebraNovaProduct() {
  return (
    <>
      <Navbar />
      <main>
        <ProductCerebraNovaHero />
        <ProductCerebraNovaDetails />
        <ProductCerebraNovaCTA />
      </main>
      <Footer />
    </>
  )
}