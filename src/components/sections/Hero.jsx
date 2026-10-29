import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function Hero() {
  const reduced = useReducedMotion()
  const containerRef = useRef(null)
  const blobRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return
      const { clientX, clientY } = e
      blobRef.current.style.transform = `translate(${clientX - 400}px, ${clientY - 400}px)`
    }
    if (reduced) return
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [reduced])

  const line1 = "Criamos".split(' ')
  const line2 = "soluções digitais".split(' ')
  const line3 = "que conectam.".split(' ')

  let wordIndex = 0

  const renderWords = (words, stroke = false) => {
    return words.map((word, i) => {
      const currentDelay = (wordIndex++) * 0.08
      return (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: currentDelay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`inline-block mr-[2vw] ${stroke ? 'text-stroke opacity-90' : 'text-foreground'}`}
          style={{ transformOrigin: "bottom center" }}
        >
          {word}
        </motion.span>
      )
    })
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-surface-950 overflow-hidden flex flex-col justify-center pt-20 pb-20">

      {/* Dynamic Backgrounds */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-signal/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out z-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>
      <div className="grain absolute inset-0 z-[1]"></div>

      <motion.div style={reduced ? {} : { opacity, scale, y }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start mt-4 sm:mt-10">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-800 border border-foreground/10 text-copy-900 font-mono text-xs px-4 py-2 rounded-full mb-12 flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 bg-signal rounded-full animate-pulse-slow"></div>
          Desenvolvimento de software sob medida &rarr;
        </motion.div>

        {/* Headlines */}
        <h1 className="font-display text-[clamp(3.3rem,8.8vw,10rem)] leading-[0.9] tracking-tight mb-8 w-full perspective-1000" data-cursor="hover">
          <div className="overflow-visible pb-1 sm:pb-2">{renderWords(line1)}</div>
          <div className="overflow-visible pb-1 sm:pb-2">{renderWords(line2, true)}</div>
          <div className="overflow-visible pb-1 sm:pb-2">{renderWords(line3)}</div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-body text-copy-900 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
          data-cursor="text"
        >
          A Look Code desenvolve sistemas sob medida, aplicativos para iOS e Android e soluções com inteligência artificial. Integramos pagamentos, logística e telecom para simplificar processos e conectar sua operação.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-wrap items-center gap-6"
        >
          <MagneticButton href="#work" target="_self" className="bg-signal text-ink-950 font-display font-medium px-8 py-4 rounded-full text-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all">
            Nossas soluções
          </MagneticButton>
          <button onClick={() => document.getElementById("process").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })} className="border border-foreground/20 text-copy-900 hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5 font-display font-medium px-8 py-4 rounded-full text-lg transition-all" data-cursor="hover">
            Como trabalhamos
          </button>
        </motion.div>

      </motion.div>

      {/* Floating Elements & Decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-12 md:right-32 w-32 h-32 hidden md:flex items-center justify-center opacity-60 z-10"
      >
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text className="font-mono text-[9.5px] fill-foreground tracking-widest uppercase">
            <textPath href="#circlePath">LOOK CODE · LOOK CODE · LOOK CODE · LOOK CODE · </textPath>
          </text>
        </svg>
      </motion.div>

      <div className="absolute bottom-8 left-6 md:left-12 z-20 hidden sm:block">
        <div className="font-display flex flex-col gap-1 items-start text-foreground/80">
          <span className="text-3xl text-signal"><AnimatedCounter end={200} suffix="+" /></span>
          <span className="font-mono text-xs text-copy-900 tracking-wider">Projetos entregues</span>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/30 z-20"
      >
        <ChevronDown size={24} />
      </motion.div>

      {/* Abstract floating shapes behind content */}
      <div className="absolute top-1/2 right-1/4 z-0 opacity-20 pointer-events-none">
        <motion.div animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="w-64 h-64 border border-signal rounded-full" />
      </div>
      <div className="absolute bottom-1/4 right-[10%] z-0 text-foreground/5 pointer-events-none">
        <motion.div animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
          <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor"><rect width="100" height="100" className="clip-diagonal"/></svg>
        </motion.div>
      </div>

    </section>
  )
}
