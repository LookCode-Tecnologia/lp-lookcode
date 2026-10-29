import { Plus, Minus } from 'lucide-react'
import { faqs } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function FAQSection() {

  return (
    <section className="bg-surface-950 py-32 border-b border-foreground/5" id="faq">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <ScrollReveal>
            <div className="sticky top-32">
              <h2 className="font-display text-[8rem] md:text-[10rem] text-foreground/5 leading-none font-bold select-none pointer-events-none mb-4 -ml-4 tracking-tighter">
                FAQ
              </h2>
              <div className="relative -mt-16 md:-mt-20 ml-2">
                <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Sem dúvidas</p>
                <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">Perguntas frequentes.</h3>
                <p className="text-copy-900 font-body text-lg leading-relaxed max-w-sm">
                  Entenda como trabalhamos, como começar e o que esperar da nossa parceria.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative z-10 w-full mt-10 lg:mt-32">
            <div className="w-full flex flex-col">
              {faqs.map((faq, index) => (
                <details key={index} className="group border-b border-foreground/5">
                  <summary className="font-body text-lg md:text-xl py-6 md:py-8 flex justify-between items-center w-full text-left cursor-pointer list-none group-open:text-signal" data-cursor="hover">
                    <span className="tracking-tight pr-8">{faq.q}</span>
                    <Plus size={20} aria-hidden="true" className="shrink-0 group-open:hidden" />
                    <Minus size={20} aria-hidden="true" className="shrink-0 hidden group-open:block" />
                  </summary>
                  <p className="text-copy-700 text-sm md:text-base leading-relaxed pr-8 pb-6">{faq.a}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
