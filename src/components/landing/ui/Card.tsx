import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
  /** Lift + shadow on hover */
  interactive?: boolean
}

/**
 * Marketing card primitive: glass in dark mode, soft elevation in light mode.
 */
export function Card({ children, className, interactive = true }: CardProps) {
  return (
    <motion.div
      whileHover={
        interactive
          ? { y: -4, transition: { type: 'spring', stiffness: 420, damping: 26 } }
          : undefined
      }
      className={cn(
        'rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-md',
        'dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]',
        interactive &&
          'transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(108,99,255,0.12)] dark:hover:shadow-[0_28px_90px_rgba(0,212,255,0.08)]',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
