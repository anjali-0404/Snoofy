import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'

const cards = [
  {
    title: 'Prism Lens',
    description:
      'Distill multi-source feeds into a single narrative with confidence bands.',
    cta: 'Open lens',
    accent: 'from-brand-primary/30 to-brand-secondary/20',
  },
  {
    title: 'Flux Relay',
    description:
      'Automate handoffs between agents while keeping human checkpoints.',
    cta: 'Configure relay',
    accent: 'from-brand-secondary/25 to-brand-primary/15',
  },
  {
    title: 'Nova Vault',
    description:
      'Encrypted scratchpad for prompts and artifacts — expires on your schedule.',
    cta: 'Open vault',
    accent: 'from-brand-primary/20 to-slate-400/10',
  },
  {
    title: 'Helix Trace',
    description:
      'Audit every model decision with replayable traces and exportable logs.',
    cta: 'View traces',
    accent: 'from-brand-secondary/30 to-brand-primary/10',
  },
] as const

/**
 * Smart cards: asymmetric grid + gradient “tiles” echo depth without literal product photos.
 */
export function SmartCards() {
  return (
    <section className="mt-12 space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Smart cards
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Glass surfaces for your most-used workflows
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 400, damping: 28 }}
          >
            <GlassCard className="relative flex h-full flex-col overflow-hidden p-5">
              <div
                className={`pointer-events-none absolute -right-6 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${c.accent} blur-2xl`}
                aria-hidden
              />
              <div className="relative">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {c.description}
                </p>
                <button
                  type="button"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-slate-300/80 bg-white/60 py-2.5 text-xs font-semibold text-slate-800 transition hover:scale-[1.02] hover:border-brand-primary/40 hover:text-brand-primary dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-100 dark:hover:border-brand-secondary/40 dark:hover:text-brand-secondary"
                >
                  {c.cta}
                </button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
