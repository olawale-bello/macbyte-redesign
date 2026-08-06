import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ShieldCheck, Menu, X } from "lucide-react"
import { brand, nav } from "../content"

const toPath = (href) => (href.startsWith("#") ? `/${href}` : href)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-fg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-2 shadow-glow">
            <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.25} />
          </span>
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              to={toPath(link.href)}
              className="text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to={toPath(nav.ctaHref)}
            className="cursor-pointer rounded-full bg-gradient-to-r from-primary to-primary-2 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            {nav.cta}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer rounded-lg p-2 text-fg lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-bg/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                to={toPath(link.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-fg-muted hover:bg-white/5 hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={toPath(nav.ctaHref)}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              {nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
