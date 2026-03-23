import { motion } from 'framer-motion'

/**
 * Full-width CTA strip — warm red background with centered headline and CTA button.
 */
export function CTASection() {
  return (
    <section className="bg-[#E63946] dark:bg-[#c62f3a]">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
            Life is short
          </p>
          <h2
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Have dessert first.
          </h2>
          <p className="max-w-md text-base text-white/80">
            Order online or visit us at our store. Freshly made daily — no
            compromises, no shortcuts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#E63946] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Find Our Store →
            </a>
            <a
              href="#flavors"
              className="rounded-full border-2 border-white/50 px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              See the Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
