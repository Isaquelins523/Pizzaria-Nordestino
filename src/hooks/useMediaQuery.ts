import { useState, useEffect } from 'react'

/**
 * Hook que observa uma media query e retorna se está ativa.
 * Útil para comportamentos responsivos em JS (ex: esconder menu em mobile).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', handler)
    setMatches(media.matches)
    return () => media.removeEventListener('change', handler)
  }, [query])

  return matches
}
