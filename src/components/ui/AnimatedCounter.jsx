import { useReducedMotion } from 'motion/react'
import CountUpRaw from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CountUp = CountUpRaw.default || CountUpRaw

export default function AnimatedCounter({ end, prefix = '', suffix = '', decimals = 0 }) {
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <span ref={ref}>
      {reduced ? <span>{prefix}{end}{suffix}</span> : inView ? (
        <CountUp
          start={0}
          end={end}
          duration={2.5}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
        />
      ) : (
        <span>{prefix}{end.toFixed(decimals)}{suffix}</span>
      )}
    </span>
  )
}
