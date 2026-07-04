"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "What are the key ingredients?",
    a: "CerebraNova features Xerenoos® Citicoline (250 mg) for brain energy, Bacognize® Bacopa Monnieri (300 mg, 20% bacosides) for memory, and SerinAid® Phosphatidylserine (100 mg) for mental clarity.",
  },
  {
    q: "How long until I see results?",
    a: "Many users report noticeable improvements in focus and mental clarity within 2-4 weeks of consistent use. For best results, take daily for at least 30 days.",
  },
  {
    q: "How should I take CerebraNova?",
    a: "The recommended dose is 2 capsules daily with water, preferably with a meal. Each bottle contains 60 capsules — a 30-day supply.",
  },
  {
    q: "Is it gluten-free?",
    a: "Yes. CerebraNova is gluten-free, non-GMO, and contains no artificial additives or preservatives. Made in a GMP-certified facility in the USA.",
  },
  {
    q: "Where is it manufactured?",
    a: "CerebraNova is manufactured in the USA in a GMP-certified facility, ensuring the highest quality standards and third-party testing.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0c4a6e" }}>Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl shadow-[#0284c7]/5 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm"
                style={{ color: "#0c4a6e" }}
              >
                <span>{faq.q}</span>
                <span className={`text-[#0c4a6e]/30 text-xs transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}>▼</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#0c4a6e" }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}