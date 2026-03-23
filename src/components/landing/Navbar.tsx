import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '../../lib/cn'
import { ThemeToggle } from '../dashboard/ThemeToggle'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#flavors', label: 'Flavors' },
  { href: '#philosophy', label: 'About' },
  { href: '#team', label: 'Our Team' },
  { href: '#contact', label: 'Contact' },
] as const

/**
 * Sticky navbar — clean logo + nav links + CTA button.
 * Gains a soft shadow + backdrop blur on scroll.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          'bg-[#F9F7F2]/95 backdrop-blur-md transition-all duration-300 dark:bg-[#111010]/95',
          scrolled
            ? 'border-b border-[#E8E5DF] shadow-[0_1px_20px_rgba(28,25,23,0.07)]'
            : 'border-b border-transparent',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          {/* Logo */}
          <a href="#hero" className="group flex flex-col leading-none" aria-label="Snoofy home">
            <span
              className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-[#E63946]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Snoofy
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
              Serve Love
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-[#1C1917] transition-colors duration-200 hover:text-[#E63946] dark:text-slate-200 dark:hover:text-[#E63946]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:flex" />
            <a
              href="#contact"
              className="hidden items-center rounded-full bg-[#E63946] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#c62f3a] hover:shadow-md md:flex"
            >
              Order Now
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8E5DF] bg-white text-[#1C1917] shadow-sm transition hover:bg-[#F9F7F2] lg:hidden dark:border-white/15 dark:bg-white/[0.06] dark:text-white"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                className="text-lg font-light"
                aria-hidden
              >
                {open ? '×' : '≡'}
              </motion.span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-[#E8E5DF] bg-[#F9F7F2] lg:hidden dark:border-white/10 dark:bg-[#111010]"
          >
            <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Mobile navigation">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-[#1C1917] transition hover:bg-white hover:text-[#E63946] dark:text-slate-200 dark:hover:bg-white/[0.06]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 rounded-xl bg-[#E63946] px-4 py-3 text-center text-base font-bold text-white transition hover:bg-[#c62f3a]"
                onClick={() => setOpen(false)}
              >
                Order Now
              </a>
              <div className="flex justify-center pt-3">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
