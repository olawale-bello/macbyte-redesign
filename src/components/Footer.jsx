import { useState } from "react"
import { Link } from "react-router-dom"
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react"
import { brand, footer, contact, newsletter } from "../content"

const toPath = (href) => (href.startsWith("#") ? `/${href}` : href)

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="relative border-t border-(--glass)/10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-fg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-2">
                <ShieldCheck className="h-4 w-4 text-white" strokeWidth={2.25} />
              </span>
              {brand.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted">
              Canadian cybersecurity consultation tailored to your business needs.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                to={toPath(link.href)}
                className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {contact.email}
            </a>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-(--glass)/8 bg-(--glass)/[0.03] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-fg">{newsletter.body}</p>
          {subscribed ? (
            <div className="flex items-center gap-2 text-sm text-success">
              <CheckCircle2 className="h-4 w-4" />
              You're subscribed.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2 sm:w-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-(--glass)/10 bg-(--glass)/5 px-4 py-2.5 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors duration-200 focus:border-primary-2 focus:ring-2 focus:ring-primary-2/30"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primary-2 px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                {newsletter.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 border-t border-(--glass)/10 pt-6">
          <p className="text-xs text-fg-subtle">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
