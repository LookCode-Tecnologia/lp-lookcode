import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import BrandLogo from '../ui/BrandLogo'
import { contactUrl } from '../../data/contact'

const links = [['Soluções', 'work'], ['Serviços', 'services'], ['Processo', 'process'], ['Sobre', 'team'], ['Conteúdo', 'blog'], ['Contato', 'contact']]
export default function Navbar() {
  const reduced = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggle = useRef(null)
  const panel = useRef(null)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', value => setScrolled(value > 80))
  useEffect(() => {
    if (!open) return
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel.current?.querySelector('a')?.focus()
    const close = () => { setOpen(false); toggle.current?.focus() }
    const handleKey = e => {
      if (e.key === 'Escape') close()
      if (e.key === 'Tab') {
        const controls = [toggle.current, ...panel.current.querySelectorAll('a')]
        const first = controls[0], last = controls.at(-1)
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    const media = window.matchMedia('(min-width: 768px)')
    media.addEventListener('change', close)
    document.addEventListener('keydown', handleKey)
    return () => { document.body.style.overflow = old; document.removeEventListener('keydown', handleKey); media.removeEventListener('change', close) }
  }, [open])
  return <>
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${open ? 'bg-surface-950 py-4' : scrolled ? 'backdrop-blur-xl bg-surface-950/80 border-b border-foreground/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-6">
        <a href="#" aria-label="Look Code — início" className="relative z-50 shrink-0 py-2"><BrandLogo className="w-40 lg:w-48" /></a>
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-4 lg:gap-8">{links.map(([label,id]) => <a key={id} href={`#${id}`} className="font-body text-sm text-copy-900 hover:text-foreground transition-colors relative group">{label}<span className="absolute -bottom-1 left-0 h-px bg-signal w-0 group-hover:w-full transition-all duration-300" /></a>)}</nav>
        <div className="hidden lg:block"><MagneticButton className="inline-flex px-6 py-2.5 rounded-full border border-ember text-blue-400 text-sm hover:bg-ember hover:text-white transition-colors whitespace-nowrap">Iniciar um projeto</MagneticButton></div>
        <button ref={toggle} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" className="md:hidden z-50 text-copy-700 flex items-center justify-center w-11 h-11 rounded-full border border-foreground/10 bg-foreground/[0.04] transition-colors hover:bg-foreground/[0.08]" onClick={() => setOpen(!open)}>{open ? <X size={21} strokeWidth={1.5}/> : <Menu size={21} strokeWidth={1.5}/>}</button>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div
      ref={panel} id="mobile-menu"
      initial={{ opacity: 0, y: reduced ? 0 : -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduced ? 0 : -6 }}
      transition={{ duration: reduced ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-40 bg-surface-950 overflow-y-auto overscroll-contain md:hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.12),transparent_70%)]" />
      <div className="relative mx-auto flex min-h-[100dvh] max-w-lg flex-col px-6 pt-28 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copy-900 mb-5">Explore a Look Code</p>
        <nav aria-label="Navegação mobile" className="rounded-2xl border border-foreground/[0.07] bg-foreground/[0.025] px-5">
          {links.map(([label,id],i) => <a
            key={id} href={`#${id}`}
            className="group flex min-h-16 items-center justify-between gap-4 border-b border-foreground/[0.07] py-4 last:border-0 text-copy-500 transition-colors duration-200 hover:text-signal focus-visible:text-signal"
            onClick={() => {setOpen(false); requestAnimationFrame(() => { const section = document.getElementById(id); section?.setAttribute('tabindex','-1'); section?.focus({preventScroll:true}) })}}
          >
            <span className="flex items-center gap-4"><span aria-hidden="true" className="font-mono text-[10px] text-copy-900">{String(i + 1).padStart(2, '0')}</span><span className="font-display text-2xl font-medium tracking-tight">{label}</span></span>
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.5} className="text-copy-900 group-hover:text-signal" />
          </a>)}
        </nav>
        <div className="mt-auto pt-8">
          <p className="font-body text-sm text-copy-900 mb-4">Vamos tirar sua ideia do papel?</p>
          <a href={contactUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex min-h-14 items-center justify-between gap-3 rounded-2xl bg-signal px-5 py-4 text-ink-950 font-body text-base font-semibold transition-colors hover:bg-secondary/90">
            Conversar sobre meu projeto <ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.8} />
          </a>
          <p className="mt-6 text-center font-mono text-[10px] tracking-wide text-copy-900">Estratégia. Design. Engenharia.</p>
        </div>
      </div>
    </motion.div>}</AnimatePresence>
  </>
}
