"use client"

export default function Footer() {
  return (
    <footer className="py-12 bg-white/60 border-t border-[#0284c7]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0284c7] to-[#0891b2] flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-[#0284c7]/20">CN</div>
            <span className="font-semibold text-sm" style={{ color: "#0c4a6e" }}>Cerebra<span className="text-[#7dd3fc]">Nova</span></span>
          </a>
          <p className="text-xs text-[#0c4a6e]/50">Premium Brain Health Supplement</p>
        </div>
        <div className="text-center text-xs text-[#0c4a6e]/40 space-y-1 leading-relaxed">
          <p>* These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
          <p>Dietary supplements are not a substitute for a balanced and varied diet and a healthy lifestyle.</p>
          <p>&copy; 2026. All rights reserved. <a href="https://amzn.to/4wsXIfC" className="text-[#0284c7] hover:underline" target="_blank" rel="sponsored">Available on Amazon</a></p>
        </div>
      </div>
    </footer>
  )
}