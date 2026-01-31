import { motion } from 'framer-motion'
import { useScrollIntoView } from '../../hooks/useScrollIntoView'
import { PIZZAS, PIZZA_PRICES } from '../../constants/menu'
import { PIZZA_IMAGE } from '../../constants/images'

export function Menu() {
  const { ref, isInView } = useScrollIntoView({ once: true })

  return (
    <section
      id="cardapio"
      className="py-16 md:py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #141414 100%)' }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display font-bold text-3xl md:text-4xl text-center mb-3"
          style={{ color: '#f9d03d' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Cardápio
        </motion.h2>
        <motion.p
          className="text-center text-[#f5e6d3]/90 text-lg mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Pizzas com sabor arretado
        </motion.p>

        <motion.div
          className="w-full max-w-2xl mx-auto mb-12 rounded-2xl overflow-hidden ring-2 ring-[#c76e2a]/60 shadow-xl bg-white/5"
          style={{ aspectRatio: '2/1', minHeight: '180px' }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <img
            src={PIZZA_IMAGE}
            alt="Pizzas Nordestino"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-start">
          <div className="flex-1 w-full grid sm:grid-cols-2 gap-3">
            {PIZZAS.map((item, i) => (
              <motion.div
                key={item.name}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c76e2a]/40 hover:bg-white/8 transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.02 }}
              >
                <h3 className="font-semibold text-[#f5e6d3] text-sm uppercase tracking-wide">
                  {item.name}
                </h3>
                <p className="text-[#f5e6d3]/70 text-xs mt-0.5 leading-snug">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="w-full lg:w-56 shrink-0 p-5 rounded-2xl border-2 border-white/15 bg-white/5"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="font-display font-bold text-center mb-4 text-base" style={{ color: '#f9d03d' }}>
              Preços
            </p>
            <ul className="space-y-2.5">
              {PIZZA_PRICES.map(({ size, label, price }, i) => (
                <motion.li
                  key={size}
                  className="flex items-center justify-between gap-2 text-[#f5e6d3] text-sm"
                  initial={{ opacity: 0, x: 8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.04 }}
                >
                  <span className="font-bold" style={{ color: '#c76e2a' }}>{size}</span>
                  <span className="text-[#f5e6d3]/75 text-xs">{label}</span>
                  <span className="font-bold" style={{ color: '#f9d03d' }}>{price}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-[#f5e6d3]/50 text-xs mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          Valores sujeitos a alteração. Pedidos pelo WhatsApp.
        </motion.p>
      </div>
    </section>
  )
}
