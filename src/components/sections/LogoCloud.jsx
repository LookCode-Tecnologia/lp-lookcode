import MarqueeText from '../ui/MarqueeText'

export default function LogoCloud() {
  const solutions = ['Sistemas sob medida', 'Aplicativos', 'Inteligência artificial', 'Pagamentos', 'Logística', 'Telecom', 'CRM', 'E-commerce']
  const reversedSolutions = [...solutions].reverse()

  const SolutionText = ({ name }) => (
    <span className="font-display text-4xl md:text-5xl font-semibold text-foreground/60 hover:text-foreground/90 transition-colors duration-300">
      {name}
    </span>
  )

  const mapped1 = solutions.map(c => <SolutionText key={c} name={c} />)
  const mapped2 = reversedSolutions.map(c => <SolutionText key={c} name={c} />)

  return (
    <section className="bg-surface-900 py-24 pb-32 border-b border-foreground/5 relative overflow-hidden group">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <p className="text-center font-mono text-xs text-copy-900 uppercase tracking-widest">
          Soluções para o que seu negócio precisa
        </p>
      </div>

      {/* Optional: Add hover pause to the group */}
      <div className="flex flex-col gap-12 sm:group-hover:[&>div>div]:[animation-play-state:paused] transition-all">
        <MarqueeText items={mapped1} direction="forward" />
        <MarqueeText items={mapped2} direction="reverse" />
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-surface-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-surface-900 to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}
