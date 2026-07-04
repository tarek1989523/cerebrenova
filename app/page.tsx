import Navbar from "@/components/sections/navbar"
import Hero from "@/components/sections/hero"
import TrustBar from "@/components/sections/trust-bar"
import ProblemSolution from "@/components/sections/problem-solution"
import Science from "@/components/sections/science"
import Ingredients from "@/components/sections/ingredients"
import ProductGallery from "@/components/sections/product-gallery"
import Benefits from "@/components/sections/benefits"
import HowItWorks from "@/components/sections/how-it-works"
import Reviews from "@/components/sections/reviews"
import Products from "@/components/sections/products"
import CTA from "@/components/sections/cta"
import Quality from "@/components/sections/quality"
import FAQ from "@/components/sections/faq"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Science />
        <Ingredients />
        <ProductGallery />
        <Benefits />
        <HowItWorks />
        <Reviews />
        <Products />
        <CTA />
        <Quality />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
