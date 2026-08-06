import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { about } from "../content"

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[440px] bg-primary-2/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-2" />
            {about.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            {about.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-fg-muted">{about.mission}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
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

        <div className="mt-8 flex justify-center">
          <Link
            to="/our-expertise"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            See our full expertise
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
