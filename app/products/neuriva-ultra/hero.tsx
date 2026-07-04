"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProductNeurivaUltraHero() {
  return (
    <section className="pt-36 pb-20 md:pb-28 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf2f8] via-[#fce7f3] to-[#fbcfe8] pointer-events-none" />
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-[#db2777] to-[#f472b6] top-[-10%] left-[-5%]" />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#ec4899] to-[#f9a8d4] bottom-[0%] right-[-5%]" style={{ animationDelay: "-4s" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#db2777]/10 border border-[#db2777]/20 text-[#db2777] text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#db2777] animate-pulse" />
              NEURIVA — Ultra Brain Supplement
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-5">
              <span className="bg-gradient-to-r from-[#db2777] via-[#ec4899] to-[#f472b6] bg-clip-text text-transparent">NEURIVA Ultra</span>
              <br />
              <span style={{ color: "#0c4a6e" }}>Brain Health<br />Cognitive Support</span>
            </h1>
            <p className="text-base text-[#0c4a6e]/70 leading-relaxed max-w-lg mb-6">
              An advanced formula featuring <strong style={{ color: "#db2777" }}>Cognivive™</strong> for mental alertness, <strong style={{ color: "#ec4899" }}>Neurofactor®</strong>, <strong style={{ color: "#db2777" }}>Phosphatidylserine</strong>, and <strong style={{ color: "#ec4899" }}>B Vitamins</strong> — clinically tested to support memory, focus, concentration, and cognitive function.
            </p>
            <div className="space-y-2 text-sm text-[#0c4a6e]/60 mb-8">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#db2777]" /> Mental Alertness with Cognivive™ — Caffeine Free</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]" /> Clinically Tested Neurofactor & Phosphatidylserine</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f472b6]" /> 60 Capsules · Vegetarian · Gluten-Free</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#db2777] to-[#ec4899] border-0 text-white shadow-lg shadow-[#db2777]/20">
                <a href="https://amzn.to/4awQUoK" target="_blank" rel="sponsored">Order on Amazon — $61.00</a>
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
              <div className="morph-blob w-[350px] h-[350px] bg-gradient-to-r from-[#db2777] via-[#ec4899] to-[#f472b6] opacity-20" style={{ position: "absolute", top: "-30px", right: "-30px", animationDelay: "-2s" }} />
              <div className="relative float">
                <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 max-w-sm mx-auto shadow-2xl shadow-[#db2777]/10">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#fdf2f8] to-white">
                    <img src="/images/neuriva-ultra/1.jpg" alt="NEURIVA Ultra" className="w-full h-auto" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-2xl font-extrabold text-[#db2777]" style={{ fontFamily: "'Lora', serif" }}>$61.00</p>
                    <p className="text-xs text-[#0c4a6e]/50">$2.03 per serving</p>
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
