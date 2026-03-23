import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

type MerchandiseItem = {
  id: string
  title: string
  image: string
  size?: 'small' | 'medium' | 'large'
  featured?: boolean
}

type Props = {
  items: MerchandiseItem[]
  title?: string
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 360, damping: 30 },
  },
}

/**
 * Merchandise Showcase — asymmetric grid layout for lifestyle/product imagery.
 * Perfect for displaying merchandising, collection items, or lifestyle content.
 */
export function MerchandiseShowcase({ items, title }: Props) {
  return (
    <section className="space-y-6">
      {title && (
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
          {title}
        </h3>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid gap-4 sm:gap-5"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gridAutoRows: '250px',
        }}
      >
        {items.map((merchandise) => (
          <motion.div
            key={merchandise.id}
            variants={item}
            className={cn(
              'group relative overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-700',
              merchandise.featured && 'sm:col-span-2 sm:row-span-2',
            )}
            style={{
              gridColumn:
                merchandise.featured && 'span 1' || undefined,
              gridRow: merchandise.featured && 'span 1' || undefined,
            }}
          >
            <picture>
              <img
                src={merchandise.image}
                alt={merchandise.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&h=400&fit=crop'
                }}
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h4 className="text-sm font-semibold text-white">
                {merchandise.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
