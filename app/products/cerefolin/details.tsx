"use client"

import { motion } from "framer-motion"

const ingredients = [
  {
    name: "L-Methylfolate (Quatrefolic®)",
    color: "#059669",
    benefits: ["The active form of folate, ready for the body to use", "Supports neurotransmitter production and brain cell health", "Essential for methylation, a key process for cognitive function"],
  },
  {
    name: "NAC (N-Acetyl Cysteine)",
    color: "#10b981",
    benefits: ["Powerful antioxidant that supports brain cell protection", "Helps maintain healthy glutathione levels for cellular health", "Supports detoxification pathways and cognitive wellness"],
  },
  {
    name: "Vitamin B12 (Methylcobalamin)",
    color: "#059669",
    benefits: ["Essential for healthy nerve tissue and brain function", "Supports energy metabolism and red blood cell formation", "Plays a key role in homocysteine metabolism for brain health"],
  },
  {
    name: "Targeted Nutrition Approach",
    color: "#34d399",
    benefits: ["Designed for individuals with specific nutritional needs", "Neurologist-formulated for targeted cognitive support", "Provides key nutrients the brain needs for memory and focus"],
  },
]

const benefits = [
  { title: "Memory Support", desc: "Targeted nutrition designed to support improved memory and recall through key nutrients.", color: "#059669" },
  { title: "Focus & Clarity", desc: "Helps promote mental clarity, sustained attention, and sharper concentration throughout the day.", color: "#10b981" },
  { title: "Neurologist Recommended", desc: "Developed and recommended by neurologists for targeted brain wellness support.", color: "#059669" },
  { title: "Active Nutrient Forms", desc: "Features bioavailable L-Methylfolate and Methylcobalamin for optimal absorption and use.", color: "#34d399" },
]

export default function ProductCerefolinDetails() {
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
            <div className="w-12 h-0.5 bg-[#059669] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Ingredients</h2>
            <p className="text-[#0c4a6e]/60">Neurologist-formulated targeted nutrition for cognitive wellness.</p>
          </motion.div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 md:p-8 shadow-xl shadow-[#059669]/5"
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
                      <div key={b} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#ecfdf5]">
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
            <div className="w-12 h-0.5 bg-[#059669] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Benefits</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#059669]/5"
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
            <div className="w-12 h-0.5 bg-[#059669] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>How to Use</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#059669]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#059669] to-[#10b981] flex items-center justify-center text-white font-bold text-lg">1</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Take 1 Capsule Daily</h3>
              <p className="text-sm text-[#0c4a6e]/60">With water, preferably with a meal.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#059669]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#10b981] to-[#34d399] flex items-center justify-center text-white font-bold text-lg">2</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Targeted Nutrition</h3>
              <p className="text-sm text-[#0c4a6e]/60">Bioavailable forms for optimal absorption and effectiveness.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#059669]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#059669] to-[#10b981] flex items-center justify-center text-white font-bold text-lg">3</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>60 Count / 60 Days</h3>
              <p className="text-sm text-[#0c4a6e]/60">One bottle is up to a two-month supply.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
