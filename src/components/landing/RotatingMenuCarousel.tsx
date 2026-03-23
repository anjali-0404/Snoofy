import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

type MenuItem = {
  id: string
  name: string
  description: string
  season: string
  color: string
  image: string
}

type Props = {
  items: MenuItem[]
  autoRotateInterval?: number
}

/**
 * Rotating Menu Carousel — cycles through seasonal menu items with smooth transitions.
 * Auto-rotates by default but can be manually controlled.
 */
export function RotatingMenuCarousel({
  items,
  autoRotateInterval = 5000,
}: Props) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetAutoRotateTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, autoRotateInterval)
  }

  useEffect(() => {
    resetAutoRotateTimer() // Initialize and reset timer
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [items.length, autoRotateInterval])

  const handleManualNavigation = (newIndex: number) => {
    setCurrent(newIndex)
    resetAutoRotateTimer() // Reset timer on manual navigation
  }

  const goToPrev = () => {
    const newIndex = (current - 1 + items.length) % items.length
    handleManualNavigation(newIndex)
  }

  const goToNext = () => {
    const newIndex = (current + 1) % items.length
    handleManualNavigation(newIndex)
  }

  const item = items[current]

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary dark:text-brand-secondary">
            Rotating Menu
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            New flavors, every season
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Classic staples live alongside rotating seasonal specials that taste
            exactly like the moment they were inspired by.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Main carousel image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${item.id}-image`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-video overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-700 md:aspect-square"
            >
              <picture>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1546039907-7b2bfdb7e405?w=600&h=500&fit=crop'
                  }}
                />
              </picture>
              <div
                className="absolute inset-0 opacity-20"
                aria-hidden
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Info + controls */}
          <div className="flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${item.id}-info`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div>
                  <p
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: item.color }}
                  >
                    {item.season} Special
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                aria-label="Previous item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="flex gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleManualNavigation(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === current
                        ? 'w-8 bg-brand-primary dark:bg-brand-secondary'
                        : 'w-2 bg-slate-300 dark:bg-slate-600'
                    }`}
                    aria-label={`Go to item ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                {current + 1} / {items.length}
              </span>
              <button
                onClick={goToNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                aria-label="Next item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
