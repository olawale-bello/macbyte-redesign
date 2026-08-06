import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  ClipboardCheck,
  ShieldCheck,
  CloudCog,
  ShieldAlert,
  Settings2,
  Search,
  Compass,
  TrendingUp,
  Target,
  Users2,
  ArrowRight,
} from "lucide-react"
import { expertisePage } from "../content"
import ImageBanner from "../components/ImageBanner"
import technicianDatacenter from "../assets/images/technician-datacenter.webp"

const areaIcons = { ClipboardCheck, ShieldCheck, CloudCog, ShieldAlert, Settings2 }
const stepIcons = { Search, Compass, Settings2, TrendingUp }

export default function OurExpertisePage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-2/20 blur-[120px]" />

        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-2" />
              {expertisePage.eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-fg sm:text-5xl">
              <span className="text-gradient">{expertisePage.headline}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {expertisePage.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ImageBanner
            src={technicianDatacenter}
            alt="Technician working on a laptop in a data center"
            caption="Hands-on, not just theoretical"
            body="Our expertise is built in the infrastructure itself — assessing, configuring, and supporting systems day to day."
          />
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-bold tracking-tight text-fg sm:text-3xl"
          >
            Areas of Expertise
          </motion.h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertisePage.expertiseAreas.map((area, i) => {
              const Icon = areaIcons[area.icon]
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{area.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="relative py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 bg-primary/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {expertisePage.methodology.eyebrow}
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
              {expertisePage.methodology.headline}
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertisePage.methodology.steps.map((step, i) => {
              const Icon = stepIcons[step.icon]
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <span className="text-xs font-semibold text-primary-2">
                    Step {i + 1}
                  </span>
                  <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary-2/20 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Approach + Results */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
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
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{expertisePage.approach}</p>
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
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{expertisePage.results}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership teaser + CTA */}
      <section className="relative py-16 pb-28 lg:py-20 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2">
                <Users2 className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="text-sm leading-relaxed text-fg-muted">
                {expertisePage.leadershipTeaser.body}
              </p>
            </div>
            <Link
              to={expertisePage.leadershipTeaser.href}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-fg backdrop-blur transition-colors duration-200 hover:border-white/25 hover:bg-white/10"
            >
              {expertisePage.leadershipTeaser.linkText}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <div className="mt-10 text-center">
            <Link
              to="/#booking"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
