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
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { solutionsPage } from "../content"
import ImageBanner from "../components/ImageBanner"
import fiberNetwork from "../assets/images/fiber-network.webp"
import threatDetection from "../assets/images/threat-detection.webp"

const icons = { MailWarning, CloudCog, ShieldAlert, Laptop, Settings2, ClipboardCheck, Layers }

export default function SolutionsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-(--glass)/10 bg-(--glass)/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {solutionsPage.eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-fg sm:text-5xl">
              <span className="text-gradient">{solutionsPage.headline}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {solutionsPage.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ImageBanner
            src={fiberNetwork}
            alt="Fiber optic network cables"
            caption="Built on solid infrastructure"
            body="Every solution here runs on the same principle: protect the connections your business depends on."
          />
        </div>
      </section>

      {/* Groups */}
      {solutionsPage.groups.map((group, gi) => (
        <section key={group.title} className="relative py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <span className="text-sm font-semibold text-primary-2">
                {String(gi + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                {group.title}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-fg-muted">{group.description}</p>
            </motion.div>

            <div
              className={`mt-8 grid gap-5 ${group.items.length > 1 ? "lg:grid-cols-2" : ""}`}
            >
              {group.items.map((item, i) => {
                const Icon = icons[item.icon]
                const withImage = item.icon === "MailWarning"
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`rounded-2xl border border-(--glass)/8 bg-(--glass)/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-(--glass)/20 hover:bg-(--glass)/[0.06] ${
                      withImage ? "overflow-hidden lg:flex lg:items-center" : "p-6 lg:p-8"
                    }`}
                  >
                    <div className={withImage ? "p-6 lg:flex-1 lg:p-8" : ""}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-(--glass)/10 bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-fg">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                        {item.description}
                      </p>
                      <ul className="mt-5 space-y-2.5 border-t border-(--glass)/10 pt-5">
                        {item.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {withImage && (
                      <div className="relative h-48 lg:h-full lg:w-2/5 lg:shrink-0">
                        <img
                          src={threatDetection}
                          alt="Security analyst monitoring threat detection dashboards"
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Capstone + closing + CTA */}
      <section className="relative py-16 pb-28 lg:py-20 lg:pb-32">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[380px] bg-primary-2/10 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center gap-6 overflow-hidden rounded-2xl border border-(--glass)/10 bg-gradient-to-r from-primary/15 via-primary-2/10 to-accent/10 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-2 text-white shadow-glow">
              <Layers className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-fg">{solutionsPage.capstone.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                {solutionsPage.capstone.description}
              </p>
            </div>
          </motion.div>

          <p className="mt-10 text-center text-sm font-medium text-fg-muted">
            {solutionsPage.closing}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-10 overflow-hidden rounded-3xl border border-(--glass)/10 bg-gradient-to-br from-(--glass)/[0.05] to-(--glass)/[0.02] p-8 text-center backdrop-blur-xl"
          >
            <p className="text-base leading-relaxed text-fg-muted">{solutionsPage.cta.body}</p>
            <Link
              to={solutionsPage.cta.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {solutionsPage.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
