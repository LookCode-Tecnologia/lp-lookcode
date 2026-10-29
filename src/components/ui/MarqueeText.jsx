
import { useRef } from 'react'
import { useInView } from 'motion/react'

export default function MarqueeText({ items, direction = 'forward' }) {
  const viewportRef = useRef(null)
  const inView = useInView(viewportRef, { once: true, margin: '200px 0px' })
  const animationClass = direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee'

  return (
    <div ref={viewportRef} className="marquee-viewport relative w-full overflow-hidden">
      <div className={`marquee-track ${animationClass}`} style={{ animationPlayState: inView ? 'running' : 'paused' }}>
        {[0, 1].map(copy => (
          <div key={copy} className="marquee-copy" aria-hidden={copy === 1 ? true : undefined}>
            {items.map((item, index) => (
              <div key={index} className="flex shrink-0 items-center">
                <span className="mx-8">{item}</span>
                <span aria-hidden="true" className="text-signal/30 text-sm">◆</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
