import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { hero } from "../content"
import GlobePulse from "./GlobePulse"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 -z-10 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[110px]" />

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {hero.eyebrow}
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{hero.headline}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-fg-muted">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-6 py-3.5 text-sm font-semibold text-fg backdrop-blur transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.14]"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-16 w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[720px]"
        >
          <GlobePulse />
        </motion.div>
      </div>
    </section>
  )
}
