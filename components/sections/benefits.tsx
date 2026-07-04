"use client"

import { motion } from "framer-motion"
import { Brain, Target, Zap, Heart } from "lucide-react"

const benefits = [
  { icon: Brain, title: "Memory Support", desc: "Bacopa and Citicoline work together to support memory retention and recall.", color: "#0284c7", color2: "#38bdf8" },
  { icon: Target, title: "Mental Focus", desc: "Sharper concentration and sustained attention during demanding tasks.", color: "#0891b2", color2: "#22d3ee" },
  { icon: Zap, title: "Brain Energy", desc: "Citicoline supports healthy brain energy metabolism and neurotransmitter production.", color: "#0284c7", color2: "#38bdf8" },
  { icon: Heart, title: "Mental Clarity", desc: "Phosphatidylserine helps maintain clear thinking and cognitive performance under stress.", color: "#16a34a", color2: "#4ade80" },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#16a34a] to-[#4ade80] opacity-[0.04] top-[-10%] left-[20%]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Benefits of CerebraNova</h2>
          <p className="text-[#0c4a6e]/60">Three clinically studied ingredients working together.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-xl p-6 text-center shadow-xl shadow-[#0284c7]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[var(--c1)]/20 to-[var(--c2)]/20 flex items-center justify-center" style={{ "--c1": b.color, "--c2": b.color2 } as React.CSSProperties}>
                <b.icon className="w-7 h-7" style={{ color: b.color }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#0c4a6e" }}>{b.title}</h3>
              <p className="text-sm text-[#0c4a6e]/60">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}