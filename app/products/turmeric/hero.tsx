"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProductTurmericHero() {
  return (
    <section className="pt-36 pb-20 md:pb-28 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fefce8] via-[#fffbeb] to-[#fef3c7] pointer-events-none" />
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-[#d97706] to-[#f59e0b] top-[-10%] left-[-5%]" />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bottom-[0%] right-[-5%]" style={{ animationDelay: "-4s" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d97706]/10 border border-[#d97706]/20 text-[#d97706] text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />
              Golden Guard — Wellness Support
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-5">
              <span className="bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">Golden Guard</span>
              <br />
              <span style={{ color: "#0c4a6e" }}>Turmeric Extract<br />60 Capsules</span>
            </h1>
            <p className="text-base text-[#0c4a6e]/70 leading-relaxed max-w-lg mb-6">
              A natural cell defense supplement featuring <strong style={{ color: "#d97706" }}>BCM-95® Turmeric (500 mg)</strong> — a patented, bioavailable curcumin extract clinically studied for joint health, cognitive support, and overall wellness.
            </p>
            <div className="space-y-2 text-sm text-[#0c4a6e]/60 mb-8">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" /> 60 Vegetable Capsules</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> BCM-95® Bioavailable Curcumin</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" /> Joint, Cognitive & Immune Support</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#d97706] to-[#f59e0b] border-0 text-white shadow-lg shadow-[#d97706]/20">
                <a href="https://amzn.to/44JX9C1" target="_blank" rel="sponsored">Order on Amazon — $39.95</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              <div className="morph-blob w-[350px] h-[350px] bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] opacity-20" style={{ position: "absolute", top: "-30px", right: "-30px", animationDelay: "-2s" }} />
              <div className="relative float">
                <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 max-w-sm mx-auto shadow-2xl shadow-[#d97706]/10">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#fefce8] to-white">
                    <img src="/images/turmeric/product-front.jpg" alt="Golden Guard Turmeric" className="w-full h-auto" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-2xl font-extrabold text-[#d97706]" style={{ fontFamily: "'Lora', serif" }}>$39.95</p>
                    <p className="text-xs text-[#0c4a6e]/50">$0.67 per serving</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}