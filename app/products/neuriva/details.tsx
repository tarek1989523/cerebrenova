"use client"

import { motion } from "framer-motion"

const ingredients = [
  {
    name: "Cognicell™",
    color: "#e11d48",
    benefits: ["Clinically tested to support short-term and long-term memory in healthy adults", "Helps reproduce, recognize, and recall information within 10-30 seconds", "Naturally sourced ingredient for reliable cognitive support"],
  },
  {
    name: "Neurofactor®",
    color: "#f43f5e",
    benefits: ["Clinically tested coffee cherry extract to support working memory", "Supports the short-term maintenance and manipulation of information", "Helps with performing complex cognitive tasks"],
  },
  {
    name: "Vitamin B12 & B6",
    color: "#e11d48",
    benefits: ["Essential nutrients for overall brain health and cognitive function", "Support energy metabolism and healthy nerve tissue", "Help maintain normal homocysteine levels for brain health"],
  },
  {
    name: "Folic Acid (Vitamin B9)",
    color: "#fb7185",
    benefits: ["Key nutrient for neurotransmitter production and brain cell health", "Supports methylation processes critical for cognitive function", "Works synergistically with B12 and B6 for comprehensive brain support"],
  },
]

const benefits = [
  { title: "Short-Term Memory", desc: "Supports reproduction, recognition, and recall of information within 10-30 seconds.", color: "#e11d48" },
  { title: "Long-Term Memory", desc: "Helps maintain a permanent information storage bank for knowledge retention over time.", color: "#f43f5e" },
  { title: "Working Memory", desc: "Supports short-term maintenance and manipulation of information for complex tasks.", color: "#e11d48" },
  { title: "Clinically Tested", desc: "Features Cognicell and Neurofactor — ingredients tested in clinical studies for efficacy.", color: "#fb7185" },
]

export default function ProductNeurivaDetails() {
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
            <div className="w-12 h-0.5 bg-[#e11d48] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Ingredients</h2>
            <p className="text-[#0c4a6e]/60">Clinically tested, naturally sourced ingredients for 3 dimensions of memory.</p>
          </motion.div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 md:p-8 shadow-xl shadow-[#e11d48]/5"
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
                      <div key={b} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#fff1f2]">
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
            <div className="w-12 h-0.5 bg-[#e11d48] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>3 Dimensions of Memory</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#e11d48]/5"
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
            <div className="w-12 h-0.5 bg-[#e11d48] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>How to Use</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#e11d48]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#e11d48] to-[#f43f5e] flex items-center justify-center text-white font-bold text-lg">1</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Take 1 Capsule Daily</h3>
              <p className="text-sm text-[#0c4a6e]/60">With water, preferably with a meal.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#e11d48]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f43f5e] to-[#fb7185] flex items-center justify-center text-white font-bold text-lg">2</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Clinically Tested</h3>
              <p className="text-sm text-[#0c4a6e]/60">Features Cognicell & Neurofactor for proven memory support.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#e11d48]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#e11d48] to-[#f43f5e] flex items-center justify-center text-white font-bold text-lg">3</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>50 Count / 50 Days</h3>
              <p className="text-sm text-[#0c4a6e]/60">One bottle is nearly a two-month supply.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
