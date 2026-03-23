/**
 * Time-aware greeting keeps the hero human and contextual (UX: reduces cognitive load).
 */
export function useGreeting(displayName = 'User') {
  const hour = new Date().getHours()
  let phrase = 'Good evening'
  if (hour < 5) phrase = 'Hello'
  else if (hour < 12) phrase = 'Good morning'
  else if (hour < 17) phrase = 'Good afternoon'

  return { greeting: phrase, name: displayName }
}
