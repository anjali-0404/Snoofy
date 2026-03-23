import { motion } from 'framer-motion'
import { useState } from 'react'
import { AIAssistantPanel } from './AIAssistantPanel'
import { AnalyticsSection } from './AnalyticsSection'
import { FloatingSidebar } from './FloatingSidebar'
import { MainDashboard } from './MainDashboard'
import { SmartCards } from './SmartCards'
import { ThemeToggle } from './ThemeToggle'

/**
 * Shell composes regions: persistent nav, scrollable canvas, and floating assistant.
 * Spacing tuned so glass panels never fight the grid on wide screens.
 */
export function DashboardShell() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      {/* Ambient field: separates layers without a flat solid fill */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(108,99,255,0.14),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(0,212,255,0.1),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_20%_0%,_rgba(108,99,255,0.22),_transparent_45%),radial-gradient(ellipse_at_80%_100%,_rgba(0,212,255,0.12),_transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.035] dark:opacity-[0.06] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]"
        aria-hidden
      />

      <FloatingSidebar
        mobileOpen={mobileMenu}
        onMobileClose={() => setMobileMenu(false)}
      />

      <div className="md:pl-[calc(4.25rem+1.5rem)]">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-white/25 bg-white/55 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#0f172a]/70 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/60 px-3 py-2 text-sm font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white"
            onClick={() => setMobileMenu(true)}
            aria-expanded={mobileMenu}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
          <p className="font-[family-name:var(--font-display)] text-sm font-bold tracking-tight text-slate-900 dark:text-white">
            Aether
          </p>
          <ThemeToggle />
        </header>

        <div className="mx-auto max-w-[1400px] px-4 pb-28 pt-6 md:px-6 md:pb-12 md:pt-8 xl:pr-[min(22rem,26vw)]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 hidden items-center justify-between md:flex"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Command
            </p>
            <ThemeToggle />
          </motion.div>

          <main className="mt-0 space-y-0 md:mt-0">
            <MainDashboard />
            <SmartCards />
            <AnalyticsSection />
          </main>
        </div>
      </div>

      <AIAssistantPanel />
    </div>
  )
}
