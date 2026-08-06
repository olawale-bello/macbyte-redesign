import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Clock, Send, CheckCircle2, Headset } from "lucide-react"
import { contact } from "../content"
import ImageBanner from "./ImageBanner"
import customerSupport from "../assets/images/customer-support.webp"

export default function Contact() {
  const [status, setStatus] = useState("idle")
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("submitted")
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-primary-2/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-fg-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {contact.eyebrow}
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              {contact.headline}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-fg-muted">{contact.body}</p>

            <div className="mt-8">
              <ImageBanner
                src={customerSupport}
                alt="Support team assisting clients"
                aspect="aspect-[16/9]"
                caption="A team that actually picks up"
                body="Real people ready to help, not a ticket queue that goes quiet."
              />
            </div>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-xl transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2">
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-fg">General inquiries</h3>
                  <p className="text-sm text-fg-muted">{contact.email}</p>
                </div>
              </a>

              <a
                href={`mailto:${contact.supportEmail}`}
                className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-xl transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2">
                  <Headset className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-fg">Support</h3>
                  <p className="text-sm text-fg-muted">{contact.supportEmail}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-2/20 text-primary-2">
                  <Clock className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-fg">Business hours</h3>
                  <p className="text-sm text-fg-muted">
                    {contact.hours}
                    <span className="ml-2 inline-flex items-center gap-1.5 text-xs font-medium text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      {contact.hoursNote}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl lg:p-10"
          >
            {status === "submitted" ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-success" strokeWidth={1.5} />
                <h3 className="mt-4 text-xl font-semibold text-fg">Message received</h3>
                <p className="mt-2 max-w-sm text-sm text-fg-muted">
                  Thanks for reaching out — our team will get back to you during business
                  hours ({contact.hours}).
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 cursor-pointer rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-fg hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-fg">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors duration-200 focus:border-primary-2 focus:ring-2 focus:ring-primary-2/30"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-fg">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors duration-200 focus:border-primary-2 focus:ring-2 focus:ring-primary-2/30"
                      placeholder="Your business"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-fg">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors duration-200 focus:border-primary-2 focus:ring-2 focus:ring-primary-2/30"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-fg">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors duration-200 focus:border-primary-2 focus:ring-2 focus:ring-primary-2/30"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  Send message
                  <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <p className="text-center text-xs text-fg-subtle">{contact.formDisclaimer}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
