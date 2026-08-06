import { motion } from "framer-motion"
import { visuals } from "../content"
import serverRoom from "../assets/images/server-room.webp"
import securityOperations from "../assets/images/security-operations.webp"

const images = {
  "server-room": serverRoom,
  "security-operations": securityOperations,
}

export default function Visuals() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[440px] -translate-y-1/2 bg-accent/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-(--glass)/10 bg-(--glass)/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {visuals.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            {visuals.headline}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {visuals.items.map((item, i) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-(--glass)/10"
            >
              <img
                src={images[item.image]}
                alt={item.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-white">{item.caption}</h3>
                <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-white/80">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
