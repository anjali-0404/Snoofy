import { useMemo, useState } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

type Range = 'weekly' | 'monthly'

const weekly = [
  { label: 'Mon', primary: 42, secondary: 28 },
  { label: 'Tue', primary: 55, secondary: 33 },
  { label: 'Wed', primary: 48, secondary: 40 },
  { label: 'Thu', primary: 62, secondary: 36 },
  { label: 'Fri', primary: 71, secondary: 44 },
  { label: 'Sat', primary: 58, secondary: 52 },
  { label: 'Sun', primary: 64, secondary: 47 },
]

const monthly = [
  { label: 'W1', primary: 220, secondary: 150 },
  { label: 'W2', primary: 260, secondary: 175 },
  { label: 'W3', primary: 245, secondary: 190 },
  { label: 'W4', primary: 290, secondary: 210 },
]

/**
 * Interactive chart region: toggle changes density (weekly detail vs monthly roll-up).
 */
export function AnalyticsSection() {
  const [range, setRange] = useState<Range>('weekly')
  const data = useMemo(
    () => (range === 'weekly' ? weekly : monthly),
    [range],
  )

  return (
    <section className="mt-12">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Analytics
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Throughput vs guardrails
          </p>
        </div>
        <div
          className="inline-flex rounded-full border border-white/30 bg-white/50 p-1 dark:border-white/10 dark:bg-white/[0.06]"
          role="tablist"
          aria-label="Chart range"
        >
          {(['weekly', 'monthly'] as const).map((r) => (
            <button
              key={r}
              type="button"
              role="tab"
              aria-selected={range === r}
              onClick={() => setRange(r)}
              className={cn(
                'rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition',
                range === r
                  ? 'bg-slate-900 text-white shadow-md dark:bg-gradient-to-r dark:from-brand-primary dark:to-brand-secondary dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="rounded-[1.75rem] border border-white/30 bg-white/45 p-4 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.05] md:p-6"
      >
        <div className="mb-4 flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-8 rounded-full bg-brand-primary shadow-[0_0_16px_rgba(108,99,255,0.45)]" />
            <span className="text-slate-600 dark:text-slate-300">Throughput</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-8 rounded-full bg-brand-secondary shadow-[0_0_16px_rgba(0,212,255,0.45)]" />
            <span className="text-slate-600 dark:text-slate-300">Guardrails</span>
          </div>
        </div>

        <div className="h-64 w-full min-w-0 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillPrimary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6c63ff" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#6c63ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="fillSecondary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#00d4ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 8" className="stroke-slate-300/60 dark:stroke-white/10" />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 11, fill: 'currentColor' }}
                className="text-slate-500"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: 'currentColor' }}
                className="text-slate-500"
                axisLine={false}
                tickLine={false}
                width={32}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(15,23,42,0.85)',
                  backdropFilter: 'blur(12px)',
                  fontSize: 12,
                }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Area
                type="monotone"
                dataKey="primary"
                stroke="#6c63ff"
                strokeWidth={2}
                fill="url(#fillPrimary)"
                isAnimationActive
                animationDuration={600}
              />
              <Area
                type="monotone"
                dataKey="secondary"
                stroke="#00d4ff"
                strokeWidth={2}
                fill="url(#fillSecondary)"
                isAnimationActive
                animationDuration={700}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </section>
  )
}
