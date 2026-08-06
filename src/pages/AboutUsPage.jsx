import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Quote, Users2, ShieldCheck, Fingerprint, Compass, Medal, ArrowRight } from "lucide-react"
import { aboutPage } from "../content"

const pillarIcons = [ShieldCheck, Fingerprint, Compass]

export default function AboutUsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-(--glass)/10 bg-(--glass)/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-2" />
              {aboutPage.eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-fg sm:text-5xl">
              <span className="text-gradient">{aboutPage.headline}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {aboutPage.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-(--glass)/10 bg-gradient-to-br from-(--glass)/[0.05] to-(--glass)/[0.02] p-8 backdrop-blur-xl lg:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-2/20 blur-[100px]"
            />
            <Quote className="h-8 w-8 text-primary-2" strokeWidth={1.5} />
            <p className="mt-4 text-xl font-medium leading-relaxed text-fg sm:text-2xl">
              {aboutPage.philosophy}
            </p>
            <div className="mt-8 flex items-start gap-3 border-t border-(--glass)/10 pt-6">
              <Users2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
              <p className="text-sm leading-relaxed text-fg-muted">{aboutPage.clientBase}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-2xl font-bold tracking-tight text-fg sm:text-3xl"
          >
            The principles that guide every engagement
          </motion.h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {aboutPage.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i]
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-(--glass)/8 bg-(--glass)/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-(--glass)/20 hover:bg-(--glass)/[0.06]"
                >
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                  <h3 className="mt-4 text-base font-semibold text-fg">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {pillar.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership spotlight */}
      <section className="relative py-16 pb-28 lg:py-20 lg:pb-36">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[380px] bg-primary/10 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-(--glass)/10 bg-(--glass)/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Leadership
            </div>

            <div className="relative mt-6 overflow-hidden rounded-3xl border border-(--glass)/10 bg-gradient-to-br from-(--glass)/[0.05] to-(--glass)/[0.02] p-8 backdrop-blur-xl lg:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[110px]"
              />

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-2 text-xl font-bold text-white shadow-glow">
                  JH
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-semibold text-fg">{aboutPage.leader.name}</h2>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-(--glass)/10 bg-(--glass)/5 px-3 py-1 text-xs font-medium text-fg-muted">
                      <Medal className="h-3.5 w-3.5 text-accent" />
                      {aboutPage.leader.title}
                    </span>
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
                    {aboutPage.leader.bio}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {["Military service", "Law enforcement", "Strategic precision"].map((tag) => (
                      <div
                        key={tag}
                        className="rounded-xl border border-(--glass)/8 bg-(--glass)/[0.03] px-4 py-3 text-center text-xs font-medium text-fg-muted"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
