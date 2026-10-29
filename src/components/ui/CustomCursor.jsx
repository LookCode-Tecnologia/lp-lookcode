import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

// Decorative pointer enhancement; the system cursor remains available.
export default function CustomCursor() {
  const [state, setState] = useState('default')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const trailX = useSpring(x, { stiffness: 150, damping: 25 })
  const trailY = useSpring(y, { stiffness: 150, damping: 25 })
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    const move = event => {
      if (!media.matches) return
      x.set(event.clientX)
      y.set(event.clientY)
      setState(event.target.closest('[data-cursor]')?.dataset.cursor || 'default')
    }
    const leave = () => { x.set(-100); y.set(-100) }
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    return () => { window.removeEventListener('pointermove', move); document.documentElement.removeEventListener('pointerleave', leave) }
  }, [x, y])
  const size = state === 'view' ? 64 : state === 'hover' ? 48 : state === 'text' ? 4 : 12
  return <>
    <motion.div aria-hidden="true" className="look-cursor fixed top-0 left-0 z-[9999] pointer-events-none" style={{ x, y, mixBlendMode: 'difference' }}>
      <motion.div animate={{ width: size, height: state === 'text' ? 24 : size, backgroundColor: state === 'view' ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)' }} transition={{ type: 'spring', stiffness: 400, damping: 28 }} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white flex items-center justify-center text-ink-950 font-mono text-[10px] font-bold overflow-hidden">{state === 'hover' ? 'VER' : state === 'view' ? 'ABRIR' : ''}</motion.div>
    </motion.div>
    <motion.div aria-hidden="true" className="look-cursor fixed top-0 left-0 z-[9998] pointer-events-none" style={{ x: trailX, y: trailY, mixBlendMode: 'difference' }}><motion.div animate={{ opacity: state === 'default' ? .3 : 0 }} className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" /></motion.div>
  </>
}
