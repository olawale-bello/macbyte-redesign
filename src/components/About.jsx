import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  ClipboardCheck,
  ShieldCheck,
  CloudCog,
  ShieldAlert,
  Settings2,
  ArrowRight,
} from "lucide-react"
import { about, expertisePage } from "../content"

const icons = { ClipboardCheck, ShieldCheck, CloudCog, ShieldAlert, Settings2 }

const spans = [
  "col-span-2", // Compliance & Governance (featured)
  "col-span-1", // Managed Security Operations
  "col-span-1", // Network & Infrastructure Security
  "col-span-2", // Penetration Testing & Vulnerability Management (long title)
  "col-span-2", // IT & Infrastructure Support
]

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

        <div className="mt-12 grid grid-cols-2 auto-rows-[minmax(150px,auto)] gap-4 sm:grid-cols-4">
          {expertisePage.expertiseAreas.map((area, i) => {
            const Icon = icons[area.icon]
            const featured = i === 0
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${spans[i]} ${
                  featured
                    ? "border-white/10 bg-gradient-to-br from-primary-2/15 via-primary/10 to-accent/10 hover:border-white/20"
                    : "border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary-2/20 to-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <div
                  className={`flex items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2 transition-transform duration-300 group-hover:scale-110 ${
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
                    {area.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-fg-muted ${
                      featured ? "text-sm" : "text-sm line-clamp-2"
                    }`}
                  >
                    {area.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

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
