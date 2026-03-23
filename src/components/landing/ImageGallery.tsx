import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'

type GalleryItem = {
  id: string
  image: string
  title: string
  category?: string
}

type Props = {
  items: GalleryItem[]
  columns?: 2 | 3 | 4 | 5 | 6
  title?: string
  subtitle?: string
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 380, damping: 28 },
  },
}

/**
 * Image Gallery — displays a grid of images with titles.
 * Perfect for showcasing menu items, products, or design elements.
 */
export function ImageGallery({
  items,
  columns = 4,
  title,
  subtitle,
}: Props) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
    5: 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  }

  return (
    <section className="space-y-6">
      {(title || subtitle) && (
        <div>
          {title && (
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 dark:text-white">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className={`grid gap-3 ${gridCols[columns]}`}
      >
        {items.map((gItem) => (
          <motion.div key={gItem.id} variants={item}>
            <GlassCard className="group relative overflow-hidden p-0">
              <div className="relative aspect-square overflow-hidden bg-slate-200 dark:bg-slate-700">
                <picture>
                  <img
                    src={gItem.image}
                    alt={gItem.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1587563974091-60f7b3ba8b2e?w=300&h=300&fit=crop'
                    }}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              {gItem.title && (
                <div className="p-3">
                  {gItem.category && (
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-primary dark:text-brand-secondary">
                      {gItem.category}
                    </p>
                  )}
                  <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-slate-900 dark:text-white">
                    {gItem.title}
                  </h4>
                </div>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
