"use client"

import { motion } from "framer-motion"
import { FlaskConical, ShieldCheck, Leaf } from "lucide-react"

const items = [
  { icon: FlaskConical, title: "Made in USA", desc: "GMP-certified facility. Highest quality standards.", color: "#0284c7", color2: "#38bdf8" },
  { icon: ShieldCheck, title: "Lab Tested Purity", desc: "Independently tested for potency, purity, and contaminants.", color: "#0891b2", color2: "#22d3ee" },
  { icon: Leaf, title: "Clean Formulation", desc: "Gluten-free, non-GMO. No artificial additives.", color: "#16a34a", color2: "#4ade80" },
]

export default function Quality() {
  return (
    <section className="py-12 bg-white/40 border-y border-[#0284c7]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-6 text-center text-sm">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-5 shadow-xl shadow-[#0284c7]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[var(--c1)]/20 to-[var(--c2)]/20 flex items-center justify-center" style={{ "--c1": item.color, "--c2": item.color2 } as React.CSSProperties}>
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <p className="font-semibold" style={{ color: "#0c4a6e" }}>{item.title}</p>
              <p className="text-xs text-[#0c4a6e]/50 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}