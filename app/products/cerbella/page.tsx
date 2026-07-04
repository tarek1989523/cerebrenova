import Navbar from "@/components/sections/navbar"
import Footer from "@/components/sections/footer"
import ProductCerbellaHero from "./hero"
import ProductCerbellaDetails from "./details"
import ProductCerbellaCTA from "./cta"

export const metadata = {
  title: "Cerbella® Advanced Brain Nootropic — Memory, Focus & Cognitive Health",
  description: "Cerbella® Advanced Brain Nootropic Wellness Supplement. Omega-3 DHA/EPA, Green Tea Catechins, Phospholipids & ThymoQuin®. Neurologist recommended. 60 capsules.",
}

export default function CerbellaProduct() {
  return (
    <>
      <Navbar />
      <main>
        <ProductCerbellaHero />
        <ProductCerbellaDetails />
        <ProductCerbellaCTA />
      </main>
      <Footer />
    </>
  )
}