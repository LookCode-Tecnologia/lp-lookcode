import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '../ui/ScrollReveal'

export default function ProcessTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  })

  // We draw the vertical line from top to bottom
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const steps = [
    {
        "title": "Primeira conversa",
        "tagline": "Tudo começa com o seu desafio",
        "desc": "Alinhamos objetivos, prioridades e o contexto do seu negócio em uma conversa direta.",
        "duration": "01 · Descoberta"
    },
    {
        "title": "Imersão no negócio",
        "tagline": "Entender antes de construir",
        "desc": "Mapeamos os processos, as jornadas e as integrações para identificar o que precisa ser resolvido.",
        "duration": "02 · Diagnóstico"
    },
    {
        "title": "Plano de construção",
        "tagline": "Clareza em cada decisão",
        "desc": "Definimos escopo, arquitetura e etapas de entrega para dar previsibilidade ao projeto.",
        "duration": "03 · Estratégia"
    },
    {
        "title": "Design & experiência",
        "tagline": "A ideia começa a ganhar forma",
        "desc": "Desenhamos interfaces e validamos os fluxos com você antes de avançar na implementação.",
        "duration": "04 · Design"
    },
    {
        "title": "Desenvolver & validar",
        "tagline": "Entregas que evoluem com você",
        "desc": "Construímos em ciclos, com validação contínua e espaço para os ajustes que fazem diferença.",
        "duration": "05 · Engenharia"
    },
    {
        "title": "Lançar & evoluir",
        "tagline": "Seu produto pronto para o próximo passo",
        "desc": "Acompanhamos a entrada em produção e planejamos suporte, manutenção e evolução.",
        "duration": "06 · Evolução"
    }
]

  const StepItem = ({ step, index }) => {
    const { ref, inView } = useInView({ threshold: 0.5 })

    return (
      <div ref={ref} className="min-h-screen flex items-center relative py-32" id={`process-step-${index}`}>
        {/* Animated Dot indicator */}
        <div className="absolute left-0 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10 group cursor-pointer">
          <motion.div
            className="w-4 h-4 rounded-full border-2 transition-colors duration-500"
            animate={{
              borderColor: inView ? '#00D9FF' : 'rgba(255,255,255,0.2)',
              backgroundColor: inView ? '#00D9FF' : '#080812'
            }}
          />
          <span className="absolute left-8 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity text-copy-900">Scroll</span>
        </div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: '-20%' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="pl-16 md:pl-24 relative w-full max-w-2xl"
        >
          {/* Faded Background Number */}
          <div className="absolute -top-12 md:-top-20 left-12 md:left-16 font-display text-[8rem] md:text-[12rem] text-foreground/5 font-bold leading-none select-none pointer-events-none">
            0{index + 1}
          </div>

          <div className="relative z-10">
            <span className="inline-block border border-foreground/10 text-copy-900 bg-surface-950 font-mono text-xs px-3 py-1 rounded-full mb-6">
              {step.duration}
            </span>
            <h3 className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight transition-colors duration-500 ${inView ? 'text-foreground' : 'text-copy-500'}`}>
              {step.title}
            </h3>
            <p className={`font-body text-xl md:text-2xl mb-6 transition-colors duration-500 ${inView ? 'text-signal' : 'text-copy-700'}`}>
              "{step.tagline}"
            </p>
            <p className="text-copy-900 text-base md:text-lg leading-relaxed max-w-lg">
              {step.desc}
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <section ref={containerRef} className="bg-surface-900 relative" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Nosso processo</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">Da ideia à evolução.</h2>
        </ScrollReveal>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative w-full flex">

        {/* Vertical Timeline container - sticky */}
        <div className="w-px bg-foreground/5 absolute top-0 bottom-0 left-6 md:left-12 opacity-50"></div>

        {/* The active animated line */}
        <div className="sticky top-0 h-screen w-px left-6 md:left-12 flex-shrink-0 z-0">
          <motion.div
            className="absolute top-0 w-[3px] -ml-[1px] bg-gradient-to-b from-signal/10 via-signal to-signal/10 origin-top shadow-[0_0_15px_rgba(0,217,255,0.5)]"
            style={{ scaleY, height: "100vh" }}
          />
        </div>

        {/* Steps contents */}
        <div className="flex-1 pb-32">
          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
