import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import BrandLogo from '../ui/BrandLogo'

const links = [['Soluções', 'work'], ['Serviços', 'services'], ['Processo', 'process'], ['Sobre', 'team'], ['Conteúdo', 'blog'], ['Contato', 'contact']]
export default function Navbar() {
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-surface-950/80 border-b border-foreground/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-6">
        <a href="#" aria-label="Look Code — início" className="relative z-50 shrink-0 py-2"><BrandLogo className="w-40 lg:w-48" /></a>
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-4 lg:gap-8">{links.map(([label,id]) => <a key={id} href={`#${id}`} className="font-body text-sm text-copy-900 hover:text-foreground transition-colors relative group">{label}<span className="absolute -bottom-1 left-0 h-px bg-signal w-0 group-hover:w-full transition-all duration-300" /></a>)}</nav>
        <div className="hidden lg:block"><MagneticButton className="inline-flex px-6 py-2.5 rounded-full border border-ember text-blue-400 text-sm hover:bg-ember hover:text-white transition-colors whitespace-nowrap">Iniciar um projeto</MagneticButton></div>
        <button ref={toggle} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" className="md:hidden z-50 text-foreground p-2" onClick={() => setOpen(!open)}>{open ? <X size={28}/> : <Menu size={28}/>}</button>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div ref={panel} id="mobile-menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-surface-900 z-40 flex flex-col justify-center px-6 overflow-y-auto">
      <nav aria-label="Navegação mobile" className="flex flex-col gap-4 mt-20 pb-12">{links.map(([label,id],i) => <motion.a key={id} href={`#${id}`} initial={{x:-60,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:i*.07,duration:.5}} className="font-display text-[clamp(2rem,6vh,3.75rem)] text-foreground hover:text-signal" onClick={() => {setOpen(false); requestAnimationFrame(() => { const section = document.getElementById(id); section?.setAttribute('tabindex','-1'); section?.focus({preventScroll:true}) })}}>{label}</motion.a>)}</nav>
      <p className="font-mono text-xs text-copy-900 flex gap-2 items-center mb-8">Estratégia. Design. Engenharia. <ArrowUpRight size={16}/></p>
    </motion.div>}</AnimatePresence>
  </>
}
