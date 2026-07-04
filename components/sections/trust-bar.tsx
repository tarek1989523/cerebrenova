"use client"

import { motion } from "framer-motion"

const ingredients = ["Xerenoos® Citicoline", "Bacognize® Bacopa", "SerinAid® PS", "Boswellia Serrata", "GMP Certified"]

const colors = ["#0284c7", "#0891b2", "#16a34a", "#0c4a6e"]

export default function TrustBar() {
  return (
    <section className="border-y border-[#0284c7]/10 bg-white/40">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-center text-[10px] text-[#0c4a6e]/40 uppercase tracking-[0.15em] font-semibold mb-5">
          Premium Patented Ingredients
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {ingredients.map((name, i) => (
            <motion.span
              key={name}
              className="tracking-tight"
              style={{ color: colors[i % colors.length] }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}