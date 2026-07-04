"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProductNeurivaOriginalHero() {
  return (
    <section className="pt-36 pb-20 md:pb-28 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] pointer-events-none" />
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-[#0284c7] to-[#38bdf8] top-[-10%] left-[-5%]" />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#0ea5e9] to-[#7dd3fc] bottom-[0%] right-[-5%]" style={{ animationDelay: "-4s" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
              NEURIVA — Original
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-5">
              <span className="bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] bg-clip-text text-transparent">NEURIVA Original</span>
              <br />
              <span style={{ color: "#0c4a6e" }}>Brain Health<br />Memory & Focus</span>
            </h1>
            <p className="text-base text-[#0c4a6e]/70 leading-relaxed max-w-lg mb-6">
              A clinically tested brain supplement featuring <strong style={{ color: "#0284c7" }}>Phosphatidylserine</strong> and <strong style={{ color: "#0ea5e9" }}>Neurofactor®</strong> — naturally sourced ingredients that support 5 indicators of brain health: memory, focus, concentration, learning, and accuracy.
            </p>
            <div className="space-y-2 text-sm text-[#0c4a6e]/60 mb-8">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" /> Clinically Tested Neurofactor + Phosphatidylserine</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" /> Supports 5 Indicators of Brain Health</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" /> 28 Count · Caffeine Free · Vegetarian · Gluten-Free</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] border-0 text-white shadow-lg shadow-[#0284c7]/20">
                <a href="https://amzn.to/4bbslxJ" target="_blank" rel="sponsored">Order on Amazon — $27.97</a>
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
              <div className="morph-blob w-[350px] h-[350px] bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] opacity-20" style={{ position: "absolute", top: "-30px", right: "-30px", animationDelay: "-2s" }} />
              <div className="relative float">
                <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 max-w-sm mx-auto shadow-2xl shadow-[#0284c7]/10">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#f0f9ff] to-white">
                    <img src="/images/neuriva-original/1.jpg" alt="NEURIVA Original" className="w-full h-auto" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-2xl font-extrabold text-[#0284c7]" style={{ fontFamily: "'Lora', serif" }}>$27.97</p>
                    <p className="text-xs text-[#0c4a6e]/50">$1.00 per count</p>
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
