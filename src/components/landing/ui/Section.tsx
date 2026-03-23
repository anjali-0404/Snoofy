import { type ReactNode } from 'react'
import { cn } from '../../../lib/cn'

type SectionProps = {
  id?: string
  /** Small caps label above the title (reference: section rhythm) */
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
  /** Extend headline row with a subtle rule (reference: “section + line” pattern) */
  showRule?: boolean
}

/**
 * Consistent vertical rhythm + optional rule line for long-form marketing pages.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  showRule = true,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || description)

  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-16 md:py-24', className)}
    >
      {hasHeader && (
        <div className="mb-10 md:mb-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              {eyebrow && (
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary dark:text-brand-secondary">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {description}
                </p>
              )}
            </div>
            {showRule && (
              <div
                className="hidden h-px flex-1 translate-y-[-6px] bg-gradient-to-r from-slate-200 to-transparent md:block dark:from-white/15 dark:to-transparent"
                aria-hidden
              />
            )}
          </div>
        </div>
      )}
      {children}
    </section>
  )
}
