"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProductNeurivaOriginalGummiesCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f43f5e] to-[#be123c]" />
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-white/10 to-white/5 opacity-100 top-[-20%] right-[-10%]" style={{ filter: "blur(80px)" }} />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#fb7185] to-[#fda4af] opacity-[0.15] bottom-[-20%] left-[-10%]" style={{ filter: "blur(80px)" }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available Now on Amazon
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-3">Order NEURIVA Original Gummies Today</h2>
          <p className="text-rose-200/80 mb-8 text-lg">Delicious strawberry gummies with clinically tested brain health support.</p>
          <Button size="lg" asChild className="bg-white text-[#f43f5e] hover:bg-white/90 border-0 shadow-xl text-base font-bold px-12 py-6 h-auto">
            <a href="https://amzn.to/4bbsTUj" target="_blank" rel="sponsored">Order on Amazon — $29.67</a>
          </Button>
          <p className="text-rose-200/60 text-xs mt-4">Neurofactor · Phosphatidylserine · 50 Gummies · Vegetarian · Gluten-Free</p>
          <div className="flex justify-center gap-6 mt-8">
            <a href="/" className="text-rose-200/70 hover:text-white text-sm transition-colors underline underline-offset-2">← Back to Home</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
