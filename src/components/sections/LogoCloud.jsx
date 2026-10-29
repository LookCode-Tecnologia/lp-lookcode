export default function LogoCloud() {
  const solutions = ['Sistemas sob medida', 'Aplicativos', 'Inteligência artificial', 'Pagamentos', 'Logística', 'Telecom', 'CRM', 'E-commerce']

  return (
    <section className="bg-surface-900 py-16 md:py-24 border-b border-foreground/5" aria-label="Soluções para o seu negócio">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center font-mono text-xs text-copy-900 uppercase tracking-widest mb-10 md:mb-16">
          Soluções para o que seu negócio precisa
        </p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-8">
          {solutions.map(name => (
            <li key={name} className="font-display text-2xl md:text-4xl font-semibold text-copy-700 text-center">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
