import { contactUrl } from '../../data/contact'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'

export default function MagneticButton({ children, className, ...props }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 200, damping: 15 })
  const springY = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMouseMove = (e) => {
    if (!ref.current || reduced) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.35)
    y.set((e.clientY - centerY) * 0.35)
  }

  const Component = props.onClick ? motion.button : motion.a
  const linkProps = props.onClick ? { type: "button" } : { href: contactUrl, target: "_blank", rel: "noopener noreferrer" }

  return (
    <Component
      {...linkProps}
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className={`inline-flex items-center justify-center ${className || ""}`}
      {...props}
    >
      {children}
    </Component>
  )
}
