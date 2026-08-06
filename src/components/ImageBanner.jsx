import { motion } from "framer-motion"

export default function ImageBanner({ src, alt, caption, body, aspect = "aspect-[16/7]" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-3xl border border-(--glass)/10 ${aspect}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10 mix-blend-overlay" />
      {(caption || body) && (
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
          {caption && <h3 className="text-lg font-semibold text-white">{caption}</h3>}
          {body && (
            <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-white/80">{body}</p>
          )}
        </div>
      )}
    </motion.div>
  )
}
