import { motion, type Variants } from 'framer-motion'
import { useGreeting } from '../../hooks/useGreeting'
import { GlassCard } from '../ui/GlassCard'

const suggestions = [
  {
    id: '1',
    title: 'Route priority queue',
    desc: 'Rebalance workloads before the spike window hits.',
    tag: 'Ops',
  },
  {
    id: '2',
    title: 'Draft stakeholder brief',
    desc: 'Turn last night’s notes into a one-page narrative.',
    tag: 'Comms',
  },
  {
    id: '3',
    title: 'Scan for anomalies',
    desc: 'Compare live traffic with the seasonal baseline.',
    tag: 'Safety',
  },
] as const

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 380, damping: 28 },
  },
}

/**
 * Hero + AI suggestion strip: establishes hierarchy (greeting → actions) for scanability.
 */
export function MainDashboard() {
  const { greeting, name } = useGreeting('Explorer')

  return (
    <section className="space-y-8">
      <header className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/50 p-6 shadow-lg backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04] md:p-8">
        {/* Decorative mesh — subtle “data flow” without copying any reference layout */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-brand-primary/25 via-brand-secondary/20 to-transparent blur-3xl dark:from-brand-primary/35 dark:via-brand-secondary/20"
          aria-hidden
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Live workspace
          </p>
          <h1
            className="mt-2 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
          >
            {greeting}, {name}{' '}
            <motion.span
              className="inline-block origin-[70%_70%]"
              aria-hidden
              animate={{ rotate: [0, 14, -8, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.25,
                ease: 'easeInOut',
              }}
            >
              👋
            </motion.span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Aether reads your signals and surfaces the next best move. Pick a
            suggestion or ask the assistant on the right.
          </p>
        </div>
      </header>

      <div>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              AI suggestions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Prioritized for the next hour
            </p>
          </div>
          <span className="rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary dark:border-brand-secondary/30 dark:bg-brand-secondary/10 dark:text-brand-secondary">
            Model sync · 2m ago
          </span>
        </div>

        <motion.ul
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {suggestions.map((s) => (
            <motion.li key={s.id} variants={item} layout>
              <GlassCard className="flex h-full flex-col p-5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-slate-900/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    {s.tag}
                  </span>
                  <span className="text-[10px] text-slate-400">Tap to run</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.desc}
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-brand-primary/30 bg-white/50 px-4 py-2 text-xs font-semibold text-brand-primary transition hover:bg-brand-primary/10 dark:border-brand-secondary/30 dark:bg-white/[0.06] dark:text-brand-secondary dark:hover:bg-brand-secondary/10"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_12px_#6c63ff] dark:bg-brand-secondary dark:shadow-[0_0_12px_#00d4ff]" />
                  Queue action
                </button>
              </GlassCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>

    </section>
  )
}
