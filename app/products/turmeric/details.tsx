"use client"

import { motion } from "framer-motion"

const benefits = [
  { title: "Joint Health", desc: "BCM-95® curcumin supports healthy joint function and mobility by helping manage normal inflammatory responses.", color: "#d97706" },
  { title: "Cognitive Support", desc: "Curcumin's antioxidant properties help protect brain cells from oxidative stress and support mental clarity.", color: "#f59e0b" },
  { title: "Antioxidant Defense", desc: "Powerful free radical scavenger that supports the body's natural defense against oxidative damage.", color: "#fbbf24" },
  { title: "Immune Support", desc: "Helps maintain a healthy immune system through its natural bioactive compounds.", color: "#d97706" },
]

export default function ProductTurmericDetails() {
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
            <div className="w-12 h-0.5 bg-[#d97706] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>What Is BCM-95® Turmeric?</h2>
            <p className="text-[#0c4a6e]/60">A patented, bioavailable curcumin extract with over 20 years of clinical research.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-8 md:p-10 shadow-xl shadow-[#d97706]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-56 shrink-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#d97706]">Patented Bioavailability</span>
                  <h3 className="text-2xl font-bold mt-1" style={{ color: "#0c4a6e" }}>BCM-95® Curcumin</h3>
                  <p className="text-3xl font-extrabold mt-3 text-[#d97706]" style={{ fontFamily: "'Lora', serif" }}>500 mg</p>
                  <p className="text-xs text-[#0c4a6e]/40 mt-1">per serving (2 capsules)</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#0c4a6e]/70 leading-relaxed mb-5">
                    BCM-95® is a unique, patented formulation of curcumin combined with essential oils of turmeric, which has been clinically shown to achieve significantly higher absorption than standard curcumin extracts.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-[#fefce8] rounded-xl p-4">
                      <p className="text-sm font-semibold mb-1" style={{ color: "#0c4a6e" }}>7x More Bioavailable</p>
                      <p className="text-xs text-[#0c4a6e]/60">BCM-95® is clinically shown to be 7x more absorbed than standard curcumin.</p>
                    </div>
                    <div className="bg-[#fefce8] rounded-xl p-4">
                      <p className="text-sm font-semibold mb-1" style={{ color: "#0c4a6e" }}>20+ Years of Research</p>
                      <p className="text-xs text-[#0c4a6e]/60">One of the most studied curcumin formulations available.</p>
                    </div>
                    <div className="bg-[#fefce8] rounded-xl p-4">
                      <p className="text-sm font-semibold mb-1" style={{ color: "#0c4a6e" }}>Natural Anti-Inflammatory</p>
                      <p className="text-xs text-[#0c4a6e]/60">Supports healthy inflammatory response for joint and overall wellness.</p>
                    </div>
                    <div className="bg-[#fefce8] rounded-xl p-4">
                      <p className="text-sm font-semibold mb-1" style={{ color: "#0c4a6e" }}>Antioxidant Protection</p>
                      <p className="text-xs text-[#0c4a6e]/60">Powerful free radical scavenger for cellular health.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <div className="w-12 h-0.5 bg-[#d97706] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Key Benefits</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#d97706]/5"
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
            <div className="w-12 h-0.5 bg-[#d97706] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>How to Use</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#d97706]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d97706] to-[#f59e0b] flex items-center justify-center text-white font-bold text-lg">1</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Take 2 Capsules Daily</h3>
              <p className="text-sm text-[#0c4a6e]/60">With water and a meal for best absorption.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#d97706]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] flex items-center justify-center text-white font-bold text-lg">2</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>Daily Wellness Support</h3>
              <p className="text-sm text-[#0c4a6e]/60">Consistent use supports joint, cognitive & immune health.</p>
            </motion.div>
            <motion.div
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#d97706]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d97706] to-[#f59e0b] flex items-center justify-center text-white font-bold text-lg">3</span>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c4a6e" }}>60 Capsules / 30 Days</h3>
              <p className="text-sm text-[#0c4a6e]/60">A full month supply per bottle.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}