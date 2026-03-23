import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

type ContentSectionProps = {
  id?: string
  image: string
  imageAlt: string
  eyebrow: string
  title: string
  body: string
  imageLeft?: boolean
  accentColor?: string
  className?: string
}

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

/**
 * Alternating image-left / image-right content block.
 * Used throughout the landing page for product showcases.
 */
export function ContentSection({
  id,
  image,
  imageAlt,
  eyebrow,
  title,
  body,
  imageLeft = true,
  className,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'overflow-hidden border-b border-[#E8E5DF] bg-white dark:border-white/10 dark:bg-[#171717]',
        className,
      )}
    >
      <div
        className={cn(
          'mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:gap-16 md:px-8 md:py-24',
          imageLeft ? 'md:grid-cols-[1fr_1fr]' : 'md:grid-cols-[1fr_1fr]',
        )}
      >
        {/* Image */}
        <motion.div
          variants={imageLeft ? fadeLeft : fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className={cn(
            'relative',
            !imageLeft && 'md:order-2',
          )}
        >
          <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(28,25,23,0.1)]">
            <img
              src={image}
              alt={imageAlt}
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              width={700}
              height={520}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className={cn(
            'flex flex-col gap-5',
            !imageLeft && 'md:order-1',
          )}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E63946]"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-[#1C1917] dark:text-white md:text-4xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {title}
          </motion.h2>

          {/* decorative rule */}
          <motion.div
            variants={fadeUp}
            className="h-1 w-12 rounded-full bg-[#E63946]"
            aria-hidden
          />

          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed text-[#6B7280] dark:text-slate-400"
          >
            {body}
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E63946] transition hover:underline"
            >
              Order Now <span aria-hidden>→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
