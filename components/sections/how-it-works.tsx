"use client"

import { motion } from "framer-motion"
import { Pill, DoorOpen, Braces, TrendingUp } from "lucide-react"

const steps = [
  { icon: Pill, title: "Take 2 Capsules Daily", desc: "2 capsules with water, preferably with a meal. 60 caps = 30-day supply.", color: "#0284c7", color2: "#0891b2" },
  { icon: DoorOpen, title: "Absorption & Uptake", desc: "Citicoline, Bacopa, and PS are rapidly absorbed and cross the BBB.", color: "#0891b2", color2: "#22d3ee" },
  { icon: Braces, title: "Cellular Support (1-2 wks)", desc: "Ingredients support brain cell membranes and neurotransmitter production.", color: "#0284c7", color2: "#38bdf8" },
  { icon: TrendingUp, title: "Full Benefits (2-4 wks)", desc: "Noticeable improvements in memory, focus, mental clarity, and cognitive endurance.", color: "#16a34a", color2: "#4ade80" },
]

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="morph-blob w-[350px] h-[350px] bg-gradient-to-r from-[#0284c7] to-[#38bdf8] opacity-[0.04] top-[20%] right-[-10%]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>How CerebraNova Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#0284c7]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--c1)] to-[var(--c2)] flex items-center justify-center shadow-lg" style={{ "--c1": step.color, "--c2": step.color2 } as React.CSSProperties}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: step.color, fontFamily: "'Lora', serif" }}>{i + 1}</div>
              <h3 className="font-bold mb-2 text-sm" style={{ color: "#0c4a6e" }}>{step.title}</h3>
              <p className="text-sm text-[#0c4a6e]/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}