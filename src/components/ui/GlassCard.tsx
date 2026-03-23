import { type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/cn'

type GlassCardProps = {
  children: ReactNode
  className?: string
  /** Extra lift on hover — default on for dashboard tiles */
  hoverLift?: boolean
} & Omit<HTMLMotionProps<'div'>, 'children'>

/**
 * Shared glass surface: blur + translucent fill reads as depth without heavy borders.
 */
export function GlassCard({
  children,
  className,
  hoverLift = true,
  ...motionProps
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hoverLift
          ? { scale: 1.02, y: -2, transition: { type: 'spring', stiffness: 400, damping: 28 } }
          : undefined
      }
      className={cn(
        'rounded-3xl border border-white/20 bg-white/40 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl',
        'dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_12px_48px_rgba(0,0,0,0.45)]',
        'dark:hover:shadow-[0_0_0_1px_rgba(108,99,255,0.35),0_16px_56px_rgba(0,212,255,0.08)]',
        'transition-shadow duration-300',
        className,
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
