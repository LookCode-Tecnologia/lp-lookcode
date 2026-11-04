// Adapted from GSAP Flip Card, built using Hyperiux Vault: https://vault.hyperiux.com
'use client'

import { type CSSProperties, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { motion, type MotionValue, useMotionValue, useMotionValueEvent } from 'motion/react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ArrowUpRight, Layers, Minus } from 'lucide-react'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { SplitText } from 'gsap/SplitText'

if (typeof window !== 'undefined') gsap.registerPlugin(Flip, SplitText)

export interface GsapFlipCardItem {
  id?: string | number
  image: string
  alt?: string
  title: string
  meta?: string
  description?: string
  caption?: string
  features?: string[]
  href: string
}

export interface GsapFlipCardProps {
  items: GsapFlipCardItem[]
  title?: string
  description?: string
  rounded?: number
  duration?: number
  ease?: string
  stackRotation?: number
  showCounter?: boolean
  onClose?: () => void
  className?: string
  scrollProgress?: MotionValue<number>
  onNavigate?: (step: number) => void
}

/** Same card nodes travel between the stack, preview and rail via GSAP Flip. */
export default function GsapFlipCard({
  items, title = 'Conheça nossos produtos.', description, rounded = 16,
  duration = 0.7, ease = 'power3.inOut', stackRotation = -5,
  showCounter = true, onClose, className = '', scrollProgress, onNavigate,
}: GsapFlipCardProps) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const mobile = useMediaQuery('(max-width: 899px)')
  const [selected, setSelected] = useState(0)
  const [opened, setOpened] = useState(false)
  const cardRefs = useRef(new Map<number, HTMLButtonElement>())
  const captionRef = useRef<HTMLParagraphElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const flipState = useRef<ReturnType<typeof Flip.getState> | null>(null)
  const animation = useRef<gsap.core.Timeline | null>(null)
  const fallbackProgress = useMotionValue(0)
  const previousScrollStep = useRef(-1)
  const detailsId = useId()
  const instanceId = useId()
  const expanded = opened || mobile
  const activeIndex = selected < items.length ? selected : 0
  const item = items[activeIndex]
  const order = [activeIndex, ...items.map((_, index) => index).filter(index => index !== activeIndex)]

  const capture = () => {
    // Finish interrupted travel before measuring the next layout.
    animation.current?.progress(1).kill()
    flipState.current = reducedMotion || mobile ? null : Flip.getState([...cardRefs.current.values()], { props: 'borderRadius' })
  }
  const select = (index: number) => {
    if (index === activeIndex && expanded) return
    capture()
    setSelected(index)
    setOpened(true)
    onNavigate?.(index + 1)
  }
  const close = () => {
    if (!opened || mobile) return
    capture()
    setOpened(false)
    triggerRef.current?.focus({ preventScroll: true })
    onClose?.()
    onNavigate?.(0)
  }

  const syncScrollState = (progress: number) => {
    if (!scrollProgress) return
    // First 10% opens the collection; each product then owns a 30% reading interval.
    const step = progress < 0.1 ? 0 : Math.min(items.length, Math.floor((progress - 0.1) / (0.9 / items.length)) + 1)
    if (previousScrollStep.current === step) return
    previousScrollStep.current = step
    capture()
    setSelected(Math.max(0, step - 1))
    setOpened(step > 0)
  }
  useMotionValueEvent(scrollProgress ?? fallbackProgress, 'change', syncScrollState)
  useLayoutEffect(() => {
    if (scrollProgress) syncScrollState(scrollProgress.get())
  }, [scrollProgress])

  useLayoutEffect(() => {
    const state = flipState.current
    flipState.current = null
    if (!state || reducedMotion || mobile) return
    animation.current = Flip.from(state, { duration, ease, absolute: true, props: 'borderRadius', stagger: 0.035 })
  }, [selected, opened, mobile, reducedMotion, duration, ease])

  useEffect(() => {
    animation.current?.progress(1).kill()
  }, [mobile, reducedMotion])
  useEffect(() => () => { animation.current?.kill() }, [])

  useLayoutEffect(() => {
    const caption = captionRef.current
    if (!caption || reducedMotion || !expanded) return
    const split = SplitText.create(caption, { type: 'lines', mask: 'lines' })
    const tween = gsap.from(split.lines, { yPercent: 100, opacity: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out' })
    return () => { tween.kill(); split.revert() }
  }, [activeIndex, expanded, reducedMotion])

  if (!item) return null

  return (
    <div
      className={`product-flip ${className}`}
      data-open={expanded}
      data-scroll={Boolean(scrollProgress)}
      style={{ '--product-radius': `${rounded}px`, '--stack-rotation': `${stackRotation}deg` } as CSSProperties}
      onKeyDown={event => {
        // Keyboard navigation stays inside this gallery.
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
        if (event.key === 'Escape') { event.preventDefault(); close() }
        if (expanded && ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(event.key)) {
          event.preventDefault()
          const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1
          const next = (activeIndex + direction + items.length) % items.length
          select(next)
          cardRefs.current.get(next)?.focus({ preventScroll: true })
        }
      }}
    >
      <div className="product-flip-toolbar">
        {showCounter && <span className="font-mono text-xs text-copy-900"><span className="text-copy-100">{String(activeIndex + 1).padStart(2, '0')}</span> / {String(items.length).padStart(2, '0')}</span>}
        {scrollProgress && <span className="product-scroll-hint font-mono text-xs text-copy-900">Role para {expanded ? activeIndex === items.length - 1 ? 'seguir na página' : 'conhecer o próximo' : 'abrir a coleção'} <span aria-hidden="true">↓</span></span>}
        <button ref={triggerRef} type="button" className="product-flip-toggle font-mono text-xs text-copy-700 hover:text-signal" aria-expanded={expanded} aria-controls={detailsId} onClick={() => { if (opened) close(); else { capture(); setOpened(true); onNavigate?.(1) } }}>
          {opened ? <Minus size={15} aria-hidden="true" /> : <Layers size={15} aria-hidden="true" />}
          {opened ? 'Recolher produtos' : 'Explorar produtos'}
        </button>
        <span className="product-mobile-hint font-mono text-xs text-copy-900">Toque em uma capa para explorar</span>
      </div>

      <div className="product-flip-stage">
        <div className="product-flip-copy" id={detailsId}>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-signal">{expanded ? item.meta : 'Feitos para a vida real'}</p>
          <h3 className="mb-5 font-display text-3xl font-medium leading-tight tracking-tight lg:text-4xl">{expanded ? item.title : title}</h3>
          <p className="text-base leading-relaxed text-copy-700">{expanded ? item.description : description}</p>
          {expanded ? <>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-copy-700">
              {item.features?.map(feature => <li key={feature} className="flex items-center gap-3"><span className="h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />{feature}</li>)}
            </ul>
            <p key={item.id ?? activeIndex} ref={captionRef} className="product-flip-caption mt-7 text-sm leading-relaxed text-copy-900">{item.caption}</p>
          </> : <p className="mt-7 font-mono text-xs leading-relaxed text-copy-900">{scrollProgress ? 'Continue rolando para conhecer os três produtos.' : 'Clique nas capas para abrir a coleção.'}</p>}
          <div className={expanded ? 'mt-7' : 'mt-7 flex flex-wrap gap-x-5 gap-y-2'}>
            {items.map((product, index) => <a key={product.id ?? index} href={product.href} target="_blank" rel="noopener noreferrer" hidden={expanded && index !== activeIndex} className={expanded ? 'product-access inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-signal px-6 text-sm font-semibold text-ink-950 transition-colors hover:bg-secondary/90' : 'inline-flex min-h-11 items-center gap-1 text-sm text-copy-700 underline decoration-foreground/20 underline-offset-4 hover:text-signal'}>
              {expanded ? 'Acessar produto' : product.title}<ArrowUpRight size={expanded ? 18 : 14} aria-hidden="true" /><span className="sr-only">{expanded ? `: ${product.title}, abre em nova aba` : ', abre em nova aba'}</span>
            </a>)}
          </div>
        </div>

        {items.map((product, index) => {
          const slot = order.indexOf(index)
          const hero = index === activeIndex
          return <button
            key={product.id ?? index}
            ref={node => { if (node) cardRefs.current.set(index, node); else cardRefs.current.delete(index) }}
            type="button"
            data-flip-id={`${instanceId}-product-${product.id ?? index}`}
            data-slot={slot}
            data-hero={hero}
            aria-label={expanded ? `Ver ${product.title}` : `Explorar produtos: ${product.title}`}
            aria-pressed={expanded ? hero : undefined}
            aria-controls={detailsId}
            tabIndex={!expanded && !hero ? -1 : 0}
            className="product-flip-card"
            style={{ '--slot': slot, '--rail-slot': Math.max(0, slot - 1) } as CSSProperties}
            onClick={() => select(index)}
          >
            <img src={product.image} alt={product.alt ?? ''} width="640" height="800" loading="lazy" decoding="async" draggable={false} />
            <span className="product-thumb-label">{product.title}</span>
          </button>
        })}
      </div>
      {scrollProgress && <div className="product-scroll-progress" aria-hidden="true"><motion.div style={{ scaleX: scrollProgress }} /></div>}
      <p className="sr-only" role="status" aria-atomic="true">{expanded ? `Produto ${activeIndex + 1} de ${items.length}: ${item.title}` : 'Coleção de produtos recolhida'}</p>
    </div>
  )
}
