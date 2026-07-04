"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, ShieldCheck, Pill } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-[#e0f2fe]">
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-[#0284c7] to-[#38bdf8] top-[-10%] left-[-5%]" />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#0891b2] to-[#22d3ee] bottom-[0%] right-[-5%]" style={{ animationDelay: "-4s" }} />
      <div className="morph-blob w-[300px] h-[300px] bg-gradient-to-r from-[#16a34a] to-[#4ade80] top-[40%] right-[20%]" style={{ animationDelay: "-8s" }} />

      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
            Made in USA — Premium Brain Health
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#0284c7] via-[#0891b2] to-[#16a34a] bg-clip-text text-transparent">CerebraNova</span>
            <br />
            <span style={{ color: "#0c4a6e" }}>Next Generation<br />Brain Formula</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base text-[#0c4a6e]/70 leading-relaxed max-w-lg mb-8">
            Advanced cognitive support with <strong className="text-[#0284c7]">Xerenoos® Citicoline</strong>, <strong className="text-[#0284c7]">Bacognize® Bacopa Monnieri</strong>, and <strong className="text-[#0284c7]">SerinAid® Phosphatidylserine</strong> — three clinically studied ingredients for memory, focus, and mental clarity.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <Button size="lg" asChild className="bg-gradient-to-r from-[#0284c7] to-[#0891b2] hover:shadow-xl hover:shadow-[#0284c7]/30 border-0 text-white">
              <a href="https://amzn.to/4wsXIfC" target="_blank" rel="sponsored">Order on Amazon</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-[#0284c7]/30 text-[#0284c7] hover:bg-[#0284c7]/5">
              <a href="#science">See the Science</a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#0c4a6e]/50">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#16a34a]" /> Clinically Studied</span>
            <span className="flex items-center gap-1.5"><Pill className="w-4 h-4 text-[#16a34a]" /> 60 Capsules</span>
            <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-[#16a34a]" /> Made in USA</span>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="morph-blob w-[350px] h-[350px] bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#22d3ee] opacity-20" style={{ position: "absolute", top: "-30px", right: "-30px", animationDelay: "-2s" }} />
            <motion.div
              className="relative float"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative max-w-sm mx-auto rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 p-5 shadow-2xl shadow-[#0284c7]/10">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#f0f9ff] to-white">
                  <img src="/images/product-hero.png" alt="CerebraNova" className="w-full h-auto" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl p-3 text-center min-w-[120px] shadow-lg">
                <p className="text-2xl font-bold text-[#0284c7]" style={{ fontFamily: "'Lora', serif" }}>3</p>
                <p className="text-[10px] text-[#0c4a6e]/60 font-medium">Clinically Studied<br />Ingredients</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
