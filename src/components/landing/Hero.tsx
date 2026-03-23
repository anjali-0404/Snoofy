import { motion } from 'framer-motion'
import { imgHero } from '../../data/referenceImages'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

/**
 * Full-bleed hero with real headline, subtext, and CTA buttons.
 * Uses the uploaded hero image as a styled, rounded showcase image.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#F9F7F2] dark:bg-[#111010]"
    >
      {/* Background decorative blob */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#E63946]/8 blur-3xl dark:bg-[#E63946]/5"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:py-28">
        {/* Left: copy */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E63946]/20 bg-[#E63946]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#E63946]">
              ✦ Premium Desserts
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.06] tracking-tight text-[#1C1917] dark:text-white lg:text-6xl xl:text-7xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Serve Love{' '}
            <span className="italic text-[#E63946]">in</span> Every Scoop
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="max-w-md text-lg leading-relaxed text-[#6B7280] dark:text-slate-400"
          >
            Handcrafted desserts with real ingredients and a whole lot of
            heart. Retro flavors, premium execution — made to be remembered.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#flavors"
              className="inline-flex items-center rounded-full bg-[#E63946] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#E63946]/25 transition-all duration-200 hover:bg-[#c62f3a] hover:shadow-lg hover:shadow-[#E63946]/30 active:scale-[0.98]"
            >
              Explore Flavors
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-[#E8E5DF] bg-white px-7 py-3.5 text-sm font-bold text-[#1C1917] shadow-sm transition-all duration-200 hover:border-[#E63946]/30 hover:text-[#E63946] dark:border-white/15 dark:bg-white/[0.06] dark:text-white"
            >
              Order Now →
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 pt-2"
          >
            <div className="flex -space-x-2">
              {['#E63946', '#F59E0B', '#10B981', '#6366F1'].map((c, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-[#F9F7F2] dark:border-[#111010]"
                  style={{ background: c }}
                  aria-hidden
                />
              ))}
            </div>
            <p className="text-sm text-[#6B7280] dark:text-slate-400">
              <span className="font-bold text-[#1C1917] dark:text-white">
                5,000+
              </span>{' '}
              happy customers
            </p>
          </motion.div>
        </motion.div>

        {/* Right: hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-[0_32px_80px_rgba(230,57,70,0.18)]">
            <img
              src={imgHero}
              alt="Snoofy premium desserts — Serve Love in Every Scoop"
              className="h-auto w-full object-cover"
              width={800}
              height={700}
              loading="eager"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-[#E8E5DF] bg-white px-5 py-3.5 shadow-xl dark:border-white/10 dark:bg-[#1a1a1a]"
          >
            <span className="text-2xl">🍦</span>
            <div>
              <p className="text-xs font-bold text-[#1C1917] dark:text-white">
                Freshly made daily
              </p>
              <p className="text-[11px] text-[#6B7280]">Real ingredients only</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
