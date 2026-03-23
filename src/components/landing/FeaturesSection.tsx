import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

const features = [
  {
    icon: '♥',
    title: 'Love in every batch',
    body: 'Comfort food energy, premium execution — we obsess over texture, temperature, and the tiny details that feel "just right."',
    bg: '#FFF1F2',
    accent: '#F43F5E',
  },
  {
    icon: '✦',
    title: 'Uncompromising quality',
    body: 'Real ingredients, honest sourcing, and recipes that respect tradition while staying fresh for every generation.',
    bg: '#FFFBEB',
    accent: '#F59E0B',
  },
  {
    icon: '✓',
    title: 'Crafted with mastery',
    body: 'Slow churn where it matters, fast service where it counts — a balance you can taste in every spoonful.',
    bg: '#F0FDF4',
    accent: '#10B981',
  },
] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

/**
 * Three-column philosophy feature grid.
 * Each card has a colored background swatch, icon, title, and description.
 */
export function FeaturesSection() {
  return (
    <section
      id="philosophy"
      className="border-b border-[#E8E5DF] bg-[#F9F7F2] dark:border-white/10 dark:bg-[#111010]"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E63946]">
            Our philosophy
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[#1C1917] dark:text-white md:text-4xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Rooted in tradition
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6B7280] dark:text-slate-400">
            Three pillars that guide every recipe, every batch, every scoop we
            serve with pride.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={item}>
              <div
                className={cn(
                  'group flex h-full flex-col rounded-2xl border border-transparent bg-white p-8 shadow-[0_4px_32px_rgba(28,25,23,0.06)] transition-all duration-300',
                  'hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(28,25,23,0.1)]',
                  'dark:bg-[#1a1a1a] dark:shadow-none dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]',
                )}
              >
                {/* Icon badge */}
                <div
                  className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl text-xl"
                  style={{ background: f.bg }}
                  aria-hidden
                >
                  <span style={{ color: f.accent }}>{f.icon}</span>
                </div>

                <h3
                  className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1C1917] dark:text-white"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {f.title}
                </h3>

                {/* accent rule */}
                <div
                  className="my-4 h-0.5 w-8 rounded-full"
                  style={{ background: f.accent }}
                  aria-hidden
                />

                <p className="flex-1 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                  {f.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
