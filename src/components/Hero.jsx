import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, MailWarning, ClipboardCheck, ShieldAlert } from "lucide-react"
import { hero } from "../content"

const floatingBadges = [
  { icon: MailWarning, label: "Email Security", className: "left-[4%] top-[18%] lg:left-[2%]" },
  { icon: ShieldAlert, label: "Pen Testing", className: "right-[2%] top-[8%]" },
  { icon: ClipboardCheck, label: "Compliance", className: "right-[6%] bottom-[10%]" },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 -z-10 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              {hero.eyebrow}
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{hero.headline}</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-fg-muted">
              {hero.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
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
            className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg"
          >
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-white/10" />
            <div className="absolute inset-24 rounded-full border border-primary/30" />

            <motion.div
              className="absolute inset-24 rounded-full border-t-2 border-accent/70"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] shadow-glow backdrop-blur-xl">
                <ShieldCheck className="h-14 w-14 text-primary-2" strokeWidth={1.75} />
              </div>
            </div>

            {floatingBadges.map(({ icon: Icon, label, className }) => (
              <motion.div
                key={label}
                className={`absolute flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-fg shadow-glow-cyan backdrop-blur-xl ${className}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
