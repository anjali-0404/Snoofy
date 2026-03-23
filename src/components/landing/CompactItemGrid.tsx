import { motion } from 'framer-motion'

type FeaturedItem = {
  id: string
  image: string
  name: string
  color?: string
}

type Props = {
  items: FeaturedItem[]
  columns?: 3 | 4 | 5 | 6 | 7
}

/**
 * Compact Item Grid — small squares for menu items, ingredients, or reference imagery.
 * Perfect for showing variety without taking up much space.
 */
export function CompactItemGrid({ items, columns = 5 }: Props) {
  const gridClass = {
    3: 'grid-cols-3 sm:grid-cols-3 lg:gap-2',
    4: 'grid-cols-4 sm:grid-cols-4 lg:gap-2',
    5: 'grid-cols-5 sm:grid-cols-5 lg:gap-2',
    6: 'grid-cols-6 sm:grid-cols-6 lg:gap-2',
    7: 'grid-cols-7 sm:grid-cols-7 lg:gap-2',
  }

  return (
    <div className={`grid gap-2 ${gridClass[columns]}`}>
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring' as const,
            stiffness: 400,
            damping: 30,
            delay: idx * 0.02,
          }}
          whileHover={{ scale: 1.08 }}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-700"
        >
          <picture>
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=200&h=200&fit=crop'
              }}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-center text-[10px] font-bold text-white px-1">
              {item.name}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
