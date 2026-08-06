import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarCheck2, Clock3, CheckCircle2 } from "lucide-react"
import { booking, services } from "../content"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const times = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"]

export default function Booking() {
  const [service, setService] = useState(services[0].title)
  const [day, setDay] = useState(days[0])
  const [time, setTime] = useState(times[0])
  const [status, setStatus] = useState("idle")

  const handleConfirm = (e) => {
    e.preventDefault()
    setStatus("confirmed")
  }

  return (
    <section id="booking" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 bg-accent/10 blur-[140px]" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {booking.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            {booking.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">{booking.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl lg:p-10"
        >
          {status === "confirmed" ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-12 w-12 text-success" strokeWidth={1.5} />
              <h3 className="mt-4 text-xl font-semibold text-fg">Consultation requested</h3>
              <p className="mt-2 max-w-sm text-sm text-fg-muted">
                {day} at {time} for {service}. We'll confirm your booking by email shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 cursor-pointer rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-fg hover:bg-white/10"
              >
                Book another slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-8">
              <div>
                <label htmlFor="booking-service" className="text-sm font-medium text-fg">
                  Select a service
                </label>
                <select
                  id="booking-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg outline-none transition-colors duration-200 focus:border-primary-2 focus:ring-2 focus:ring-primary-2/30"
                >
                  {services.map((s) => (
                    <option key={s.title} value={s.title} className="bg-bg-elevated">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-fg">
                  <CalendarCheck2 className="h-4 w-4 text-primary-2" />
                  Choose a day
                </div>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {days.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDay(d)}
                      className={`cursor-pointer rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                        day === d
                          ? "border-primary-2/60 bg-primary-2/20 text-fg"
                          : "border-white/10 bg-white/5 text-fg-muted hover:bg-white/10"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-fg">
                  <Clock3 className="h-4 w-4 text-primary-2" />
                  Choose a time
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        time === t
                          ? "border-primary-2/60 bg-primary-2/20 text-fg"
                          : "border-white/10 bg-white/5 text-fg-muted hover:bg-white/10"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
              >
                {booking.cta}
              </button>
              <p className="text-center text-xs text-fg-subtle">
                Consultations are free. A team member will confirm your exact time by email.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
