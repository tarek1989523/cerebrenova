"use client"

import { motion } from "framer-motion"

const images = [
  { src: "/images/product-hero.png", label: "CerebraNova Front" },
  { src: "/images/product-front.jpg", label: "CerebraNova Details" },
  { src: "/images/product-side.jpg", label: "CerebraNova Side" },
  { src: "/images/product-label.jpg", label: "CerebraNova Label" },
  { src: "/images/turmeric/product-front.jpg", label: "Golden Guard Turmeric" },
  { src: "/images/turmeric/product-back.jpg", label: "Turmeric Details" },
]

export default function ProductGallery() {
  return (
    <section className="py-24 bg-white/60">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>CerebraNova</h2>
          <p className="text-[#0c4a6e]/60">Premium brain support. Quality you can trust.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              className={`bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-3 shadow-xl shadow-[#0284c7]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/10 hover:-translate-y-1 ${img.span ? "sm:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-full h-56 rounded-xl bg-gradient-to-br from-[#f0f9ff] to-white flex items-center justify-center overflow-hidden">
                <img src={img.src} alt={img.label} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-xs text-[#0c4a6e]/50 mt-2 font-medium">{img.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}