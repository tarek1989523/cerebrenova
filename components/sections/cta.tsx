"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="buy" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0284c7] to-[#0e7490]"></div>
      <div className="morph-blob w-[500px] h-[500px] bg-gradient-to-r from-white/10 to-white/5 opacity-100 top-[-20%] right-[-10%]" />
      <div className="morph-blob w-[400px] h-[400px] bg-gradient-to-r from-[#38bdf8] to-[#22d3ee] opacity-[0.15] bottom-[-20%] left-[-10%]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available Now on Amazon
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-3">Order CerebraNova Today</h2>
          <p className="text-blue-200/80 mb-8 text-lg">60 capsules — premium brain health support. Made in USA.</p>

          <Button size="lg" asChild className="bg-white text-[#0284c7] hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 transition-all shadow-lg h-auto px-12 py-5 text-lg font-bold rounded-full border-0">
            <a href="https://amzn.to/4wsXIfC" target="_blank" rel="noopener noreferrer">
              Order on Amazon
            </a>
          </Button>
          <p className="text-blue-200/60 text-xs mt-4">Premium Quality · GMP Certified · Gluten Free</p>

          <div className="flex justify-center gap-6 mt-5 text-xs text-blue-200/50">
            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-400"></span> Secure Checkout</span>
            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-400"></span> Amazon Prime</span>
            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-400"></span> Made in USA</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}