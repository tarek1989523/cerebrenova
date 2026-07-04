"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProductCerbellaHero() {
  return (
    <section className="pt-36 pb-20 md:pb-28 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f3ff] via-[#faf5ff] to-[#ede9fe] pointer-events-none" />
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] top-[-10%] left-[-5%]" />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#8b5cf6] to-[#c4b5fd] bottom-[0%] right-[-5%]" style={{ animationDelay: "-4s" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
              Cerbella — Brain Nootropic
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-5">
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">Cerbella®</span>
              <br />
              <span style={{ color: "#0c4a6e" }}>Advanced Brain<br />Nootropic Supplement</span>
            </h1>
            <p className="text-base text-[#0c4a6e]/70 leading-relaxed max-w-lg mb-6">
              A patented, neurologist-recommended formula featuring <strong style={{ color: "#7c3aed" }}>Omega-3 DHA/EPA</strong>, <strong style={{ color: "#8b5cf6" }}>Green Tea Catechins</strong>, <strong style={{ color: "#7c3aed" }}>Phospholipids</strong> & <strong style={{ color: "#8b5cf6" }}>ThymoQuin®</strong> — designed to support memory, focus, and the brain-gut connection.
            </p>
            <div className="space-y-2 text-sm text-[#0c4a6e]/60 mb-8">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" /> Clinically Tested — Neurologist Developed</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" /> Supports Brain-Gut Connection</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" /> 60 Capsules · Caffeine-Free</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6] border-0 text-white shadow-lg shadow-[#7c3aed]/20">
                <a href="https://amzn.to/4gm7mf4" target="_blank" rel="sponsored">Order on Amazon — $39.99</a>
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
              <div className="morph-blob w-[350px] h-[350px] bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa] opacity-20" style={{ position: "absolute", top: "-30px", right: "-30px", animationDelay: "-2s" }} />
              <div className="relative float">
                <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 max-w-sm mx-auto shadow-2xl shadow-[#7c3aed]/10">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#f5f3ff] to-white">
                    <img src="/images/cerbella/product-1.jpg" alt="Cerbella" className="w-full h-auto" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-2xl font-extrabold text-[#7c3aed]" style={{ fontFamily: "'Lora', serif" }}>$39.99</p>
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