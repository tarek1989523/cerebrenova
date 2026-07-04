"use client"

import { motion } from "framer-motion"

const reviews = [
  {
    stars: 5,
    text: "I've noticed a significant improvement in my focus and mental clarity since taking CerebraNova. The difference is remarkable.",
    author: "James D.",
    initials: "JD",
    color: "#0284c7",
    color2: "#38bdf8",
  },
  {
    stars: 5,
    text: "After trying many brain supplements, CerebraNova is the one that truly delivered. My memory recall has improved noticeably.",
    author: "Sarah K.",
    initials: "SK",
    color: "#0891b2",
    color2: "#22d3ee",
  },
  {
    stars: 5,
    text: "I take it daily before work and the difference in mental endurance is incredible. Highly recommended for anyone needing cognitive support.",
    author: "Michael R.",
    initials: "MR",
    color: "#16a34a",
    color2: "#4ade80",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>What Our Customers Say</h2>
          <p className="text-[#0c4a6e]/60">Join thousands of satisfied customers experiencing the CerebraNova difference.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-7 shadow-xl shadow-[#0284c7]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(r.stars)].map((_, s) => (
                  <span key={s} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-[#0c4a6e]/80 leading-relaxed mb-4" style={{ fontFamily: "'Lora', serif", fontStyle: "italic" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--c1)] to-[var(--c2)] flex items-center justify-center text-white text-xs font-bold" style={{ "--c1": r.color, "--c2": r.color2 } as React.CSSProperties}>
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0c4a6e" }}>{r.author}</p>
                  <p className="text-xs text-[#0c4a6e]/50">Verified Purchase</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}