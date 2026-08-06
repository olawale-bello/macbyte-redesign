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

const gridServices = services.filter((s) => s.icon !== "Layers")
const capstone = services.find((s) => s.icon === "Layers")

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
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gridServices.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-glow"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 text-base font-semibold leading-snug text-fg">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Capstone: End-to-End Security */}
        {capstone && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-primary/15 via-primary-2/10 to-accent/10 p-6 backdrop-blur-xl sm:flex sm:items-center sm:gap-6 sm:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-2 text-white shadow-glow">
              <Layers className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <div className="mt-4 sm:mt-0">
              <h3 className="text-base font-semibold text-fg">{capstone.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                {capstone.description}
              </p>
            </div>
          </motion.div>
        )}

        <p className="mt-10 text-center text-sm font-medium text-fg-muted">
          {servicesIntro.closing}
        </p>

        <div className="mt-6 text-center">
          <Link
            to={servicesIntro.learnMore.href}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-fg backdrop-blur transition-colors duration-200 hover:border-white/25 hover:bg-white/10"
          >
            {servicesIntro.learnMore.text}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
