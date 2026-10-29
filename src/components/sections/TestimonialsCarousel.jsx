import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'motion/react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function TestimonialsCarousel() {
  const testimonials = [
    {
        "quote": "Tecnologia só faz sentido quando resolve um problema real.",
        "author": "Nosso propósito",
        "company": "Look Code · Estratégia"
    },
    {
        "quote": "Uma boa experiência começa com atenção a cada detalhe.",
        "author": "Nossa abordagem",
        "company": "Look Code · Experiência"
    },
    {
        "quote": "Construir bem hoje é preparar seu negócio para amanhã.",
        "author": "Nosso compromisso",
        "company": "Look Code · Engenharia"
    },
    {
        "quote": "As melhores soluções nascem de uma parceria próxima.",
        "author": "Nosso jeito de trabalhar",
        "company": "Look Code · Colaboração"
    },
    {
        "quote": "Cada entrega abre espaço para a próxima evolução.",
        "author": "Nossa visão",
        "company": "Look Code · Evolução"
    }
]

  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    if (reduced || window.matchMedia('(max-height: 540px)').matches) return
    const index = Math.min(testimonials.length - 1, Math.max(0, Math.floor(progress * testimonials.length)))
    setCurrentIndex(previous => previous === index ? previous : index)
  })

  const navigateTo = index => {
    const target = Math.max(0, Math.min(testimonials.length - 1, index))
    if (reduced || window.matchMedia('(max-height: 540px)').matches) {
      setCurrentIndex(target)
      return
    }
    const section = sectionRef.current
    if (!section) return
    const start = window.scrollY + section.getBoundingClientRect().top
    const travel = Math.max(0, section.offsetHeight - window.innerHeight)
    // Land in the middle of a reading interval, away from transition boundaries.
    window.scrollTo({ top: start + travel * ((target + 0.5) / testimonials.length), behavior: 'instant' })
  }


  const next = () => navigateTo(currentIndex + 1)
  const prev = () => navigateTo(currentIndex - 1)

  return (
    <section ref={sectionRef} aria-label="Princípios da Look Code" className="principles-scroll bg-surface-950 relative">
      <div className="principles-sticky flex items-center py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative min-h-[400px] flex flex-col justify-center">

        {/* Giant decorative quote */}
        <div className="absolute top-0 left-4 font-display text-[15rem] md:text-[25rem] text-signal/10 leading-none pointer-events-none select-none -translate-y-12">
          "
        </div>

        <div className="principles-copy relative z-10 w-full md:w-4/5 mx-auto text-center" data-cursor="text">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -20 }}
              transition={{ duration: reduced ? 0 : 0.25 }}
              className="flex flex-col items-center"
            >
              <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-12">
                {testimonials[currentIndex].quote}
              </blockquote>

              <div>
                <p className="font-mono text-signal uppercase tracking-widest text-sm mb-1">
                  {testimonials[currentIndex].author}
                </p>
                <p className="font-body text-copy-700">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="principles-scroll-hint font-mono text-xs text-copy-900 text-center mt-6" aria-hidden="true">Role para continuar · {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</p>

        {/* Navigation */}
        <div className="principles-controls flex flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex gap-4">
            <MagneticButton onClick={prev} disabled={currentIndex === 0} aria-label="Princípio anterior" className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground/5 hover:border-foreground/30 transition-colors disabled:opacity-30 disabled:cursor-default">
              <ChevronLeft size={20} />
            </MagneticButton>
            <MagneticButton onClick={next} disabled={currentIndex === testimonials.length - 1} aria-label="Próximo princípio" className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground/5 hover:border-foreground/30 transition-colors disabled:opacity-30 disabled:cursor-default">
              <ChevronRight size={20} />
            </MagneticButton>
          </div>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => navigateTo(i)}
                className="w-8 h-11 flex items-center justify-center"
                aria-current={i === currentIndex ? "step" : undefined}
                aria-label={`Ir para princípio ${i + 1}`}
              >
                <span aria-hidden="true" className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-signal w-6" : "bg-foreground/20 w-2"}`} />
              </button>
            ))}
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}
