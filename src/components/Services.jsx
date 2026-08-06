import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  MailWarning,
  CloudCog,
  ShieldAlert,
  Laptop,
  Settings2,
  ClipboardCheck,
  Layers,
  ArrowRight,
} from "lucide-react"
import { servicesIntro, services } from "../content"

const icons = {
  MailWarning,
  CloudCog,
  ShieldAlert,
  Laptop,
  Settings2,
  ClipboardCheck,
  Layers,
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[500px] -translate-y-1/2 bg-primary/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {servicesIntro.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            {servicesIntro.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            {servicesIntro.body}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <span
                key={service.title}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-fg backdrop-blur-xl transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <Icon className="h-4 w-4 text-primary-2" strokeWidth={1.75} />
                {service.title}
              </span>
            )
          })}
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium text-fg-muted">
          {servicesIntro.closing}
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            to={servicesIntro.learnMore.href}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            {servicesIntro.learnMore.text}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
