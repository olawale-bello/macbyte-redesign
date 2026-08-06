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

const capstone = services.find((s) => s.icon === "Layers")
const rest = services.filter((s) => s.icon !== "Layers")
const bentoItems = [capstone, ...rest]

const spans = [
  "col-span-2 row-span-1 sm:col-span-2 sm:row-span-2", // End-to-End Security (featured)
  "col-span-1", // Email Protection
  "col-span-1", // Cloud & Network
  "col-span-2", // VAPT (long title)
  "col-span-1", // Endpoint Protection
  "col-span-1", // Managed IT
  "col-span-2", // Compliance & Governance
]

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
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-(--glass)/10 bg-(--glass)/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
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

        <div className="mt-12 grid grid-cols-2 auto-rows-[minmax(150px,auto)] gap-4 sm:grid-cols-4">
          {bentoItems.map((service, i) => {
            const Icon = icons[service.icon]
            const featured = i === 0
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${spans[i]} ${
                  featured
                    ? "justify-center border-(--glass)/10 bg-gradient-to-br from-primary/15 via-primary-2/10 to-accent/10 hover:border-(--glass)/20"
                    : "justify-between border-(--glass)/8 bg-(--glass)/[0.03] hover:border-(--glass)/20 hover:bg-(--glass)/[0.06]"
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <div
                  className={`flex items-center justify-center rounded-xl border border-(--glass)/10 bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2 transition-transform duration-300 group-hover:scale-110 ${
                    featured ? "h-14 w-14" : "h-12 w-12"
                  }`}
                >
                  <Icon className={featured ? "h-7 w-7" : "h-6 w-6"} strokeWidth={1.75} />
                </div>

                <div className={featured ? "mt-6" : "mt-5"}>
                  <h3
                    className={`font-semibold leading-snug text-fg ${
                      featured ? "text-xl" : "text-base"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-fg-muted ${
                      featured ? "text-sm" : "text-sm line-clamp-2"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-medium text-fg-muted">
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
