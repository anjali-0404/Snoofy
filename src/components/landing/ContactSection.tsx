import { motion } from 'framer-motion'
import { useState } from 'react'

/**
 * Two-column contact section: info + form.
 * No reference image strip.
 */
export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      id="contact"
      className="border-b border-[#E8E5DF] bg-white dark:border-white/10 dark:bg-[#171717]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8 md:py-24">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E63946]">
              Say hello
            </p>
            <h2
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-[#1C1917] dark:text-white md:text-4xl"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              We'd love to hear from you
            </h2>
            <div className="mt-4 h-1 w-12 rounded-full bg-[#E63946]" aria-hidden />
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                icon: '📍',
                label: 'Find us',
                value: '42 Sweet Street, Mumbai 400001',
                href: undefined,
              },
              {
                icon: '⏰',
                label: 'Hours',
                value: 'Mon–Sat: 10am – 10pm\nSun: 11am – 8pm',
                href: undefined,
              },
              {
                icon: '📧',
                label: 'Email',
                value: 'hello@snoofy.in',
                href: 'mailto:hello@snoofy.in',
              },
              {
                icon: '📞',
                label: 'Phone',
                value: '+91 98765 43210',
                href: 'tel:+919876543210',
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF1F2] text-xl"
                  aria-hidden
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6B7280]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-sm font-semibold text-[#1C1917] transition hover:text-[#E63946] dark:text-slate-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 whitespace-pre-line text-sm text-[#1C1917] dark:text-slate-200">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          {status === 'sent' ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[#E8E5DF] bg-[#F9F7F2] p-10 text-center dark:border-white/10 dark:bg-[#1a1a1a]">
              <span className="mb-4 text-5xl">🎉</span>
              <h3 className="text-xl font-bold text-[#1C1917] dark:text-white">
                Message sent!
              </h3>
              <p className="mt-2 text-sm text-[#6B7280]">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-[#E8E5DF] bg-[#F9F7F2] p-8 shadow-[0_4px_32px_rgba(28,25,23,0.06)] dark:border-white/10 dark:bg-[#1a1a1a]"
            >
              <h3
                className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1C1917] dark:text-white"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Send a message
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-[#6B7280]"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Riya Patel"
                    className="w-full rounded-xl border border-[#E8E5DF] bg-white px-4 py-3 text-sm text-[#1C1917] shadow-sm placeholder:text-[#9CA3AF] transition focus:border-[#E63946] focus:outline-none focus:ring-2 focus:ring-[#E63946]/20 dark:border-white/15 dark:bg-[#111010] dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-[#6B7280]"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="riya@example.com"
                    className="w-full rounded-xl border border-[#E8E5DF] bg-white px-4 py-3 text-sm text-[#1C1917] shadow-sm placeholder:text-[#9CA3AF] transition focus:border-[#E63946] focus:outline-none focus:ring-2 focus:ring-[#E63946]/20 dark:border-white/15 dark:bg-[#111010] dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-semibold text-[#6B7280]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Bulk order enquiry"
                  className="w-full rounded-xl border border-[#E8E5DF] bg-white px-4 py-3 text-sm text-[#1C1917] shadow-sm placeholder:text-[#9CA3AF] transition focus:border-[#E63946] focus:outline-none focus:ring-2 focus:ring-[#E63946]/20 dark:border-white/15 dark:bg-[#111010] dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-[#6B7280]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell us what you'd like..."
                  className="w-full resize-none rounded-xl border border-[#E8E5DF] bg-white px-4 py-3 text-sm text-[#1C1917] shadow-sm placeholder:text-[#9CA3AF] transition focus:border-[#E63946] focus:outline-none focus:ring-2 focus:ring-[#E63946]/20 dark:border-white/15 dark:bg-[#111010] dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              <button
                type="submit"
                className="mt-1 w-full rounded-xl bg-[#E63946] py-3.5 text-sm font-bold text-white shadow-md shadow-[#E63946]/20 transition-all duration-200 hover:bg-[#c62f3a] hover:shadow-lg hover:shadow-[#E63946]/25 active:scale-[0.98]"
              >
                Send Message →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
