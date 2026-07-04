"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProductTurmericCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d97706] to-[#b45309]" />
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-white/10 to-white/5 opacity-100 top-[-20%] right-[-10%]" style={{ filter: "blur(80px)" }} />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] opacity-[0.15] bottom-[-20%] left-[-10%]" style={{ filter: "blur(80px)" }} />

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-3">Order Golden Guard Turmeric Today</h2>
          <p className="text-yellow-200/80 mb-8 text-lg">BCM-95® Turmeric — natural joint, cognitive & immune support.</p>
          <Button size="lg" asChild className="bg-white text-[#d97706] hover:bg-white/90 border-0 shadow-xl text-base font-bold px-12 py-6 h-auto">
            <a href="https://amzn.to/44JX9C1" target="_blank" rel="sponsored">Order on Amazon — $39.95</a>
          </Button>
          <p className="text-yellow-200/60 text-xs mt-4">BCM-95® Bioavailable Curcumin · 60 Vegetable Capsules</p>
          <div className="flex justify-center gap-6 mt-8">
            <a href="/" className="text-yellow-200/70 hover:text-white text-sm transition-colors underline underline-offset-2">← Back to Home</a>
            <a href="/products/cerebranova" className="text-yellow-200/70 hover:text-white text-sm transition-colors underline underline-offset-2">View CerebraNova →</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}