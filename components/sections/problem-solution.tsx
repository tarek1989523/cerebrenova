"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

export default function ProblemSolution() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="morph-blob w-[600px] h-[600px] bg-gradient-to-r from-[#0284c7] to-[#38bdf8] opacity-[0.04] top-[-20%] right-[-20%]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#0c4a6e" }}>Does Your Brain Have the Fuel It Needs?</h2>
            <p className="text-[#0c4a6e]/70 leading-relaxed mb-4">
              Modern life demands peak mental performance. But stress, aging, and environmental factors can deplete the <strong className="text-[#0284c7]">essential nutrients your brain needs</strong> to function at its best — leading to brain fog, poor memory, and mental fatigue.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-50/80 rounded-xl border border-red-100">
                <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-red-700/70 text-sm">Aging reduces natural neurotransmitter production</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-red-50/80 rounded-xl border border-red-100">
                <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-red-700/70 text-sm">Stress and poor diet deplete brain-supporting nutrients</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-emerald-50/80 rounded-xl border border-emerald-100">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-emerald-700 text-sm font-medium">CerebraNova — three clinically studied ingredients for complete cognitive support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-8 shadow-xl shadow-[#0284c7]/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/15 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284c7] to-[#0891b2] flex items-center justify-center shadow-lg shadow-[#0284c7]/20">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#0c4a6e" }}>The CerebraNova Advantage</p>
                  <p className="text-xs text-[#0c4a6e]/50">Clinically Studied | Made in USA</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f0f9ff]">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] shrink-0" />
                  <span className="text-sm text-[#0c4a6e]/80">Xerenoos® Citicoline — <strong>supports brain energy and mental focus</strong></span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f0f9ff]">
                  <span className="w-2 h-2 rounded-full bg-[#0891b2] shrink-0" />
                  <span className="text-sm text-[#0c4a6e]/80">Bacognize® Bacopa — <strong>enhances memory and learning</strong></span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f0f9ff]">
                  <span className="w-2 h-2 rounded-full bg-[#16a34a] shrink-0" />
                  <span className="text-sm text-[#0c4a6e]/80">SerinAid® PS — <strong>supports mental clarity and focus</strong></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
