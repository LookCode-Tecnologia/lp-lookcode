import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { team } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function TeamSection() {
  const [active, setActive] = useState(null)
  const PixelAvatar = ({ colors }) => {
    // 4x4 grid of pixels
    const pattern = [
      0,0,1,0,
      0,1,1,0,
      1,0,1,1,
      0,1,0,0
    ]

    return (
      <div className="w-full aspect-square grid grid-cols-4 grid-rows-4 gap-0 mb-6 rounded-sm overflow-hidden border border-foreground/5">
        {pattern.map((val, i) => (
          <div key={i} style={{ backgroundColor: val ? colors[0] : colors[1] }}></div>
        ))}
      </div>
    )
  }

  return (
    <section className="bg-surface-900 py-32" id="team">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-16 md:mb-24">
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">As disciplinas por trás das soluções</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">Talentos que se conectam.</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div role="button" tabIndex={0} aria-expanded={active === i} aria-label={`Conhecer nossa abordagem em ${member.name}`} onClick={() => setActive(active === i ? null : i)} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActive(active === i ? null : i) } }} className="group h-[380px] w-full [perspective:1000px] cursor-pointer">
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]" style={{ transform: active === i ? "rotateY(180deg)" : undefined }}>

                  {/* Front Face */}
                  <div className="absolute inset-0 bg-surface-800 border border-foreground/5 p-6 md:p-8 flex flex-col [backface-visibility:hidden]">
                    <PixelAvatar colors={member.colors} />
                    <h3 className="font-display text-2xl font-semibold">{member.name}</h3>
                    <p className="font-mono text-sm text-signal mt-1">{member.role}</p>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 bg-signal border border-signal p-8 flex flex-col justify-center text-ink-950 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="font-body text-xl lg:text-3xl italic leading-tight mb-8">
                      "{member.quote}"
                    </p>
                    <div className="flex gap-4 mt-auto">
                      <span aria-hidden="true" className="p-2 bg-surface-950 text-copy-100 rounded-full">
                        <MessageCircle size={20} aria-hidden="true" />
                      </span>
                      <span aria-hidden="true" className="p-2 bg-surface-950 text-copy-100 rounded-full">
                        <ArrowUpRight size={20} aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
