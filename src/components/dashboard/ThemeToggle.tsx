import { motion } from 'framer-motion'
import { useTheme } from '../../context/useTheme'
import { cn } from '../../lib/cn'

/**
 * Orb-style toggle: reads as a “status dial” (inspired by playful circular controls, adapted for AI state).
 * Neon ring only in dark mode to preserve contrast hierarchy.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
        'border border-slate-300/80 bg-white/60 backdrop-blur-md transition-colors duration-500',
        'hover:bg-white/80 dark:border-white/15 dark:bg-white/[0.06]',
        isDark &&
          'shadow-[0_0_24px_rgba(108,99,255,0.35),inset_0_0_0_1px_rgba(0,212,255,0.2)]',
        className,
      )}
    >
      <motion.span
        className="pointer-events-none absolute inset-1 rounded-full"
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        style={{
          background: isDark
            ? 'conic-gradient(from 120deg, #6c63ff, #00d4ff, #6c63ff)'
            : 'conic-gradient(from 40deg, #e2e8f0, #f8fafc, #e2e8f0)',
          opacity: isDark ? 0.35 : 0.5,
        }}
      />
      <span className="relative z-[1] text-lg" aria-hidden>
        {isDark ? '◐' : '◑'}
      </span>
    </button>
  )
}
