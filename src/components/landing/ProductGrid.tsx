import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'

type ProductItem = {
  id: string
  name: string
  category: string
  image: string
}

type Props = {
  title: string
  subtitle?: string
  products: ProductItem[]
  columns?: number
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 380, damping: 28 },
  },
}

/**
 * Product Grid Component — displays a collection of products in a flexible grid layout.
 * Perfect for showcasing menu items, products, or merchandise.
 */
export function ProductGrid({ title, subtitle, products, columns = 4 }: Props) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        )}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-${columns}`}
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={item}>
            <GlassCard className="group relative overflow-hidden p-0">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800">
                <picture>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop'
                    }}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-brand-secondary">
                  {product.category}
                </p>
                <h4 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">
                  {product.name}
                </h4>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
