"use client"

import { motion } from "framer-motion"

const ingredients = [
  {
    name: "Omega-3 DHA & EPA",
    color: "#7c3aed",
    benefits: ["Essential for brain cell structure and function", "Supports memory, learning, and cognitive health", "Helps maintain healthy neurotransmitter function"],
  },
  {
    name: "Green Tea Catechins",
    color: "#8b5cf6",
    benefits: ["Powerful antioxidant protection for brain cells", "Supports mental clarity and focus", "Promotes healthy brain-gut connection"],
  },
  {
    name: "ThymoQuin® (Black Cumin Seed)",
    color: "#7c3aed",
    benefits: ["Patented postbiotic for brain-gut axis support", "Helps reduce occasional brain fog and mental fatigue", "Supports overall cognitive wellness and balanced energy"],
  },
  {
    name: "Phospholipids",
    color: "#a78bfa",
    benefits: ["Key component of brain cell membranes", "Supports inter-cell communication", "Enhances bioavailability of key nutrients"],
  },
]

const benefits = [
  { title: "Memory Support", desc: "Clinically studied blend designed to support improved memory and faster mental processing.", color: "#7c3aed" },
  { title: "Mental Focus", desc: "Helps promote clear thinking, attention, and everyday mental sharpness without caffeine or stimulants.", color: "#8b5cf6" },
  { title: "Brain-Gut Axis", desc: "Unique patented postbiotic blend supports the natural connection between gut and brain for overall wellbeing.", color: "#7c3aed" },
  { title: "Safe & Effective", desc: "Clinical studies reported no adverse events — safe for long-term use with over 10 years of research.", color: "#a78bfa" },
]

export default function ProductCerbellaDetails() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-0.5 bg-[#7c3aed] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Patented Formula</h2>
            <p className="text-[#0c4a6e]/60">Over 10 years of research — clinically studied for safety and efficacy.</p>
          </motion.div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 md:p-8 shadow-xl shadow-[#7c3aed]/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
                  <div className="md:w-52 shrink-0">
                    <h3 className="text-xl font-bold" style={{ color: ing.color }}>{ing.name}</h3>
                  </div>
                  <div className="flex-1 space-y-2">
                    {ing.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f5f3ff]">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: ing.color }} />
                        <span className="text-sm text-[#0c4a6e]/80">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-0.5 bg-[#7c3aed] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Benefits</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#7c3aed]/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h3 className="font-bold mb-2" style={{ color: b.color }}>{b.title}</h3>
                <p className="text-sm text-[#0c4a6e]/60">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white/60">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-0.5 bg-[#7c3aed] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>How to Use</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#7c3aed]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-lg">1</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Take 2 Capsules Daily</h3>
              <p className="text-sm text-[#0c4a6e]/60">With water, preferably with a meal.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#7c3aed]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] flex items-center justify-center text-white font-bold text-lg">2</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Patented Delivery</h3>
              <p className="text-sm text-[#0c4a6e]/60">Proprietary formulation ensures nutrients reach the brain effectively.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#7c3aed]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-lg">3</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>60 Capsules / 30 Days</h3>
              <p className="text-sm text-[#0c4a6e]/60">One bottle is a full month supply.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}