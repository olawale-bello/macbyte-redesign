import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Compass,
  CloudCog,
  ShieldCheck,
  BarChart3,
  Settings2,
  Sparkles,
  Handshake,
  Users2,
  GraduationCap,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { servicesPage } from "../content"

const consultingIcons = { Compass, CloudCog, ShieldCheck, BarChart3, Settings2, Sparkles }
const collabIcons = { Handshake, Users2, GraduationCap }

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-2" />
                {servicesPage.eyebrow}
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-fg sm:text-5xl">
                <span className="text-gradient">{servicesPage.headline}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
                {servicesPage.intro}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
                {servicesPage.approach}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-[100px]"
              />
              <h2 className="text-lg font-semibold text-fg">{servicesPage.cta.eyebrow}</h2>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {servicesPage.cta.body}
              </p>
              <Link
                to={servicesPage.cta.href}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                {servicesPage.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting services */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-bold tracking-tight text-fg sm:text-3xl"
          >
            {servicesPage.sectionTitle}
          </motion.h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesPage.consulting.map((item, i) => {
              const Icon = consultingIcons[item.icon]
              const open = openIndex === i
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.summary}</p>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                          {item.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="mt-4 inline-flex cursor-pointer items-center gap-1.5 self-start text-sm font-semibold text-primary-2 transition-colors duration-200 hover:text-accent"
                  >
                    {open ? "Show less" : "Learn More"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Collaborations */}
      <section className="relative py-16 pb-28 lg:py-20 lg:pb-32">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[380px] bg-primary-2/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-bold tracking-tight text-fg sm:text-3xl"
          >
            {servicesPage.collaborationsTitle}
          </motion.h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {servicesPage.collaborations.map((col, i) => {
              const Icon = collabIcons[col.icon]
              return (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary-2/20 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-fg">{col.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {col.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              to={servicesPage.cta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {servicesPage.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
