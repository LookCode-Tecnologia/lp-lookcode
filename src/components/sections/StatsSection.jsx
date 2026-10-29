import { services } from '../../data/content'
import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollReveal from '../ui/ScrollReveal'

export default function StatsSection() {
  const stats = [
    {
        "num": 200,
        "label": "Projetos entregues",
        "suffix": "+"
    },
    {
        "num": 10,
        "label": "Anos de experiência",
        "suffix": "+"
    },
    {
        "num": 100,
        "label": "Clientes satisfeitos",
        "suffix": "%"
    },
    {
        "num": 24,
        "label": "Suporte técnico",
        "suffix": "/7"
    },
    {
        "num": 2014,
        "label": "Nossa história começa"
    },
    {
        "num": services.length,
        "label": "Especialidades conectadas"
    }
]

  return (
    <section className="bg-signal py-24 md:py-32 w-full text-ink-950 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-y-20 whitespace-nowrap">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col items-start xl:items-center">
              <div className="font-display text-6xl md:text-8xl font-bold tracking-tighter tabular-nums">
                <AnimatedCounter
                  end={stat.num}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="font-mono text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-4 opacity-80 font-semibold text-wrap">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
