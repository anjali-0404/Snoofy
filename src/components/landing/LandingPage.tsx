import { images } from '../../data/imageLibrary'
import { ContactSection } from './ContactSection'
import { ContentSection } from './ContentSection'
import { CTASection } from './CTASection'
import { FeaturesSection } from './FeaturesSection'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Navbar } from './Navbar'
import { TeamSection } from './TeamSection'
import { ProductGrid } from './ProductGrid'
import { MerchandiseShowcase } from './MerchandiseShowcase'
import { RotatingMenuCarousel } from './RotatingMenuCarousel'
import { ImageGallery } from './ImageGallery'
import { CompactItemGrid } from './CompactItemGrid'

/**
 * Landing page — centralized image library ensures no duplicates.
 * Every section has unique, curated images from Unsplash.
 */
export function LandingPage() {
  // Convert image library to component-friendly format
  const menuItems = images.menuFlavors.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.url,
  }))

  const popularProducts = images.bestsellers.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.caption,
    image: item.url,
  }))

  const rotatingMenuItems = images.seasonalSpecials.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    season: item.season,
    color: item.color,
    image: item.url,
  }))

  const merchandise = images.merchandise.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.url,
  }))

  const designElements = images.flavorPalette.map((item) => ({
    id: item.id,
    image: item.url,
    title: item.title,
    category: item.category,
  }))

  return (
    <div className="min-h-[100dvh] bg-[#F9F7F2] dark:bg-[#0b0a0a]">
      <Navbar />
      <main>
        {/* ① Hero */}
        <Hero />

        {/* ② Menu Items Grid — Small compact items */}
        <section className="border-b border-[#E8E5DF] bg-white dark:border-white/10 dark:bg-[#171717]">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <div className="mb-6">
              <p className="text-[11px] font-bolt uppercase tracking-[0.22em] text-brand-primary dark:text-brand-secondary">
                Our Menu
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 dark:text-white">
                Premium Flavors
              </h2>
            </div>
            <CompactItemGrid items={menuItems} columns={7} />
          </div>
        </section>

        {/* ③ Popular Products — Grid showcase */}
        <section className="border-b border-[#E8E5DF] bg-white dark:border-white/10 dark:bg-[#171717]">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <ProductGrid
              title="Our bestsellers"
              subtitle="Crowd favourites made fresh every day"
              products={popularProducts}
              columns={4}
            />
          </div>
        </section>

        {/* ④ Mood / lifestyle — image right */}
        <ContentSection
          image={images.lifestyle.url}
          imageAlt={images.lifestyle.caption}
          eyebrow="The experience"
          title="More than a treat — it's a mood"
          body="We believe eating should feel like a moment. Golden-hour lighting, rich textures, retro vibes — every visit is a little escape."
          imageLeft={false}
        />

        {/* ⑤ Philosophy feature grid */}
        <FeaturesSection />

        {/* ⑥ Rotating Menu Carousel */}
        <section className="border-b border-[#E8E5DF] bg-white dark:border-white/10 dark:bg-[#171717]">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <RotatingMenuCarousel items={rotatingMenuItems} autoRotateInterval={6000} />
          </div>
        </section>

        {/* ⑦ Wide showcase — image left */}
        <ContentSection
          image={images.craft.url}
          imageAlt={images.craft.caption}
          eyebrow="Craft"
          title="Precision meets passion"
          body="Temperature control, slow-churn technique, and colour-perfect presentation — because the details are what separate good from great."
          imageLeft
        />

        {/* ⑧ Design Elements Gallery */}
        <section className="border-b border-[#E8E5DF] bg-white dark:border-white/10 dark:bg-[#171717]">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <ImageGallery
              items={designElements}
              columns={6}
              title="Flavor Palette"
              subtitle="Our complete range of handcrafted flavors"
            />
          </div>
        </section>

        {/* ⑨ Merchandise Showcase */}
        <section className="border-b border-[#E8E5DF] bg-white dark:border-white/10 dark:bg-[#171717]">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <MerchandiseShowcase
              items={merchandise}
              title="Made for moments, built for sharing"
            />
          </div>
        </section>

        {/* ⑩ CTA strip */}
        <CTASection />

        {/* ⑪ Team */}
        <TeamSection />

        {/* ⑫ Contact */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
