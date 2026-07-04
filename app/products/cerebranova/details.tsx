"use client"

import { motion } from "framer-motion"

const ingredients = [
  {
    name: "Xerenoos® Citicoline",
    dose: "250 mg",
    color: "#0284c7",
    benefits: ["Brain energy metabolism", "Neurotransmitter production", "Mental focus & concentration"],
  },
  {
    name: "Bacognize® Bacopa Monnieri",
    dose: "300 mg",
    color: "#0891b2",
    benefits: ["Memory retention & recall", "Information processing", "Ayurvedic cognitive support"],
  },
  {
    name: "SerinAid® Phosphatidylserine",
    dose: "100 mg",
    color: "#16a34a",
    benefits: ["Cell membrane health", "Mental clarity under stress", "Cognitive performance"],
  },
]

const benefits = [
  { title: "Memory Support", desc: "Bacopa and Citicoline work together to support memory retention and recall speed.", color: "#0284c7" },
  { title: "Mental Focus", desc: "Sharper concentration and sustained attention during demanding mental tasks.", color: "#0891b2" },
  { title: "Brain Energy", desc: "Citicoline supports healthy brain energy metabolism and neurotransmitter production.", color: "#0284c7" },
  { title: "Mental Clarity", desc: "Phosphatidylserine helps maintain clear thinking and cognitive performance.", color: "#16a34a" },
]

export default function ProductCerebraNovaDetails() {
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
            <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Clinically Studied Ingredients</h2>
            <p className="text-[#0c4a6e]/60">Premium patented raw materials at clinically studied levels for maximum efficacy.</p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-7 md:p-9 shadow-xl shadow-[#0284c7]/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="md:w-64 shrink-0">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: ing.color }}>Key Ingredient</span>
                    <h3 className="text-2xl font-bold mt-1" style={{ color: "#0c4a6e" }}>{ing.name}</h3>
                    <p className="text-3xl font-extrabold mt-3" style={{ color: ing.color, fontFamily: "'Lora', serif" }}>{ing.dose}</p>
                    <p className="text-xs text-[#0c4a6e]/40 mt-1">per serving (2 capsules)</p>
                  </div>
                  <div className="flex-1 space-y-3">
                    {ing.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-3 p-3 rounded-xl bg-[#f0f9ff]">
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
            <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Benefits</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#0284c7]/5"
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
            <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>How to Use</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#0284c7]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0284c7] to-[#0891b2] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#0284c7]/20">1</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Take 2 Capsules Daily</h3>
              <p className="text-sm text-[#0c4a6e]/60">With water and a meal for best absorption.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#0284c7]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0891b2] to-[#22d3ee] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#0891b2]/20">2</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Consistent Daily Use</h3>
              <p className="text-sm text-[#0c4a6e]/60">Results typically noticed within 2-4 weeks.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#0284c7]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#16a34a] to-[#4ade80] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#16a34a]/20">3</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>60 Capsules / 30 Days</h3>
              <p className="text-sm text-[#0c4a6e]/60">One bottle is a full month supply.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}