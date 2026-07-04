"use client"

import { motion } from "framer-motion"

const ingredients = [
  {
    label: "Xerenoos® Citicoline",
    color: "#0284c7",
    subtitle: "Clinically studied brain nutrient",
    dose: "250 mg",
    details: [
      "Brain Energy — Supports the synthesis of phosphatidylcholine, a key component of brain cell membranes.",
      "Neurotransmitter Support — Helps maintain healthy levels of acetylcholine, dopamine, and norepinephrine.",
      "Mental Focus — Clinically studied to support attention, concentration, and mental energy.",
      "Premium Quality — Xerenoos® is a patented, clinically studied form of citicoline.",
    ],
  },
  {
    label: "Bacognize® Bacopa Monnieri",
    color: "#0891b2",
    subtitle: "Standardized to 20% Bacosides",
    dose: "300 mg",
    details: [
      "Ayurvedic Wisdom — Used for centuries in Ayurvedic tradition for memory and cognitive function support.",
      "Memory Retention — Clinically shown to support information retention and recall speed.",
      "Standardized Potency — Bacognize® is a patented extract standardized to 20% bacosides for consistent results.",
      "Neuroprotective — Supports healthy brain cell function and protects against oxidative stress.",
    ],
  },
  {
    label: "SerinAid® Phosphatidylserine",
    color: "#16a34a",
    subtitle: "Key brain cell membrane component",
    dose: "100 mg",
    details: [
      "Cell Membrane Health — PS is a critical phospholipid that supports brain cell structure and inter-cell communication.",
      "Mental Clarity — Clinically studied to support focus, concentration, and cognitive performance.",
      "Stress Support — Helps regulate cortisol response to support mental resilience under pressure.",
      "SerinAid® — A patented, soy-derived phosphatidylserine with clinical backing.",
    ],
  },
]

const fullIngredients = [
  { name: "Xerenoos® Citicoline", dose: "250 mg" },
  { name: "Bacognize® Bacopa Monnieri (20% Bacosides)", dose: "300 mg" },
  { name: "SerinAid® Phosphatidylserine", dose: "100 mg" },
  { name: "Boswellia Serrata Extract", dose: "100 mg" },
]

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-24 relative overflow-hidden">
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-[#0891b2] to-[#22d3ee] opacity-[0.04] bottom-[-20%] left-[-10%]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Three Clinically Studied Ingredients</h2>
          <p className="text-[#0c4a6e]/60">Premium patented raw materials at clinically studied levels.</p>
        </motion.div>

        <div className="space-y-6">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.label}
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-7 md:p-9 shadow-xl shadow-[#0284c7]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-72 shrink-0">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: ing.color }}>Patented Formula</span>
                  <h3 className="text-2xl font-bold mt-1" style={{ color: "#0c4a6e" }}>{ing.label}</h3>
                  <p className="text-sm" style={{ color: `${ing.color}cc` }}>{ing.subtitle}</p>
                  <p className="text-3xl font-extrabold mt-3" style={{ color: ing.color, fontFamily: "'Lora', serif" }}>{ing.dose}</p>
                  <p className="text-xs text-[#0c4a6e]/40 mt-1">per serving (2 capsules)</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 flex-1">
                  {ing.details.map((d) => (
                    <div key={d} className="bg-[#f0f9ff] rounded-xl p-4">
                      <p className="text-xs leading-relaxed" style={{ color: "#0c4a6e" }}>{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-7 shadow-xl shadow-[#0284c7]/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-4" style={{ color: "#0c4a6e" }}>Full Ingredient Profile (Per Serving / 2 Capsules)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {fullIngredients.map(({ name, dose }) => (
              <div key={name} className="bg-[#f0f9ff] rounded-lg px-4 py-3">
                <span className="text-[#0c4a6e]/50">{name}</span>
                <br />
                <span className="font-semibold" style={{ color: "#0c4a6e" }}>{dose}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#0c4a6e]/40 mt-3">Other ingredients: Vegetable capsule (hypromellose), microcrystalline cellulose, magnesium stearate, silicon dioxide.</p>
        </motion.div>
      </div>
    </section>
  )
}