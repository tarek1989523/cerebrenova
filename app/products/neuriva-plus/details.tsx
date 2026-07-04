"use client"

import { motion } from "framer-motion"

const ingredients = [
  {
    name: "Neurofactor® (2x)",
    color: "#8b5cf6",
    benefits: ["Clinically tested whole fruit coffee cherry extract — double the amount of Original", "Increases vital neuroprotein BDNF for brain cell connections", "Supports focus, concentration, learning, accuracy, and reasoning"],
  },
  {
    name: "Phosphatidylserine",
    color: "#7c3aed",
    benefits: ["Plant-sourced phospholipid essential for neuron health", "Fuels memory and learning processes", "Supports healthy brain cell membrane structure and function"],
  },
  {
    name: "Vitamin B6, B12 & Folic Acid",
    color: "#8b5cf6",
    benefits: ["Essential for normal energy metabolism and cognitive function", "Support neurotransmitter production and brain health", "Help maintain normal homocysteine levels for brain wellness"],
  },
  {
    name: "6 Indicators of Brain Health",
    color: "#a78bfa",
    benefits: ["Focus — helps maintain attention and concentration", "Memory — supports retention and recall of information", "Learning, Accuracy, Concentration & Reasoning for complete cognitive performance"],
  },
]

const benefits = [
  { title: "Advanced Memory Support", desc: "2x Neurofactor + Phosphatidylserine fuel memory and learning processes for sharper recall.", color: "#8b5cf6" },
  { title: "Focus & Concentration", desc: "Clinically tested ingredients help sharpen focus, concentration, and mental clarity.", color: "#7c3aed" },
  { title: "Cognitive Function", desc: "With B6, B12 & Folic Acid to support normal energy metabolism and cognitive function.", color: "#8b5cf6" },
  { title: "6 Indicators", desc: "Supports focus, memory, learning, accuracy, concentration, and reasoning.", color: "#a78bfa" },
]

export default function ProductNeurivaPlusDetails() {
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
            <div className="w-12 h-0.5 bg-[#8b5cf6] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Ingredients</h2>
            <p className="text-[#0c4a6e]/60">Advanced formula with 2x Neurofactor for superior cognitive support.</p>
          </motion.div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 md:p-8 shadow-xl shadow-[#8b5cf6]/5"
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
            <div className="w-12 h-0.5 bg-[#8b5cf6] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Benefits</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#8b5cf6]/5"
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
            <div className="w-12 h-0.5 bg-[#8b5cf6] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>How to Use</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#8b5cf6]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center text-white font-bold text-lg">1</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Take 1 Capsule Daily</h3>
              <p className="text-sm text-[#0c4a6e]/60">With water, preferably with a meal.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#8b5cf6]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] flex items-center justify-center text-white font-bold text-lg">2</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Advanced Formula</h3>
              <p className="text-sm text-[#0c4a6e]/60">2x Neurofactor + Phosphatidylserine + B Vitamins for 6 indicators of brain health.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#8b5cf6]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center text-white font-bold text-lg">3</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>30 Count / 30 Days</h3>
              <p className="text-sm text-[#0c4a6e]/60">One bottle is a full one-month supply.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
