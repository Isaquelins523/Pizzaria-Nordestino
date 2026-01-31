import { motion } from 'framer-motion'
import { useScrollIntoView } from '../../hooks/useScrollIntoView'
import { PIZZA_IMAGE } from '../../constants/images'

export function About() {
  const { ref, isInView } = useScrollIntoView({ once: true })

  return (
    <section id="sobre" className="py-16 md:py-24 px-6 bg-[#1a1a1a]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display font-bold text-3xl md:text-4xl text-center mb-3"
          style={{ color: '#f9d03d' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Sobre nós
        </motion.h2>
        <motion.p
          className="text-center text-[#f5e6d3]/90 text-lg mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tradição nordestina com sabor que arretar!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative max-w-xs mx-auto"
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="aspect-square w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden ring-4 ring-[#c76e2a] shadow-xl bg-white/5">
              <img
                src={PIZZA_IMAGE}
                alt="Pizzas Nordestino - sabor arretado"
                className="w-full h-full object-cover min-h-[200px]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-[#c76e2a] flex items-center justify-center shadow-lg">
              <span className="font-display font-bold text-2xl text-white">100%</span>
            </div>
          </motion.div>

          <div className="space-y-5">
            {[
              { title: 'Sabor nordestino', text: 'Receitas que trazem o melhor do Nordeste para sua mesa: pizzas, lanches e porções com aquele tempero que só a região tem.' },
              { title: 'Atendimento de qualidade', text: 'Equipe pronta para te atender com carinho e agilidade, seja no balcão ou delivery.' },
              { title: 'Angical do Piauí', text: 'No coração do Piauí, somos referência em lanchonete e pizzaria com identidade nordestina.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c76e2a]/50 transition-colors"
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <h3 className="font-display font-semibold text-lg mb-1.5" style={{ color: '#c76e2a' }}>{item.title}</h3>
                <p className="text-[#f5e6d3]/85 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
