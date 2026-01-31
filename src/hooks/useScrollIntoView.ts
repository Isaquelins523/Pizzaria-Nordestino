import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Hook que detecta quando o elemento entra na viewport.
 * Útil para disparar animações ao rolar a página.
 */
export function useScrollIntoView(options?: { once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: 0.2,
  })
  return { ref, isInView }
}
