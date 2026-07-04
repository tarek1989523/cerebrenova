"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProductNeurivaPlusHero() {
  return (
    <section className="pt-36 pb-20 md:pb-28 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f3ff] via-[#ede9fe] to-[#ddd6fe] pointer-events-none" />
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] top-[-10%] left-[-5%]" />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#7c3aed] to-[#c4b5fd] bottom-[0%] right-[-5%]" style={{ animationDelay: "-4s" }} />
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-pulse" />
              NEURIVA — Plus
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-5">
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">NEURIVA Plus</span>
              <br />
              <span style={{ color: "#0c4a6e" }}>Advanced Brain<br />Cognitive Function</span>
            </h1>
            <p className="text-base text-[#0c4a6e]/70 leading-relaxed max-w-lg mb-6">
              An advanced brain supplement with <strong style={{ color: "#8b5cf6" }}>2x Neurofactor®</strong>, <strong style={{ color: "#7c3aed" }}>Phosphatidylserine</strong>, and <strong style={{ color: "#8b5cf6" }}>B Vitamins</strong> — clinically tested to support 6 indicators of brain health including memory, focus, concentration, learning, accuracy, and reasoning.
            </p>
            <div className="space-y-2 text-sm text-[#0c4a6e]/60 mb-8">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" /> 2x Neurofactor — Clinically Tested for Brain Health</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" /> Fuels 6 Indicators of Brain Performance + Reasoning</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" /> 30 Count · Caffeine Free · Vegetarian · Gluten-Free</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] border-0 text-white shadow-lg shadow-[#8b5cf6]/20">
                <a href="https://amzn.to/4yjYi0W" target="_blank" rel="sponsored">Order on Amazon — $39.97</a>
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
              <div className="morph-blob w-[350px] h-[350px] bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#a78bfa] opacity-20" style={{ position: "absolute", top: "-30px", right: "-30px", animationDelay: "-2s" }} />
              <div className="relative float">
                <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 max-w-sm mx-auto shadow-2xl shadow-[#8b5cf6]/10">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#f5f3ff] to-white">
                    <img src="/images/neuriva-plus/1.jpg" alt="NEURIVA Plus" className="w-full h-auto" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-2xl font-extrabold text-[#8b5cf6]" style={{ fontFamily: "'Lora', serif" }}>$39.97</p>
                    <p className="text-xs text-[#0c4a6e]/50">$1.33 per count</p>
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
