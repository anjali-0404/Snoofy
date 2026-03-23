const shop = ['Best Sellers', 'Vegan Options', 'Merchandise', 'Gift Cards'] as const
const company = ['About Us', 'Careers', 'Press', 'Sustainability'] as const
const support = ['Contact Us', 'FAQ', 'Shipping'] as const

/**
 * Bold red footer band matching the reference marketing site.
 */
export function Footer() {
  return (
    <footer className="bg-[#E63946] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight">
                Snoofy
              </span>
              <span className="mt-1 text-sm font-semibold tracking-wide text-white/90">
                Serve Love
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90">
              Upscale indulgence. Crafted with love, served with style. Experience the retro
              revival of premium desserts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:grid-cols-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                Shop
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/95">
                {shop.map((l) => (
                  <li key={l}>
                    <a className="transition hover:underline" href="#popular">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                Company
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/95">
                {company.map((l) => (
                  <li key={l}>
                    <a className="transition hover:underline" href="#philosophy">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                Support
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/95">
                {support.map((l) => (
                  <li key={l}>
                    <a className="transition hover:underline" href="#contact">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                Follow us
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['f', 'in', 'yt', 'x'].map((x) => (
                  <a
                    key={x}
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs font-semibold text-white transition hover:bg-white/20"
                  >
                    {x}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-[#E63946] md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Snoofy Inc. All rights reserved.</p>
          <div className="flex gap-5 font-semibold">
            <a className="hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="hover:underline" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
