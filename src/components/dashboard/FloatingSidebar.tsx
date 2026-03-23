import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '../../lib/cn'

const nav = [
  { id: 'pulse', label: 'Pulse', icon: PulseIcon },
  { id: 'signals', label: 'Signals', icon: SignalsIcon },
  { id: 'flows', label: 'Flows', icon: FlowsIcon },
  { id: 'vault', label: 'Vault', icon: VaultIcon },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
] as const

type Props = {
  mobileOpen: boolean
  onMobileClose: () => void
}

/**
 * Collapses to icon rail; expands width on hover for labels (desktop).
 * Mobile uses a full-height sheet so tap targets stay thumb-friendly.
 */
export function FloatingSidebar({ mobileOpen, onMobileClose }: Props) {
  const [active, setActive] = useState<string>('pulse')

  function NavButton({
    item,
    showLabels,
  }: {
    item: (typeof nav)[number]
    showLabels: boolean
  }) {
    const Icon = item.icon
    const isActive = active === item.id
    return (
      <button
        type="button"
        onClick={() => {
          setActive(item.id)
          if (showLabels) onMobileClose()
        }}
        className={cn(
          'flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors',
          isActive
            ? 'bg-brand-primary/15 text-brand-primary dark:bg-white/10 dark:text-white'
            : 'text-slate-600 hover:bg-white/50 dark:text-slate-300 dark:hover:bg-white/[0.07]',
        )}
      >
        <span
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors',
            isActive
              ? 'border-brand-primary/40 bg-white/80 dark:border-white/20 dark:bg-white/10'
              : 'border-transparent bg-white/40 dark:bg-white/[0.04]',
          )}
        >
          <Icon active={isActive} />
        </span>
        <span
          className={cn(
            'min-w-0 truncate text-sm font-semibold tracking-tight transition-opacity duration-200',
            showLabels
              ? 'opacity-100'
              : 'opacity-0 group-hover:opacity-100',
          )}
        >
          {item.label}
        </span>
      </button>
    )
  }

  return (
    <>
      <aside
        className={cn(
          'group fixed left-3 top-3 z-40 hidden h-[calc(100dvh-1.5rem)] w-[4.25rem] overflow-hidden rounded-[1.75rem]',
          'border border-white/25 bg-white/45 shadow-xl backdrop-blur-2xl transition-[width] duration-300 ease-out',
          'hover:w-56 md:flex md:flex-col',
          'dark:border-white/10 dark:bg-[#0f172a]/55 dark:shadow-[0_24px_80px_rgba(0,0,0,0.5)]',
        )}
        aria-label="Primary navigation"
      >
        <div className="flex h-14 shrink-0 items-center justify-center border-b border-white/15 px-2 dark:border-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-[#8b84ff] text-sm font-extrabold tracking-tighter text-white shadow-lg shadow-brand-primary/30">
            Æ
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden p-2">
          {nav.map((item) => (
            <NavButton key={item.id} item={item} showLabels={false} />
          ))}
        </nav>
        <div className="border-t border-white/15 p-3 dark:border-white/10">
          <p className="truncate px-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:text-slate-400">
            Aether
          </p>
        </div>
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900 md:hidden"
              aria-label="Close menu"
              onClick={onMobileClose}
            />
            <motion.aside
              initial={{ x: '-105%' }}
              animate={{ x: 0 }}
              exit={{ x: '-105%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="fixed left-0 top-0 z-50 flex h-full w-[min(20rem,88vw)] flex-col border-r border-white/20 bg-white/80 py-4 pl-4 pr-3 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#0f172a]/90 md:hidden"
            >
              <div className="mb-4 flex items-center gap-2 pr-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-[#8b84ff] text-sm font-extrabold text-white">
                  Æ
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Aether
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Command surface
                  </p>
                </div>
              </div>
              <nav className="flex flex-1 flex-col gap-1">
                {nav.map((item) => (
                  <NavButton key={item.id} item={item} showLabels />
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function PulseIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
        stroke="currentColor"
        strokeWidth="1.6"
        className={active ? 'text-brand-primary dark:text-brand-secondary' : ''}
      />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SignalsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 19V5M9 15V9M13 17v-6M17 13V7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className={active ? 'text-brand-primary dark:text-brand-secondary' : ''}
      />
    </svg>
  )
}

function FlowsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 7h6a4 4 0 014 4v6M7 17l4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active ? 'text-brand-primary dark:text-brand-secondary' : ''}
      />
    </svg>
  )
}

function VaultIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 10V8a5 5 0 0110 0v2M6 10h12v10a2 2 0 01-2 2H8a2 2 0 01-2-2V10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        className={active ? 'text-brand-primary dark:text-brand-secondary' : ''}
      />
    </svg>
  )
}

function SettingsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth="1.6"
        className={active ? 'text-brand-primary dark:text-brand-secondary' : ''}
      />
      <path
        d="M19.4 15a1.73 1.73 0 00.2-1 1.73 1.73 0 00-.47-1L20 12l-1.87-1a1.74 1.74 0 00.1-.65v-.13a1.74 1.74 0 00-.1-.65L20 8l-1.87-1a1.73 1.73 0 00-.47-1 1.73 1.73 0 00-1-.2h-.13a1.74 1.74 0 00-.65.1L15 4.13a1.74 1.74 0 00-3 0l-1.88 1.87a1.74 1.74 0 00-.65-.1h-.13a1.73 1.73 0 00-1 .2 1.73 1.73 0 00-.47 1L4 8l1.87 1a1.74 1.74 0 00-.1.65v.13a1.74 1.74 0 00.1.65L4 12l1.87 1a1.73 1.73 0 00.47 1 1.73 1.73 0 001 .2h.13a1.74 1.74 0 00.65-.1L9 19.87a1.74 1.74 0 003 0l1.88-1.87a1.74 1.74 0 00.65.1h.13a1.73 1.73 0 001-.2 1.73 1.73 0 00.47-1L20 12l-1.87-1a1.73 1.73 0 00.27-.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
