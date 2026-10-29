import { motion } from 'motion/react'
import MagneticButton from '../ui/MagneticButton'

export default function CTASection() {
  return (
    <section className="relative min-h-screen bg-surface-950 flex flex-col justify-center items-center overflow-hidden py-32" id="cta">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-700 via-surface-900 to-surface-950 opacity-50 z-0"></div>
      <div className="grain absolute inset-0 z-0 mix-blend-overlay opacity-30"></div>

      {/* Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.06),transparent)] z-0 rounded-full blur-[50px] pointer-events-none"></div>

      {/* Very large slow floating shapes */}
      <motion.div
        animate={{ y: [0, -100, 0], x: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-signal rounded-full opacity-[0.02] blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, 100, 0], x: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-40 right-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-ember rounded-full opacity-[0.02] blur-3xl z-0"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-copy-900 uppercase tracking-widest mb-8"
        >
          Vamos construir algo incrível?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(3.7rem,9vw,10rem)] tracking-tighter leading-[0.85] mb-12 flex flex-col"
          data-cursor="hover"
        >
          <span className="text-foreground">Vamos fazer</span>
          <span className="text-stroke">acontecer.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-copy-500 font-body text-xl md:text-2xl mb-16 max-w-xl"
        >
          Tem uma ideia para tirar do papel ou um desafio para resolver? Conte o que seu negócio precisa. Vamos construir juntos a solução para o seu próximo passo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-6 w-full"
        >
          <MagneticButton className="px-12 py-6 text-xl md:text-2xl font-display font-medium bg-signal text-ink-950 rounded-full hover:shadow-[0_0_40px_rgba(0,217,255,0.3)] transition-all group overflow-hidden relative">
            <span className="relative z-10 flex items-center gap-3">
              Conversar sobre minha operação
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>&rarr;</motion.span>
            </span>
            <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
          </MagneticButton>

          <a href="https://wa.me/5511933043152" className="font-mono text-sm text-copy-700 hover:text-foreground transition-colors pb-1 border-b border-foreground/20 hover:border-foreground mt-4" data-cursor="text">
            Ou fale diretamente pelo WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-foreground/5 flex flex-col items-center gap-4 w-full md:w-auto px-12"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`w-10 h-10 rounded-full border-2 border-surface-950 bg-gradient-to-br ${i%2===0 ? 'from-surface-700 to-surface-900' : 'from-signal/20 to-surface-800'}`}></div>
            ))}
          </div>
          <p className="font-mono text-xs text-copy-900">Tecnologia com propósito. Parceria em cada etapa.</p>
        </motion.div>

      </div>
    </section>
  )
}
