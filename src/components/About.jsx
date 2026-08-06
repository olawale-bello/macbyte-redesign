import { motion } from "framer-motion"
import { Target, TrendingUp, CheckCircle2 } from "lucide-react"
import { about } from "../content"

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-2" />
            {about.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            {about.headline}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-fg-muted">{about.mission}</p>
        </motion.div>

        {/* Expertise tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {about.expertise.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-fg backdrop-blur-xl transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08]"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Approach + Results */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2">
              <Target className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-fg">Our Approach</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{about.approach}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-[100px]"
            />
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary-2/20 text-accent">
              <TrendingUp className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-fg">Our Results</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{about.results}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
