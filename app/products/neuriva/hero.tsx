"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProductNeurivaHero() {
  return (
    <section className="pt-36 pb-20 md:pb-28 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff1f2] via-[#ffe4e6] to-[#fecdd3] pointer-events-none" />
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-[#e11d48] to-[#fb7185] top-[-10%] left-[-5%]" />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#f43f5e] to-[#fda4af] bottom-[0%] right-[-5%]" style={{ animationDelay: "-4s" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e11d48]/10 border border-[#e11d48]/20 text-[#e11d48] text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] animate-pulse" />
              NEURIVA — Memory 3D
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-5">
              <span className="bg-gradient-to-r from-[#e11d48] via-[#f43f5e] to-[#fb7185] bg-clip-text text-transparent">NEURIVA</span>
              <br />
              <span style={{ color: "#0c4a6e" }}>Memory 3D<br />Brain Supplement</span>
            </h1>
            <p className="text-base text-[#0c4a6e]/70 leading-relaxed max-w-lg mb-6">
              Voted #1 Most Trusted Memory Support Supplement featuring <strong style={{ color: "#e11d48" }}>Cognicell</strong>, <strong style={{ color: "#f43f5e" }}>Neurofactor</strong>, <strong style={{ color: "#e11d48" }}>Vitamin B12</strong>, <strong style={{ color: "#f43f5e" }}>B6</strong> & <strong style={{ color: "#e11d48" }}>Folic Acid</strong> — designed to support short-term, long-term, and working memory.
            </p>
            <div className="space-y-2 text-sm text-[#0c4a6e]/60 mb-8">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" /> Clinically Tested Ingredients — Cognicell & Neurofactor</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" /> Supports 3 Types of Memory: Short-Term, Long-Term & Working</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#fb7185]" /> 50 Count · Easy-to-Swallow Capsules</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#e11d48] to-[#f43f5e] border-0 text-white shadow-lg shadow-[#e11d48]/20">
                <a href="https://amzn.to/3TgQYTs" target="_blank" rel="sponsored">Order on Amazon — $29.99</a>
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
              <div className="morph-blob w-[350px] h-[350px] bg-gradient-to-r from-[#e11d48] via-[#f43f5e] to-[#fb7185] opacity-20" style={{ position: "absolute", top: "-30px", right: "-30px", animationDelay: "-2s" }} />
              <div className="relative float">
                <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 max-w-sm mx-auto shadow-2xl shadow-[#e11d48]/10">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#fff1f2] to-white">
                    <img src="/images/neuriva/1.jpg" alt="NEURIVA Memory 3D" className="w-full h-auto" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-2xl font-extrabold text-[#e11d48]" style={{ fontFamily: "'Lora', serif" }}>$29.99</p>
                    <p className="text-xs text-[#0c4a6e]/50">$0.60 per count</p>
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
