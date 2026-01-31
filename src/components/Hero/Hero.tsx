import { motion } from 'framer-motion'
import { WHATSAPP_LINK } from '../../constants/contact'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #c76e2a 0%, #a85a22 40%, #1a1a1a 100%)',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,208,61,0.15),transparent)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <motion.img
            src="/logo-nordestino.png"
            alt="Nordestino Lanchonete e Pizzaria"
            className="mx-auto h-24 w-24 md:h-32 md:w-32 rounded-full object-cover ring-4 ring-[#f9d03d]/90 shadow-2xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.15 }}
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        <motion.h1
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Nordestino
        </motion.h1>
        <motion.p
          className="font-display font-semibold text-xl md:text-2xl text-[#f9d03d] mb-1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Lanchonete e Pizzaria
        </motion.p>
        <motion.p
          className="text-[#f5e6d3] text-lg md:text-xl font-medium mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Sabor arretado de bom!
        </motion.p>
        <motion.p
          className="text-[#f5e6d3]/80 text-sm mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          Angical do Piauí - PI
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#cardapio"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg bg-[#f9d03d] text-[#1a1a1a] shadow-lg hover:bg-[#f5c42a] hover:shadow-xl transition-all"
          >
            Ver cardápio
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg bg-white/15 text-white border-2 border-white/40 hover:bg-white/25 transition-all"
          >
            Pedir no WhatsApp
          </a>
        </motion.div>
      </div>
      <motion.a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#f5e6d3]/60 hover:text-[#f9d03d] transition-colors"
        aria-label="Rolar para baixo"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  )
}
