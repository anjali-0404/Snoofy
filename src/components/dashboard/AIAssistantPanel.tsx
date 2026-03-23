import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '../../lib/cn'

const prompts = [
  'Summarize today’s risk deltas',
  'Draft a calm reply to the outage thread',
  'What should I automate next?',
]

type Props = {
  /** When false, panel collapses to a slim dock for smaller breakpoints */
  defaultExpanded?: boolean
}

/**
 * Chat affordances on the right: suggested prompts reduce blank-page anxiety (UX).
 * Collapse preserves context density on tablets.
 */
export function AIAssistantPanel({ defaultExpanded = true }: Props) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const [input, setInput] = useState('')

  return (
    <motion.aside
      layout
      className={cn(
        'pointer-events-auto fixed bottom-4 right-4 z-30 flex flex-col overflow-hidden rounded-[1.75rem] border border-white/25 bg-white/55 shadow-2xl backdrop-blur-2xl transition-[width] duration-300 dark:border-white/10 dark:bg-[#0f172a]/65',
        expanded ? 'w-[min(100%,22rem)] xl:w-80' : 'w-14',
      )}
      style={{ maxHeight: expanded ? 'min(70dvh, 520px)' : '3.5rem' }}
    >
      <div className="flex items-center justify-between gap-2 border-b border-white/20 px-3 py-3 dark:border-white/10">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="flex min-w-0 flex-1 items-center gap-2 rounded-2xl text-left"
          aria-expanded={expanded}
          aria-controls="ai-assistant-panel"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-[#8b84ff] text-xs font-bold text-white shadow-lg shadow-brand-primary/25">
            AI
          </span>
          {expanded && (
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">
                Assistant
              </span>
              <span className="block truncate text-[10px] text-slate-500 dark:text-slate-400">
                Ready · low latency
              </span>
            </span>
          )}
        </button>
        {expanded && (
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary/70 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-secondary shadow-[0_0_12px_#00d4ff]" />
          </span>
        )}
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id="ai-assistant-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="flex min-h-0 flex-1 flex-col"
          >
            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-3 py-3">
              <div className="rounded-2xl rounded-bl-md border border-white/30 bg-white/50 p-3 text-xs leading-relaxed text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
                I’m tracking your workspace tone and priorities. Ask anything, or
                use a prompt chip below.
              </div>
              <div className="rounded-2xl rounded-br-md border border-brand-primary/25 bg-brand-primary/[0.07] p-3 text-xs leading-relaxed text-slate-800 dark:border-brand-secondary/30 dark:bg-brand-secondary/10 dark:text-slate-100">
                Tip: mention a timeframe (“this week”) for tighter answers.
              </div>
            </div>

            <div className="border-t border-white/20 px-3 py-3 dark:border-white/10">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Suggested
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {prompts.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setInput(p)}
                    className="rounded-full border border-slate-300/80 bg-white/60 px-3 py-1.5 text-left text-[11px] font-medium text-slate-700 transition hover:border-brand-primary/40 hover:text-brand-primary dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-brand-secondary/40 dark:hover:text-brand-secondary"
                  >
                    {p}
                  </button>
                ))}
              </div>
              <label className="sr-only" htmlFor="ai-input">
                Message assistant
              </label>
              <div className="flex gap-2 rounded-2xl border border-white/30 bg-white/50 p-2 dark:border-white/10 dark:bg-white/[0.05]">
                <input
                  id="ai-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Aether…"
                  className="min-w-0 flex-1 bg-transparent px-2 text-xs text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
                <button
                  type="button"
                  className="rounded-xl bg-brand-primary px-3 py-2 text-[11px] font-semibold text-white shadow-md shadow-brand-primary/30 transition hover:brightness-110 dark:bg-gradient-to-r dark:from-brand-primary dark:to-brand-secondary"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  )
}
