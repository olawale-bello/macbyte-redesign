import { motion } from "framer-motion"
import { ShieldCheck, Fingerprint, Compass } from "lucide-react"
import pillarProactive from "../assets/images/pillar-proactive.webp"
import pillarCustomized from "../assets/images/pillar-customized.webp"
import pillarExperience from "../assets/images/pillar-experience.webp"

const pillarIcons = [ShieldCheck, Fingerprint, Compass]

const pillarImages = [
  { src: pillarProactive, alt: "Digital shield held above a robotic hand" },
  { src: pillarCustomized, alt: "IT specialist working with system administrators in a server hub" },
  { src: pillarExperience, alt: "Hand presenting security and quality standard icons" },
]

export default function PillarCards({ pillars, className = "" }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-3 ${className}`}>
      {pillars.map((pillar, i) => {
        const Icon = pillarIcons[i]
        const image = pillarImages[i]
        return (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-(--glass)/8 bg-(--glass)/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-(--glass)/20 hover:bg-(--glass)/[0.06]"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-accent backdrop-blur-md">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-base font-semibold text-fg">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{pillar.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
