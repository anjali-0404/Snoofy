import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

type Props = {
  src: string
  /** Decorative artwork already contains copy — keep alt empty when appropriate */
  alt?: string
  className?: string
  priority?: boolean
}

/**
 * Full-bleed reference artwork — preserves pixels 1:1 from your uploads.
 */
export function ImageSection({ src, alt = '', className, priority }: Props) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className={cn('w-full overflow-hidden bg-[#F9F7F2]', className)}
    >
      <img
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="h-auto w-full object-contain object-top"
      />
    </motion.figure>
  )
}
