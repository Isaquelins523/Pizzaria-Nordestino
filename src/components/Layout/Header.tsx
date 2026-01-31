import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const NAV_LINKS = [
  { to: '#hero', label: 'Início' },
  { to: '#sobre', label: 'Sobre' },
  { to: '#cardapio', label: 'Cardápio' },
  { to: '#contato', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const closeMenu = useCallback(() => setOpen(false), [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={closeMenu}>
          <motion.img
            src="/logo-nordestino.png"
            alt="Nordestino Lanchonete e Pizzaria"
            className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover ring-2 ring-[#c76e2a]"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
          <span className="font-display font-bold text-base md:text-lg text-[#f5e6d3] hidden sm:block">
            Nordestino
          </span>
        </Link>

        {isMobile ? (
          <>
            <motion.button
              type="button"
              aria-label="Abrir menu"
              className="p-2 rounded-lg text-[#f5e6d3] hover:bg-white/10"
              onClick={() => setOpen((o) => !o)}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
            <AnimatePresence>
              {open && (
                <motion.nav
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 bg-[#1a1a1a] border-b border-white/10 shadow-xl py-4 px-4"
                >
                  <ul className="flex flex-col gap-2">
                    {NAV_LINKS.map((link, i) => (
                      <motion.li
                        key={link.to}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <a
                          href={link.to}
                          onClick={closeMenu}
                          className="block py-2 px-3 rounded-lg text-[#f5e6d3] hover:bg-[#c76e2a]/80 font-medium"
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>
          </>
        ) : (
          <nav>
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <a
                    href={link.to}
                    className="px-4 py-2 rounded-lg text-[#f5e6d3]/90 hover:text-[#f9d03d] hover:bg-white/5 font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </motion.header>
  )
}
