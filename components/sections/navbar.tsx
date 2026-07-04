"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const links = [
  { href: "#science", label: "Science" },
  { href: "#ingredients", label: "Ingredients" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
]

const productLinks = [
  { href: "/products/cerebranova", label: "Brain Formula" },
  { href: "/products/turmeric", label: "Golden Guard Turmeric" },
  { href: "/products/cerbella", label: "Cerbella Advanced Nootropic" },
  { href: "/products/cerefolin", label: "Cerefolin Brain Wellness" },
  { href: "/products/neuriva", label: "NEURIVA Memory 3D" },
  { href: "/products/neuriva-ultra", label: "NEURIVA Ultra" },
  { href: "/products/neuriva-original", label: "NEURIVA Original" },
  { href: "/products/neuriva-plus", label: "NEURIVA Plus" },
  { href: "/products/neuriva-original-gummies", label: "NEURIVA Original Gummies" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-[#0284c7]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0284c7] to-[#0891b2] flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-[#0284c7]/20 group-hover:shadow-[#0284c7]/30 transition-all">
            CN
          </div>
          <span className="font-semibold text-base tracking-tight">Cerebra<span className="text-[#7dd3fc]">Nova</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0c4a6e]/70">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 hover:text-[#0284c7] transition-colors cursor-pointer"
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/90 backdrop-blur-xl border border-[#0284c7]/10 rounded-2xl shadow-xl shadow-[#0284c7]/10 overflow-hidden"
                >
                  {productLinks.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      onClick={() => setProductsOpen(false)}
                      className="block px-5 py-3.5 text-sm hover:bg-[#f0f9ff] hover:text-[#0284c7] transition-colors border-b border-[#0284c7]/5 last:border-0"
                    >
                      {p.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#0284c7] transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" asChild className="hidden md:inline-flex bg-gradient-to-r from-[#0284c7] to-[#0891b2] border-0 text-white shadow-lg shadow-[#0284c7]/20">
            <a href="https://amzn.to/4wsXIfC" target="_blank" rel="sponsored">Order on Amazon</a>
          </Button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#0c4a6e]/60">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[#0284c7]/10 bg-white/95 px-6 py-4 space-y-3"
        >
          <p className="text-xs font-semibold text-[#0c4a6e]/40 uppercase tracking-wider pt-1">Products</p>
          {productLinks.map((p) => (
            <a key={p.href} href={p.href} onClick={() => setMobileOpen(false)} className="block text-sm text-[#0284c7] font-medium py-1.5">
              {p.label}
            </a>
          ))}
          <div className="border-t border-[#0284c7]/10 pt-3 mt-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-sm text-[#0c4a6e]/70 hover:text-[#0284c7] py-2">
                {l.label}
              </a>
            ))}
          </div>
          <Button size="sm" asChild className="w-full bg-gradient-to-r from-[#0284c7] to-[#0891b2] border-0 mt-2">
            <a href="https://amzn.to/4wsXIfC" target="_blank" rel="sponsored" onClick={() => setMobileOpen(false)}>Order on Amazon</a>
          </Button>
        </motion.div>
      )}
    </nav>
  )
}
