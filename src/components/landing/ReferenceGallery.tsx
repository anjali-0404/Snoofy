import { galleryRemaining, imgExtra01 } from '../../data/referenceImages'
import { ImageSection } from './ImageSection'

/**
 * Remaining uploaded frames so every asset you shared appears on the page.
 */
export function ReferenceGallery() {
  const all = [imgExtra01, ...galleryRemaining]
  return (
    <section className="border-t border-white/50 bg-[#F9F7F2] py-10 dark:border-white/10 dark:bg-[#120808]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="sr-only">More from the design set</h2>
        <div className="flex flex-col gap-8">
          {all.map((src) => (
            <ImageSection key={src} src={src} />
          ))}
        </div>
      </div>
    </section>
  )
}
