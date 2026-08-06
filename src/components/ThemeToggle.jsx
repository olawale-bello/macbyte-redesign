import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

function getInitialTheme() {
  if (typeof document === "undefined") return "dark"
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"
}

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={`relative flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--glass)/10 bg-(--glass)/5 text-fg-muted transition-colors duration-200 hover:border-(--glass)/20 hover:bg-(--glass)/10 hover:text-fg ${className}`}
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-300 ${
          theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
        strokeWidth={1.75}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        }`}
        strokeWidth={1.75}
      />
    </button>
  )
}
