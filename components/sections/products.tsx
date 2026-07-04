"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const products = [
  {
    image: "/images/product-hero.png",
    title: "Brain Formula",
    desc: "Xerenoos® Citicoline · Bacognize® Bacopa · SerinAid® PS",
    href: "https://amzn.to/4wsXIfC",
    page: "/products/cerebranova",
    badge: "Brain Health",
    color: "#0284c7",
    price: "$69.95",
    unit: "$1.17/count",
  },
  {
    image: "/images/turmeric/product-front.jpg",
    title: "Golden Guard Turmeric Extract",
    desc: "BCM-95® Turmeric · 500 mg · Joint & Cognitive Support",
    href: "https://amzn.to/44JX9C1",
    page: "/products/turmeric",
    badge: "Golden Guard",
    color: "#d97706",
    price: "$39.95",
    unit: "$0.67/count",
  },
  {
    image: "/images/cerbella/product-1.jpg",
    title: "Cerbella® Advanced Brain Nootropic",
    desc: "Omega-3 DHA/EPA · Green Tea Catechins · ThymoQuin®",
    href: "https://amzn.to/4gm7mf4",
    page: "/products/cerbella",
    badge: "Cerbella",
    color: "#7c3aed",
    price: "$39.99",
    unit: "$0.67/count",
  },
  {
    image: "/images/cerefolin/product-1.jpg",
    title: "Cerefolin Brain Wellness",
    desc: "L-Methylfolate · NAC · Vitamin B12 · Cognitive Support",
    href: "https://amzn.to/3SA65HA",
    page: "/products/cerefolin",
    badge: "Cerefolin",
    color: "#059669",
    price: "$69.99",
    unit: "$1.17/count",
  },
  {
    image: "/images/neuriva/1.jpg",
    title: "NEURIVA Memory 3D",
    desc: "Vitamin B12 & B6 · Folic Acid · Cognicell · Neurofactor",
    href: "https://amzn.to/3TgQYTs",
    page: "/products/neuriva",
    badge: "NEURIVA",
    color: "#e11d48",
    price: "$29.99",
    unit: "$0.60/count",
  },
  {
    image: "/images/neuriva-ultra/1.jpg",
    title: "NEURIVA Ultra Brain Supplement",
    desc: "Phosphatidylserine · Cognivive · Neurofactor · B Vitamins",
    href: "https://amzn.to/4awQUoK",
    page: "/products/neuriva-ultra",
    badge: "NEURIVA Ultra",
    color: "#db2777",
    price: "$61.00",
    unit: "$2.03/serving",
  },
  {
    image: "/images/neuriva-original/1.jpg",
    title: "NEURIVA Original Brain Supplement",
    desc: "Phosphatidylserine · Neurofactor · Memory & Focus · 28 Count",
    href: "https://amzn.to/4bbslxJ",
    page: "/products/neuriva-original",
    badge: "NEURIVA Original",
    color: "#0284c7",
    price: "$27.97",
    unit: "$1.00/count",
  },
  {
    image: "/images/neuriva-plus/1.jpg",
    title: "NEURIVA Plus Brain Supplement",
    desc: "Neurofactor · Phosphatidylserine · B6 · B12 · Folic Acid · 30 Count",
    href: "https://amzn.to/4yjYi0W",
    page: "/products/neuriva-plus",
    badge: "NEURIVA Plus",
    color: "#8b5cf6",
    price: "$39.97",
    unit: "$1.33/count",
  },
  {
    image: "/images/neuriva-original-gummies/1.jpg",
    title: "NEURIVA Original Strawberry Gummies",
    desc: "Neurofactor · Phosphatidylserine · Brain Health · 50 Gummies",
    href: "https://amzn.to/4bbsTUj",
    page: "/products/neuriva-original-gummies",
    badge: "NEURIVA Gummies",
    color: "#f43f5e",
    price: "$29.67",
    unit: "$0.59/gummy",
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Our Products</h2>
          <p className="text-[#0c4a6e]/60">Premium supplements for brain health, joints, and overall wellness.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#0284c7]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-[#f0f9ff] to-white flex items-center justify-center mb-4 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-bold text-sm mb-1 leading-tight" style={{ color: "#0c4a6e" }}>{p.title}</h3>
              <p className="text-[10px] mb-2" style={{ color: "#0c4a6e" }}>{p.desc}</p>
              <span className="inline-block text-xs bg-[var(--c)]/10 text-[var(--c)] px-2.5 py-0.5 rounded-full font-semibold mb-2" style={{"--c": p.color} as React.CSSProperties}>{p.badge}</span>
              <p className="text-lg font-extrabold" style={{ color: p.color, fontFamily: "'Lora', serif" }}>{p.price}</p>
              <p className="text-[10px] mb-3" style={{ color: "#0c4a6e" }}>{p.unit}</p>
              <div className="flex flex-col gap-2">
                <Button className="border-0 text-white shadow-lg w-full text-xs py-2 h-auto" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}dd)` }} asChild>
                  <a href={p.href} target="_blank" rel="sponsored">View on Amazon</a>
                </Button>
                <a href={p.page} className="text-xs font-semibold hover:underline" style={{ color: p.color }}>Learn More →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}