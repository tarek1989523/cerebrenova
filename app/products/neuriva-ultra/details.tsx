"use client"

import { motion } from "framer-motion"

const ingredients = [
  {
    name: "Cognivive™",
    color: "#db2777",
    benefits: ["Clinically tested Alpinia galanga extract for mental alertness", "Noticeable effects of mental alertness from just one serving", "Caffeine-free cognitive support for focus and concentration"],
  },
  {
    name: "Neurofactor®",
    color: "#ec4899",
    benefits: ["Clinically tested coffee cherry extract", "Increases vital neuroprotein BDNF to support brain cell connections", "Supports focus, concentration, learning, and accuracy"],
  },
  {
    name: "Phosphatidylserine",
    color: "#db2777",
    benefits: ["Plant-sourced phospholipid essential for neuron health", "Fuels memory and learning processes", "Supports healthy brain cell membrane structure and function"],
  },
  {
    name: "B Vitamins (B6, B12 & Folic Acid)",
    color: "#f472b6",
    benefits: ["Essential for cognitive function and normal energy metabolism", "Support neurotransmitter production and brain health", "Help maintain normal homocysteine levels for brain wellness"],
  },
]

const benefits = [
  { title: "Mental Alertness", desc: "Cognivive™ provides noticeable effects of mental alertness from just one serving, without caffeine.", color: "#db2777" },
  { title: "Memory & Learning", desc: "Phosphatidylserine and Neurofactor work together to fuel memory and support learning.", color: "#ec4899" },
  { title: "Focus & Concentration", desc: "Clinically tested ingredients help sharpen focus and improve concentration throughout the day.", color: "#db2777" },
  { title: "Caffeine Free", desc: "Ultra formula delivers cognitive support without caffeine — clean energy for your mind.", color: "#f472b6" },
]

export default function ProductNeurivaUltraDetails() {
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
            <div className="w-12 h-0.5 bg-[#db2777] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Ingredients</h2>
            <p className="text-[#0c4a6e]/60">Clinically tested, naturally sourced for advanced brain health support.</p>
          </motion.div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 md:p-8 shadow-xl shadow-[#db2777]/5"
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
                      <div key={b} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#fdf2f8]">
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
            <div className="w-12 h-0.5 bg-[#db2777] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Benefits</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#db2777]/5"
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
            <div className="w-12 h-0.5 bg-[#db2777] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>How to Use</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#db2777]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#db2777] to-[#ec4899] flex items-center justify-center text-white font-bold text-lg">1</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Take 2 Capsules Daily</h3>
              <p className="text-sm text-[#0c4a6e]/60">With water, preferably with a meal.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#db2777]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#ec4899] to-[#f472b6] flex items-center justify-center text-white font-bold text-lg">2</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Clinically Tested</h3>
              <p className="text-sm text-[#0c4a6e]/60">Cognivive for mental alertness + Neurofactor for memory support.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#db2777]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#db2777] to-[#ec4899] flex items-center justify-center text-white font-bold text-lg">3</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>60 Count / 30 Days</h3>
              <p className="text-sm text-[#0c4a6e]/60">One bottle is a full one-month supply.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
