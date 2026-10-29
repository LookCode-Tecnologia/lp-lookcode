import ScrollReveal from '../ui/ScrollReveal'

export default function BlogPreview() {
  const posts = [
    { title: 'Como transformar uma ideia em um produto digital', cat: 'Produto digital', readTime: 'Estratégia', date: '01' },
    { title: 'Integrações que simplificam sua operação', cat: 'Integrações', readTime: 'Engenharia', date: '02' },
    { title: 'Aplicativos que aproximam seu negócio dos clientes', cat: 'Mobile', readTime: 'Experiência', date: '03' }
  ]

  return (
    <section className="bg-surface-900 py-32" id="blog">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Conhecimento</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">Tecnologia na prática.</h2>
          </div>
          <a aria-label="Conversar com a Look Code" href="https://wa.me/5511933043152" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-copy-900 hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-1 group" data-cursor="hover">
            Conversar com especialistas <span className="text-signal inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <a aria-label="Conversar com a Look Code" href="https://wa.me/5511933043152" target="_blank" rel="noopener noreferrer" className="block bg-surface-800 border border-foreground/5 p-8 h-full group transition-all duration-500 hover:border-signal/30 hover:-translate-y-2 hover:bg-surface-800/80 relative overflow-hidden" data-cursor="hover">
                <div className="absolute inset-0 bg-gradient-to-t from-signal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <span className="inline-block border border-signal/30 text-signal font-mono text-xs px-3 py-1 rounded-full self-start mb-6 -ml-1">
                    {post.cat}
                  </span>

                  <h3 className="font-display text-2xl lg:text-3xl font-medium leading-[1.2] mb-6 tracking-tight group-hover:text-signal transition-colors duration-300">
                    {post.title}
                  </h3>

                  <div className="mt-auto pt-8 border-t border-foreground/5 flex items-center justify-between font-mono text-xs text-copy-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-mist-700"></div>
                      <span>{post.date}</span>
                      <span className="opacity-50">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-signal">
                      Saiba mais &rarr;
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
