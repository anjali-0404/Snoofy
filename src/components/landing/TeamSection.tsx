import { motion, type Variants } from 'framer-motion'
import { cn } from '../../lib/cn'

const board = [
  {
    name: 'Mira Solis',
    role: 'Chair',
    bio: 'Sets the north star for product ethics, customer trust, and long-term resilience.',
    initials: 'MS',
    color: '#E63946',
  },
  {
    name: 'Jon Okonkwo',
    role: 'Independent Director',
    bio: 'Brings enterprise scale experience and a calm hand during high-stakes launches.',
    initials: 'JO',
    color: '#F59E0B',
  },
  {
    name: 'Elena Varga',
    role: 'Independent Director',
    bio: 'Deep background in safety systems and operational readiness reviews.',
    initials: 'EV',
    color: '#10B981',
  },
] as const

const leadership = [
  {
    name: 'Noah Patel',
    role: 'Chief Executive Officer',
    bio: 'Former infra lead; obsessed with latency budgets and delightful defaults.',
    initials: 'NP',
    color: '#6366F1',
  },
  {
    name: 'Riley Chen',
    role: 'Chief Product Officer',
    bio: 'Turns fuzzy ideas into crisp journeys — and measures what actually matters.',
    initials: 'RC',
    color: '#E63946',
  },
  {
    name: 'Samira Haddad',
    role: 'Chief Technology Officer',
    bio: 'Architects the platform with guardrails first, velocity second.',
    initials: 'SH',
    color: '#F59E0B',
  },
  {
    name: 'Diego Alvarez',
    role: 'VP, Customer Success',
    bio: "Makes adoption feel human: onboarding that respects your team's time.",
    initials: 'DA',
    color: '#10B981',
  },
] as const

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

function PersonCard({
  person,
}: {
  person: {
    name: string
    role: string
    bio: string
    initials: string
    color: string
  }
}) {
  return (
    <motion.div variants={fade}>
      <div
        className={cn(
          'group flex h-full flex-col items-center rounded-2xl border border-[#E8E5DF] bg-white p-7 text-center shadow-[0_4px_24px_rgba(28,25,23,0.05)]',
          'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(28,25,23,0.10)]',
          'dark:border-white/10 dark:bg-[#1a1a1a]',
        )}
      >
        {/* Avatar */}
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full text-base font-extrabold text-white shadow-md"
          style={{ background: person.color }}
          aria-hidden
        >
          {person.initials}
        </div>

        <h3
          className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold text-[#1C1917] dark:text-white"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {person.name}
        </h3>

        <div
          className="my-3 h-0.5 w-8 rounded-full"
          style={{ background: person.color }}
          aria-hidden
        />

        <p
          className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em]"
          style={{ color: person.color }}
        >
          {person.role}
        </p>

        <p className="mt-2 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
          {person.bio}
        </p>
      </div>
    </motion.div>
  )
}

function TeamGrid({
  people,
}: {
  people: readonly {
    name: string
    role: string
    bio: string
    initials: string
    color: string
  }[]
}) {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {people.map((p) => (
        <PersonCard key={p.name} person={p} />
      ))}
    </motion.div>
  )
}

/**
 * Two-tier team layout: Board of Directors + Core Leadership.
 */
export function TeamSection() {
  return (
    <section
      id="team"
      className="border-b border-[#E8E5DF] bg-[#F9F7F2] dark:border-white/10 dark:bg-[#111010]"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E63946]">
            People
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[#1C1917] dark:text-white md:text-4xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            The crew behind the curtain
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-[#6B7280] dark:text-slate-400">
            Passionate, experienced people who live and breathe great food.
          </p>
        </motion.div>

        <div className="space-y-14">
          <div>
            <h3 className="mb-7 font-[family-name:var(--font-display)] text-2xl font-bold text-[#1C1917] dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Board of directors
            </h3>
            <TeamGrid people={board} />
          </div>
          <div>
            <h3 className="mb-7 font-[family-name:var(--font-display)] text-2xl font-bold text-[#1C1917] dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Core leadership team
            </h3>
            <TeamGrid people={leadership} />
          </div>
        </div>
      </div>
    </section>
  )
}
