import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { trust } from "../content"
import PillarCards from "./PillarCards"

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
        <PillarCards pillars={trust.pillars} className="mt-12" />

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
