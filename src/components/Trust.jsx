import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ShieldCheck, Fingerprint, Compass, ArrowRight } from "lucide-react"
import { trust } from "../content"

const pillarIcons = [ShieldCheck, Fingerprint, Compass]

export default function Trust() {
  return (
    <section id="trust" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-(--glass)/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-(--glass)/10 bg-(--glass)/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {trust.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            {trust.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-fg-muted">{trust.body}</p>
        </motion.div>

        {/* Pillars */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {trust.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i]
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-(--glass)/8 bg-(--glass)/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-(--glass)/20 hover:bg-(--glass)/[0.06]"
              >
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-semibold text-fg">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <Link
            to={trust.learnMore.href}
            className="group inline-flex items-center gap-2 rounded-full border border-(--glass)/15 bg-(--glass)/5 px-6 py-3 text-sm font-semibold text-fg backdrop-blur transition-colors duration-200 hover:border-(--glass)/25 hover:bg-(--glass)/10"
          >
            {trust.learnMore.text}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
