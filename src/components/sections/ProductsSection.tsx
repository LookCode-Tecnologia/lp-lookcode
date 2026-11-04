import GsapFlipCard, { type GsapFlipCardItem } from '@/components/ui/gsap-card-flip'
import { useRef } from 'react'
import { useScroll } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const products: GsapFlipCardItem[] = [
  {
    id: 'financeiro',
    title: 'Lookcode Financeiro',
    meta: 'Finanças pessoais',
    image: '/products/financeiro.svg',
    alt: 'Capa ilustrada do Lookcode Financeiro com gráfico de evolução financeira',
    description: 'Entenda para onde seu dinheiro vai. Organize os gastos do mês e acompanhe seus planos com mais clareza.',
    caption: 'Seu próximo passo começa com as contas em dia.',
    features: ['Orçamentos e metas', 'Gráficos de gastos', 'Lembretes diários'],
    href: 'https://financeiro.lookcode.com.br/login',
  },
  {
    id: 'futspot',
    title: 'Futspot',
    meta: 'Futebol amador',
    image: '/products/futspot.svg',
    alt: 'Capa ilustrada do Futspot com um campo de futebol e a trajetória de uma jogada',
    description: 'Dê memória ao futebol de várzea. Registre sua carreira, organize seu time e acompanhe quem faz o jogo acontecer.',
    caption: 'Cada partida faz parte da sua história.',
    features: ['Carreira do jogador', 'Gestão de times', 'Ligas e campeonatos'],
    href: 'https://futspot.app/?utm_source=financeiro&utm_medium=banner&utm_campaign=lookcode&utm_content=dashboard-top',
  },
  {
    id: 'oficina',
    title: 'Oficina Lookcode',
    meta: 'Gestão de oficinas',
    image: '/products/oficina.svg',
    alt: 'Capa ilustrada do Oficina Lookcode com uma chave de manutenção e etapas de serviço',
    description: 'Cuide dos veículos com a gestão por perto. Reúna clientes, serviços e equipe para acompanhar a rotina da sua oficina.',
    caption: 'Mais organização para manter tudo em movimento.',
    features: ['Ordens de serviço', 'Agenda da equipe', 'Controle financeiro'],
    href: 'https://oficina.lookcode.com.br/login',
  },
]

export default function ProductsSection({ presentationEnabled = true }: { presentationEnabled?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const eligibleViewport = useMediaQuery('(min-width: 900px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)')
  const canPin = eligibleViewport && presentationEnabled
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 96px', 'end end'] })
  const navigateTo = (step: number) => {
    const section = sectionRef.current
    if (!section) return
    const start = window.scrollY + section.getBoundingClientRect().top - 96
    const travel = Math.max(0, section.offsetHeight - window.innerHeight + 96)
    // Manual selection and scrolling share the same reading intervals.
    const progress = step === 0 ? 0.04 : 0.1 + (step - 0.5) * (0.9 / products.length)
    window.scrollTo({ top: start + travel * progress, behavior: 'instant' })
  }
  return (
    <section ref={sectionRef} id="products" aria-labelledby="products-heading" data-scroll={canPin} className="products-section bg-surface-900">
      <div className="products-sticky">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="products-heading mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-signal">Produtos Look Code</p>
            <h2 id="products-heading" className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">Nossas ideias.<br /><span className="text-copy-900">No seu dia a dia.</span></h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-copy-700">Da vida financeira ao campo e à oficina. Conheça os produtos que já fazem parte do nosso ecossistema.</p>
        </div>
        {canPin ? <GsapFlipCard items={products} title="Tecnologia que já saiu do papel." description="Três produtos, diferentes rotinas e o mesmo cuidado em transformar uma necessidade em uma solução simples de usar." stackRotation={-5} scrollProgress={scrollYProgress} onNavigate={navigateTo} /> : (
          <div className="products-static-grid">
            {products.map((product, index) => <article key={product.id} className="product-static">
              <img src={product.image} alt={product.alt} width="640" height="800" loading="lazy" decoding="async" className="product-static-cover" />
              <div className="product-static-copy">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-signal">{String(index + 1).padStart(2, '0')} / 03 · {product.meta}</p>
                <h3 className="mb-4 font-display text-3xl font-medium tracking-tight">{product.title}</h3>
                <p className="text-base leading-relaxed text-copy-700">{product.description}</p>
                <ul className="my-6 flex flex-col gap-3 text-sm text-copy-700">{product.features?.map(feature => <li key={feature} className="flex items-center gap-3"><span className="h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />{feature}</li>)}</ul>
                <a href={product.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-signal px-6 text-sm font-semibold text-ink-950 transition-colors hover:bg-secondary/90">Acessar produto <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only">: {product.title}, abre em nova aba</span></a>
              </div>
            </article>)}
          </div>
        )}
        <div className="products-footer mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-foreground/10 pt-5 font-mono text-xs text-copy-900">
          <span>Desenvolvidos pela Look Code</span>
          <a href="#products-end" className="inline-flex min-h-11 items-center gap-2 text-copy-700 transition-colors hover:text-signal">Continuar na página <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      </div>
      <div id="products-end" />
    </section>
  )
}
