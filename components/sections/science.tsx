"use client"

import { motion } from "framer-motion"

const studies = [
  {
    icon: "brain",
    journal: "Citicoline Research",
    title: "Xerenoos® for Brain Energy",
    desc: "Citicoline supports healthy brain cell membrane formation and neurotransmitter production, helping <strong>memory, focus, and mental energy</strong>.",
    url: "https://amzn.to/4wsXIfC",
    color: "#0284c7",
    color2: "#38bdf8",
  },
  {
    icon: "leaf",
    journal: "Bacopa Research",
    title: "Bacognize® for Memory",
    desc: "Standardized Bacognize® Bacopa Monnieri extract is clinically studied for <strong>memory retention, information processing, and cognitive function</strong>.",
    url: "https://amzn.to/4wsXIfC",
    color: "#0891b2",
    color2: "#22d3ee",
  },
  {
    icon: "flask",
    journal: "Phosphatidylserine Research",
    title: "SerinAid® for Mental Clarity",
    desc: "SerinAid® Phosphatidylserine is clinically studied to support <strong>mental clarity, focus, and cognitive performance</strong> under demanding conditions.",
    url: "https://amzn.to/4wsXIfC",
    color: "#16a34a",
    color2: "#4ade80",
  },
]

const stats = [
  { value: "3", label: "Clinically Studied\nIngredients", color: "#0284c7" },
  { value: "60", label: "Capsules\nPer Bottle", color: "#0891b2" },
  { value: "USA", label: "Made in GMP\nFacility", color: "#16a34a" },
  { value: "GF", label: "Gluten Free\nClean Formula", color: "#0c4a6e" },
]

export default function Science() {
  return (
    <section id="science" className="py-24 bg-white/60">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-0.5 bg-[#0284c7] rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0c4a6e" }}>Clinically Studied Ingredients</h2>
          <p className="text-[#0c4a6e]/60">Every ingredient in CerebraNova is backed by clinical research for cognitive health.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study, i) => (
            <motion.div
              key={study.title}
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-7 shadow-xl shadow-[#0284c7]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--c1)]/20 to-[var(--c2)]/20 flex items-center justify-center mb-4" style={{ "--c1": study.color, "--c2": study.color2 } as React.CSSProperties}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={study.color} strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={study.icon === "brain" ? "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" : study.icon === "leaf" ? "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" : "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"} />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: study.color }}>{study.journal}</span>
              <h3 className="text-xl font-bold mt-2 mb-3" style={{ color: "#0c4a6e" }}>{study.title}</h3>
              <p className="text-sm text-[#0c4a6e]/70 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: study.desc }} />
              <a href={study.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold transition-colors" style={{ color: study.color }}>Learn more →</a>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-[#0284c7]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0284c7]/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl sm:text-5xl font-extrabold" style={{ color: stat.color, fontFamily: "'Lora', serif" }}>{stat.value}</p>
              <p className="text-xs text-[#0c4a6e]/50 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}